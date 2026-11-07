/* Speech recognition with clear, gentle feedback — shared by Practice ("Speaking") and the DELF speaking part.
   One panel per question shows, step by step:
     idle → listening (live transcript: confirmed words + words still being guessed) → checking → result
   The result compares the target sentence word by word (✓ heard / ≈ almost / underlined = not heard yet),
   gives a kind score and a "try again" button. Errors and unsupported browsers (Firefox, iPhone home-screen app…)
   get a plain explanation and a fallback: record yourself and listen back.
   Hosts call VOICE.view(cfg) to render a panel; clicks on [data-vc] are routed here by app.js. */
(function () {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const A = () => window.APP;
  const t = (k, v) => A().t(k, v), esc = s => A().esc(s);
  const ua = navigator.userAgent || "";
  const IOS = /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const STANDALONE = !!(navigator.standalone || (window.matchMedia && matchMedia("(display-mode: standalone)").matches));
  const CAN_REC = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);

  /* ── Comparing words ── */
  const NUM = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt"];
  /* Any whole number in words (21 → vingt et un, 80 → quatre-vingts, 1999 → mille neuf cent quatre-vingt-dix-neuf):
     the recogniser writes numbers in digits, the sentences sometimes in words, and both must compare equal. */
  function frNum(n) {
    if (!(n >= 0) || n > 999999 || n !== Math.floor(n)) return String(n);
    if (n <= 20) return NUM[n];
    if (n < 100) {
      const d = Math.floor(n / 10), u = n % 10;
      if (d === 7 || d === 9) return (d === 7 ? "soixante" : "quatre-vingt") + (n % 20 === 11 && d === 7 ? " et " : "-") + NUM[10 + u];
      if (d === 8) return u ? "quatre-vingt-" + NUM[u] : "quatre-vingts";
      return ["", "", "vingt", "trente", "quarante", "cinquante", "soixante"][d] + (u === 1 ? " et un" : u ? "-" + NUM[u] : "");
    }
    if (n < 1000) { const c = Math.floor(n / 100), r = n % 100; return (c > 1 ? NUM[c] + " " : "") + (c > 1 && !r ? "cents" : "cent") + (r ? " " + frNum(r) : ""); }
    const k = Math.floor(n / 1000), r = n % 1000;
    return (k > 1 ? frNum(k).replace(/(cent|vingt)s$/, "$1") + " " : "") + "mille" + (r ? " " + frNum(r) : "");
  }
  const noAcc = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae");
  function tokens(s) {
    s = String(s || "").toLowerCase().replace(/[’`´]/g, "'").replace(/(\d+)\s*h\b/g, "$1 heures").replace(/€/g, " euros ").replace(/%/g, " pour cent ");
    s = s.replace(/(\d) (?=\d{3}\b)/g, "$1").replace(/\d+/g, n => " " + frNum(+n) + " ");
    s = noAcc(s).replace(/[.,!?;:«»"()…¿¡\[\]/]/g, " ").replace(/-/g, " ").replace(/'/g, "' ");
    return s.split(/\s+/).filter(Boolean).map(w => w === "h" ? "heures" : w);
  }
  function lev(a, b) {
    if (a === b) return 0;
    let p = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const c = [i];
      for (let j = 1; j <= b.length; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      p = c;
    }
    return p[b.length];
  }
  // 2 = same word, 1 = almost (one letter off, or same sound family), 0 = different
  function near(a, b) {
    if (a === b) return 2;
    const ra = a.replace(/'$/, ""), rb = b.replace(/'$/, "");
    if (ra === rb || ra + "e" === rb || rb + "e" === ra) return 1;          // j' / je, l' / le
    if (ra.replace(/(s|x|t|e|es|ent)$/, "") === rb.replace(/(s|x|t|e|es|ent)$/, "") && ra.length > 2) return 1; // silent endings
    if (Math.min(ra.length, rb.length) >= 4 && lev(ra, rb) <= 1) return 1;
    return 0;
  }
  /* Align target and heard words (longest common subsequence, allowing "almost" matches). */
  function compare(target, heard) {
    const disp = String(target || "").trim().split(/\s+/).filter(Boolean);
    const owner = [], T = [];
    disp.forEach((w, i) => tokens(w).forEach(x => { T.push(x); owner.push(i); }));
    const H = tokens(heard);
    const n = T.length, m = H.length, L = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) {
      const s = near(T[i], H[j]);
      L[i][j] = Math.max(L[i + 1][j], L[i][j + 1], s ? L[i + 1][j + 1] + (s === 2 ? 2 : 1.5) : 0);
    }
    const tm = new Array(n).fill(0), used = new Array(m).fill(false);
    for (let i = 0, j = 0; i < n && j < m;) {
      const s = near(T[i], H[j]);
      if (s && L[i][j] === L[i + 1][j + 1] + (s === 2 ? 2 : 1.5)) { tm[i] = s; used[j] = true; i++; j++; }
      else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++;
    }
    const words = disp.map((w, i) => {
      const mine = tm.filter((_, k) => owner[k] === i);
      const st = !mine.length ? "punct" : mine.every(x => x === 2) ? "ok" : mine.every(x => x) ? "near" : mine.some(x => x) ? "near" : "miss";
      return { w, st };
    });
    const got = tm.reduce((a, x) => a + (x === 2 ? 1 : x ? 0.85 : 0), 0);
    const real = words.filter(x => x.st !== "punct");
    return { words, score: n ? got / n : 0, got: real.filter(x => x.st !== "miss").length, total: real.length, extra: H.filter((_, j) => !used[j]).length, heardN: m };
  }
  function compareHtml(target, heard) {
    const r = compare(target, heard);
    return `<p class="vc-cmp" lang="fr">${r.words.map(x => `<span class="vc-w ${x.st}">${esc(x.w)}</span>`).join(" ")}</p>`;
  }

  /* ── State per panel (survives page re-renders) ── */
  const P = {};     // id → { st, fin, mid, best, tries, err, rec… , cfg }
  let LIVE = null;  // { id, r, timer }
  function state(id) { return P[id] || (P[id] = { st: "idle", fin: "", mid: "", best: null, last: null, tries: 0 }); }
  const panelEl = id => document.querySelector(`.vc[data-vcid="${CSS.escape(id)}"]`);
  function paint(id, focusSel) {
    const el = panelEl(id), p = P[id]; if (!el || !p || !p.cfg) return;
    el.outerHTML = view(p.cfg);
    const n = panelEl(id); if (n && focusSel) { const f = n.querySelector(focusSel); if (f) f.focus({ preventScroll: true }); }
  }
  function mood(score) {
    return score >= 0.85 ? ["🌟", "vc.great"] : score >= 0.6 ? ["🌿", "vc.good"] : score >= 0.3 ? ["🌱", "vc.start"] : ["🐢", "vc.low"];
  }
  function errText(code) {
    if (code === "not-allowed") return t(IOS ? "vc.e.permIos" : "vc.e.perm");
    if (code === "service-not-allowed") return t(IOS ? (STANDALONE ? "vc.e.pwa" : "vc.e.siriIos") : "vc.e.service");
    if (code === "audio-capture") return t("vc.e.nomic");
    if (code === "network") return t("vc.e.net");
    if (code === "no-speech" || code === "empty") return t("vc.e.silence");
    return t("vc.e.other");
  }

  /* ── Rendering ── */
  function view(cfg) {
    const p = state(cfg.id); p.cfg = cfg;
    const target = cfg.target || "", free = !target;
    const say = target && A().speakBtn ? `<button class="btn small ghost" data-speak="${esc(target)}" data-slow="1">🔊 ${esc(t("vc.model"))}</button>` : "";
    let body = "", status = "", cls = p.st;
    if (!SR) {
      cls = "unsupported";
      status = `<p class="vc-status">ℹ️ ${esc(t(IOS ? "vc.e.oldIos" : "vc.unsupported"))}</p>`;
      body = recBox(cfg, p);
    } else if (p.st === "listening" || p.st === "checking") {
      const lst = p.st === "listening";
      status = `<p class="vc-status">${lst ? `<span class="vc-dot" aria-hidden="true"></span> <b>${esc(t("vc.listening"))}</b>` : `⏳ <b>${esc(t("vc.checking"))}</b>`}</p>`;
      body = `<div class="vc-live" lang="fr" aria-live="polite">${p.fin || p.mid ? `<span class="vc-fin">${esc(p.fin)}</span> <span class="vc-mid">${esc(p.mid)}</span>` : `<span class="vc-wait">${esc(t(lst ? "vc.speakNow" : "vc.checking"))}<span class="vc-bars" aria-hidden="true"><i></i><i></i><i></i></span></span>`}</div>
        <p class="vc-legend muted small">${p.mid ? esc(t("vc.legend")) : ""}</p>
        ${lst ? `<div class="row center"><button class="btn vc-stop" data-vc="stop" data-id="${esc(cfg.id)}">■ ${esc(t("vc.stop"))}</button></div>` : ""}`;
    } else if (p.st === "error") {
      const quiet = p.err === "no-speech" || p.err === "empty";
      status = `<p class="vc-status">${quiet ? "🙉" : "🛠️"} <b>${esc(t(quiet ? "vc.silent" : "vc.oops"))}</b></p>`;
      body = `<p class="vc-help">${esc(errText(p.err))}</p>
        <div class="row center wrap"><button class="btn" data-vc="start" data-id="${esc(cfg.id)}">🔁 ${esc(t("vc.retry"))}</button>${say}</div>
        ${quiet ? "" : recBox(cfg, p, true)}`;
    } else if (p.st === "done" && p.last) {
      const L = p.last, B = p.best;
      if (free) {
        status = `<p class="vc-status">✅ <b>${esc(t("vc.understood", { n: L.heardN }))}</b></p>`;
        body = `<p class="eyebrow">${esc(t("vc.youSaid"))}</p><div class="vc-live done" lang="fr">« ${esc(L.heard)} »</div>`;
      } else {
        const [emo, key] = mood(L.score), pct = Math.round(L.score * 100);
        status = `<p class="vc-status">${emo} <b>${esc(t(key))}</b></p>`;
        body = `<p class="eyebrow">${esc(t("vc.youSaid"))}</p><div class="vc-live done" lang="fr">« ${esc(L.heard)} »</div>
          <p class="eyebrow">${esc(t("vc.compare"))}</p>${compareHtml(target, L.heard)}
          <div class="vc-score"><div class="vc-meter" role="img" aria-label="${pct}%"><span style="width:${Math.max(4, pct)}%"></span></div><b>${esc(t("vc.words", { a: L.got, b: L.total }))}</b></div>
          <p class="vc-legend muted small"><span class="vc-w ok">${esc(t("vc.k.ok"))}</span> <span class="vc-w near">${esc(t("vc.k.near"))}</span> <span class="vc-w miss">${esc(t("vc.k.miss"))}</span></p>
          ${L.score < 0.85 ? `<p class="muted small">${esc(t("vc.tip"))}</p>` : ""}
          ${p.tries > 1 && B && B !== L ? `<p class="muted small">⭐ ${esc(t("vc.best", { a: B.got, b: B.total }))}</p>` : ""}`;
      }
      const good = free || L.score >= (cfg.pass || 0.75);
      body += `<div class="row center wrap vc-actions">
        <button class="btn ${good && cfg.onNext ? "ghost" : ""}" data-vc="start" data-id="${esc(cfg.id)}">🔁 ${esc(t("vc.retry"))}</button>${say}
        ${cfg.onNext ? `<button class="btn ${good ? "" : "ghost"} vc-next" data-vc="next" data-id="${esc(cfg.id)}">${esc(t("vc.next"))} →</button>` : ""}</div>`;
    } else {
      status = cfg.hint ? `<p class="vc-status muted">${esc(cfg.hint)}</p>` : "";
      body = `<div class="row center"><button class="btn vc-mic" data-vc="start" data-id="${esc(cfg.id)}"><span aria-hidden="true">🎤</span> ${esc(cfg.label || t("vc.tap"))}</button></div>
        <p class="muted small center">${esc(t(cfg.continuous ? "vc.howLong" : "vc.how"))}</p>`;
    }
    return `<div class="vc ${cls} ${cfg.compact ? "compact" : ""}" data-vcid="${esc(cfg.id)}"><div role="status" aria-live="polite">${status}</div>${body}</div>`;
  }
  function recBox(cfg, p, noModel) {
    if (!CAN_REC) return "";
    const R = p.rec || {};
    return `<div class="vc-rec"><p class="muted small">${esc(t("vc.recHint"))}</p><div class="row center wrap">
      ${R.on ? `<button class="btn vc-stop" data-vc="recstop" data-id="${esc(cfg.id)}">■ ${esc(t("vc.recStop"))}</button>`
        : `<button class="btn small ghost" data-vc="rec" data-id="${esc(cfg.id)}">⏺ ${esc(t(R.url ? "vc.recAgain" : "vc.rec"))}</button>`}
      ${R.url && !R.on ? `<button class="btn small" data-vc="play" data-id="${esc(cfg.id)}">▶ ${esc(t("vc.recPlay"))}</button>` : ""}
      ${cfg.target && !noModel ? `<button class="btn small ghost" data-speak="${esc(cfg.target)}" data-slow="1">🔊 ${esc(t("vc.model"))}</button>` : ""}</div></div>`;
  }

  /* ── Listening ── */
  function stopAll() {
    if (LIVE) { const L = LIVE; LIVE = null; clearTimeout(L.timer); try { L.r.abort(); } catch (e) {} const p = P[L.id]; if (p && (p.st === "listening" || p.st === "checking")) { p.st = p.last ? "done" : "idle"; p.fin = p.mid = ""; paint(L.id); } }
  }
  function start(id) {
    const p = state(id), cfg = p.cfg; if (!SR || !cfg) return;
    stopAll();
    if (A().tts && A().tts.stop) try { A().tts.stop(); } catch (e) {}
    const r = new SR(); r.lang = "fr-FR"; r.interimResults = true; r.maxAlternatives = 3; r.continuous = !!cfg.continuous;
    const me = { id, r, timer: 0, alts: [] }; LIVE = me;
    Object.assign(p, { st: "listening", fin: "", mid: "", err: null });
    paint(id, ".vc-stop");
    const mine = () => LIVE === me;
    me.timer = setTimeout(() => { if (mine()) try { r.stop(); } catch (e) {} }, (cfg.continuous ? 150 : 15) * 1000);
    r.onresult = e => {
      if (!mine()) return;
      let fin = "", mid = "";
      for (let i = 0; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) {
          let best = res[0].transcript;
          if (cfg.target && res.length > 1) best = Array.from(res).map(a => a.transcript).sort((a, b) => compare(cfg.target, b).score - compare(cfg.target, a).score)[0];
          fin += " " + best;
        } else mid += " " + res[0].transcript;
      }
      p.fin = fin.trim(); p.mid = mid.trim();
      const live = panelEl(id) && panelEl(id).querySelector(".vc-live");
      if (live) { live.innerHTML = `<span class="vc-fin">${esc(p.fin)}</span> <span class="vc-mid">${esc(p.mid)}</span>`; const lg = panelEl(id).querySelector(".vc-legend"); if (lg) lg.textContent = p.mid ? t("vc.legend") : ""; }
      else paint(id);
    };
    r.onspeechend = () => { if (mine() && !cfg.continuous && p.st === "listening") { p.st = "checking"; paint(id); } };
    r.onerror = e => { if (mine()) me.err = e.error || "other"; };
    r.onend = () => {
      if (!mine()) return;
      LIVE = null; clearTimeout(me.timer);
      const heard = (p.fin + " " + p.mid).trim();
      p.fin = p.mid = "";
      if (!heard) { p.st = "error"; p.err = me.err && me.err !== "aborted" ? me.err : "empty"; paint(id, "[data-vc=start]"); return; }
      p.tries++;
      const c = compare(cfg.target || "", heard);
      const res = { heard, score: cfg.target ? c.score : 1, heardN: c.heardN, total: c.total, got: c.got };
      p.last = res; if (!p.best || res.score >= p.best.score) p.best = res;
      p.st = "done";
      if (cfg.onResult) cfg.onResult(res, p.best);
      paint(id, ".vc-next, [data-vc=start]");
    };
    try { r.start(); } catch (e) { me.err = "other"; r.onend(); }
  }

  /* ── Record yourself (works without speech recognition) ── */
  async function rec(id) {
    const p = state(id); stopAll();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream), chunks = [];
      mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = () => {
        stream.getTracks().forEach(x => x.stop());
        if (p.rec && p.rec.url) URL.revokeObjectURL(p.rec.url);
        p.rec = { on: false, url: URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || "audio/mp4" })) };
        paint(id, "[data-vc=play]");
      };
      p.rec = Object.assign({}, p.rec, { on: true, mr });
      mr.start(); paint(id, ".vc-stop");
      setTimeout(() => { if (mr.state === "recording") mr.stop(); }, 30000);
    } catch (e) { p.st = "error"; p.err = "not-allowed"; p.rec = null; paint(id); }
  }
  function click(el, d) {
    const id = d.id, p = P[id]; if (!p) return;
    if (d.vc === "start") start(id);
    else if (d.vc === "stop") { if (LIVE && LIVE.id === id) { p.st = "checking"; paint(id); try { LIVE.r.stop(); } catch (e) {} } }
    else if (d.vc === "next") { if (p.cfg.onNext) p.cfg.onNext(p.best || p.last); }
    else if (d.vc === "rec") rec(id);
    else if (d.vc === "recstop") { if (p.rec && p.rec.mr && p.rec.mr.state === "recording") p.rec.mr.stop(); }
    else if (d.vc === "play") { if (p.rec && p.rec.url) new Audio(p.rec.url).play().catch(() => {}); }
  }
  function reset(prefix) { stopAll(); for (const k in P) if (!prefix || k.startsWith(prefix)) delete P[k]; }
  window.addEventListener("hashchange", stopAll);
  document.addEventListener("visibilitychange", () => { if (document.hidden) stopAll(); });

  window.VOICE = { supported: !!SR, view, click, compare, compareHtml, reset, stop: stopAll, _state: P };
})();
