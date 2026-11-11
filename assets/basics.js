/* Basics corner (#/basics): alphabet, sounds, numbers, days, the house… Data: window.BASICS (data/basics.js).
   Each topic: learn list with audio (one tap per word, "listen to all" per group, meanings can be hidden to
   test yourself), a 10-question quiz (listen → pick, meaning → pick, French → meaning), and "add to my cards".
   Uses window.APP from app.js. */
(function () {
  "use strict";
  const TOPICS = window.BASICS || [];
  const A = () => window.APP;
  const t = (k, v) => A().t(k, v), esc = s => A().esc(s), lang = () => A().lang();
  const loc = o => o ? (o[lang()] || o.en || o.fr || "") : "";
  const sub = o => o ? (lang() === "fr" ? o.en : o[lang()] || o.en) : ""; // the non-French name of a title
  const mean = it => lang() === "en" ? it.en : lang() === "fr" ? `${it.tr} · ${it.en}` : it.tr;
  const sayOf = it => it.say || it.fr;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const byId = id => TOPICS.find(x => x.id === id);
  const st = () => { const S = A().S; S.basics = S.basics || {}; return S.basics; };
  let HIDE = false, SEEN = {}, Q = null;

  function viewHub() {
    const s = st();
    return `<a class="back" href="#/practice">← ${esc(t("ex.title"))}</a>
      <h1>🧱 ${esc(t("bs.title"))}</h1><p class="muted">${esc(t("bs.sub"))}</p>
      <div class="bs-grid">${TOPICS.map(x => { const r = s[x.id], n = x.groups.reduce((a, g) => a + g.items.length, 0);
        return `<a class="card bs-tile ${r ? "is-done" : ""}" href="#/basics/${x.id}"><span class="ex-ic" aria-hidden="true">${x.emoji}</span><b lang="fr">${esc(x.t.fr)}</b><small class="muted">${esc(sub(x.t))} · ${n}</small>${r ? `<span class="ok-msg small">★ ${r.best}/${r.n}</span>` : ""}</a>`; }).join("")}</div>`;
  }

  function viewTopic(x) {
    const i = TOPICS.indexOf(x), next = TOPICS[i + 1], r = st()[x.id];
    return `<a class="back" href="#/basics">← ${esc(t("bs.title"))}</a>
      <h1>${x.emoji} <span lang="fr">${esc(x.t.fr)}</span></h1>
      <p class="muted">${esc(sub(x.t))}</p>
      <p>${esc(loc(x.intro))}</p>
      <div class="row wrap">
        <a class="btn" href="#/basics/${x.id}/quiz">🎯 ${esc(t("bs.quiz"))}</a>
        ${A().chip("🙈 " + esc(t("bs.hide")), 'data-bs="hide"', HIDE)}
        ${x.kind === "words" ? `<button class="btn small ghost" data-bs="cards" data-id="${x.id}">+ ${esc(t("rd.addCards"))}</button>` : ""}
        ${r ? `<span class="ok-msg small">★ ${esc(t("bs.best", { s: r.best, n: r.n }))}</span>` : ""}
      </div>
      ${x.groups.map((g, gi) => `<section class="card ${HIDE ? "hide-mean" : ""}">
        <h2><span lang="fr">${esc(g.t.fr)}</span> <span class="muted small">· ${esc(sub(g.t))}</span></h2>
        ${g.tip ? `<p class="note bs-tip">💡 ${esc(loc(g.tip))}</p>` : ""}
        ${A().playBar("b:" + x.id + ":" + gi, "", true)}
        <ul class="bs-items ${x.kind === "letters" ? "letters" : ""}">${g.items.map((it, ii) => `<li class="bs-item" data-pl="b:${x.id}:${gi}:${ii}">
          <button class="speak" data-speak="${esc(sayOf(it))}" aria-label="${esc(t("speak"))}">🔊</button>
          <div><div class="bs-fr" lang="fr">${esc(it.fr)}</div>
          <div class="bs-mean ${SEEN[gi + ":" + ii] ? "seen" : ""}" data-bs="seen" data-k="${gi}:${ii}">${esc(mean(it))}</div>
          ${it.ex ? `<button class="bs-ex" data-speak="${esc(it.ex)}" lang="fr">🔈 ${esc(it.ex)}</button>` : ""}</div></li>`).join("")}</ul>
      </section>`).join("")}
      <div class="row wrap"><a class="btn" href="#/basics/${x.id}/quiz">🎯 ${esc(t("bs.quiz"))}</a>${next ? `<a class="btn ghost" href="#/basics/${next.id}">${next.emoji} ${esc(next.t.fr)} →</a>` : ""}</div>`;
  }

  /* ── Quiz: 10 questions. Letters and sounds: listen → pick. Words: a mix of listen → pick, meaning → French, French → meaning. ── */
  function makeQuiz(x) {
    const all = x.groups.flatMap((g, gi) => g.items.map(it => Object.assign({ gi }, it)));
    const uniq = (arr, f) => { const seen = new Set(); return arr.filter(a => { const k = f(a); if (seen.has(k)) return false; seen.add(k); return true; }); };
    const pool = uniq(all, a => a.fr);
    const qs = shuffle(pool).slice(0, Math.min(10, pool.length)).map((it, n) => {
      const kinds = x.kind === "words" ? ["listen", "meaning", "fr"] : ["listen"];
      const kind = kinds[n % kinds.length];
      const same = pool.filter(o => o !== it && o.gi === it.gi), other = pool.filter(o => o !== it && o.gi !== it.gi);
      const key = kind === "fr" ? (o => mean(o)) : (o => o.fr);
      // A wrong option must not also fit the question: same sound when listening, same meaning when the meaning is shown.
      const clash = kind === "listen" ? (o => sayOf(o).toLowerCase() === sayOf(it).toLowerCase()) : kind === "meaning" ? (o => mean(o) === mean(it)) : () => false;
      const wrong = uniq(shuffle(same).concat(shuffle(other)), key).filter(o => key(o) !== key(it) && !clash(o)).slice(0, 3);
      return { kind, it, opts: shuffle([it].concat(wrong)).map(key), answer: key(it) };
    });
    if (window.FX) window.FX.reset();
    return { id: x.id, qs, i: 0, ok: 0, given: null, start: Date.now() };
  }
  function viewQuiz(x) {
    if (!Q || Q.id !== x.id) Q = makeQuiz(x);
    const back = `<a class="back" href="#/basics/${x.id}">← ${esc(x.t.fr)}</a>`;
    if (Q.i >= Q.qs.length) {
      const r = Q.ok / Q.qs.length;
      return back + `<section class="card center ex-end"><p class="big">${r >= 0.8 ? "🌟" : r >= 0.5 ? "🌿" : "🌱"}</p><h2>${Q.ok} / ${Q.qs.length}</h2>
        <p>${esc(t(r >= 0.8 ? "ex.end.great" : r >= 0.5 ? "ex.end.good" : "ex.end.soft"))}</p>
        ${A().recap({ key: "bs" + Q.start, ok: Q.ok, n: Q.qs.length, start: Q.start })}
        <div class="row wrap center"><button class="btn" data-bs="again">↻ ${esc(t("ex.again"))}</button><a class="btn ghost" href="#/basics/${x.id}">${esc(t("bs.back"))}</a><a class="btn ghost" href="#/basics">🧱 ${esc(t("bs.title"))}</a></div></section>`;
    }
    const q = Q.qs[Q.i], g = Q.given;
    const prompt = q.kind === "listen" ? `<p class="bs-prompt">${esc(t("bs.q.listen"))}</p><div class="row center"><button class="btn speak-big" data-speak="${esc(sayOf(q.it))}">🔊 ${esc(t("ex.listen.btn"))}</button><button class="btn ghost speak-big" data-speak="${esc(sayOf(q.it))}" data-slow="1" aria-label="${esc(t("av.slow"))}" title="${esc(t("av.slow"))}">🐢</button></div>`
      : q.kind === "meaning" ? `<p class="bs-prompt">${esc(t("bs.q.meaning"))}</p><p class="bs-big">${esc(mean(q.it))}</p>`
      : `<p class="bs-prompt">${esc(t("bs.q.fr"))}</p><p class="bs-big" lang="fr">${esc(q.it.fr)} <button class="speak" data-speak="${esc(sayOf(q.it))}" aria-label="${esc(t("speak"))}">🔊</button></p>`;
    return back + `<p class="eyebrow">${esc(t("bs.qn", { i: Q.i + 1, n: Q.qs.length }))} · ✓ ${Q.ok}</p>
      <section class="card bs-q">${prompt}
        <div class="opts">${q.opts.map((o, oi) => `<button class="opt ${g != null ? (o === q.answer ? "ok" : oi === g ? "bad" : "") : ""}" data-bs="ans" data-i="${oi}" ${g != null ? "disabled" : ""} ${q.kind !== "fr" ? 'lang="fr"' : ""}>${esc(o)}</button>`).join("")}</div>
        ${g != null ? `<div class="fb sheet ${q.opts[g] === q.answer ? "ok" : "bad"}" role="status">${A().sheetHead(q.opts[g] === q.answer, Q.i)}${q.opts[g] === q.answer ? "" : `<p><b>${esc(t("ex.wrong"))}</b></p>`}
          <p class="fr-mid"><span lang="fr">${esc(q.it.fr)}</span> · ${esc(mean(q.it))} <button class="speak" data-speak="${esc(sayOf(q.it))}" aria-label="${esc(t("speak"))}">🔊</button></p>
          ${q.it.ex ? `<p class="muted small" lang="fr">${esc(q.it.ex)}</p>` : ""}
          <button class="btn sheet-go" data-bs="next" id="bs-next">${esc(t(Q.i + 1 < Q.qs.length ? "fx.continue" : "ex.finish"))}</button></div><div class="sheet-space"></div>` : ""}
      </section>`;
  }

  function view(parts) {
    const x = byId(parts[1]);
    if (!x) return viewHub();
    return parts[2] === "quiz" ? viewQuiz(x) : viewTopic(x);
  }
  function click(el, d) {
    switch (d.bs) {
      case "hide": HIDE = !HIDE; SEEN = {}; A().keepY(); return;
      case "seen": if (HIDE) { SEEN[d.k] = 1; el.classList.add("seen"); } return;
      case "cards": {
        const x = byId(d.id); if (!x || x.kind !== "words") { A().toast(t("bs.noCards")); return; }
        const S = A().S; let n = 0;
        x.groups.forEach(g => g.items.forEach(it => { if (!S.mine.some(c => c.fr === it.fr)) { S.mine.push({ id: "mine:" + it.fr + ":" + Date.now().toString(36) + n, fr: it.fr, tr: it.tr, en: it.en, note: x.t.fr }); n++; } }));
        A().save(); A().toast(t("rd.added", { n })); return;
      }
      case "ans": {
        if (!Q || Q.given != null) return;
        const q = Q.qs[Q.i]; Q.given = +d.i;
        const ok = q.opts[Q.given] === q.answer; if (ok) Q.ok++;
        if (window.FX) window.FX[ok ? "good" : "soft"]({ from: `[data-bs="ans"][data-i="${Q.given}"]` });
        const S = A().S, day = A().ymd(), p = S.prac[day] || { n: 0, ok: 0 }; p.n++; if (ok) p.ok++; S.prac[day] = p;
        A().save(); A().keepY();
        if (window.FX) window.FX.toNext(".bs-q .opt.ok");
        if (q.kind !== "listen") A().speak(sayOf(q.it));
        const nx = document.getElementById("bs-next"); if (nx) nx.focus({ preventScroll: true });
        return;
      }
      case "next": {
        Q.i++; Q.given = null;
        if (Q.i >= Q.qs.length) {
          const s = st(), prev = s[Q.id];
          s[Q.id] = { best: Math.max(Q.ok, prev ? prev.best : 0), n: Q.qs.length, d: A().ymd() };
          A().logMinutes(A().sessionMinutes(Q.start)); A().practised(); A().save();
          if (window.FX) { const great = Q.ok / Q.qs.length >= 0.8; setTimeout(() => window.FX.done(great), 120); }
        }
        A().render(); window.scrollTo(0, 0);
        const q = Q.qs[Q.i]; if (q && q.kind === "listen") A().speak(sayOf(q.it));
        return;
      }
      case "again": Q = null; A().render(); return;
    }
  }
  // Lines for "listen to all" on a group (key "b:topic:group").
  function lines(key) {
    const m = /^b:([\w-]+):(\d+)$/.exec(key || ""); if (!m) return null;
    const x = byId(m[1]), g = x && x.groups[+m[2]]; if (!g) return null;
    return { lines: g.items.map(it => ["F", sayOf(it)]), idx: null };
  }
  function onHash() {
    const p = A().route().parts;
    if (p[0] !== "basics" || p[2] !== "quiz") Q = null;
    if (p[0] !== "basics") { HIDE = false; SEEN = {}; }
  }
  window.BASICS_UI = { view, click, lines, onHash, count: TOPICS.length, done: () => Object.keys(st()).length };
})();
