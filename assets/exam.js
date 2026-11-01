/* DELF A1 / A2 mock exams (examens blancs): hub, papers, one-part practice, quick challenge, badges.
   Data: window.DELF (data/delf-*.js, format in tools/delf-spec.md). Uses window.APP from app.js. */
(function () {
  "use strict";
  const D = window.DELF || [];
  const SECS = ["co", "ce", "pe", "po"];
  const ICON = { co: "🎧", ce: "📖", pe: "✍️", po: "🗣️" };
  const DUR = { A1: { co: 20, ce: 30, pe: 30, po: 10 }, A2: { co: 25, ce: 30, pe: 45, po: 10 } };
  const LVS = ["A1", "A2"];
  const BADGES = [["first", "🌱"], ["ear", "🎧"], ["eye", "📖"], ["pen", "✍️"], ["voice", "🗣️"], ["passA1", "🎓"], ["passA2", "🏅"], ["three", "⭐"], ["exam", "⏱️"], ["five", "🏔️"], ["allA1", "👑"], ["allA2", "💎"], ["flash", "⚡"], ["fifty", "🧗"]];
  const BY_ID = Object.fromEntries(D.map(x => [x.id, x]));
  /* Balance where the right answer sits: a fixed, per-question shuffle of 3-option lists (true/false and lettered lists keep their order). */
  const hash = str => { let h = 2166136261; for (const ch of str) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const PERMS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
  for (const it of D) (it.questions || []).forEach((q, qi) => {
    if (q.shuffled || q.o.length !== 3 || q.o.some(o => /^(vrai|faux|annonce|document|texte|message|dialogue)\b/i.test(o))) return;
    const pm = PERMS[hash(it.id + ":" + qi) % 6], o = pm.map(i => q.o[i]);
    q.a = pm.indexOf(q.a); q.o = o; q.shuffled = true;
  });
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

  const A = () => window.APP;
  const t = (k, v) => A().t(k, v), esc = s => A().esc(s), lang = () => A().lang();
  function st() {
    const S = A().S; const d = S.delf = S.delf || {};
    d.ex = d.ex || {}; d.best = d.best || {}; d.hist = d.hist || []; d.badges = d.badges || {}; d.flash = d.flash || {};
    if (!d.mode) d.mode = "zen";
    if (!d.lv) d.lv = ["A0", "A1"].includes(A().S.level || "A0") ? "A1" : "A2";
    return d;
  }
  const save = () => A().save();
  const fmt = n => String(Math.round(n * 10) / 10).replace(".", lang() === "en" ? "." : ",");
  const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'`]/g, " ").replace(/[^a-z0-9€ ]+/g, " ").replace(/\s+/g, " ").trim();
  const words = s => (String(s || "").trim().match(/[^\s]+/g) || []).length;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const para = s => esc(s).split(/\n\s*\n/).map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");

  /* ── Scores ── */
  const items = (lv, n, sec) => D.filter(x => x.level === lv && (n == null || x.sujet === n) && (!sec || x.sec === sec)).sort((a, b) => a.sujet - b.sujet || SECS.indexOf(a.sec) - SECS.indexOf(b.sec) || a.ex - b.ex);
  const sujets = lv => [...new Set(D.filter(x => x.level === lv).map(x => x.sujet))].sort((a, b) => a - b);
  function secScore(lv, n, sec) {
    const its = items(lv, n, sec); if (!its.length) return null;
    let s = 0; for (const it of its) { const r = st().ex[it.id]; if (!r) return null; s += r.s; }
    return s;
  }
  function sujetScore(lv, n) {
    const r = {}; let tot = 0, complete = true;
    for (const sec of SECS) { r[sec] = secScore(lv, n, sec); if (r[sec] == null) complete = false; else tot += r[sec]; }
    r.tot = tot; r.complete = complete; r.pass = complete && tot >= 50 && SECS.every(s => r[s] >= 5);
    return r;
  }
  const stars = r => !r || !r.pass ? 0 : r.tot >= 85 ? 3 : r.tot >= 70 ? 2 : 1;
  const starStr = n => `<span class="stars" role="img" aria-label="${n}/3">${"★".repeat(n)}<span class="off">${"★".repeat(3 - n)}</span></span>`;
  const passedCount = lv => sujets(lv).filter(n => (st().best[lv + "-" + n] || {}).pass).length;

  /* ── Badges & confetti ── */
  function award(id) {
    const d = st(); if (d.badges[id]) return;
    d.badges[id] = A().ymd(); save();
    const b = BADGES.find(x => x[0] === id);
    setTimeout(() => { A().toast(t("dx.newBadge", { b: b[1] + " " + t("dx.b." + id) })); confetti(); }, 300);
  }
  function confetti() {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = document.createElement("div"); box.className = "confetti"; box.setAttribute("aria-hidden", "true");
    const colors = ["#3f6f5a", "#e39a72", "#e2bb5c", "#3d5f92", "#c96b8b", "#7fb59b"];
    for (let i = 0; i < 70; i++) {
      const p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%"; p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * .6 + "s"; p.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
      p.style.transform = `rotate(${Math.random() * 360}deg)`; box.appendChild(p);
    }
    document.body.appendChild(box); setTimeout(() => box.remove(), 3400);
  }
  function checkBadges(lv, n) {
    const d = st(); const done = Object.keys(d.ex).length;
    if (done >= 1) award("first"); if (done >= 50) award("fifty");
    if (n != null) {
      const r = sujetScore(lv, n);
      if (r.co >= 20) award("ear"); if (r.ce >= 20) award("eye"); if (r.pe >= 20) award("pen"); if (r.po >= 20) award("voice");
      if (r.pass) { award("pass" + lv); if (d.mode === "exam") award("exam"); if (r.tot >= 85) award("three"); }
      const p = passedCount(lv); if (p >= 5) award("five"); if (p >= sujets(lv).length && p >= 10) award("all" + lv);
    }
  }
  function recordSujet(lv, n) {
    const r = sujetScore(lv, n); if (!r.complete) return r;
    const d = st(), k = lv + "-" + n, b = d.best[k];
    if (!b || r.tot > b.tot) d.best[k] = { tot: Math.round(r.tot * 10) / 10, pass: r.pass, d: A().ymd() };
    d.hist.unshift({ k, tot: Math.round(r.tot * 10) / 10, pass: r.pass, d: A().ymd(), m: d.mode }); d.hist = d.hist.slice(0, 30);
    save(); return r;
  }

  /* ── Audio (French text-to-speech, one voice per speaker) ── */
  let TOKEN = 0, VOICES = null;
  function voices() {
    if (VOICES || !("speechSynthesis" in window)) return VOICES || {};
    const vs = speechSynthesis.getVoices().filter(v => /^fr/i.test(v.lang)); if (!vs.length) return {};
    const male = vs.find(v => /fr.FR/i.test(v.lang) && /(Thomas|Nicolas|Daniel|Paul|Henri|Mathieu|male|homme)/i.test(v.name));
    const fem = vs.find(v => /fr.FR/i.test(v.lang) && /(Amélie|Audrey|Marie|Aurélie|Céline|Julie|Google)/i.test(v.name)) || vs.find(v => /fr.FR/i.test(v.lang)) || vs[0];
    VOICES = { F: fem, M: male || fem }; return VOICES;
  }
  if ("speechSynthesis" in window) speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", () => { VOICES = null; });
  const PITCH = { N: 1, F: 1.1, F2: 1.3, M: .8, M2: .95, K: 1.45 };
  function stopAudio() { TOKEN++; if ("speechSynthesis" in window) speechSynthesis.cancel(); }
  function playLines(lines, opts, done) {
    if (!("speechSynthesis" in window) || !lines || !lines.length) { if (done) done(); return; }
    stopAudio(); const run = TOKEN, v = voices(), lv = (opts && opts.lv) || "A1";
    const rate = opts && opts.slow ? .68 : lv === "A1" ? .86 : .95;
    const next = i => {
      if (run !== TOKEN) return;
      if (i >= lines.length) { if (done) done(); return; }
      const [who, text] = lines[i];
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR"; u.rate = rate; u.pitch = PITCH[who] || 1;
      const voice = /^M/.test(who) ? v.M : v.F; if (voice) u.voice = voice;
      u.onend = () => setTimeout(() => next(i + 1), 450);
      u.onerror = () => next(i + 1);
      speechSynthesis.speak(u);
    };
    next(0);
  }

  /* ── Run state ── */
  let RUN = null, FL = null, TIMER = null;
  function startRun(ids, kind, lv, n) {
    stopAudio();
    RUN = { ids, i: 0, kind, lv, n, mode: st().mode, start: Date.now(), dl: {}, cur: {}, scores: {}, timeUpShown: {} };
    if (location.hash === "#/exam/run") A().render(); else location.hash = "#/exam/run";
  }
  const curItem = () => RUN && BY_ID[RUN.ids[RUN.i]];
  function curState() {
    const it = curItem(); if (!it) return {};
    if (!RUN.cur || RUN.cur.id !== it.id) {
      RUN.cur = { id: it.id, sel: {}, checked: false, plays: 0, qplays: {}, text: "", fields: {}, ticks: {}, self: null, pi: 0, used: {}, ok: {}, heard: {}, shown: {}, line: -1, model: false, help: false, slow: false };
      if (RUN.mode === "exam" && !RUN.dl[it.sec]) RUN.dl[it.sec] = Date.now() + DUR[it.level][it.sec] * 60000;
    }
    return RUN.cur;
  }
  function saveScore(it, s) {
    s = Math.max(0, Math.min(it.pts, s));
    st().ex[it.id] = { s: Math.round(s * 100) / 100, d: A().ymd(), m: RUN ? RUN.mode : "zen" };
    if (RUN) RUN.scores[it.id] = s;
    save(); A().practised(); checkBadges(it.level, it.sujet);
  }

  /* ── Views ── */
  function view(parts) {
    const d = st();
    if (parts[1] === "run") return RUN ? viewRun() : viewHub();
    if (LVS.includes(parts[1]) && d.lv !== parts[1]) { d.lv = parts[1]; save(); }
    if (parts[2] === "s") return viewSujet(d.lv, +parts[3]);
    if (parts[2] === "sec" && SECS.includes(parts[3])) return viewSection(d.lv, parts[3]);
    if (parts[2] === "flash") return viewFlash(d.lv);
    return viewHub();
  }

  function modeChips() {
    const d = st();
    return `<div class="row wrap dx-switch" role="group" aria-label="${esc(t("dx.mode"))}">
      <button class="chip ${d.mode === "zen" ? "on" : ""}" aria-pressed="${d.mode === "zen"}" data-dx="mode" data-v="zen">${esc(t("dx.zenShort"))}</button>
      <button class="chip ${d.mode === "exam" ? "on" : ""}" aria-pressed="${d.mode === "exam"}" data-dx="mode" data-v="exam">${esc(t("dx.examShort"))}</button>
    </div><p class="muted small">${esc(t(d.mode === "zen" ? "dx.zen" : "dx.examMode"))}</p>`;
  }

  function viewHub() {
    const d = st(), lv = d.lv, sj = sujets(lv);
    const fei = (window.RESOURCES || []).find(r => r.id === "fei-delf");
    const hist = d.hist.filter(h => h.k.startsWith(lv)).slice(0, 6);
    const secDone = sec => { const its = items(lv, null, sec); return `${its.filter(x => d.ex[x.id]).length}/${its.length}`; };
    return `<h1>🎓 ${esc(t("dx.title"))}</h1>
      <p class="muted">${esc(t("dx.sub"))}</p>
      ${RUN && RUN.i < RUN.ids.length ? `<a class="card next dx-resume" href="#/exam/run">▶ ${esc(t("dx.resume"))} · ${esc(BY_ID[RUN.ids[RUN.i]].title)}</a>` : ""}
      <div class="row wrap dx-switch" role="group" aria-label="${esc(t("dx.level"))}">
        ${LVS.map(l => `<a class="chip ${l === lv ? "on" : ""}" href="#/exam/${l}" aria-current="${l === lv}">DELF ${l}</a>`).join("")}
      </div>
      ${modeChips()}
      <section class="card">
        <h2>${esc(t("dx.full"))}</h2>
        <p class="muted small">${esc(t("dx.fullSub", { n: sj.length }))} · ${esc(t("dx.passedN", { d: passedCount(lv), n: sj.length }))}</p>
        <div class="dx-grid">${sj.map(n => {
          const r = sujetScore(lv, n), b = d.best[lv + "-" + n], dots = SECS.map(s => `<i class="${r[s] == null ? "" : r[s] >= 12.5 ? "ok" : "low"}"></i>`).join("");
          return `<a class="dx-tile ${b && b.pass ? "pass" : ""}" href="#/exam/${lv}/s/${n}" aria-label="${esc(t("dx.sujet", { n }))}${b ? " · " + fmt(b.tot) + "/100" : ""}">
            <span class="dx-num">${n}</span>${starStr(stars(b && { pass: b.pass, tot: b.tot }))}
            <small>${b ? fmt(b.tot) + "/100" : esc(t("dx.todo"))}</small><span class="dx-dots" aria-hidden="true">${dots}</span></a>`;
        }).join("")}</div>
      </section>
      <section class="card">
        <h2>${esc(t("dx.oneSkill"))}</h2>
        <div class="ex-grid">${SECS.map(s => `<a class="card ex-tile" href="#/exam/${lv}/sec/${s}"><span class="ex-ic">${ICON[s]}</span><b>${esc(t("dx." + s))}</b><small lang="fr">${esc(t("dx." + s + "F"))}</small><small>${esc(t("dx.exDone", { d: secDone(s).split("/")[0], n: secDone(s).split("/")[1] }))}</small></a>`).join("")}</div>
      </section>
      <a class="card ex-tile big dx-flash-tile" href="#/exam/${lv}/flash"><span class="ex-ic">⚡</span><b>${esc(t("dx.flash"))}</b><small>${esc(t("dx.flashSub", { b: d.flash[lv] || 0 }))}</small></a>
      <section class="card">
        <h2>${esc(t("dx.badges"))}</h2>
        <div class="dx-badges">${BADGES.map(([id, ic]) => `<div class="dxb ${d.badges[id] ? "on" : ""}" title="${esc(t("dx.bd." + id))}"><span aria-hidden="true">${ic}</span><b>${esc(t("dx.b." + id))}</b><small>${esc(t("dx.bd." + id))}</small></div>`).join("")}</div>
      </section>
      <section class="card">
        <h2>${esc(t("dx.history"))}</h2>
        ${hist.length ? `<ul class="dx-hist">${hist.map(h => `<li><span>${esc(h.d)}</span><b>${esc(t("dx.sujet", { n: h.k.split("-")[1] }))}</b><span>${fmt(h.tot)}/100</span><span>${h.pass ? "✓" : "…"} ${h.m === "exam" ? "⏱️" : "🌿"}</span></li>`).join("")}</ul>` : `<p class="muted">${esc(t("dx.none"))}</p>`}
      </section>
      <details class="card"><summary><h2>${esc(t("dx.rules"))}</h2></summary>
        <p>${esc(t("dx.rulesText"))}</p>
        <table class="tbl"><tr><td></td>${SECS.map(s => `<th>${ICON[s]} ${esc(t("dx." + s))}</th>`).join("")}</tr>
        ${LVS.map(l => `<tr><th>${l}</th>${SECS.map(s => `<td>${esc(t("dx.dur", { m: DUR[l][s] }))}</td>`).join("")}</tr>`).join("")}</table>
        ${fei ? `<p><a href="${esc(fei.url)}" target="_blank" rel="noopener">${esc(t("dx.official"))} ↗</a></p>` : ""}
        <p class="muted small">${esc(t("dx.disclaimer"))}</p>
      </details>`;
  }

  function viewSujet(lv, n) {
    if (!sujets(lv).includes(n)) return viewHub();
    const r = sujetScore(lv, n), b = st().best[lv + "-" + n];
    const all = items(lv, n).map(x => x.id).join(",");
    return `<a class="back" href="#/exam/${lv}">← ${esc(t("dx.title"))}</a>
      <h1>DELF ${lv} · ${esc(t("dx.sujet", { n }))}</h1>
      ${r.complete ? resultBlock(r) : b ? `<p class="muted">${starStr(stars(b))} ${fmt(b.tot)}/100</p>` : ""}
      ${modeChips()}
      <button class="btn" data-dx="start" data-ids="${all}" data-kind="sujet" data-lv="${lv}" data-n="${n}">▶ ${esc(t("dx.startAll"))}</button>
      <div class="dx-secs">${SECS.map(s => {
        const its = items(lv, n, s), sc = r[s];
        return `<section class="card dx-sec">
          <h2>${ICON[s]} ${esc(t("dx." + s))} <small class="muted" lang="fr">${esc(t("dx." + s + "F"))}</small></h2>
          <p class="muted small">${its.length} × · ${esc(t("dx.dur", { m: DUR[lv][s] }))}${sc != null ? " · <b>" + esc(t("dx.secScore", { p: fmt(sc) })) + "</b>" : ""}</p>
          <ul class="dx-exlist">${its.map(x => `<li>${st().ex[x.id] ? "✓" : "○"} ${esc(x.title)}</li>`).join("")}</ul>
          <button class="btn small ${sc != null ? "ghost" : ""}" data-dx="start" data-ids="${its.map(x => x.id).join(",")}" data-kind="sec" data-lv="${lv}" data-n="${n}">${esc(sc != null ? t("dx.again") : t("dx.start"))}</button>
        </section>`;
      }).join("")}</div>`;
  }

  function viewSection(lv, sec) {
    const d = st(), its = items(lv, null, sec), todo = its.filter(x => !d.ex[x.id]);
    return `<a class="back" href="#/exam/${lv}">← ${esc(t("dx.title"))}</a>
      <h1>${ICON[sec]} ${esc(t("dx." + sec))} · ${lv}</h1>
      <p class="muted" lang="fr">${esc(t("dx." + sec + "F"))} · ${esc(t("dx.exDone", { d: its.length - todo.length, n: its.length }))}</p>
      ${modeChips()}
      <button class="btn" data-dx="start" data-ids="${esc((todo.length ? todo : its)[Math.floor(Math.random() * (todo.length || its.length))].id)}" data-kind="ex" data-lv="${lv}">${esc(t("dx.random"))}</button>
      ${sujets(lv).map(n => `<section class="card dx-sec"><h2>${esc(t("dx.sujet", { n }))}</h2><div class="dx-exbtns">${items(lv, n, sec).map(x => {
        const r = d.ex[x.id];
        return `<button class="dx-exbtn ${r ? "done" : ""}" data-dx="start" data-ids="${x.id}" data-kind="ex" data-lv="${lv}" data-n="${n}"><span>${x.ex}. ${esc(x.title)}</span><small>${r ? fmt(r.s) + "/" + fmt(x.pts) : esc(t("dx.todo"))}</small></button>`;
      }).join("")}</div></section>`).join("")}`;
  }

  function resultBlock(r) {
    const missing = Math.max(0, 50 - r.tot);
    return `<section class="card dx-result ${r.pass ? "pass" : ""}">
      <div class="dx-ring" style="--p:${Math.round(r.tot)}"><b>${fmt(r.tot)}</b><small>/100</small></div>
      <div><p class="dx-verdict">${r.pass ? esc(t("dx.pass")) : esc(t("dx.fail", { n: fmt(missing || 0.5) }))}</p>
      ${starStr(stars(r))}
      <div class="dx-bars">${SECS.map(s => `<div><span>${ICON[s]} ${esc(t("dx." + s))}</span><span class="bar ${r[s] < 5 ? "low" : ""}" role="progressbar" aria-label="${esc(t("dx." + s))}" aria-valuenow="${Math.round(r[s] / 25 * 100)}" aria-valuemin="0" aria-valuemax="100"><span style="width:${r[s] / 25 * 100}%"></span></span><b>${fmt(r[s])}/25</b></div>`).join("")}</div>
      ${!r.pass && r.tot >= 50 ? `<p class="note">${esc(t("dx.failMin"))}</p>` : ""}
      <p class="muted small">${esc(t("dx.estimated"))}</p></div>
    </section>`;
  }

  /* ── The runner ── */
  function viewRun() {
    if (RUN.i >= RUN.ids.length) return viewRunEnd();
    const it = curItem(), c = curState();
    const secIds = RUN.ids.filter(id => BY_ID[id].sec === it.sec), k = secIds.indexOf(it.id);
    const timer = RUN.mode === "exam" ? `<div class="dx-timer" id="dx-timer" role="timer" aria-label="${esc(t("dx.timeLeft"))}">${timeLeft(it.sec)}</div>` : "";
    const zen = RUN.mode === "zen";
    let body = "";
    if (it.sec === "co") body = runCO(it, c);
    else if (it.sec === "ce") body = runCE(it, c);
    else if (it.sec === "pe") body = it.kind === "form" ? runForm(it, c) : runText(it, c);
    else body = runPO(it, c);
    const scored = RUN.scores[it.id] != null;
    return `<div class="row between dx-top"><a class="back" href="#/exam/${it.level}${RUN.kind === "ex" ? "/sec/" + it.sec : "/s/" + it.sujet}">← DELF ${it.level} · ${esc(t("dx.sujet", { n: it.sujet }))}</a>${timer}</div>
      <div class="dx-progress" aria-hidden="true">${RUN.ids.map((id, i) => `<i class="${i < RUN.i ? "done" : i === RUN.i ? "now" : ""} s-${BY_ID[id].sec}"></i>`).join("")}</div>
      <p class="eyebrow">${ICON[it.sec]} ${esc(t("dx." + it.sec))} · ${esc(t("dx.exN", { n: k + 1, m: secIds.length }))} · ${fmt(it.pts)} pts</p>
      <h1 class="dx-h">${esc(it.title)}</h1>
      <div class="card dx-consigne"><p lang="fr"><b>${esc(it.consigne)}</b></p>
        ${zen ? `<button class="btn small ghost" data-dx="help">🇹🇷 ${esc(t("dx.help"))}</button>${c.help ? `<p class="muted small">${esc(lang() === "en" ? it.help.en : it.help.tr)}</p>` : ""}` : ""}
      </div>
      ${RUN.mode === "exam" && Date.now() > (RUN.dl[it.sec] || Infinity) ? `<p class="note">${esc(t("dx.timeUp"))}</p>` : ""}
      ${body}
      ${scored ? `<div class="dx-after"><p class="dx-score">${esc(t("dx.points", { p: fmt(RUN.scores[it.id]), m: fmt(it.pts) }))}</p>
        <button class="btn" data-dx="next">${RUN.i + 1 < RUN.ids.length ? esc(t("dx.next")) + " →" : esc(t("dx.finish")) + " 🎯"}</button></div>` : ""}`;
  }
  function timeLeft(sec) {
    const ms = (RUN.dl[sec] || Date.now()) - Date.now(); if (ms <= 0) return "0:00";
    const s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }

  const optBtns = (it, c, qi, q) => `<div class="opts dx-opts">${q.o.map((o, oi) => {
    let cls = c.sel[qi] === oi ? "sel" : "";
    if (c.checked) cls = oi === q.a ? "right" : c.sel[qi] === oi ? "wrong" : "";
    return `<button class="opt ${cls}" data-dx="pick" data-q="${qi}" data-o="${oi}" ${c.checked ? "disabled" : ""} aria-pressed="${c.sel[qi] === oi}" lang="fr">${esc(o)}</button>`;
  }).join("")}</div>`;
  const qList = (it, c) => `<ol class="dx-qs">${it.questions.map((q, qi) => `<li class="dx-q ${c.checked ? (c.sel[qi] === q.a ? "ok" : "ko") : ""}">
      ${q.audio && q.audio.length ? playBtn(it, c, qi) : ""}
      <p lang="fr">${esc(q.q)}</p>${optBtns(it, c, qi, q)}
      ${c.checked ? `<p class="dx-x" lang="fr">${c.sel[qi] === q.a ? "✓" : "→"} ${esc(q.x)}</p>` : ""}
      ${c.checked && q.audio && q.audio.length ? transcript(q.audio, "q" + qi, c) : ""}</li>`).join("")}</ol>
    ${c.checked ? "" : `<button class="btn" data-dx="check">${esc(t("dx.check"))}</button>`}`;
  function playBtn(it, c, qi) {
    const n = qi == null ? c.plays : (c.qplays[qi] || 0), max = RUN.mode === "exam" && !c.checked && n >= 2;
    return `<div class="row wrap dx-play"><button class="btn small" data-dx="play" ${qi == null ? "" : `data-q="${qi}"`} ${max ? "disabled" : ""}>▶ ${esc(t("dx.listen"))}</button>
      ${RUN.mode === "exam" ? `<span class="muted small">${esc(t("dx.listenN", { n: Math.min(n, 2) }))}</span>` : `<button class="chip ${c.slow ? "on" : ""}" aria-pressed="${c.slow}" data-dx="slow">${esc(t("dx.slow"))}</button>`}
      <button class="btn small ghost" data-dx="stop" aria-label="Stop">⏹</button>
      ${max ? `<span class="muted small">${esc(t("dx.noMore"))}</span>` : ""}</div>`;
  }
  const transcript = (lines, key, c) => `<details class="dx-tr" ${c.shown[key] ? "open" : ""}><summary>${esc(t("dx.transcript"))}</summary>${lines.map(([w, x]) => `<p lang="fr"><b>${w === "N" ? "📢" : w === "K" ? "🧒" : /^F/.test(w) ? "👩" : "👨"}</b> ${esc(x)}</p>`).join("")}</details>`;

  function runCO(it, c) {
    return `${it.audio && it.audio.length ? `<div class="card dx-audio"><span class="dx-wave" aria-hidden="true">🎧</span>${playBtn(it, c, null)}${c.checked ? transcript(it.audio, "main", c) : ""}</div>` : ""}${qList(it, c)}`;
  }
  function docHtml(d) {
    const table = d.rows && d.rows.length ? `<table class="tbl">${d.rows.map((r, i) => `<tr>${r.map(x => i || !String(x).trim() ? `<td>${esc(x)}</td>` : `<th>${esc(x)}</th>`).join("")}</tr>`).join("")}</table>` : "";
    const body = d.body ? para(d.body) : "";
    const head = d.from || d.to || d.subject ? `<div class="doc-head">${d.from ? `<div><span>De :</span> ${esc(d.from)}</div>` : ""}${d.to ? `<div><span>À :</span> ${esc(d.to)}</div>` : ""}${d.subject ? `<div><span>Objet :</span> <b>${esc(d.subject)}</b></div>` : ""}</div>` : "";
    const title = d.title ? `<h2 class="doc-title">${esc(d.title)}</h2>` : "";
    return `<article class="doc doc-${esc(d.type)}" lang="fr">${d.type === "sms" ? `<div class="sms-from">${esc(d.from || "")}</div><div class="sms-bubble">${body}</div>` : head + title + body + table}${d.sign ? `<p class="doc-sign">${esc(d.sign)}</p>` : ""}${d.type === "carte" ? `<span class="stamp" aria-hidden="true">📮</span>` : ""}</article>`;
  }
  const runCE = (it, c) => docHtml(it.doc) + qList(it, c);

  const FIELD_OK = {
    text: v => words(v) >= 1, free: v => words(v) >= 3, number: v => /\d/.test(v), email: v => /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v.trim()),
    phone: v => (v.match(/\d/g) || []).length >= 8, date: v => /\d/.test(v), choice: v => !!v
  };
  function runForm(it, c) {
    return `<div class="card doc doc-fiche" lang="fr"><p>${esc(it.context)}</p>
      <form id="dx-form" class="fiche">${it.fields.map((f, i) => {
        const v = c.fields[i] || "", bad = c.checked && !FIELD_OK[f.k](v);
        const input = f.k === "choice" ? `<select id="dx-f${i}" data-dxf="${i}" ${c.checked ? "disabled" : ""}><option value=""></option>${f.o.map(o => `<option ${v === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`
          : f.k === "free" ? `<textarea id="dx-f${i}" data-dxf="${i}" rows="2" ${c.checked ? "readonly" : ""}>${esc(v)}</textarea>`
          : `<input id="dx-f${i}" data-dxf="${i}" type="${{ email: "email", phone: "tel", date: "date", number: "text" }[f.k] || "text"}" ${f.k === "number" ? 'inputmode="numeric"' : ""} value="${esc(v)}" ${c.checked ? "readonly" : ""} autocomplete="off">`;
        return `<label class="${bad ? "bad" : c.checked ? "good" : ""}" for="dx-f${i}"><span>${esc(f.l)}${f.hint ? ` <small class="muted">(${esc(f.hint)})</small>` : ""}</span>${input}${bad ? `<small class="dx-bad">${esc(t("dx.fieldBad"))}</small>` : ""}</label>`;
      }).join("")}</form></div>
      ${c.checked ? "" : `<button class="btn" data-dx="checkform">${esc(t("dx.check"))}</button>`}`;
  }
  const covered = (it, text) => it.must.map(m => m.kw.some(k => norm(text).includes(norm(k))));
  function mustList(it, flags, manual) {
    return `<ul class="dx-must" id="dx-must">${it.must.map((m, i) => `<li class="${flags[i] ? "ok" : ""}">${manual ? `<button class="tick ${flags[i] ? "on" : ""}" data-dx="tick" data-i="${i}" aria-pressed="${!!flags[i]}">${flags[i] ? "✓" : "○"}</button>` : `<span aria-hidden="true">${flags[i] ? "✓" : "○"}</span>`} <span lang="fr">${esc(m.c)}</span></li>`).join("")}</ul>`;
  }
  const selfBtns = (c, po) => `<p><b>${esc(t(po ? "dx.selfPo" : "dx.self"))}</b></p><div class="row wrap dx-self">${[0, 1, 2].map(i => `<button class="chip ${c.self === i ? "on" : ""}" aria-pressed="${c.self === i}" data-dx="self" data-v="${i}">${esc(t("dx.self" + i))}</button>`).join("")}</div>`;
  function runText(it, c) {
    const n = words(c.text), flags = covered(it, c.text);
    return `<label class="sr-only" for="dx-text">${esc(it.title)}</label>
      <textarea id="dx-text" class="dx-text" rows="9" lang="fr" spellcheck="false" ${c.checked ? "readonly" : ""} placeholder="…">${esc(c.text)}</textarea>
      <p class="dx-count ${n >= it.min ? "ok" : ""}" id="dx-count">${esc(t("dx.words", { n, m: it.min }))}</p>
      <div class="card"><p class="eyebrow">${esc(t("dx.must"))}</p>${mustList(it, flags, false)}</div>
      ${!c.checked ? `<button class="btn" data-dx="checktext">${esc(t("dx.correct"))}</button>` : `
        <div class="card dx-model"><p class="eyebrow">${esc(t("dx.model"))} ${A().speakBtn(it.model)}</p>${para(it.model)}</div>
        ${selfBtns(c, false)}`}`;
  }
  function textScore(it, c) {
    const f = covered(it, c.text), must = f.filter(Boolean).length / f.length, len = Math.min(1, words(c.text) / it.min);
    return it.pts * (.45 * must + .2 * len + .35 * [.3, .7, 1][c.self]);
  }

  function runPO(it, c) {
    const model = it.model && !Array.isArray(it.model) ? it.model : null;
    if (it.kind === "entretien" || it.kind === "echange") {
      const done = Object.keys(c.ok).length >= it.prompts.length;
      return `${it.kind === "echange" ? `<p class="muted">${esc(t("dx.cards"))}</p><div class="dx-cards">${it.cards.map((x, i) => `<span class="dx-card ${i === c.pi ? "now" : c.ok[i] ? "done" : ""}" lang="fr">${esc(x)}</span>`).join("")}</div>` : ""}
        <ol class="dx-prompts">${it.prompts.map((p, i) => {
          if (i > c.pi && !done) return "";
          const now = i === c.pi && !done, mark = c.ok[i] ? (c.used[i] ? "½" : "✓") : "";
          return `<li class="${now ? "now" : c.ok[i] ? "done" : ""}">
            <div class="bubble"><span class="who">${it.kind === "echange" ? "🃏" : "🧑‍🏫"}</span><p lang="fr">${esc(it.kind === "echange" ? (it.cards[i] || p.q) : p.q)} ${it.kind === "entretien" ? A().speakBtn(p.q) : ""} <b>${mark}</b></p></div>
            ${now ? `<div class="row wrap">${SR ? `<button class="btn small ghost" data-dx="mic" data-i="${i}">${esc(t("dx.mic"))}</button>` : ""}<button class="btn small ghost" data-dx="example" data-i="${i}">${esc(t("dx.example"))}</button><button class="btn small" data-dx="answered" data-i="${i}">${esc(t("dx.answered"))}</button></div>` : ""}
            ${c.heard[i] ? `<p class="muted small" lang="fr">${esc(t("dx.heard", { t: c.heard[i] }))}</p>` : ""}
            ${c.used[i] || (c.ok[i] && done) ? `<p class="dx-m" lang="fr">💡 ${esc(p.m)} ${A().speakBtn(p.m)}</p>` : ""}
          </li>`;
        }).join("")}</ol>`;
    }
    if (it.kind === "monologue") {
      return `<div class="card doc" lang="fr"><h2 class="doc-title">${esc(it.topic)}</h2><ul>${it.hints.map(h => `<li>${esc(h)}</li>`).join("")}</ul></div>
        <div class="row wrap">${SR ? `<button class="btn small ghost" data-dx="mic" data-i="mono">${esc(t("dx.mic"))}</button>` : ""}<button class="btn small ghost" data-dx="countdown" data-s="60">⏳ ${esc(t("dx.prep"))}</button><button class="btn small ghost" data-dx="countdown" data-s="120">🗣️ ${esc(t("dx.speak2"))}</button><span class="dx-cd" id="dx-cd" aria-live="polite"></span></div>
        ${c.heard.mono ? `<p class="muted small" lang="fr">${esc(t("dx.heard", { t: c.heard.mono }))}</p>` : ""}
        <div class="card"><p class="eyebrow">${esc(t("dx.tick"))}</p>${mustList(it, it.must.map((m, i) => !!c.ticks[i]), !c.checked)}</div>
        ${!c.checked ? `<button class="btn" data-dx="checkpo">${esc(t("dx.showModel"))}</button>` : `<div class="card dx-model"><p class="eyebrow">${esc(t("dx.model"))} ${A().speakBtn(model)}</p>${para(model)}</div>${selfBtns(c, true)}`}`;
    }
    // dialogue (dialogue simulé / interaction)
    const lines = it.model || [];
    return `<div class="card doc" lang="fr"><p>${esc(it.scenario)}</p><p class="muted small">${esc(t("dx.you", { r: it.you }))} · ${esc(t("dx.them", { r: it.them }))}</p></div>
      ${it.items && it.items.length ? `<p class="eyebrow">${esc(t("dx.items"))}</p><div class="dx-items">${it.items.map(x => `<div class="dx-item"><span class="e" aria-hidden="true">${esc(x.e || "🛒")}</span><span lang="fr">${esc(x.n)}</span><b>${esc(x.p)}</b></div>`).join("")}</div>` : ""}
      <div class="card"><p class="eyebrow">${esc(t("dx.tick"))}</p>${mustList(it, it.must.map((m, i) => !!c.ticks[i]), !c.checked)}</div>
      <div class="dialogue dx-dlg">${c.line < 0 ? `<button class="btn" data-dx="dlg-next">${esc(t("dx.play"))}</button>` : lines.slice(0, c.line + 1).map((l, i) => {
        const mine = l[0] === "C", hide = mine && !c.shown["l" + i];
        return `<div class="bubble ${mine ? "me" : ""}"><span class="who">${mine ? "🙋" : "🧑‍🏫"}</span>${hide ? `<p class="hint">${esc(t("dx.yourTurn"))}</p><button class="btn small ghost" data-dx="dlg-reveal" data-i="${i}">👁 ${esc(t("dx.reveal"))}</button>` : `<p lang="fr">${esc(l[1])} ${A().speakBtn(l[1])}</p>`}</div>`;
      }).join("") + (c.line >= 0 && c.line < lines.length - 1 ? `<button class="btn small" data-dx="dlg-next">${esc(t("dx.nextLine"))}</button>` : "")}</div>
      ${!c.checked ? `<button class="btn" data-dx="checkpo">${esc(t("dx.check"))}</button>` : selfBtns(c, true)}`;
  }
  function poScore(it, c) {
    if (it.kind === "entretien" || it.kind === "echange") return it.pts * it.prompts.reduce((a, p, i) => a + (c.ok[i] ? (c.used[i] ? .5 : 1) : 0), 0) / it.prompts.length;
    const tick = it.must.filter((m, i) => c.ticks[i]).length / it.must.length;
    return it.pts * (.6 * tick + .4 * [.3, .7, 1][c.self]);
  }

  function viewRunEnd() {
    const its = RUN.ids.map(id => BY_ID[id]), lv = RUN.lv;
    const mins = Math.max(1, Math.round((Date.now() - RUN.start) / 60000));
    if (!RUN.logged) { RUN.logged = true; A().logMinutes(mins); if (RUN.n != null && RUN.kind !== "ex") { const r = recordSujet(lv, RUN.n); if (r.complete && r.pass) setTimeout(confetti, 200); } }
    const secs = SECS.filter(s => its.some(x => x.sec === s));
    const r = RUN.n != null ? sujetScore(lv, RUN.n) : null;
    const got = its.reduce((a, x) => a + (RUN.scores[x.id] || 0), 0), max = its.reduce((a, x) => a + x.pts, 0);
    return `<a class="back" href="#/exam/${lv}">← ${esc(t("dx.title"))}</a>
      <h1>🎯 ${RUN.n != null ? "DELF " + lv + " · " + esc(t("dx.sujet", { n: RUN.n })) : "DELF " + lv}</h1>
      ${r && r.complete && RUN.kind !== "ex" ? resultBlock(r) : `<section class="card dx-result"><div class="dx-ring" style="--p:${Math.round(got / max * 100)}"><b>${fmt(got)}</b><small>/${fmt(max)}</small></div>
        <div class="dx-bars">${secs.map(s => { const xs = its.filter(x => x.sec === s), g = xs.reduce((a, x) => a + (RUN.scores[x.id] || 0), 0), m = xs.reduce((a, x) => a + x.pts, 0);
          return `<div><span>${ICON[s]} ${esc(t("dx." + s))}</span><span class="bar" role="progressbar" aria-label="${esc(t("dx." + s))}" aria-valuenow="${Math.round(g / m * 100)}" aria-valuemin="0" aria-valuemax="100"><span style="width:${g / m * 100}%"></span></span><b>${fmt(g)}/${fmt(m)}</b></div>`; }).join("")}<p class="muted small">${esc(t("dx.estimated"))}</p></div></section>`}
      <div class="row wrap">
        ${RUN.n != null ? `<a class="btn" href="#/exam/${lv}/s/${RUN.n}">${esc(t("dx.sujet", { n: RUN.n }))}</a>` : ""}
        ${RUN.n != null && RUN.n < sujets(lv).length && RUN.kind === "sujet" ? `<a class="btn ghost" href="#/exam/${lv}/s/${RUN.n + 1}">${esc(t("dx.sujet", { n: RUN.n + 1 }))} →</a>` : ""}
        <a class="btn ghost" href="#/exam/${lv}">${esc(t("dx.title"))}</a>
      </div>`;
  }

  /* ── Quick challenge (10 auto-marked questions) ── */
  function flashPool(lv) {
    const pool = [];
    for (const it of D) {
      if (it.level !== lv) continue;
      if (it.sec === "ce" && (it.doc.body || "").length < 520 && !(it.doc.rows && it.doc.rows.length > 8)) it.questions.forEach((q, qi) => pool.push({ it, q, qi }));
      if (it.sec === "co") it.questions.forEach((q, qi) => { if (q.audio && q.audio.length) pool.push({ it, q, qi }); });
    }
    return pool;
  }
  function viewFlash(lv) {
    if (!FL || FL.lv !== lv) { FL = { lv, qs: shuffle(flashPool(lv)).slice(0, 10), i: 0, ok: 0, combo: 0, maxc: 0, sel: null, auto: true }; }
    const best = st().flash[lv] || 0;
    if (FL.i >= FL.qs.length) {
      const rec = FL.ok > best && FL.ok > 0;
      if (!FL.saved) { FL.saved = true; if (FL.ok > best) { st().flash[lv] = FL.ok; save(); } if (FL.ok === 10) award("flash"); A().logMinutes(3); if (rec) setTimeout(confetti, 200); }
      return `<a class="back" href="#/exam/${lv}">← ${esc(t("dx.title"))}</a><h1>⚡ ${esc(t("dx.flash"))}</h1>
        <section class="card dx-result"><div class="dx-ring" style="--p:${FL.ok * 10}"><b>${FL.ok}</b><small>/10</small></div>
        <div><p class="dx-verdict">${esc(t("dx.flashEnd", { n: FL.ok }))}</p><p>${rec ? esc(t("dx.flashRec")) : esc(t("dx.flashBest", { b: Math.max(best, FL.ok) }))}</p><p class="muted">${esc(t("dx.combo", { n: FL.maxc }))}</p></div></section>
        <div class="row wrap"><button class="btn" data-dx="flash-again">${esc(t("dx.again"))}</button><a class="btn ghost" href="#/exam/${lv}">${esc(t("dx.title"))}</a></div>`;
    }
    const { it, q } = FL.qs[FL.i], answered = FL.sel != null;
    return `<a class="back" href="#/exam/${lv}">← ${esc(t("dx.title"))}</a>
      <h1 class="dx-h">⚡ ${esc(t("dx.flash"))}</h1>
      <div class="row between"><p class="eyebrow">${esc(t("dx.flashQ", { n: FL.i + 1 }))}</p><p class="dx-combo ${FL.combo >= 3 ? "hot" : ""}">${FL.combo > 1 ? esc(t("dx.combo", { n: FL.combo })) : ""}</p></div>
      <div class="dx-progress" aria-hidden="true">${FL.qs.map((x, i) => `<i class="${i < FL.i ? "done" : i === FL.i ? "now" : ""}"></i>`).join("")}</div>
      ${it.sec === "ce" ? docHtml(it.doc) : `<div class="card dx-audio"><span class="dx-wave" aria-hidden="true">🎧</span><button class="btn small" data-dx="flash-play">▶ ${esc(t("dx.listen"))}</button></div>`}
      <p class="dx-fq" lang="fr"><b>${esc(q.q)}</b></p>
      <div class="opts dx-opts">${q.o.map((o, oi) => `<button class="opt ${answered ? (oi === q.a ? "right" : FL.sel === oi ? "wrong" : "") : ""}" data-dx="flash-pick" data-o="${oi}" ${answered ? "disabled" : ""} lang="fr">${esc(o)}</button>`).join("")}</div>
      ${answered ? `<p class="dx-x" lang="fr">${FL.sel === q.a ? "✓" : "→"} ${esc(q.x)}</p><button class="btn" data-dx="flash-next">${FL.i + 1 < FL.qs.length ? esc(t("dx.nextLine")) : esc(t("dx.finish"))}</button>` : ""}`;
  }

  /* ── Events ── */
  function keepScroll(fn) { const y = window.scrollY; fn(); A().render(); window.scrollTo(0, y); }
  function click(el, d) {
    const a = d.dx, it = curItem(), c = RUN ? curState() : null;
    switch (a) {
      case "mode": st().mode = d.v; save(); keepScroll(() => {}); return;
      case "start": startRun(d.ids.split(","), d.kind, d.lv, d.n ? +d.n : null); return;
      case "help": c.help = !c.help; keepScroll(() => {}); return;
      case "slow": c.slow = !c.slow; keepScroll(() => {}); return;
      case "stop": stopAudio(); return;
      case "play": {
        const qi = d.q != null ? +d.q : null, lines = qi == null ? it.audio : it.questions[qi].audio;
        if (qi == null) c.plays++; else c.qplays[qi] = (c.qplays[qi] || 0) + 1;
        keepScroll(() => {}); playLines(lines, { lv: it.level, slow: c.slow }); return;
      }
      case "pick": c.sel[+d.q] = +d.o; keepScroll(() => {}); return;
      case "check": {
        c.checked = true; stopAudio();
        const ok = it.questions.filter((q, qi) => c.sel[qi] === q.a).length;
        saveScore(it, it.pts * ok / it.questions.length); keepScroll(() => {}); return;
      }
      case "checkform": {
        $$("[data-dxf]").forEach(x => { c.fields[+x.dataset.dxf] = x.value; });
        c.checked = true; const ok = it.fields.filter((f, i) => FIELD_OK[f.k](c.fields[i] || "")).length;
        saveScore(it, it.pts * ok / it.fields.length); keepScroll(() => {}); return;
      }
      case "checktext": { const x = document.getElementById("dx-text"); if (x) c.text = x.value; c.checked = true; keepScroll(() => {}); return; }
      case "checkpo": c.checked = true; stopAudio(); keepScroll(() => {}); return;
      case "self": c.self = +d.v; saveScore(it, it.sec === "pe" ? textScore(it, c) : poScore(it, c)); keepScroll(() => {}); return;
      case "tick": c.ticks[+d.i] = !c.ticks[+d.i]; keepScroll(() => {}); return;
      case "example": c.used[+d.i] = 1; keepScroll(() => {}); A().speak(it.prompts[+d.i].m); return;
      case "answered": {
        c.ok[+d.i] = 1; c.pi = +d.i + 1;
        if (c.pi >= it.prompts.length) { saveScore(it, poScore(it, c)); keepScroll(() => {}); return; }
        keepScroll(() => {}); if (it.kind === "entretien") A().speak(it.prompts[c.pi].q); return;
      }
      case "mic": return listen(el, d.i);
      case "countdown": return countdown(+d.s);
      case "dlg-next": {
        c.line++; const l = it.model[c.line]; keepScroll(() => {});
        if (l && l[0] === "E") A().speak(l[1]); return;
      }
      case "dlg-reveal": c.shown["l" + d.i] = 1; keepScroll(() => {}); A().speak(it.model[+d.i][1]); return;
      case "next": stopAudio(); RUN.i++; A().render(); window.scrollTo(0, 0); { const n = curItem(); if (n && n.sec === "po" && n.kind === "entretien") setTimeout(() => A().speak(n.prompts[0].q), 400); } return;
      case "flash-play": { const { it: fi, q } = FL.qs[FL.i]; playLines(q.audio || fi.audio, { lv: fi.level }); return; }
      case "flash-pick": {
        const q = FL.qs[FL.i].q; FL.sel = +d.o;
        if (FL.sel === q.a) { FL.ok++; FL.combo++; FL.maxc = Math.max(FL.maxc, FL.combo); } else FL.combo = 0;
        stopAudio(); keepScroll(() => {}); return;
      }
      case "flash-next": FL.i++; FL.sel = null; A().render(); window.scrollTo(0, 0); { const n = FL.qs[FL.i]; if (n && n.it.sec === "co") setTimeout(() => playLines(n.q.audio, { lv: n.it.level }), 350); } return;
      case "flash-again": FL = null; A().render(); return;
    }
  }
  const $$ = s => Array.from(document.querySelectorAll(s));
  function listen(btn, key) {
    if (!SR) return; const c = curState();
    const r = new SR(); r.lang = "fr-FR"; r.interimResults = false; r.continuous = key === "mono";
    btn.classList.add("on"); btn.textContent = t("dx.listening");
    let heard = "";
    r.onresult = e => { heard = Array.from(e.results).map(x => x[0].transcript).join(" "); };
    r.onerror = () => {};
    r.onend = () => {
      const it = curItem(); if (!it) return;
      c.heard[key] = heard || "…";
      if (key === "mono" && heard) covered(it, heard).forEach((f, i) => { if (f) c.ticks[i] = true; });
      keepScroll(() => {});
    };
    try { r.start(); } catch (e) { r.onend(); }
  }
  let CD = null;
  function countdown(s) {
    clearInterval(CD); const end = Date.now() + s * 1000;
    const tick = () => { const el = document.getElementById("dx-cd"); const left = Math.ceil((end - Date.now()) / 1000); if (!el) return clearInterval(CD); el.textContent = left > 0 ? Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0") : "✓"; if (left <= 0) clearInterval(CD); };
    tick(); CD = setInterval(tick, 500);
  }
  function input(e) {
    const el = e.target;
    if (el.id === "dx-text" && RUN) {
      const it = curItem(), c = curState(); c.text = el.value;
      const n = words(el.value), cnt = document.getElementById("dx-count");
      if (cnt) { cnt.textContent = t("dx.words", { n, m: it.min }); cnt.classList.toggle("ok", n >= it.min); }
      const ul = document.getElementById("dx-must"); if (ul) ul.outerHTML = mustList(it, covered(it, el.value), false);
    }
    if (el.dataset && el.dataset.dxf != null && RUN) curState().fields[+el.dataset.dxf] = el.value;
  }
  function onHash() {
    stopAudio();
    const p = location.hash.replace(/^#\/?/, "").split("/");
    if (p[0] !== "exam" || p[2] !== "flash") FL = null;
    if (RUN && RUN.i >= RUN.ids.length && p[1] !== "run") RUN = null;
  }
  clearInterval(TIMER);
  TIMER = setInterval(() => {
    const el = document.getElementById("dx-timer"); if (!el || !RUN) return;
    const it = curItem(); if (!it) return;
    el.textContent = timeLeft(it.sec);
    const over = Date.now() > (RUN.dl[it.sec] || Infinity); el.classList.toggle("over", over);
    if (over && !RUN.timeUpShown[it.sec]) { RUN.timeUpShown[it.sec] = 1; A().toast(t("dx.timeUp")); }
  }, 1000);

  window.EXAM = {
    view, click, input, onHash, count: D.length, start: startRun,
    homeCard() {
      if (!D.length) return "";
      return `<section class="card dx-home"><p class="eyebrow">🎓 DELF</p><h2>${esc(t("dx.homeTitle"))}</h2>
        <p>${esc(t("dx.homeSub", { a: passedCount("A1"), b: passedCount("A2") }))}</p>
        <a class="btn" href="#/exam">${esc(t("dx.homeBtn"))} →</a></section>`;
    }
  };
})();
