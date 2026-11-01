/* Games corner: adventures (interactive stories, data/adv-*.js, format in tools/adventure-spec.md),
   memory pairs (flashcard decks) and sentence builder (dialogue lines). Uses window.APP and window.EXAM. */
(function () {
  "use strict";
  const ADVS = window.ADVENTURES || [];
  const ADV_BY_ID = Object.fromEntries(ADVS.map(a => [a.id, a]));
  const LVS = ["A1", "A2"];
  const AVATAR = { N: "📢", F: "👩", M: "👨", F2: "👩‍🦰", M2: "🧔", K: "🧒" };
  const A = () => window.APP;
  const t = (k, v) => A().t(k, v), esc = s => A().esc(s), lang = () => A().lang();
  const save = () => A().save();
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const tr3 = o => o ? (o[lang()] || o.en || o.fr) : "";
  const helpText = o => o ? (lang() === "fr" ? o.tr : o[lang()] || o.en) : "";
  function st() {
    const S = A().S; const g = S.games = S.games || {};
    g.adv = g.adv || {}; g.mem = g.mem || {}; g.ord = g.ord || {};
    if (!g.lv) g.lv = ["A0", "A1"].includes(S.level || "A0") ? "A1" : "A2";
    return g;
  }
  const EX = () => window.EXAM || {};
  const play = (lines, lv, slow) => { if (EX().playLines) EX().playLines(lines, { lv, slow }); else if (lines && lines[0]) A().speak(lines.map(l => l[1]).join(" ")); };
  const stopAudio = () => { if (EX().stopAudio) EX().stopAudio(); else if ("speechSynthesis" in window) speechSynthesis.cancel(); };
  const confetti = () => { if (EX().confetti) EX().confetti(); };
  function keepScroll(fn) { const y = window.scrollY; fn(); A().render(); window.scrollTo(0, y); }
  const starStr = n => `<span class="stars" role="img" aria-label="${n}/3">${"★".repeat(n)}<span class="off">${"★".repeat(3 - n)}</span></span>`;
  const lvChips = (base, lv) => `<div class="row wrap dx-switch" role="group" aria-label="${esc(t("dx.level"))}">${LVS.map(l => `<a class="chip ${l === lv ? "on" : ""}" href="${base}/${l}" aria-current="${l === lv}">${l}</a>`).join("")}</div>`;
  const back = (href, label) => `<a class="back" href="${href}">← ${esc(label)}</a>`;

  /* ───────── Hub ───────── */
  function viewHub() {
    const g = st(), lv = g.lv, done = ADVS.filter(a => g.adv[a.id]).length;
    const d = (window.APP.S.delf || {});
    return `${back("#/practice", t("ex.title"))}
      <h1>🎲 ${esc(t("gm.title"))}</h1><p class="muted">${esc(t("gm.sub"))}</p>
      <div class="ex-grid">
        <a class="card ex-tile big gm-adv-tile" href="#/adv"><span class="ex-ic">🧭</span><b>${esc(t("av.title"))}</b><small>${esc(t("av.tile", { n: ADVS.length, d: done }))}</small></a>
        <a class="card ex-tile" href="#/games/memory"><span class="ex-ic">🃏</span><b>${esc(t("gm.mem"))}</b><small>${esc(t("gm.memSub"))}${g.mem[lv] ? " · " + esc(t("gm.memBest", { n: g.mem[lv] })) : ""}</small></a>
        <a class="card ex-tile" href="#/games/order"><span class="ex-ic">🧩</span><b>${esc(t("gm.ord"))}</b><small>${esc(t("gm.ordSub"))}${g.ord[lv] ? " · " + esc(t("gm.ordBest", { n: g.ord[lv] })) : ""}</small></a>
        ${EX().count ? `<a class="card ex-tile" href="#/exam/${lv}/survie"><span class="ex-ic">❤️</span><b>${esc(t("dx.surv"))}</b><small>${esc(t("dx.survSub", { b: (d.surv || {})[lv] || 0 }))}</small></a>
        <a class="card ex-tile" href="#/exam/${lv}/flash"><span class="ex-ic">⚡</span><b>${esc(t("dx.flash"))}</b><small>${esc(t("dx.flashSub", { b: (d.flash || {})[lv] || 0 }))}</small></a>` : ""}
      </div>`;
  }

  /* ───────── Adventures ───────── */
  let AV = null; // { id, log: [{node}|{me, bad}], mistakes, wrong: {}, fb: idx|null, help, pending }
  const curNode = () => { const a = ADV_BY_ID[AV.id]; for (let i = AV.log.length - 1; i >= 0; i--) if (AV.log[i].node) return a.nodes[AV.log[i].node]; return null; };
  const advStars = m => m <= 1 ? 3 : m <= 3 ? 2 : 1;
  function viewAdvList() {
    const g = st();
    const tile = a => { const s = g.adv[a.id]; return `<a class="card av-tile ${s ? "is-done" : ""}" href="#/adv/${a.id}"><span class="av-emo" aria-hidden="true">${a.emoji}</span><span><b lang="fr">${esc(a.t.fr)}</b><small class="muted">${esc(lang() === "fr" ? a.t.en : tr3(a.t))}</small>${s ? starStr(s) : ""}</span></a>`; };
    const grp = lv => { const list = ADVS.filter(a => a.level === lv); return list.length ? `<h2 class="lv-h"><span class="badge lv">${lv}</span> ${esc(t("av.lv" + lv))}</h2><div class="av-list">${list.map(tile).join("")}</div>` : ""; };
    return `${back("#/games", t("gm.title"))}
      <h1>🧭 ${esc(t("av.title"))}</h1><p class="muted">${esc(t("av.sub"))}</p>
      ${ADVS.length ? LVS.map(grp).join("") : `<p class="muted">…</p>`}`;
  }
  function sayHtml(lines, lv, live) {
    return (lines || []).map(([who, text]) => `<div class="av-say"><span class="av-ava" aria-hidden="true">${AVATAR[who] || "💬"}</span><p class="bubble" lang="fr">${esc(text)}</p></div>`).join("") +
      (live && lines && lines.length ? `<div class="row av-audio"><button class="btn small ghost" data-gm="av-play" aria-label="${esc(t("av.replay"))}">🔊 ${esc(t("av.replay"))}</button><button class="btn small ghost" data-gm="av-play" data-slow="1" aria-label="${esc(t("av.slow"))}">🐢</button></div>` : "");
  }
  const sceneHtml = (sc, help) => sc ? `<p class="av-scene"><span lang="fr">${esc(sc.fr)}</span>${help ? `<br><small class="muted">${esc(helpText(sc))}</small>` : ""}</p>` : "";
  function viewAdv(id) {
    const a = ADV_BY_ID[id]; if (!a) return viewAdvList();
    if (!AV || AV.id !== id) { AV = { id, log: [{ node: a.start }], mistakes: 0, wrong: {}, fb: null, help: false, pending: null, start: Date.now() }; setTimeout(() => { if (!AV || AV.id !== id) return; const n = curNode(); if (n) play(n.say, a.level); }, 400); }
    const n = curNode(), lastNodeIdx = AV.log.map(x => !!x.node).lastIndexOf(true);
    const hist = AV.log.slice(0, lastNodeIdx).map(x => x.node ? sceneHtml(a.nodes[x.node].scene, false) + sayHtml(a.nodes[x.node].say, a.level, false) : `<div class="av-me ${x.bad ? "bad" : ""}"><p class="bubble" lang="fr">${esc(x.me)}</p></div>`).join("");
    let now = sceneHtml(n.scene, AV.help) + sayHtml(n.say, a.level, true);
    if (n.end) {
      const stars = advStars(AV.mistakes), prev = st().adv[id] || 0;
      if (!AV.saved) { AV.saved = true; if (stars > prev) { st().adv[id] = stars; save(); } A().practised(); A().logMinutes(Math.max(2, Math.round((Date.now() - AV.start) / 60000))); setTimeout(confetti, 300); }
      const next = ADVS.find(x => x.level === a.level && !st().adv[x.id]) || ADVS.find(x => !st().adv[x.id]);
      now += `<section class="card av-end" role="status"><p class="big" aria-hidden="true">🎉</p><h2>${esc(t("av.win"))}</h2>${starStr(stars)}
        <p>${esc(t(AV.mistakes ? "av.mistakes" : "av.perfect", { n: AV.mistakes }))}</p>
        <div class="row wrap center"><button class="btn" data-gm="av-again">↻ ${esc(t("av.again"))}</button>
        ${next && next.id !== id ? `<a class="btn ghost" href="#/adv/${next.id}">${next.emoji} ${esc(next.t.fr)} →</a>` : ""}
        <a class="btn ghost" href="#/adv">${esc(t("av.all"))}</a></div></section>`;
    } else {
      const fbC = AV.fb != null ? n.choices[AV.fb] : null;
      now += `<p class="av-you">${esc(t("av.you"))}</p>
        <div class="opts av-opts">${n.choices.map((c, i) => `<button class="opt ${AV.wrong[i] ? "wrong" : ""}" data-gm="av-pick" data-i="${i}" ${AV.wrong[i] || AV.pending ? "disabled" : ""}><span><span lang="fr">${esc(c.fr)}</span>${AV.help ? `<small class="muted av-tr">${esc(helpText(c))}</small>` : ""}</span></button>`).join("")}</div>
        <div aria-live="polite">${fbC ? `<div class="fb bad av-fb"><p lang="fr">${esc(fbC.fb.fr)}</p>${lang() !== "fr" ? `<p class="muted small">${esc(fbC.fb[lang()] || fbC.fb.en)}</p>` : `<p class="muted small">${esc(fbC.fb.tr)}</p>`}
          ${AV.pending ? `<button class="btn" data-gm="av-go">${esc(t("av.continue"))} →</button>` : `<p class="small">${esc(t("av.retry"))}</p>`}</div>` : ""}</div>
        <button class="chip ${AV.help ? "on" : ""}" aria-pressed="${AV.help}" data-gm="av-help">🌐 ${esc(t("av.help"))}</button>`;
    }
    const steps = AV.log.filter(x => x.node).length;
    return `${back("#/adv", t("av.title"))}
      <h1 class="av-h"><span aria-hidden="true">${a.emoji}</span> <span lang="fr">${esc(a.t.fr)}</span></h1>
      <div class="card av-goal"><p><b>🎯 ${esc(t("av.goal"))}</b> <span lang="fr">${esc(a.goal.fr)}</span></p><p class="muted small">${esc(helpText(a.goal))}</p>
        <p class="small muted">${esc(t("av.step", { n: steps }))}${AV.mistakes ? " · " + esc(t("av.oops", { n: AV.mistakes })) : ""}</p></div>
      <div class="av-chat">${hist}<div id="av-now">${now}</div></div>`;
  }
  function advGo(go) {
    const a = ADV_BY_ID[AV.id];
    AV.log.push({ node: go }); AV.wrong = {}; AV.fb = null; AV.pending = null;
    A().render();
    const el = document.getElementById("av-now");
    if (el) el.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    const n = a.nodes[go]; if (n) setTimeout(() => play(n.say, a.level), 250);
  }

  /* ───────── Memory pairs ───────── */
  let MEM = null; // { lv, tiles: [{k, fr, text}], open: [], done: {}, moves, lock }
  function memCards(lv) {
    const lvs = lv === "A1" ? ["A0", "A1"] : ["A2"];
    const ok = c => c.fr && c.tr && c.en && c.fr.length <= 24 && c.tr.length <= 26 && c.en.length <= 26 && !/[\/(…]/.test(c.fr);
    return (window.DECKS || []).filter(d => lvs.includes(d.level)).flatMap(d => d.cards).filter(ok);
  }
  function newMem(lv) {
    const side = c => lang() === "en" ? c.en : c.tr;
    const seen = new Set(), pick = [];
    for (const c of shuffle(memCards(lv))) { const k = c.fr.toLowerCase(), s = side(c).toLowerCase(); if (seen.has(k) || seen.has(s)) continue; seen.add(k); seen.add(s); pick.push(c); if (pick.length === 6) break; }
    const tiles = shuffle(pick.flatMap((c, k) => [{ k, fr: true, text: c.fr }, { k, fr: false, text: side(c) }]));
    MEM = { lv, tiles, open: [], done: {}, moves: 0, lock: false, start: Date.now() };
  }
  function viewMem(lv) {
    if (!MEM || MEM.lv !== lv) newMem(lv);
    const pairs = MEM.tiles.length / 2, found = Object.keys(MEM.done).length / 2, best = st().mem[lv];
    const end = found === pairs;
    if (end && !MEM.saved) { MEM.saved = true; if (!best || MEM.moves < best) { st().mem[lv] = MEM.moves; save(); if (best) setTimeout(confetti, 200); } A().practised(); A().logMinutes(3); }
    return `${back("#/games", t("gm.title"))}
      <h1>🃏 ${esc(t("gm.mem"))}</h1>
      ${lvChips("#/games/memory", lv)}
      <p class="muted">${esc(t("gm.memHow"))}</p>
      <div class="row between"><p class="eyebrow">${esc(t("gm.pairs", { d: found, n: pairs }))}</p><p class="eyebrow">${esc(t("gm.moves", { n: MEM.moves }))}${best ? " · " + esc(t("gm.memBest", { n: best })) : ""}</p></div>
      <div class="mem-grid">${MEM.tiles.map((x, i) => {
        const up = MEM.open.includes(i) || MEM.done[i];
        return `<button class="mem ${up ? "up" : ""} ${MEM.done[i] ? "ok" : ""} ${x.fr ? "fr" : ""}" data-gm="mem" data-i="${i}" ${MEM.done[i] ? "disabled" : ""} aria-label="${up ? esc(x.text) : esc(t("gm.card", { n: i + 1 }))}" ${x.fr && up ? 'lang="fr"' : ""}>${up ? esc(x.text) : `<span aria-hidden="true">✿</span>`}</button>`;
      }).join("")}</div>
      ${end ? `<section class="card center av-end" role="status"><p class="big" aria-hidden="true">🌟</p><h2>${esc(t("gm.memEnd", { n: MEM.moves }))}</h2>
        <div class="row wrap center"><button class="btn" data-gm="mem-again">↻ ${esc(t("av.again"))}</button><a class="btn ghost" href="#/games">${esc(t("gm.title"))}</a></div></section>` : ""}`;
  }
  function memPick(i) {
    if (MEM.lock || MEM.done[i] || MEM.open.includes(i)) return;
    const x = MEM.tiles[i]; MEM.open.push(i);
    if (x.fr) A().speak(x.text);
    if (MEM.open.length === 2) {
      MEM.moves++;
      const [a, b] = MEM.open;
      if (MEM.tiles[a].k === MEM.tiles[b].k) { MEM.done[a] = MEM.done[b] = 1; MEM.open = []; }
      else { MEM.lock = true; setTimeout(() => { if (!MEM) return; MEM.open = []; MEM.lock = false; if (location.hash.startsWith("#/games/memory")) keepScroll(() => {}); }, 1100); }
    }
    keepScroll(() => {});
  }

  /* ───────── Sentence builder ───────── */
  let ORD = null; // { lv, qs: [{fr, tr, en, toks, order}], i, picked: [], checked, ok }
  const ROUNDS = 8;
  function ordPool(lv) {
    const out = [], seen = new Set();
    for (const d of window.DIALOGUES || []) {
      if (d.level !== lv) continue;
      for (const l of d.lines) {
        const toks = l.fr.trim().split(/\s+/).reduce((o, w) => { if (/^[?!:;]+$/.test(w) && o.length) o[o.length - 1] += " " + w; else o.push(w); return o; }, []);
        if (toks.length < 4 || toks.length > 9 || seen.has(l.fr) || /[«»"…]/.test(l.fr)) continue;
        seen.add(l.fr); out.push({ fr: l.fr, tr: l.tr, en: l.en, toks });
      }
    }
    return out;
  }
  function newOrd(lv) {
    const qs = shuffle(ordPool(lv)).slice(0, ROUNDS).map(q => {
      let order = shuffle(q.toks.map((_, i) => i));
      for (let k = 0; k < 5 && order.map(i => q.toks[i]).join(" ") === q.fr; k++) order = shuffle(order);
      return Object.assign({}, q, { order });
    });
    ORD = { lv, qs, i: 0, picked: [], checked: false, ok: 0, start: Date.now() };
  }
  function viewOrd(lv) {
    if (!ORD || ORD.lv !== lv) newOrd(lv);
    const best = st().ord[lv] || 0;
    const head = `${back("#/games", t("gm.title"))}<h1>🧩 ${esc(t("gm.ord"))}</h1>${lvChips("#/games/order", lv)}`;
    if (!ORD.qs.length) return head + `<p class="muted">…</p>`;
    if (ORD.i >= ORD.qs.length) {
      if (!ORD.saved) { ORD.saved = true; if (ORD.ok > best) { st().ord[lv] = ORD.ok; save(); if (ORD.ok >= 6) setTimeout(confetti, 200); } A().practised(); A().logMinutes(Math.max(2, Math.round((Date.now() - ORD.start) / 60000))); }
      return head + `<section class="card dx-result"><div class="dx-ring" style="--p:${Math.round(ORD.ok / ORD.qs.length * 100)}"><b>${ORD.ok}</b><small>/${ORD.qs.length}</small></div>
        <div><p class="dx-verdict">${esc(t(ORD.ok >= 6 ? "ex.end.great" : ORD.ok >= 4 ? "ex.end.good" : "ex.end.soft"))}</p><p class="muted">${esc(t("gm.ordBest", { n: Math.max(best, ORD.ok) }))}</p></div></section>
        <div class="row wrap"><button class="btn" data-gm="ord-again">↻ ${esc(t("av.again"))}</button><a class="btn ghost" href="#/games">${esc(t("gm.title"))}</a></div>`;
    }
    const q = ORD.qs[ORD.i], given = ORD.picked.map(i => q.toks[i]).join(" "), right = given === q.fr;
    const bank = q.order.filter(i => !ORD.picked.includes(i));
    return head + `<div class="row between"><p class="eyebrow">${esc(t("dx.flashQ", { n: ORD.i + 1 }).replace("/10", "/" + ORD.qs.length))}</p><p class="eyebrow">✓ ${ORD.ok}</p></div>
      <div class="dx-progress" aria-hidden="true">${ORD.qs.map((x, i) => `<i class="${i < ORD.i ? "done" : i === ORD.i ? "now" : ""}"></i>`).join("")}</div>
      <section class="card ex-card">
        <p class="ex-q">${esc(t("gm.ordHow"))}</p>
        <p class="fr-mid center">${esc(lang() === "en" ? q.en : q.tr)}</p>
        <div class="row center"><button class="btn ghost small" data-gm="ord-play">🔊 ${esc(t("ex.listen.btn"))}</button></div>
        <div class="ord-line ${ORD.checked ? (right ? "ok" : "bad") : ""}" aria-label="${esc(t("gm.ordAnswer"))}">${ORD.picked.length ? ORD.picked.map((i, p) => `<button class="tok on" data-gm="ord-un" data-p="${p}" lang="fr" ${ORD.checked ? "disabled" : ""}>${esc(q.toks[i])}</button>`).join("") : `<span class="muted small">${esc(t("gm.ordEmpty"))}</span>`}</div>
        <div class="ord-bank">${bank.map(i => `<button class="tok" data-gm="ord-pick" data-i="${i}" lang="fr">${esc(q.toks[i])}</button>`).join("")}</div>
        <div aria-live="polite">${ORD.checked ? `<div class="fb ${right ? "ok" : "bad"}"><p><b>${right ? "✓ " + esc(t("ex.right")) : "✗ " + esc(t("ex.wrong"))}</b></p>${right ? "" : `<p class="fr-mid" lang="fr">${esc(q.fr)}</p>`}
          <button class="btn" data-gm="ord-next">${esc(t(ORD.i + 1 < ORD.qs.length ? "ex.next" : "ex.finish"))} →</button></div>`
          : `<div class="row wrap center">${ORD.picked.length ? `<button class="btn ghost" data-gm="ord-clear">↺ ${esc(t("gm.ordClear"))}</button>` : ""}<button class="btn" data-gm="ord-check" ${bank.length ? "disabled" : ""}>${esc(t("ex.check"))}</button></div>`}</div>
      </section>`;
  }

  /* ───────── Router & events ───────── */
  function view(parts) {
    const g = st();
    if (parts[0] === "adv") return parts[1] ? viewAdv(parts[1]) : viewAdvList();
    if (LVS.includes(parts[2]) && g.lv !== parts[2]) { g.lv = parts[2]; save(); }
    if (parts[1] === "memory") return viewMem(g.lv);
    if (parts[1] === "order") return viewOrd(g.lv);
    return viewHub();
  }
  function click(el, d) {
    switch (d.gm) {
      case "av-play": { const a = ADV_BY_ID[AV.id], n = curNode(); play(n.say, a.level, !!d.slow); return; }
      case "av-help": AV.help = !AV.help; keepScroll(() => {}); return;
      case "av-pick": {
        const n = curNode(), c = n.choices[+d.i]; stopAudio();
        if (c.ok) { AV.log.push({ me: c.fr }); advGo(c.go); return; }
        AV.mistakes++; AV.wrong[+d.i] = 1; AV.fb = +d.i;
        if (c.go) AV.pending = { go: c.go, me: c.fr };
        keepScroll(() => {}); return;
      }
      case "av-go": { const p = AV.pending; AV.log.push({ me: p.me, bad: true }); advGo(p.go); return; }
      case "av-again": { const id = AV.id; AV = null; stopAudio(); A().render(); window.scrollTo(0, 0); void id; return; }
      case "mem": memPick(+d.i); return;
      case "mem-again": MEM = null; A().render(); return;
      case "ord-pick": if (!ORD.checked) { ORD.picked.push(+d.i); keepScroll(() => {}); } return;
      case "ord-un": ORD.picked.splice(+d.p, 1); keepScroll(() => {}); return;
      case "ord-clear": ORD.picked = []; keepScroll(() => {}); return;
      case "ord-play": A().speak(ORD.qs[ORD.i].fr); return;
      case "ord-check": {
        const q = ORD.qs[ORD.i]; ORD.checked = true;
        if (ORD.picked.map(i => q.toks[i]).join(" ") === q.fr) ORD.ok++;
        A().speak(q.fr); keepScroll(() => {}); return;
      }
      case "ord-next": ORD.i++; ORD.picked = []; ORD.checked = false; A().render(); window.scrollTo(0, 0); return;
      case "ord-again": ORD = null; A().render(); return;
    }
  }
  function onHash() {
    const p = location.hash.replace(/^#\/?/, "").split("/");
    if (p[0] !== "adv" || (AV && p[1] !== AV.id)) { if (AV) stopAudio(); AV = null; }
    if (p[0] !== "games" || p[1] !== "memory") MEM = null;
    if (p[0] !== "games" || p[1] !== "order") ORD = null;
  }
  window.GAMES = {
    view, click, onHash, count: ADVS.length,
    homeCard() {
      if (!ADVS.length) return "";
      const g = st(), lv = g.lv, next = ADVS.find(a => a.level === lv && !g.adv[a.id]) || ADVS.find(a => !g.adv[a.id]) || ADVS[0];
      return `<a class="card av-home" href="#/adv/${next.id}"><span class="av-emo" aria-hidden="true">${next.emoji}</span><span><span class="eyebrow">🧭 ${esc(t("av.today"))}</span><b lang="fr">${esc(next.t.fr)}</b><small class="muted">${esc(helpText(next.goal))}</small></span></a>`;
    }
  };
})();
