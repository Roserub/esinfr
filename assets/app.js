/* Esin FR — single-page app, no dependencies. Progress lives in localStorage. */
(function () {
  "use strict";

  const KEY = "esinfr.v1";
  const RES = window.RESOURCES, PATH = window.PATH, DECKS = window.DECKS, GUIDE = window.GUIDE, LEVELS = window.LEVELS;
  const VERBS = window.VERBS, NOUNS = window.NOUNS, GENDER_RULES = window.GENDER_RULES, PAIRS = window.PAIRS, MISTAKES = window.MISTAKES || [];
  const RES_BY_ID = Object.fromEntries(RES.map(r => [r.id, r]));
  const INTERVALS = [0, 1, 3, 7, 16, 35, 90]; // days per Leitner box (1..6)
  const TYPES = ["course", "video", "podcast", "app", "reading", "news", "tv", "tool", "community", "official", "exam", "mooc", "book"];
  const TRACKS = ["core", "life", "health", "sport", "academic", "exam", "turkish", "culture"];
  const TRACK_ICONS = { core: "📘", life: "🏠", health: "🩺", sport: "🤾", academic: "🎓", exam: "📝", turkish: "🇹🇷", culture: "🎬" };
  const SKILLS = ["l", "r", "s", "w", "g", "v", "p"];

  /* ───────── State ───────── */
  const DEFAULT = () => ({ v: 1, lang: null, level: null, steps: {}, res: {}, fav: {}, cards: {}, days: {}, mine: [], newPerSession: 10, lib: {}, welcomed: false,
    fw: {}, gram: {}, pace: { hpw: 5, dpw: 5 }, mins: {}, prac: {}, err: [], plan: {}, remind: "19:00", read: {}, talk: {} });
  let S = load();
  function fill(obj) {
    const s = Object.assign(DEFAULT(), obj);
    s.pace = Object.assign({ hpw: 5, dpw: 5 }, s.pace);
    if (!Array.isArray(s.err)) s.err = [];
    const day = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    const keep = new Set([0, 1, 2, 3].map(i => { const d = new Date(); d.setDate(d.getDate() - 7 * i); return day(weekStart(d)); }));
    Object.keys(s.plan).forEach(k => { if (!keep.has(k)) delete s.plan[k]; });
    return s;
  }
  function load() {
    try { return fill(JSON.parse(localStorage.getItem(KEY) || "{}")); }
    catch (e) { return DEFAULT(); }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private mode: keep in memory */ }
  }

  /* ───────── Helpers ───────── */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const lang = () => S.lang || "tr";
  function t(key, vars) {
    let s = (I18N[lang()] && I18N[lang()][key]) || I18N.en[key] || key;
    if (vars) for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  }
  const loc = o => (o ? (o[lang()] || o.en || "") : "");
  const desc = r => (lang() === "tr" ? r.d.tr : r.d.en);
  const ymd = d => { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
  const levelIdx = lv => LEVELS.indexOf(lv);
  const curLevel = () => S.level || "A0";

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.classList.add("show");
    clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove("show"), 1800);
  }
  function practised() { S.days[ymd()] = 1; save(); }

  /* Text-to-speech with a French voice (works offline on iPhone, iPad and Mac). */
  let frVoice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices().filter(v => /^fr(-|_)/i.test(v.lang));
    frVoice = vs.find(v => /fr.FR/i.test(v.lang) && /(Amélie|Audrey|Thomas|Google|Marie|Premium|Enhanced)/i.test(v.name)) || vs.find(v => /fr.FR/i.test(v.lang)) || vs[0] || null;
  }
  if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, slow) {
    if (!text || !("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/\(.*?\)|\//g, " "));
    u.lang = "fr-FR"; u.rate = slow ? 0.6 : 0.9; if (frVoice) u.voice = frVoice;
    speechSynthesis.speak(u);
  }
  const speakBtn = text => `<button class="speak" data-speak="${esc(text)}" aria-label="${esc(t("speak"))}" title="${esc(t("speak"))}">🔊</button>`;

  /* ───────── Cards (Leitner spaced repetition) ───────── */
  const allDecks = () => DECKS.concat(S.mine.length ? [{ id: "mine", level: "", name: { en: I18N.en["cards.mine"], tr: I18N.tr["cards.mine"], fr: I18N.fr["cards.mine"] }, cards: S.mine }] : []);
  const deckById = id => allDecks().find(d => d.id === id) || (id === "mine" ? { id: "mine", name: {}, cards: S.mine } : null);
  function deckStats(d) {
    const now = today(); let due = 0, fresh = 0, learned = 0;
    d.cards.forEach(c => {
      const st = S.cards[c.id];
      if (!st) fresh++; else { if (st.due <= now) due++; if (st.b >= 3) learned++; }
    });
    return { due, fresh, learned, total: d.cards.length };
  }
  function grade(card, g) {
    const st = S.cards[card.id] || { b: 0, due: today() };
    if (g === "again") st.b = 1;
    else if (g === "good") st.b = Math.min(st.b + 1, 6);
    else st.b = Math.min(st.b + 2, 6);
    st.due = today() + (g === "again" ? 0 : INTERVALS[st.b]);
    S.cards[card.id] = st; practised(); save();
  }
  const DUE_CAP = 30; // a calm session: older cards first, the rest simply waits for tomorrow
  const totalDue = () => allDecks().reduce((n, d) => n + deckStats(d).due, 0);

  /* ───────── Path helpers ───────── */
  const levelSteps = lv => (PATH.find(l => l.id === lv) || PATH[0]).steps;
  function levelProgress(lv) {
    const st = levelSteps(lv); const done = st.filter(s => S.steps[s.id]).length;
    return { done, total: st.length, pct: Math.round(done / st.length * 100) };
  }
  function nextStep() {
    for (let i = Math.max(0, levelIdx(curLevel())); i < PATH.length; i++) {
      const s = PATH[i].steps.find(x => !S.steps[x.id]);
      if (s) return { level: PATH[i], step: s };
    }
    return null;
  }
  const resForLevel = (lv, filter) => RES.filter(r => (r.levels.includes(lv) || (lv === "A0" && r.levels.includes("A1"))) && (!filter || filter(r)));
  function dailyPick(arr, n, salt) {
    if (!arr.length) return [];
    const out = [], seed = today() + (salt || 0);
    for (let i = 0; i < Math.min(n, arr.length); i++) out.push(arr[(seed * 7 + i * 13) % arr.length]);
    return Array.from(new Set(out));
  }

  /* ───────── Small UI pieces ───────── */
  function resCard(r, compact) {
    const done = !!S.res[r.id], fav = !!S.fav[r.id];
    const lv = r.levels.length > 1 ? r.levels[0] + "–" + r.levels[r.levels.length - 1] : r.levels[0];
    return `<article class="res ${done ? "is-done" : ""}">
      <div class="res-top">
        <a class="res-name" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)} <span class="ext">↗</span></a>
        <button class="icon-btn fav ${fav ? "on" : ""}" data-fav="${r.id}" aria-pressed="${fav}" title="${esc(t("lib.fav"))}" aria-label="${esc(t("lib.fav"))}">${fav ? "♥" : "♡"}</button>
      </div>
      <div class="badges">
        <span class="badge lv">${lv}</span>
        <span class="badge">${esc(t("type." + r.type))}</span>
        <span class="badge ${r.cost}">${esc(t("cost." + r.cost))}</span>
        ${r.star ? `<span class="badge star">★ ${esc(t("lib.top"))}</span>` : ""}
        ${r.help.includes("tr") ? '<span class="badge tr">TR</span>' : ""}${r.help.includes("en") ? '<span class="badge en">EN</span>' : ""}
      </div>
      ${compact ? "" : `<p class="res-desc">${esc(desc(r))}</p>`}
      ${!compact && r.note ? `<p class="res-note">💡 ${esc(loc(r.note))}</p>` : ""}
      ${!compact && r.price ? `<p class="res-note muted">💶 ${esc(r.price)}</p>` : ""}
      <div class="res-actions">
        <a class="btn small" href="${esc(r.url)}" target="_blank" rel="noopener" data-open="${r.id}">${esc(t("lib.open"))}</a>
        <button class="btn small ghost ${done ? "on" : ""}" data-done="${r.id}" aria-pressed="${done}">${done ? "✓ " : ""}${esc(t("lib.done"))}</button>
      </div>
    </article>`;
  }
  const chip = (label, attrs, on) => `<button class="chip ${on ? "on" : ""}" ${attrs} aria-pressed="${!!on}">${label}</button>`;
  const progressBar = (pct, label) => `<div class="bar" role="progressbar" aria-label="${esc(label || t("a11y.progress"))}" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;

  /* ───────── Views ───────── */
  function viewHome() {
    const h = new Date().getHours();
    const hello = h < 12 ? t("hello.morning") : h < 18 ? t("hello.day") : t("hello.evening");
    const ns = nextStep();
    const due = totalDue();
    const phrasePool = ["survival", "daily", "calm"].flatMap(id => (DECKS.find(d => d.id === id) || { cards: [] }).cards);
    const phrase = phrasePool[today() % phrasePool.length];
    const monthDays = Object.keys(S.days).filter(d => d.startsWith(ymd().slice(0, 7))).length;

    // This week (Mon → Sun)
    const now = new Date(); const dow = (now.getDay() + 6) % 7;
    const week = [];
    for (let i = 0; i < 7; i++) { const d = new Date(now); d.setDate(now.getDate() - dow + i); week.push(d); }
    const dayNames = { tr: ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"], en: ["M", "T", "W", "T", "F", "S", "S"], fr: ["L", "M", "M", "J", "V", "S", "D"] }[lang()];
    const practisedToday = !!S.days[ymd()];

    return `
    <section class="hero">
      <h1>${esc(hello)} Esin <span aria-hidden="true">${h < 18 ? "☀︎" : "☾"}</span></h1>
      <p class="muted">${esc(t("home.sub"))}</p>
    </section>

    ${!S.welcomed ? `<section class="card welcome">
      <p>${esc(t("home.welcome"))}</p>
      <div class="row wrap"><a class="btn" href="#/guide/start">🧭 ${esc(t("home.startHere"))}</a><a class="btn ghost" href="#/placement">${esc(t("home.start"))}</a><button class="btn ghost" data-action="dismiss-welcome">OK</button></div>
    </section>` : ""}

    ${todayPlanCard()}

    <section class="card">
      <h2>${esc(t("home.feel"))}</h2>
      <div class="feel" role="group">
        <button class="feel-btn" data-feel="tired"><span>😴</span>${esc(t("feel.tired"))}</button>
        <button class="feel-btn" data-feel="ok"><span>🙂</span>${esc(t("feel.ok"))}</button>
        <button class="feel-btn" data-feel="great"><span>⚡</span>${esc(t("feel.great"))}</button>
      </div>
      <div id="feel-out"></div>
    </section>

    ${ns ? `<section class="card next">
      <p class="eyebrow">${esc(t("home.next"))} · ${ns.level.id}</p>
      <h2>${esc(loc(ns.step.t))}</h2>
      <p>${esc(loc(ns.step.do))}</p>
      ${progressBar(levelProgress(ns.level.id).pct)}
      <a class="btn" href="#/path/${ns.level.id}?step=${ns.step.id}">${esc(t("home.continue"))} →</a>
    </section>` : ""}

    <section class="grid2">
      <div class="card">
        <p class="eyebrow">${esc(t("home.cards"))}</p>
        ${due ? `<p class="big">${due}</p>${due > DUE_CAP ? `<p class="muted small">${esc(t("cards.capped", { n: DUE_CAP }))}</p>` : ""}<a class="btn" href="#/cards/due">${esc(t("home.review"))}</a>` : `<p class="muted">${esc(t("home.cardsNone"))}</p><a class="btn ghost" href="#/cards">${esc(t("nav.cards"))}</a>`}
      </div>
      <div class="card phrase">
        <p class="eyebrow">${esc(t("home.phrase"))}</p>
        <p class="fr-big">${esc(phrase.fr)} ${speakBtn(phrase.fr)}</p>
        <p class="muted">${esc(lang() === "en" ? phrase.en : phrase.tr)}${lang() === "fr" ? " · " + esc(phrase.en) : ""}</p>
        ${phrase.note ? `<p class="note">${esc(phrase.note)}</p>` : ""}
      </div>
    </section>

    <section class="card">
      <p class="eyebrow">${esc(t("home.week"))}</p>
      <div class="week">${week.map((d, i) => `<div class="day ${S.days[ymd(d)] ? "on" : ""} ${ymd(d) === ymd() ? "today" : ""}"><span>${dayNames[i]}</span><i></i></div>`).join("")}</div>
      <p class="muted small">${esc(t("home.monthDays", { n: monthDays }))} · ${esc(t("plan.thisWeek", { m: fmtMin(weekMinutes()) }))}</p>
      ${practisedToday ? `<p class="ok-msg">${esc(t("home.practisedDone"))}</p>` : `<button class="btn ghost" data-action="practised">${esc(t("home.practised"))}</button>`}
      <div class="row wrap log-time"><span class="muted small">${esc(t("home.logTime"))}</span>${[10, 20, 30, 60].map(m => `<button class="chip" data-addmin="${m}">+${m} min</button>`).join("")}</div>
    </section>`;
  }

  function feelSuggestions(kind) {
    const lv = curLevel();
    let items = [];
    if (kind === "tired") {
      items = dailyPick(resForLevel(lv, r => ["podcast", "video", "tv"].includes(r.type) && (r.tracks.includes("culture") || r.skills.includes("l"))), 3, 1);
      return `<p>${esc(t("feel.tired.msg"))}</p>${items.map(r => resCard(r, true)).join("")}
        <a class="btn ghost" href="#/cards/calm">💛 ${esc(loc(DECKS.find(d => d.id === "calm").name))}</a>`;
    }
    if (kind === "ok") {
      items = dailyPick(resForLevel(lv, r => ["podcast", "video", "course"].includes(r.type)), 2, 2);
      return `<p>${esc(t("feel.ok.msg"))}</p>${items.map(r => resCard(r, true)).join("")}
        ${totalDue() ? `<a class="btn ghost" href="#/cards/due">${esc(t("home.review"))} (${totalDue()})</a>` : ""}`;
    }
    const ns = nextStep();
    items = dailyPick(resForLevel(lv, r => r.skills.includes("s") || r.skills.includes("w")), 1, 3);
    return `<p>${esc(t("feel.great.msg"))}</p>
      ${ns ? `<a class="btn" href="#/path/${ns.level.id}?step=${ns.step.id}">${esc(loc(ns.step.t))} →</a>` : ""}
      ${totalDue() ? `<a class="btn ghost" href="#/cards/due">${esc(t("home.review"))} (${totalDue()})</a>` : ""}
      ${items.map(r => resCard(r, true)).join("")}`;
  }

  function viewPath(lvId, openStep) {
    const lv = PATH.find(l => l.id === lvId) || PATH.find(l => l.id === curLevel()) || PATH[0];
    const tabs = PATH.map(l => {
      const p = levelProgress(l.id);
      return `<a class="lv-tab ${l.id === lv.id ? "on" : ""} ${l.id === curLevel() ? "cur" : ""}" href="#/path/${l.id}">
        <b>${l.id}</b><span>${p.done}/${p.total}</span><i style="--p:${p.pct}%"></i></a>`;
    }).join("");
    const p = levelProgress(lv.id);
    const steps = lv.steps.map((s, i) => {
      const done = !!S.steps[s.id];
      const deck = s.deck && DECKS.find(d => d.id === s.deck);
      const guide = s.guide && GUIDE.find(g => g.id === s.guide);
      return `<details class="step ${done ? "is-done" : ""}" id="step-${s.id}" ${openStep === s.id ? "open" : ""}>
        <summary><span class="num">${done ? "✓" : i + 1}</span><span class="st-title">${esc(loc(s.t))}</span>${s.kind ? `<span class="kind">${{ speak: "🗣️", write: "✍️", life: "🥖", exam: "📝" }[s.kind] || ""}</span>` : ""}</summary>
        <div class="step-body">
          <p>${esc(loc(s.do))}</p>
          <div class="step-links">
            ${guide ? `<a class="btn small ghost" href="#/guide/${guide.id}">${guide.icon} ${esc(t("path.guide"))}: ${esc(loc(guide.t))}</a>` : ""}
            ${deck ? `<a class="btn small ghost" href="#/cards/${deck.id}">🃏 ${esc(t("path.deck"))}: ${esc(loc(deck.name))} (${deck.cards.length})</a>` : ""}
            ${s.practice ? `<a class="btn small ghost" href="#/practice/${s.practice}">${EX_ICON[s.practice]} ${esc(t("path.practice"))}: ${esc(t("ex." + s.practice))}</a>` : ""}
          </div>
          ${s.res.map(id => RES_BY_ID[id]).filter(Boolean).map(r => resCard(r, false)).join("")}
          <button class="btn ${done ? "ghost" : ""}" data-step="${s.id}">${done ? esc(t("path.undo")) : "✓ " + esc(t("path.markDone"))}</button>
        </div>
      </details>`;
    }).join("");
    return `
    <h1>${esc(t("path.title"))}</h1>
    <nav class="lv-tabs" aria-label="Levels">${tabs}</nav>
    <section class="card level-head">
      <div class="row between"><h2>${lv.id} · ${esc(loc(lv.name))}</h2><span class="muted small">${esc(t("path.hours", { h: lv.hours }))}${lv.cum ? " · " + esc(t("path.cum", { c: lv.cum })) : ""}</span></div>
      <p><b>${esc(t("path.can"))}:</b> ${esc(loc(lv.can))}</p>
      ${progressBar(p.pct)}
      ${lv.id === curLevel() ? `<p class="muted small">✓ ${esc(t("path.current"))}</p>` : `<button class="btn small ghost" data-setlevel="${lv.id}">${esc(t("path.setLevel"))}</button>`}
    </section>
    ${p.done === p.total ? `<p class="ok-msg">${esc(t("home.allDone"))}</p>` : ""}
    <div class="steps">${steps}</div>
    ${byLevel(READINGS, lv.id).length + byLevel(DIALOGUES, lv.id).length ? `<section class="card"><h2>📖 ${esc(t("path.readTalk"))}</h2><div class="read-list">${byLevel(READINGS, lv.id).map(readTile).join("")}${byLevel(DIALOGUES, lv.id).map(talkTile).join("")}</div></section>` : ""}
    ${grammarChecklist(lv.id)}`;
  }
  function grammarChecklist(lv) {
    const g = ((lang() === "tr" && window.GRAMMAR_ORDER_TR) || window.GRAMMAR_ORDER || {})[lv]; if (!g) return "";
    const items = g.split(" · "), done = items.filter((x, i) => S.gram[lv + ":" + i]).length;
    return `<details class="card gram">
      <summary><b>🧩 ${esc(t("path.grammar", { lv }))}</b> <span class="muted small">${done}/${items.length}</span></summary>
      <p class="muted small">${esc(t("path.grammarSub"))}</p>
      ${items.map((x, i) => `<div class="check"><input type="checkbox" id="gr-${lv}-${i}" data-gram="${lv}:${i}" ${S.gram[lv + ":" + i] ? "checked" : ""}><label for="gr-${lv}-${i}">${x}</label></div>`).join("")}
      <div class="row wrap"><a class="btn small ghost" href="#/guide/grammar">🧩 ${esc(t("path.grammarMap"))}</a><a class="btn small ghost" href="#/practice/conj">🔁 ${esc(t("ex.conj"))}</a><a class="btn small ghost" href="#/practice/mistakes">✅ ${esc(t("ex.mistakes"))}</a></div>
    </details>`;
  }

  const LIB0 = () => ({ q: "", level: "", type: "", track: "", skill: "", cost: "", star: false, tr: false, favs: false });
  let LIB = Object.assign(LIB0(), S.lib || {});
  function libFiltered() {
    const q = LIB.q.trim().toLowerCase();
    return RES.filter(r =>
      (!LIB.level || r.levels.includes(LIB.level)) &&
      (!LIB.type || r.type === LIB.type) &&
      (!LIB.track || r.tracks.includes(LIB.track)) &&
      (!LIB.skill || r.skills.includes(LIB.skill)) &&
      (!LIB.cost || r.cost === LIB.cost) &&
      (!LIB.star || r.star) &&
      (!LIB.tr || r.help.includes("tr")) &&
      (!LIB.favs || S.fav[r.id]) &&
      (!q || noAcc((r.name + " " + r.d.en + " " + r.d.tr + " " + t("type." + r.type) + " " + r.tracks.map(k => t("track." + k)).join(" ") + (r.note ? " " + loc(r.note) : "")).toLowerCase()).includes(noAcc(q)))
    );
  }
  function viewLibrary() {
    const counts = Object.fromEntries(TRACKS.map(k => [k, RES.filter(r => r.tracks.includes(k)).length]));
    return `
    <h1>${esc(t("lib.title"))}</h1>
    <div class="tracks">${TRACKS.map(k => `<button class="track ${LIB.track === k ? "on" : ""}" data-track="${k}"><span>${TRACK_ICONS[k]}</span><b>${esc(t("track." + k))}</b><small>${counts[k]}</small></button>`).join("")}</div>
    <div class="filters card">
      <input type="search" id="lib-q" placeholder="${esc(t("lib.search"))}" value="${esc(LIB.q)}" autocomplete="off">
      <div class="frow"><span class="flabel">${esc(t("lib.level"))}</span>${chip(esc(t("lib.all")), 'data-f="level" data-v=""', !LIB.level)}${LEVELS.map(l => chip(l, `data-f="level" data-v="${l}"`, LIB.level === l)).join("")}</div>
      <div class="frow"><span class="flabel">${esc(t("lib.type"))}</span>${chip(esc(t("lib.all")), 'data-f="type" data-v=""', !LIB.type)}${TYPES.map(k => chip(esc(t("type." + k)), `data-f="type" data-v="${k}"`, LIB.type === k)).join("")}</div>
      <div class="frow"><span class="flabel">${esc(t("lib.skill"))}</span>${chip(esc(t("lib.all")), 'data-f="skill" data-v=""', !LIB.skill)}${SKILLS.map(k => chip(esc(t("skill." + k)), `data-f="skill" data-v="${k}"`, LIB.skill === k)).join("")}</div>
      <div class="frow"><span class="flabel">${esc(t("lib.cost"))}</span>${chip(esc(t("lib.all")), 'data-f="cost" data-v=""', !LIB.cost)}${["free", "freemium", "lib", "paid"].map(k => chip(esc(t("cost." + k)), `data-f="cost" data-v="${k}"`, LIB.cost === k)).join("")}</div>
      <div class="frow">
        ${chip("★ " + esc(t("lib.star")), 'data-toggle="star"', LIB.star)}
        ${chip("🇹🇷 " + esc(t("lib.trHelp")), 'data-toggle="tr"', LIB.tr)}
        ${chip("♥ " + esc(t("lib.favs")), 'data-toggle="favs"', LIB.favs)}
        <button class="chip reset" data-action="lib-reset">✕ ${esc(t("lib.reset"))}</button>
      </div>
    </div>
    <p class="muted small" id="lib-count"></p>
    <div class="res-list" id="lib-list"></div>`;
  }
  function renderLibList() {
    const list = libFiltered();
    $("#lib-count").textContent = t("lib.count", { n: list.length });
    $("#lib-list").innerHTML = list.length ? list.map(r => resCard(r)).join("") : `<p class="muted">${esc(t("lib.empty"))}</p>`;
    S.lib = LIB; save();
  }

  function viewCards() {
    const decks = allDecks();
    return `
    <h1>${esc(t("cards.title"))}</h1>
    <p class="muted">${esc(t("cards.sub"))}</p>
    ${totalDue() ? `<a class="btn" href="#/cards/due">${esc(t("home.review"))} · ${totalDue()}</a>` : ""}
    <div class="decks">${decks.map(d => {
      const st = deckStats(d);
      return `<article class="deck card">
        <div class="row between"><h2>${esc(loc(d.name))}</h2>${d.level ? `<span class="badge lv">${d.level}</span>` : ""}</div>
        <p class="muted small">${esc(t("cards.learned", { n: st.learned, t: st.total }))} · ${esc(t("cards.due", { n: st.due }))} · ${esc(t("cards.new", { n: st.fresh }))}</p>
        ${progressBar(st.total ? Math.round(st.learned / st.total * 100) : 0)}
        <div class="row"><a class="btn small" href="#/cards/${d.id}">${esc(t("cards.study"))}</a><a class="btn small ghost" href="#/cards/${d.id}/list">${esc(t("cards.browse"))}</a></div>
      </article>`;
    }).join("")}</div>
    <section class="card">
      <h2>✍️ ${esc(t("cards.mine"))}</h2>
      <form id="add-word" class="add-word">
        <input name="fr" placeholder="${esc(t("cards.fr"))}" required autocomplete="off" autocapitalize="none">
        <input name="tr" placeholder="${esc(t("cards.trans"))}" autocomplete="off">
        <button class="btn" type="submit">+ ${esc(t("cards.add"))}</button>
      </form>
      ${S.mine.length ? `<a class="btn small ghost" href="#/cards/mine/list">${esc(t("cards.browse"))} (${S.mine.length})</a>` : `<p class="muted small">${esc(t("cards.empty"))}</p>`}
      <label class="muted small setting">${esc(t("cards.newLimit"))}
        <select id="new-limit">${[5, 10, 15, 20, 30].map(n => `<option ${S.newPerSession === n ? "selected" : ""}>${n}</option>`).join("")}</select></label>
    </section>`;
  }

  let SESSION = null;
  function startSession(deckId) {
    const now = today();
    let cards;
    if (deckId === "due") cards = allDecks().flatMap(d => d.cards.filter(c => S.cards[c.id] && S.cards[c.id].due <= now))
      .sort((a, b) => S.cards[a.id].due - S.cards[b.id].due).slice(0, DUE_CAP);
    else {
      const d = deckById(deckId); if (!d) return null;
      const due = d.cards.filter(c => S.cards[c.id] && S.cards[c.id].due <= now);
      const fresh = d.cards.filter(c => !S.cards[c.id]).slice(0, S.newPerSession);
      cards = due.concat(fresh);
    }
    SESSION = { deckId, queue: cards.slice(), done: 0, total: cards.length, flipped: false, start: Date.now() };
    return SESSION;
  }
  function viewStudy(deckId) {
    if (!SESSION || SESSION.deckId !== deckId) startSession(deckId);
    if (!SESSION) return `<p>?</p>`;
    const d = deckId === "due" ? { name: { en: t("home.review"), tr: t("home.review"), fr: t("home.review") } } : deckById(deckId);
    if (!SESSION.queue.length) {
      const fin = SESSION.total > 0;
      if (fin) logMinutes(sessionMinutes(SESSION.start));
      SESSION = null;
      return `<a class="back" href="#/cards">← ${esc(t("cards.back"))}</a>
        <section class="card center"><p class="big">🌿</p><p>${esc(fin ? t("cards.finished") : t("home.cardsNone"))}</p>
        <a class="btn" href="#/cards">${esc(t("cards.back"))}</a></section>`;
    }
    const c = SESSION.queue[0];
    const trans = lang() === "en" ? [c.en, c.tr] : [c.tr, c.en];
    return `<a class="back" href="#/cards">← ${esc(t("cards.back"))}</a>
      <h1 class="h-study">${esc(loc(d.name))} · ${SESSION.done}/${SESSION.total}</h1>
      ${progressBar(SESSION.total ? Math.round(SESSION.done / SESSION.total * 100) : 0)}
      <section class="flash ${SESSION.flipped ? "flipped" : ""}">
        <p class="fr-big">${esc(c.fr)}</p>
        ${speakBtn(c.fr)}
        ${SESSION.flipped ? `<div class="answer"><p class="tr-big">${esc(trans[0] || "")}</p>${trans[1] ? `<p class="muted">${esc(trans[1])}</p>` : ""}${c.note ? `<p class="note">${esc(c.note)}</p>` : ""}</div>` : ""}
      </section>
      ${SESSION.flipped ? `<div class="grade">
          <button class="btn again" data-grade="again">${esc(t("cards.again"))}</button>
          <button class="btn good" data-grade="good">${esc(t("cards.good"))}</button>
          <button class="btn easy" data-grade="easy">${esc(t("cards.easy"))}</button>
        </div>` : `<button class="btn wide" data-action="flip">${esc(t("cards.flip"))}</button>`}`;
  }
  function viewDeckList(deckId) {
    const d = deckById(deckId); if (!d) return "";
    return `<a class="back" href="#/cards">← ${esc(t("cards.back"))}</a>
      <h1>${esc(loc(d.name) || t("cards.mine"))}</h1>
      <a class="btn" href="#/cards/${d.id}">${esc(t("cards.study"))}</a>
      <ul class="word-list">${d.cards.map((c, i) => {
        const st = S.cards[c.id];
        return `<li><div class="w-fr">${esc(c.fr)} ${speakBtn(c.fr)}</div>
          <div class="w-tr">${esc(c.tr)}${c.en ? ` <span class="muted">· ${esc(c.en)}</span>` : ""}</div>
          ${c.note ? `<div class="note">${esc(c.note)}</div>` : ""}
          ${st ? `<span class="box b${st.b}" title="box ${st.b}">${"●".repeat(Math.min(st.b, 5))}</span>` : ""}
          ${deckId === "mine" ? `<button class="icon-btn" data-delword="${i}" aria-label="${esc(t("cards.delete"))}">🗑</button>` : ""}
        </li>`;
      }).join("")}</ul>`;
  }

  function viewMore() {
    return `<h1>${esc(t("more.title"))}</h1>
    <section class="card">
      <h2>${esc(t("more.guide"))}</h2>
      <div class="guide-list">${GUIDE.map(g => `<a class="guide-item" href="#/guide/${g.id}"><span>${g.icon}</span>${esc(loc(g.t))}</a>`).join("")}</div>
    </section>
    <section class="grid2">
      <a class="card tile" href="#/plan"><span>🗓️</span>${esc(t("plan.title"))}</a>
      <a class="card tile" href="#/search"><span>🔎</span>${esc(t("search.title"))}</a>
      <a class="card tile" href="#/placement"><span>🧭</span>${esc(t("more.placement"))}</a>
      <a class="card tile" href="#/progress"><span>📈</span>${esc(t("more.progress"))}</a>
    </section>
    <section class="card">
      <h2>${esc(t("more.tools"))}</h2>
      <div class="tool-row">${["wordref", "reverso", "glosbe", "conjugueur", "deepl", "forvo", "youglish", "languagetool", "gtranslate", "tatoeba"].map(id => RES_BY_ID[id]).filter(Boolean)
        .map(r => `<a class="tool" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a>`).join("")}</div>
    </section>
    <section class="card"><h2>📲 ${esc(t("more.install"))}</h2><p>${esc(t("install.text"))}</p></section>
    <section class="card"><h2>${esc(t("more.about"))}</h2><p>${esc(t("about.text"))}</p>
      <p class="muted small">${esc(t("about.counts", { r: RES.length, c: DECKS.reduce((n, d) => n + d.cards.length, 0), s: PATH.reduce((n, l) => n + l.steps.length, 0), g: GUIDE.length }))}</p></section>`;
  }

  function viewGuide(id) {
    const g = GUIDE.find(x => x.id === id) || GUIDE[0];
    const body = (lang() === "tr" ? g.tr : g.en).replace(/<(\/?)h3>/g, "<$1h2>");
    const i = GUIDE.indexOf(g), prev = GUIDE[i - 1], next = GUIDE[i + 1];
    const res = (g.res || []).map(x => RES_BY_ID[x]).filter(Boolean);
    return `<a class="back" href="#/more">← ${esc(t("guide.back"))}</a>
      <article class="card guide"><h1>${g.icon} ${esc(loc(g.t))}</h1>
        ${lang() === "fr" ? `<p class="muted small">${esc(t("guide.inEnglish"))}</p>` : ""}
        ${body}</article>
      ${WIDGETS[g.widget] ? WIDGETS[g.widget]() : ""}
      ${res.length ? `<h2>${esc(t("guide.res"))}</h2><div class="res-list">${res.map(r => resCard(r, false)).join("")}</div>` : ""}
      <nav class="row between guide-nav">${prev ? `<a class="btn ghost" href="#/guide/${prev.id}">← ${prev.icon} ${esc(loc(prev.t))}</a>` : "<span></span>"}${next ? `<a class="btn ghost" href="#/guide/${next.id}">${next.icon} ${esc(loc(next.t))} →</a>` : ""}</nav>`;
  }

  function viewPlacement() {
    return `<a class="back" href="#/more">← ${esc(t("more.title"))}</a>
      <h1>${esc(t("place.title"))}</h1><p class="muted">${esc(t("place.sub"))}</p>
      <form class="card placement" id="placement">
        ${PLACEMENT.map((p, i) => `<label class="check"><input type="checkbox" name="p${i}" data-lv="${p.lv}"><span>${esc(loc(p))}</span></label>`).join("")}
      </form>
      <section class="card center" id="place-out"></section>`;
  }
  function placementResult() {
    const checked = $$("#placement input:checked").map(i => i.dataset.lv);
    let result = "A0";
    for (const lv of ["A1", "A2", "B1", "B2", "C1", "C2"]) {
      const need = PLACEMENT.filter(p => p.lv === lv).length;
      const have = checked.filter(x => x === lv).length;
      if (have === need) result = LEVELS[Math.min(levelIdx(lv) + 1, LEVELS.length - 1)]; else break;
    }
    if (result === "A1" && !checked.length) result = "A0";
    $("#place-out").innerHTML = `<p class="big">${result}</p><p>${esc(t("place.result", { lv: result + " · " + loc(PATH.find(l => l.id === result).name) }))}</p>
      <button class="btn" data-setlevel="${result}" data-go="1">${esc(t("place.go"))}</button>`;
  }

  function viewProgress() {
    const stepsDone = Object.keys(S.steps).length, stepsTotal = PATH.reduce((n, l) => n + l.steps.length, 0);
    const learned = Object.values(S.cards).filter(c => c.b >= 3).length;
    const cardsTotal = allDecks().reduce((n, d) => n + d.cards.length, 0);
    const pr = Object.values(S.prac).reduce((a, p) => ({ n: a.n + p.n, ok: a.ok + p.ok }), { n: 0, ok: 0 });
    // 12-week calendar (columns = weeks)
    const cells = []; const end = new Date(); const dow = (end.getDay() + 6) % 7;
    const start = new Date(end); start.setDate(end.getDate() - dow - 7 * 11);
    for (let i = 0; i < 84; i++) { const d = new Date(start); d.setDate(start.getDate() + i); cells.push(d); }
    return `<a class="back" href="#/more">← ${esc(t("more.title"))}</a>
      <h1>${esc(t("prog.title"))}</h1>
      <section class="stats">
        <div class="stat card"><b>${stepsDone}</b><span>${esc(t("prog.steps"))} / ${stepsTotal}</span></div>
        <div class="stat card"><b>${Object.keys(S.res).length}</b><span>${esc(t("prog.res"))}</span></div>
        <div class="stat card"><b>${learned}</b><span>${esc(t("prog.cards"))} / ${cardsTotal}</span></div>
        <div class="stat card"><b>${Object.keys(S.days).length}</b><span>${esc(t("prog.days"))}</span></div>
        <div class="stat card"><b>${fmtMin(totalMinutes())}</b><span>${esc(t("prog.time"))}</span></div>
        <div class="stat card"><b>${pr.n}</b><span>${esc(t("prog.ex", { p: pr.n ? Math.round(pr.ok / pr.n * 100) : 0 }))}</span></div>
      </section>
      ${paceWidget()}
      <section class="card">
        ${PATH.map(l => { const p = levelProgress(l.id); return `<div class="lvrow"><b>${l.id}</b>${progressBar(p.pct)}<span class="muted small">${p.done}/${p.total}</span></div>`; }).join("")}
      </section>
      <section class="card">
        <p class="eyebrow">${esc(t("prog.last12"))}</p>
        <div class="cal">${cells.map(d => { const m = S.mins[ymd(d)] || 0; return `<i class="${S.days[ymd(d)] ? "on" : ""} ${m >= 30 ? "lots" : ""} ${d > end ? "future" : ""}" title="${ymd(d)}${m ? " · " + m + " min" : ""}"></i>`; }).join("")}</div>
      </section>
      <section class="card">
        <h2>💾 ${esc(t("prog.backup"))}</h2>
        <p class="muted">${esc(t("prog.backupSub"))}</p>
        <div class="row wrap">
          <button class="btn" data-action="export">⬇ ${esc(t("prog.export"))}</button>
          <label class="btn ghost file">⬆ ${esc(t("prog.import"))}<input type="file" id="import-file" accept="application/json,.json"></label>
          <button class="btn ghost" data-action="copy-code">${esc(t("prog.copy"))}</button>
          <button class="btn ghost" data-action="paste-code">${esc(t("prog.paste"))}</button>
        </div>
        <button class="btn danger small" data-action="reset">${esc(t("prog.reset"))}</button>
      </section>`;
  }

  /* ───────── Study time ───────── */
  function logMinutes(m) { if (m > 0) { S.mins[ymd()] = (S.mins[ymd()] || 0) + m; practised(); save(); } }
  const sessionMinutes = start => Math.max(1, Math.min(30, Math.round((Date.now() - start) / 60000)));
  const totalMinutes = () => Object.values(S.mins).reduce((a, b) => a + b, 0);
  function weekStart(d) { d = new Date(d || Date.now()); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return d; }
  const weekMinutes = () => { const k = ymd(weekStart()); return Object.entries(S.mins).filter(([d]) => d >= k).reduce((a, [, m]) => a + m, 0); };
  const fmtMin = m => m < 60 ? m + " min" : Math.floor(m / 60) + " h " + (m % 60 ? String(m % 60).padStart(2, "0") : "");

  /* Cumulative study hours at the END of each level (middle of the Alliance Française ranges). */
  const CUM = { A0: 18, A1: 80, A2: 180, B1: 380, B2: 605, C1: 880, C2: 1130 };
  function estHours() {
    const lv = curLevel(), i = levelIdx(lv), start = i > 0 ? CUM[LEVELS[i - 1]] : 0;
    return Math.round(Math.max(totalMinutes() / 60, start + (CUM[lv] - start) * levelProgress(lv).pct / 100));
  }
  const monthYear = d => d.toLocaleDateString(lang() === "tr" ? "tr-TR" : lang() === "fr" ? "fr-FR" : "en-GB", { month: "long", year: "numeric" });
  function paceRows() {
    const done = estHours(), hpw = S.pace.hpw || 5;
    return LEVELS.slice(Math.max(1, levelIdx(curLevel()))).map(lv => {
      const left = Math.max(0, CUM[lv] - done), weeks = Math.ceil(left / hpw);
      const when = new Date(Date.now() + weeks * 7 * 86400000);
      return `<tr><td><b>${lv}</b></td><td>${left} h</td><td>${left ? (weeks < 9 ? t("pace.weeks", { n: weeks }) : t("pace.months", { n: Math.round(weeks / 4.35) })) + ` <span class="muted small">(${esc(monthYear(when))})</span>` : "✓"}</td></tr>`;
    }).join("");
  }
  const selectSet = (key, values, cur, fmt) => `<select data-set="${key}">${values.map(v => `<option value="${v}" ${cur === v ? "selected" : ""}>${fmt ? fmt(v) : v}</option>`).join("")}</select>`;
  function paceWidget() {
    return `<section class="card widget">
      <h2>⏱️ ${esc(t("pace.title"))}</h2>
      <label class="setting">${esc(t("pace.hpw"))} ${selectSet("hpw", [1, 2, 3, 4, 5, 7, 10, 14, 20], S.pace.hpw, v => v + " h")}</label>
      <p class="muted small">${esc(t("pace.done", { h: estHours(), l: Math.round(totalMinutes() / 60) }))}</p>
      <table class="tbl"><tr><th>${esc(t("pace.level"))}</th><th>${esc(t("pace.left"))}</th><th>${esc(t("pace.when"))}</th></tr>${paceRows()}</table>
      <p class="muted small">${esc(t("pace.note"))}</p>
    </section>`;
  }

  /* ───────── Guide widgets ───────── */
  const FW = [["fw.read", "#/guide/pron"], ["fw.lt", "res:langtransfer"], ["fw.voisins", "res:voisins12bis"], ["fw.app", "res:duolingo"], ["fw.cards", "#/cards/survival"], ["fw.nasal", "#/practice/sounds"]];
  function firstWeekWidget() {
    const done = FW.filter(([k]) => S.fw[k]).length;
    return `<section class="card widget">
      <h2>✅ ${esc(t("fw.title"))} <span class="muted small">${done}/${FW.length}</span></h2>
      ${FW.map(([k, href]) => {
        const r = href.startsWith("res:") && RES_BY_ID[href.slice(4)];
        const link = r ? `<a href="${esc(r.url)}" target="_blank" rel="noopener" data-open="${r.id}">${esc(r.name)} ↗</a>` : `<a href="${href}">→</a>`;
        return `<div class="check"><input type="checkbox" id="${k}" data-fw="${k}" ${S.fw[k] ? "checked" : ""}><label for="${k}">${esc(t(k))}</label> ${link}</div>`;
      }).join("")}
      ${done === FW.length ? `<p class="ok-msg">${esc(t("fw.done"))}</p>` : ""}
    </section>`;
  }
  function drillsWidget() {
    return `<section class="card widget">
      <h2>🔊 ${esc(t("drill.title"))}</h2>
      <p class="muted small">${esc(t("drill.sub"))}</p>
      <div class="pairs">${PAIRS.map(p => `<div class="pair"><div class="row wrap">${p.w.map(w => `<button class="chip" data-speak="${esc(w)}">🔊 ${esc(w)}</button>`).join("")}</div><span class="muted small">${esc(loc(p))}</span></div>`).join("")}</div>
      <a class="btn" href="#/practice/sounds">🎯 ${esc(t("ex.sounds"))}</a>
    </section>`;
  }
  const WIDGETS = { pace: paceWidget, firstweek: firstWeekWidget, drills: drillsWidget };

  /* ───────── Practice ───────── */
  const EX_KINDS = [["sounds", "👂"], ["numbers", "🔢"], ["listen", "🎧"], ["dictation", "✍️"], ["conj", "🔁"], ["gender", "🏷️"], ["mistakes", "✅"], ["speak", "🗣️"]];
  const EX_ICON = Object.fromEntries(EX_KINDS);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const norm = s => String(s || "").toLowerCase().replace(/[’`]/g, "'").replace(/[.,!?;:«»"()…¿¡]/g, " ").replace(/\s+/g, " ").trim();
  const noAcc = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe");
  const plain = html => String(html || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
  const meaning = x => (lang() === "en" ? x.en : x.tr) || x.en;
  const lvOK = lv => !lv || levelIdx(lv) <= Math.max(levelIdx(curLevel()) + 1, 1);
  function phrasePool(maxLen) {
    return DECKS.filter(d => lvOK(d.level) && d.id !== "falsefriends")
      .flatMap(d => d.cards.map(c => Object.assign({ deck: d.id }, c)))
      .filter(c => !/[\/…(]|\.\.\./.test(c.fr) && c.fr.length <= (maxLen || 60));
  }

  /* French number words, 0–9999 (for the numbers exercise feedback). */
  function numFr(n) {
    const U = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
    const T = { 2: "vingt", 3: "trente", 4: "quarante", 5: "cinquante", 6: "soixante" };
    function u100(n) {
      if (n <= 16) return U[n];
      if (n < 20) return "dix-" + U[n - 10];
      if (n < 70) { const t10 = Math.floor(n / 10), u = n % 10; return T[t10] + (u === 0 ? "" : u === 1 ? " et un" : "-" + U[u]); }
      if (n < 80) return n === 71 ? "soixante et onze" : "soixante-" + u100(n - 60);
      if (n === 80) return "quatre-vingts";
      return "quatre-vingt-" + u100(n - 80);
    }
    function u1000(n) {
      const h = Math.floor(n / 100), r = n % 100;
      if (!h) return u100(r);
      const hs = h === 1 ? "cent" : U[h] + "-cent" + (r === 0 ? "s" : "");
      return r ? hs + "-" + u100(r) : hs;
    }
    if (n < 1000) return u1000(n);
    const th = Math.floor(n / 1000), r = n % 1000;
    return (th === 1 ? "mille" : u1000(th) + "-mille") + (r ? "-" + u1000(r) : "");
  }

  const PRON = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
  const AVOIR = "ai as a avons avez ont".split(" "), ETRE = "suis es est sommes êtes sont".split(" "), ALLER = "vais vas va allons allez vont".split(" ");
  const TENSES = [["pres", "A0"], ["fproche", "A1"], ["pc", "A2"], ["imp", "A2"], ["fut", "B1"]];
  function conjugate(v, tense, p) {
    if (tense === "pres") return [v.pres[p]];
    if (tense === "fproche") return [ALLER[p] + " " + v.inf];
    if (tense === "fut") return [v.fut + ["ai", "as", "a", "ons", "ez", "ont"][p]];
    if (tense === "imp") {
      const e = ["ais", "ais", "ait", "ions", "iez", "aient"][p];
      let st = v.inf === "être" ? "ét" : v.pres[3].replace(/ons$/, "");
      if (e[0] === "i") st = st.replace(/ge$/, "g").replace(/ç$/, "c");
      return [st + e];
    }
    if (v.aux === "avoir") return [AVOIR[p] + " " + v.pp];
    const b = ETRE[p] + " " + v.pp;
    return p < 3 ? [b, b + "e"] : p === 4 ? [b + "s", b + "es", b, b + "e"] : [b + "s", b + "es"];
  }
  const conjLabel = (v, tense, p) => tense === "pc" && v.aux === "être" ? ETRE[p] + " " + v.pp + (p < 3 ? "(e)" : "(e)s") : conjugate(v, tense, p)[0];
  const withPron = (p, form) => p === 0 && /^[aeéèêiouh]/i.test(form) ? "j'" + form : PRON[p] + " " + form;

  const GEN = {
    sounds() {
      const p = pick(PAIRS), w = pick(p.w);
      return { t: "choice", prompt: t("ex.sounds.q"), say: w, options: p.w.map(x => ({ v: x, label: x })), answer: w, al: w, explain: loc(p) };
    },
    numbers() {
      const i = levelIdx(curLevel()), max = [20, 100, 1000, 2100][Math.min(i, 3)];
      let n = Math.floor(Math.random() * (max + 1));
      if (i >= 1 && Math.random() < 0.4) n = 60 + Math.floor(Math.random() * 40); // the 60–99 trap
      return { t: "type", mode: "digits", prompt: t("ex.numbers.q"), say: String(n), answer: String(n), al: n + " · " + numFr(n), explain: numFr(n) };
    },
    listen() {
      const pool = phrasePool(), c = pick(pool);
      const same = shuffle(pool.filter(x => x.deck === c.deck && x.fr !== c.fr && meaning(x) !== meaning(c)));
      const others = (same.length >= 3 ? same : same.concat(shuffle(pool.filter(x => x.deck !== c.deck)))).slice(0, 3);
      return { t: "choice", prompt: t("ex.listen.q"), say: c.fr, options: shuffle([c].concat(others)).map(x => ({ v: x.fr, label: meaning(x) })), answer: c.fr, al: c.fr + " = " + meaning(c), explain: c.note };
    },
    dictation() {
      const pool = phrasePool(48), long = pool.filter(c => c.fr.split(" ").length >= 3);
      const c = pick(long.length > 20 ? long : pool);
      return { t: "type", mode: "text", prompt: t("ex.dictation.q"), say: c.fr, answer: c.fr, al: c.fr, explain: meaning(c), long: true };
    },
    conj() {
      const verbs = VERBS.filter(v => lvOK(v.level)), tenses = TENSES.filter(([, lv]) => levelIdx(lv) <= Math.max(levelIdx(curLevel()), 1)).map(x => x[0]);
      const v = pick(verbs), tense = pick(tenses), p = Math.floor(Math.random() * 6);
      const table = [0, 1, 2, 3, 4, 5].map(i => withPron(i, conjLabel(v, tense, i))).join(" · ");
      return { t: "type", mode: "conj", prompt: t("ex.conj.q"), show: PRON[p] + " + " + v.inf, sub: t("tense." + tense) + " · " + meaning(v), answer: conjLabel(v, tense, p), accept: conjugate(v, tense, p), al: withPron(p, conjLabel(v, tense, p)), say: withPron(p, conjugate(v, tense, p)[0]), sayAfter: true, explain: table };
    },
    gender() {
      const n = pick(NOUNS), rule = GENDER_RULES.find(r => r.end.some(e => n.w.endsWith(e)));
      const art = n.g === "m" ? "un" : "une";
      return { t: "choice", prompt: t("ex.gender.q"), show: n.w, sub: meaning(n), options: [{ v: "m", label: "un" }, { v: "f", label: "une" }], answer: n.g, al: art + " " + n.w, say: art + " " + n.w, sayAfter: true, explain: loc(rule) + (rule.g !== n.g ? " — " + t("ex.gender.exc") : "") };
    },
    mistakes() {
      const m = pick(MISTAKES);
      return { t: "choice", prompt: t("ex.mistakes.q"), options: shuffle([{ v: "w", label: plain(m[0]) }, { v: "r", label: plain(m[1]) }]), answer: "r", al: plain(m[1]), explain: lang() === "tr" ? m[3] : m[2], reveal: m[1] };
    },
    speak() {
      const c = pick(phrasePool(40));
      return { t: "speak", prompt: t("ex.speak.q"), show: c.fr, sub: meaning(c), say: c.fr, answer: c.fr, al: c.fr };
    }
  };

  let EX = null;
  function startEx(kind) {
    let items = [];
    if (kind === "review") items = S.err.slice(-10).reverse().map(e => Object.assign({}, e.item, { fromErr: e.id, k: e.k }));
    else {
      const seen = new Set();
      for (let i = 0; i < 60 && items.length < 10; i++) { const it = GEN[kind](); const key = (it.show || "") + "|" + (it.al || it.answer); if (!seen.has(key)) { seen.add(key); items.push(it); } }
    }
    EX = { kind, items, i: 0, ok: 0, start: Date.now(), state: null };
  }
  function wordDiff(answer, given) {
    const have = new Set(norm(given).split(" ").map(noAcc));
    return answer.split(/\s+/).map(w => `<span class="${have.has(noAcc(norm(w))) ? "w-ok" : "w-bad"}">${esc(w)}</span>`).join(" ");
  }
  function similarity(target, heard) {
    const a = noAcc(norm(target)).split(" "), b = new Set(noAcc(norm(heard)).split(" "));
    return a.filter(w => b.has(w)).length / a.length;
  }
  function exAnswer(given) {
    const it = EX.items[EX.i]; if (!it || EX.state) return;
    let ok = false, accent = false, diff = "";
    if (it.t === "choice") ok = given === it.answer;
    else if (it.t === "speak") ok = given !== "" && (given === "✓" || similarity(it.answer, given) >= 0.75);
    else if (it.mode === "digits") ok = String(given).replace(/\D/g, "") === it.answer;
    else {
      let g = norm(given);
      if (it.mode === "conj") g = g.replace(/^(il\/elle|ils\/elles|je|tu|il|elle|on|nous|vous|ils|elles)\s+/, "").replace(/^j'\s*/, "");
      const cands = (it.accept || [it.answer]).map(norm);
      ok = cands.includes(g);
      if (!ok && cands.map(noAcc).includes(noAcc(g))) { ok = true; accent = true; }
      if (!ok && it.mode === "text") diff = wordDiff(it.answer, given);
    }
    EX.state = { ok, accent, given, diff };
    const d = ymd(); const p = S.prac[d] || { n: 0, ok: 0 }; p.n++; if (ok) p.ok++; S.prac[d] = p;
    if (ok) { EX.ok++; if (it.fromErr) S.err = S.err.filter(e => e.id !== it.fromErr); }
    else if (!it.fromErr && it.t !== "speak") {
      const item = Object.assign({}, it); delete item.fromErr; delete item.k;
      S.err.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), k: EX.kind, item, y: String(given), d });
      if (S.err.length > 150) S.err.shift();
    }
    save(); render();
    if (it.say && it.sayAfter) speak(it.say);
    const nx = $("#ex-next"); if (nx) nx.focus();
  }
  function exNext() {
    EX.i++; EX.state = null; render();
    const it = EX.items[EX.i];
    if (it && it.say && !it.sayAfter && it.t !== "speak") speak(it.say);
    const inp = $("#ex-in"); if (inp) inp.focus();
  }

  /* ───────── Readings ───────── */
  const READINGS = window.READINGS || [], DIALOGUES = window.DIALOGUES || [];
  let RD = null; // { id, ans: {qi: oi}, start }
  const byLevel = (arr, lv) => arr.filter(x => x.level === lv);
  function levelGroups(arr, render) {
    return LEVELS.filter(lv => byLevel(arr, lv).length).map(lv => `<h2 class="lv-h"><span class="badge lv">${lv}</span> ${esc(loc(PATH.find(l => l.id === lv).name))}</h2><div class="read-list">${byLevel(arr, lv).map(render).join("")}</div>`).join("");
  }
  const readTile = r => { const s = S.read[r.id]; return `<a class="card read-tile ${s ? "is-done" : ""}" href="#/read/${r.id}"><b>${esc(r.t.fr)}</b><small class="muted">${esc(lang() === "fr" ? r.t.en : loc(r.t))}</small>${s ? `<span class="ok-msg small">✓ ${s.score}/${s.total}</span>` : ""}</a>`; };
  const talkTile = d => `<a class="card read-tile ${S.talk[d.id] ? "is-done" : ""}" href="#/talk/${d.id}"><b>${esc(d.t.fr)}</b><small class="muted">${esc(lang() === "fr" ? d.t.en : loc(d.t))}</small>${S.talk[d.id] ? `<span class="ok-msg small">✓</span>` : ""}</a>`;
  function viewReadings() {
    return `<a class="back" href="#/practice">← ${esc(t("ex.title"))}</a>
      <h1>📖 ${esc(t("rd.title"))}</h1><p class="muted">${esc(t("rd.sub"))}</p>
      ${levelGroups(READINGS, readTile)}`;
  }
  function viewReading(id) {
    const r = READINGS.find(x => x.id === id); if (!r) return viewReadings();
    if (!RD || RD.id !== id) RD = { id, ans: {}, start: Date.now() };
    const paras = r.text.split(/\n\s*\n/);
    const done = Object.keys(RD.ans).length === r.qs.length;
    const score = r.qs.filter((q, i) => RD.ans[i] === q.a).length;
    const i = READINGS.indexOf(r), next = READINGS[i + 1];
    const g = lang() === "en" ? 2 : 1;
    return `<a class="back" href="#/read">← ${esc(t("rd.title"))}</a>
      <article class="card reading">
        <p class="eyebrow">${r.level} · ${esc(lang() === "fr" ? r.t.en : loc(r.t))}</p>
        <h1>${esc(r.t.fr)}</h1>
        <div class="row"><button class="btn small ghost" data-speakall="${esc(r.id)}">🔊 ${esc(t("rd.listenAll"))}</button><button class="btn small ghost" data-action="stop-speak">⏹</button></div>
        ${paras.map(p => `<p class="rd-p" lang="fr">${esc(p)} ${speakBtn(p)}</p>`).join("")}
      </article>
      <details class="card gloss"><summary><b>📚 ${esc(t("rd.gloss"))}</b> <span class="muted small">${r.gloss.length}</span></summary>
        <ul class="word-list">${r.gloss.map(w => `<li><div class="w-fr">${esc(w[0])} ${speakBtn(w[0])}</div><div class="w-tr">${esc(w[g])}${lang() !== "en" ? ` <span class="muted">· ${esc(w[2])}</span>` : ""}</div></li>`).join("")}</ul>
        <button class="btn small ghost" data-addgloss="${r.id}">+ ${esc(t("rd.addCards"))}</button>
      </details>
      <section class="card">
        <h2>❓ ${esc(t("rd.questions"))}</h2>
        ${r.qs.map((q, qi) => { const a = RD.ans[qi]; return `<div class="rq"><p><b>${qi + 1}.</b> ${esc(q.q)}</p><div class="opts">${q.o.map((o, oi) => `<button class="opt ${a !== undefined ? (oi === q.a ? "ok" : oi === a ? "bad" : "") : ""}" data-rq="${qi}:${oi}" ${a !== undefined ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div></div>`; }).join("")}
        ${done ? `<div class="fb ${score === r.qs.length ? "ok" : "bad"}"><p><b>${score} / ${r.qs.length}</b> · ${esc(t(score === r.qs.length ? "ex.end.great" : score >= r.qs.length / 2 ? "ex.end.good" : "rd.reread"))}</p>
          <div class="row wrap"><button class="btn ghost" data-action="rd-again">↻ ${esc(t("ex.again"))}</button>${next ? `<a class="btn" href="#/read/${next.id}">${esc(next.t.fr)} →</a>` : ""}</div></div>` : ""}
      </section>`;
  }
  function readAnswer(qi, oi) {
    const r = READINGS.find(x => x.id === RD.id); if (!r || RD.ans[qi] !== undefined) return;
    RD.ans[qi] = oi;
    const d = ymd(), p = S.prac[d] || { n: 0, ok: 0 }; p.n++; if (oi === r.qs[qi].a) p.ok++; S.prac[d] = p;
    if (Object.keys(RD.ans).length === r.qs.length) {
      const score = r.qs.filter((q, i) => RD.ans[i] === q.a).length, prev = S.read[r.id];
      S.read[r.id] = { score: Math.max(score, prev ? prev.score : 0), total: r.qs.length, d };
      logMinutes(sessionMinutes(RD.start));
    }
    save(); const y = window.scrollY; render(); window.scrollTo(0, y);
  }
  function addGlossCards(id) {
    const r = READINGS.find(x => x.id === id); if (!r) return;
    let n = 0;
    r.gloss.forEach(w => { if (!S.mine.some(c => c.fr === w[0])) { S.mine.push({ id: "mine:" + w[0] + ":" + Date.now().toString(36) + n, fr: w[0], tr: w[1], en: w[2], note: r.t.fr }); n++; } });
    save(); toast(t("rd.added", { n }));
  }

  /* ───────── Dialogues ───────── */
  let TK = null; // { id, role: false, shown: {} }
  function viewDialogues() {
    return `<a class="back" href="#/practice">← ${esc(t("ex.title"))}</a>
      <h1>💬 ${esc(t("dg.title"))}</h1><p class="muted">${esc(t("dg.sub"))}</p>
      ${levelGroups(DIALOGUES, talkTile)}`;
  }
  function viewDialogue(id) {
    const d = DIALOGUES.find(x => x.id === id); if (!d) return viewDialogues();
    if (!TK || TK.id !== id) TK = { id, role: false, trans: true, shown: {} };
    const tr = l => lang() === "en" ? l.en : l.tr;
    return `<a class="back" href="#/talk">← ${esc(t("dg.title"))}</a>
      <h1>💬 ${esc(d.t.fr)}</h1>
      <p class="muted">${d.level} · ${esc(lang() === "fr" ? d.t.en : loc(d.t))}</p>
      <div class="row wrap dg-tools">
        <button class="btn small" data-speakall="${esc(d.id)}">▶ ${esc(t("dg.playAll"))}</button>
        <button class="btn small ghost" data-action="stop-speak">⏹</button>
        ${chip("🌐 " + esc(t("dg.trans")), 'data-action="dg-trans"', TK.trans)}
        ${chip("🎭 " + esc(t("dg.role", { r: d.roles[d.me] })), 'data-action="dg-role"', TK.role)}
      </div>
      ${TK.role ? `<p class="note">${esc(t("dg.roleHelp", { r: d.roles[d.me] }))}</p>` : ""}
      <div class="dialogue">${d.lines.map((l, i) => {
        const mine = l.who === d.me, hide = TK.role && mine && !TK.shown[i];
        return `<div class="bubble ${mine ? "me" : ""}">
          <span class="who">${esc(d.roles[l.who])}</span>
          ${hide ? `<p class="hint">${esc(tr(l))}</p><button class="btn small ghost" data-reveal="${i}">👁 ${esc(t("dg.reveal"))}</button>`
            : `<p class="fr" lang="fr">${esc(l.fr)} ${speakBtn(l.fr)}</p>${TK.trans ? `<p class="muted small">${esc(tr(l))}</p>` : ""}`}
        </div>`;
      }).join("")}</div>
      <button class="btn ${S.talk[d.id] ? "ghost" : ""}" data-action="dg-done">${S.talk[d.id] ? "✓ " + esc(t("path.done")) : esc(t("path.markDone"))}</button>`;
  }
  let SEQ = 0;
  function speakAll(id) {
    if (!("speechSynthesis" in window)) return;
    const r = READINGS.find(x => x.id === id), d = DIALOGUES.find(x => x.id === id);
    const parts = r ? r.text.split(/\n\s*\n/).map(p => ({ text: p })) : d ? d.lines.filter((l, i) => !(TK && TK.role && l.who === d.me && !TK.shown[i])).map(l => ({ text: l.fr, alt: l.who !== d.lines[0].who })) : [];
    speechSynthesis.cancel(); const run = ++SEQ;
    const next = i => {
      if (run !== SEQ || i >= parts.length) return;
      const u = new SpeechSynthesisUtterance(parts[i].text);
      u.lang = "fr-FR"; u.rate = 0.9; if (frVoice) u.voice = frVoice; if (parts[i].alt) u.pitch = 1.25;
      u.onend = () => setTimeout(() => next(i + 1), d ? 500 : 250);
      speechSynthesis.speak(u);
    };
    next(0);
  }

  function viewPractice() {
    const d = S.prac[ymd()] || { n: 0, ok: 0 };
    const all = Object.values(S.prac).reduce((a, p) => ({ n: a.n + p.n, ok: a.ok + p.ok }), { n: 0, ok: 0 });
    return `<h1>${esc(t("ex.title"))}</h1>
      <p class="muted">${esc(t("ex.sub"))}</p>
      <div class="ex-grid">
        <a class="card ex-tile big" href="#/read"><span class="ex-ic">📖</span><b>${esc(t("rd.title"))}</b><small>${esc(t("rd.tile", { n: READINGS.length, d: Object.keys(S.read).length }))}</small></a>
        <a class="card ex-tile big" href="#/talk"><span class="ex-ic">💬</span><b>${esc(t("dg.title"))}</b><small>${esc(t("dg.tile", { n: DIALOGUES.length, d: Object.keys(S.talk).length }))}</small></a>
        ${EX_KINDS.map(([k, ic]) => `<a class="card ex-tile" href="#/practice/${k}"><span class="ex-ic">${ic}</span><b>${esc(t("ex." + k))}</b><small>${esc(t("ex." + k + ".d"))}</small></a>`).join("")}</div>
      <section class="card">
        <h2>📓 ${esc(t("ex.notebook"))}</h2>
        <p class="muted small">${esc(t("ex.notebookSub"))}</p>
        ${S.err.length ? `<div class="row wrap"><a class="btn" href="#/practice/review">${esc(t("ex.review"))} (${Math.min(10, S.err.length)})</a><a class="btn ghost" href="#/practice/notebook">${esc(t("ex.seeAll"))} (${S.err.length})</a></div>` : `<p class="ok-msg">${esc(t("ex.noErr"))}</p>`}
      </section>
      <p class="muted small">${esc(t("ex.stats", { n: d.n, a: all.n, p: all.n ? Math.round(all.ok / all.n * 100) : 0 }))}</p>`;
  }
  function viewNotebook() {
    return `<a class="back" href="#/practice">← ${esc(t("ex.title"))}</a>
      <h1>📓 ${esc(t("ex.notebook"))}</h1>
      ${S.err.length ? `<div class="row wrap"><a class="btn" href="#/practice/review">${esc(t("ex.review"))}</a><button class="btn ghost danger" data-action="err-clear">${esc(t("ex.clear"))}</button></div>` : `<p class="ok-msg">${esc(t("ex.noErr"))}</p>`}
      <ul class="word-list">${S.err.slice().reverse().map(e => `<li>
        <div class="w-fr">${EX_ICON[e.k] || "•"} ${esc(e.item.show || e.item.say || plain(e.item.prompt))} ${e.item.say ? speakBtn(e.item.say) : ""}</div>
        <div class="w-tr">✓ <b>${esc(e.item.al || e.item.answer)}</b>${e.y ? ` <span class="muted">· ✗ ${esc(e.y)}</span>` : ""}</div>
        ${e.item.explain && e.k !== "conj" ? `<div class="note">${esc(e.item.explain)}</div>` : ""}
        <button class="icon-btn" data-delerr="${e.id}" aria-label="${esc(t("cards.delete"))}">🗑</button>
      </li>`).join("")}</ul>`;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function viewExercise(kind) {
    if (kind === "notebook") return viewNotebook();
    if (!GEN[kind] && kind !== "review") return viewPractice();
    if (!EX || EX.kind !== kind) startEx(kind);
    const back = `<a class="back" href="#/practice">← ${esc(t("ex.title"))}</a>`;
    const title = kind === "review" ? t("ex.review") : t("ex." + kind);
    if (!EX.items.length) return back + `<section class="card center"><p class="big">🌿</p><p>${esc(t("ex.noErr"))}</p></section>`;
    if (EX.i >= EX.items.length) {
      if (!EX.logged) { EX.logged = true; logMinutes(sessionMinutes(EX.start)); }
      const r = EX.ok / EX.items.length;
      return back + `<section class="card center ex-end">
        <p class="big">${r >= 0.8 ? "🌟" : r >= 0.5 ? "🌿" : "🌱"}</p>
        <h2>${EX.ok} / ${EX.items.length}</h2>
        <p>${esc(t(r >= 0.8 ? "ex.end.great" : r >= 0.5 ? "ex.end.good" : "ex.end.soft"))}</p>
        <div class="row wrap center"><button class="btn" data-action="ex-again">↻ ${esc(t("ex.again"))}</button><a class="btn ghost" href="#/practice">${esc(t("ex.other"))}</a>
        ${S.err.length ? `<a class="btn ghost" href="#/practice/notebook">📓 ${esc(t("ex.notebook"))}</a>` : ""}</div>
      </section>`;
    }
    const it = EX.items[EX.i], st = EX.state, k = it.k || kind;
    let body = "";
    if (it.t === "choice") {
      body = `<div class="opts ${it.options.length > 2 ? "" : "two"}">${it.options.map((o, i) => {
        const cls = st ? (o.v === it.answer ? "ok" : o.v === st.given ? "bad" : "") : "";
        return `<button class="opt ${cls}" data-ans="${esc(o.v)}" ${st ? "disabled" : ""}><kbd>${i + 1}</kbd>${esc(o.label)}</button>`;
      }).join("")}</div>`;
    } else if (it.t === "type") {
      body = `<form id="ex-form" class="ex-form" autocomplete="off">
        <input id="ex-in" ${it.mode === "digits" ? 'inputmode="numeric"' : 'lang="fr"'} autocapitalize="none" autocorrect="off" spellcheck="false" aria-label="${esc(t("ex.answer"))}" placeholder="${esc(t(it.mode === "digits" ? "ex.digits" : "ex.typeHere"))}" ${st ? `value="${esc(st.given)}" readonly` : ""}>
        ${st ? "" : `<button class="btn" type="submit">${esc(t("ex.check"))}</button>`}
      </form>
      ${!st && it.mode !== "digits" ? `<div class="acc" aria-label="accents">${["é", "è", "ê", "à", "â", "ç", "ù", "û", "î", "ô", "ë", "œ", "'"].map(c => `<button class="key" data-ins="${c}" tabindex="-1">${c}</button>`).join("")}</div>` : ""}`;
    } else {
      body = st ? "" : `<div class="row wrap center">
        ${SR ? `<button class="btn mic" data-action="mic">🎤 ${esc(t("ex.speak.mic"))}</button>` : ""}
        <button class="btn ghost" data-ans="✓">${esc(t("ex.speak.self"))}</button>
      </div>
      <p class="muted small center" id="heard">${esc(SR ? t("ex.speak.hint") : t("ex.speak.nosr"))}</p>`;
    }
    const fb = st ? `<div class="fb ${st.ok ? "ok" : "bad"}" role="status">
        <p><b>${st.ok ? "✓ " + esc(t(st.accent ? "ex.accent" : "ex.right")) : "✗ " + esc(t("ex.wrong"))}</b></p>
        ${!st.ok || st.accent || it.t !== "choice" || k === "listen" ? `<p class="fr-mid">${it.reveal ? it.reveal : esc(it.al || it.answer)} ${it.say ? speakBtn(it.say) : ""}</p>` : ""}
        ${st.diff ? `<p class="diff">${st.diff}</p>` : ""}
        ${it.t === "speak" && st.given && st.given !== "✓" ? `<p class="muted small">${esc(t("ex.speak.heard"))}: « ${esc(st.given)} »</p>` : ""}
        ${it.explain ? `<p class="muted small">${esc(it.explain)}</p>` : ""}
        <button class="btn" id="ex-next" data-action="ex-next">${esc(t(EX.i + 1 < EX.items.length ? "ex.next" : "ex.finish"))} →</button>
      </div>` : "";
    return back + `<div class="row between"><h1 class="h-ex">${EX_ICON[k] || "📓"} ${esc(title)}</h1><span class="muted small">${EX.i + 1}/${EX.items.length}</span></div>
      ${progressBar(Math.round(EX.i / EX.items.length * 100))}
      <section class="card ex-card">
        <p class="ex-q">${esc(it.prompt)}</p>
        ${it.say && !(it.sayAfter && !st) ? `<div class="row center"><button class="btn speak-big" data-speak="${esc(it.say)}">🔊 ${esc(t("ex.listen.btn"))}</button><button class="btn ghost speak-big" data-speak="${esc(it.say)}" data-slow="1">🐢</button></div>` : ""}
        ${it.show ? `<p class="fr-big center">${esc(it.show)}</p>` : ""}
        ${it.sub ? `<p class="muted center">${esc(it.sub)}</p>` : ""}
        ${body}
        ${fb}
      </section>`;
  }
  function micListen(btn) {
    const it = EX && EX.items[EX.i]; if (!it || !SR) return;
    const r = new SR(); r.lang = "fr-FR"; r.interimResults = false; r.maxAlternatives = 3;
    btn.classList.add("on"); btn.disabled = true; const out = $("#heard"); if (out) out.textContent = t("ex.speak.listening");
    r.onresult = e => {
      const alts = Array.from(e.results[0]).map(a => a.transcript);
      const best = alts.sort((a, b) => similarity(it.answer, b) - similarity(it.answer, a))[0] || "";
      exAnswer(best);
    };
    r.onerror = () => { btn.classList.remove("on"); btn.disabled = false; if (out) out.textContent = t("ex.speak.err"); };
    r.onend = () => { btn.classList.remove("on"); btn.disabled = false; };
    try { r.start(); } catch (e) { r.onerror(); }
  }

  /* ───────── Weekly plan ───────── */
  const PLAN_DAYS = { 7: [0, 1, 2, 3, 4, 5, 6], 6: [0, 1, 2, 3, 4, 5], 5: [0, 1, 3, 4, 5], 4: [0, 1, 3, 5], 3: [0, 2, 4], 2: [1, 4] };
  const PRACTICE_BY_LEVEL = { A0: ["sounds", "numbers", "speak", "listen"], A1: ["dictation", "conj", "gender", "listen", "speak", "numbers", "sounds"], A2: ["conj", "dictation", "mistakes", "listen", "gender", "speak"] };
  const weekKey = () => ymd(weekStart());
  function planFor(day) {
    const days = PLAN_DAYS[S.pace.dpw] || PLAN_DAYS[5];
    if (!days.includes(day)) return null;
    const wk = Math.round(weekStart().getTime() / 604800000), n = days.indexOf(day) + wk * days.length;
    const M = Math.max(15, Math.round((S.pace.hpw || 5) * 60 / days.length / 5) * 5);
    const lv = curLevel(), ns = nextStep();
    const kinds = PRACTICE_BY_LEVEL[lv] || PRACTICE_BY_LEVEL.A2;
    const tasks = [{ k: "cards", m: 10, icon: "🃏", label: t("plan.cards"), href: "#/cards" + (totalDue() ? "/due" : "") }];
    let left = M - 10;
    if (ns && left >= 15) { const m = Math.min(30, Math.max(15, left - 15)); tasks.push({ k: "course", m, icon: "↟", label: t("plan.course") + " · " + loc(ns.step.t), href: `#/path/${ns.level.id}?step=${ns.step.id}` }); left -= m; }
    const lvRes = f => { const a = resForLevel(lv, f); return a.length ? a[(wk * 7 + day * 13) % a.length] : null; };
    const rot = levelIdx(lv) < 1 ? ["practice", "listen", "speak", "practice"] : ["listen", "practice", "read", "speak", "write", "practice"];
    for (let j = 0; left >= 10 && j < 4; j++) {
      const kind = rot[(n + j) % rot.length];
      if (tasks.some(x => x.k === kind)) continue;
      const m = Math.min(left, 20);
      if (kind === "practice") { const ex = kinds[n % kinds.length]; tasks.push({ k: kind, m, icon: EX_ICON[ex], label: t("plan.practice") + " · " + t("ex." + ex), href: "#/practice/" + ex }); }
      else if (kind === "listen") { const r = lvRes(r => ["podcast", "video"].includes(r.type)); if (r) tasks.push({ k: kind, m, icon: "🎧", label: t("plan.listen") + " · " + r.name, href: r.url, res: r.id }); }
      else if (kind === "read") { const r = lvRes(r => ["reading", "news"].includes(r.type)); if (r) tasks.push({ k: kind, m, icon: "📖", label: t("plan.read") + " · " + r.name, href: r.url, res: r.id }); }
      else if (kind === "speak") tasks.push({ k: kind, m, icon: "🗣️", label: t(levelIdx(lv) < 2 ? "plan.speakEx" : "plan.speak"), href: "#/practice/speak" });
      else if (kind === "write") { const r = RES_BY_ID.bonpatron; tasks.push({ k: kind, m, icon: "✍️", label: t("plan.write"), href: r ? r.url : "#/guide/readwrite", res: r && r.id }); }
      left -= m;
    }
    return tasks;
  }
  const planKey = (day, k) => day + "-" + k;
  const planDone = (day, k) => !!((S.plan[weekKey()] || {})[planKey(day, k)]);
  function planList(day, tasks) {
    return `<ul class="plan-list">${tasks.map(x => {
      const done = planDone(day, x.k), ext = /^https?:/.test(x.href);
      return `<li class="${done ? "is-done" : ""}"><input type="checkbox" id="pl-${day}-${x.k}" data-plan="${day}:${x.k}" ${done ? "checked" : ""} aria-label="${esc(x.label)}">
        <a href="${esc(x.href)}" ${ext ? `target="_blank" rel="noopener"` : ""} ${x.res ? `data-open="${x.res}"` : ""}><span>${x.icon}</span> ${esc(x.label)}${ext ? " ↗" : ""}</a><small class="muted">${x.m}′</small></li>`;
    }).join("")}</ul>`;
  }
  function restDay() {
    const r = RES_BY_ID.lyricstraining;
    return `<p class="muted">🌿 ${esc(t("plan.rest"))}${r ? ` <a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)} ↗</a>` : ""}</p>`;
  }
  function todayPlanCard() {
    const day = (new Date().getDay() + 6) % 7, tasks = planFor(day);
    const done = tasks ? tasks.filter(x => planDone(day, x.k)).length : 0;
    return `<section class="card">
      <div class="row between"><p class="eyebrow">${esc(t("plan.today"))}${tasks ? ` · ${done}/${tasks.length}` : ""}</p><a class="small" href="#/plan">${esc(t("plan.week"))} →</a></div>
      ${tasks ? planList(day, tasks) + (done === tasks.length ? `<p class="ok-msg">${esc(t("plan.allDone"))}</p>` : "") : restDay()}
    </section>`;
  }
  function viewPlan() {
    const names = { tr: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"], en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], fr: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"] }[lang()];
    const td = (new Date().getDay() + 6) % 7;
    return `<h1>${esc(t("plan.title"))}</h1>
      <p class="muted">${esc(t("plan.sub", { lv: curLevel() }))}</p>
      <section class="card row wrap settings">
        <label class="setting">${esc(t("pace.hpw"))} ${selectSet("hpw", [1, 2, 3, 4, 5, 7, 10, 14, 20], S.pace.hpw, v => v + " h")}</label>
        <label class="setting">${esc(t("plan.dpw"))} ${selectSet("dpw", [2, 3, 4, 5, 6, 7], S.pace.dpw)}</label>
        <span class="muted small">${esc(t("plan.thisWeek", { m: fmtMin(weekMinutes()) }))}</span>
      </section>
      <div class="plan-week">${names.map((nm, d) => { const tasks = planFor(d); return `<section class="card plan-day ${d === td ? "today" : ""}"><h2>${esc(nm)}${d === td ? ` · <span class="eyebrow">${esc(t("plan.todayShort"))}</span>` : ""}</h2>${tasks ? planList(d, tasks) : restDay()}</section>`; }).join("")}</div>
      ${paceWidget()}
      <section class="card">
        <h2>⏰ ${esc(t("ics.h"))}</h2>
        <p class="muted small">${esc(t("ics.sub"))}</p>
        <div class="row wrap"><input type="time" id="ics-time" value="${esc(S.remind || "19:00")}" aria-label="${esc(t("ics.h"))}"><button class="btn" data-action="ics">📅 ${esc(t("ics.btn"))}</button></div>
      </section>`;
  }
  function downloadIcs() {
    const time = ($("#ics-time") || {}).value || "19:00"; S.remind = time; save();
    const [h, m] = time.split(":"), d = new Date(), p = n => String(n).padStart(2, "0");
    const txt = s => String(s).replace(/([,;\\])/g, "\\$1");
    const start = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(+h)}${p(+m)}00`;
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Esin FR//Doucement//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
      "UID:esinfr-daily-" + Date.now() + "@esinfr", "DTSTAMP:" + stamp, "DTSTART:" + start, "DURATION:PT20M", "RRULE:FREQ=DAILY",
      "SUMMARY:" + txt(t("ics.title")), "DESCRIPTION:" + txt(t("ics.desc") + " " + location.href.split("#")[0]),
      "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:" + txt(t("ics.title")), "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    downloadFile(ics, "esin-fr-reminder.ics", "text/calendar");
  }

  /* ───────── Search ───────── */
  function viewSearch(q) {
    return `<h1>${esc(t("search.title"))}</h1>
      <input type="search" id="search-q" class="big-search" value="${esc(q || "")}" placeholder="${esc(t("search.ph"))}" autocomplete="off" autocapitalize="none" aria-label="${esc(t("search.title"))}">
      <div id="search-out"></div>`;
  }
  function renderSearch() {
    const input = $("#search-q"); if (!input) return;
    const raw = input.value.trim(), out = $("#search-out");
    history.replaceState(null, "", "#/search" + (raw ? "?q=" + encodeURIComponent(raw) : ""));
    lastRendered = location.hash;
    if (raw.length < 2) { out.innerHTML = `<p class="muted">${esc(t("search.hint"))}</p>`; return; }
    const qa = noAcc(raw.toLowerCase());
    const m = s => noAcc(String(s).toLowerCase()).includes(qa);
    const res = RES.filter(r => m(r.name + " " + r.d.en + " " + r.d.tr + " " + (r.note ? r.note.en + " " + r.note.tr : ""))).slice(0, 20);
    const guides = GUIDE.map(g => ({ g, txt: plain(lang() === "tr" ? g.tr : g.en) })).filter(x => m(loc(x.g.t) + " " + x.txt));
    const cards = allDecks().flatMap(d => d.cards.map(c => ({ c, d }))).filter(x => m(x.c.fr + " " + x.c.tr + " " + x.c.en)).slice(0, 30);
    const steps = PATH.flatMap(l => l.steps.map(s => ({ l, s }))).filter(x => m(loc(x.s.t) + " " + loc(x.s.do))).slice(0, 10);
    const texts = READINGS.filter(r => m(r.t.fr + " " + loc(r.t) + " " + r.text)).map(readTile).concat(DIALOGUES.filter(d => m(d.t.fr + " " + loc(d.t) + " " + d.lines.map(l => l.fr).join(" "))).map(talkTile));
    const snip = txt => { const i = noAcc(txt.toLowerCase()).indexOf(qa); return i < 0 ? "" : (i > 50 ? "…" : "") + txt.slice(Math.max(0, i - 50), i + 90) + "…"; };
    const total = res.length + guides.length + cards.length + steps.length + texts.length;
    out.innerHTML = !total ? `<p class="muted">${esc(t("search.none"))}</p>` : `
      ${steps.length ? `<h2>↟ ${esc(t("nav.path"))}</h2><ul class="s-list">${steps.map(x => `<li><a href="#/path/${x.l.id}?step=${x.s.id}"><b>${x.l.id}</b> · ${esc(loc(x.s.t))}</a></li>`).join("")}</ul>` : ""}
      ${texts.length ? `<h2>📖 ${esc(t("rd.title"))} · ${esc(t("dg.title"))}</h2><div class="read-list">${texts.join("")}</div>` : ""}
      ${guides.length ? `<h2>📚 ${esc(t("more.guide"))}</h2><ul class="s-list">${guides.map(x => `<li><a href="#/guide/${x.g.id}">${x.g.icon} ${esc(loc(x.g.t))}</a><p class="muted small">${esc(snip(x.txt))}</p></li>`).join("")}</ul>` : ""}
      ${cards.length ? `<h2>🃏 ${esc(t("nav.cards"))}</h2><ul class="word-list">${cards.map(x => `<li><div class="w-fr">${esc(x.c.fr)} ${speakBtn(x.c.fr)}</div><div class="w-tr">${esc(x.c.tr)} <span class="muted">· ${esc(x.c.en)}</span></div><a class="small" href="#/cards/${x.d.id}/list">${esc(loc(x.d.name) || t("cards.mine"))}</a></li>`).join("")}</ul>` : ""}
      ${res.length ? `<h2>❏ ${esc(t("nav.library"))}</h2><div class="res-list">${res.map(r => resCard(r, true)).join("")}</div>` : ""}`;
  }

  /* ───────── Backup ───────── */
  function downloadFile(text, name, type) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  const exportData = () => downloadFile(JSON.stringify(S, null, 1), "esin-fr-backup-" + ymd() + ".json", "application/json");
  function importData(text) {
    try {
      const obj = JSON.parse(text);
      if (!obj || typeof obj !== "object" || obj.v !== 1) throw new Error("bad");
      S = fill(obj); save(); LIB = Object.assign(LIB0(), S.lib || {});
      toast(t("prog.imported")); render();
    } catch (e) { toast(t("prog.importErr")); }
  }
  const toCode = () => btoa(unescape(encodeURIComponent(JSON.stringify(S))));
  const fromCode = c => decodeURIComponent(escape(atob(c.trim())));

  /* ───────── Router ───────── */
  const main = $("#main");
  function route() {
    const raw = location.hash.replace(/^#\/?/, "");
    const [path, query] = raw.split("?");
    const parts = path.split("/").filter(Boolean);
    const params = new URLSearchParams(query || "");
    return { parts, params };
  }
  let lastRendered = null;
  function render() {
    const raw = location.hash;
    document.documentElement.lang = lang();
    $$(".lang-switch button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang()));
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-label]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nLabel)); });
    const { parts, params } = route();
    const top = parts[0] || "home";
    const tab = { home: "home", path: "path", practice: "practice", read: "practice", talk: "practice", library: "library", cards: "cards", more: "more", guide: "more", placement: "more", progress: "more", plan: "home", search: "more" }[top] || "home";
    $$(".tabbar a").forEach(a => a.classList.toggle("on", a.dataset.tab === tab));
    let html;
    switch (top) {
      case "path": html = viewPath(parts[1], params.get("step")); break;
      case "library": html = viewLibrary(); break;
      case "cards":
        html = !parts[1] ? viewCards() : parts[2] === "list" ? viewDeckList(parts[1]) : viewStudy(parts[1]); break;
      case "more": html = viewMore(); break;
      case "guide": html = viewGuide(parts[1]); break;
      case "placement": html = viewPlacement(); break;
      case "progress": html = viewProgress(); break;
      case "practice": html = parts[1] ? viewExercise(parts[1]) : viewPractice(); break;
      case "plan": html = viewPlan(); break;
      case "search": html = viewSearch(params.get("q")); break;
      case "read": html = parts[1] ? viewReading(parts[1]) : viewReadings(); break;
      case "talk": html = parts[1] ? viewDialogue(parts[1]) : viewDialogues(); break;
      default: html = viewHome();
    }
    main.innerHTML = `<div class="view ${raw !== lastRendered ? "anim" : ""}">${html}</div>`;
    lastRendered = raw;
    if (top === "library") { renderLibList(); }
    if (top === "placement") placementResult();
    if (top === "search") { renderSearch(); const q = $("#search-q"); if (q && !params.get("q")) q.focus(); }
    const st = params.get("step");
    if (st) { const el = document.getElementById("step-" + st); if (el) el.scrollIntoView({ block: "start" }); }
  }
  let lastTop = null;
  window.addEventListener("hashchange", () => {
    const top = route().parts[0] || "home";
    if (top !== "cards") SESSION = null;
    if (EX && (top !== "practice" || EX.i >= EX.items.length)) EX = null;
    if (RD && route().parts[1] !== RD.id) RD = null;
    if (TK && route().parts[1] !== TK.id) TK = null;
    SEQ++; if ("speechSynthesis" in window) speechSynthesis.cancel();
    render();
    if (top !== lastTop || !route().params.get("step")) window.scrollTo(0, 0);
    lastTop = top;
  });

  /* ───────── Events (delegated) ───────── */
  document.addEventListener("click", e => {
    const el = e.target.closest("button, a[data-open], [data-lang]");
    if (!el) return;
    const d = el.dataset;
    if (d.lang) { S.lang = d.lang; save(); render(); return; }
    if (d.speak) { speak(d.speak, d.slow); return; }
    if (d.ans !== undefined) { exAnswer(d.ans); return; }
    if (d.rq) { const [qi, oi] = d.rq.split(":").map(Number); readAnswer(qi, oi); return; }
    if (d.speakall) { speakAll(d.speakall); return; }
    if (d.addgloss) { addGlossCards(d.addgloss); return; }
    if (d.reveal !== undefined) { TK.shown[d.reveal] = 1; const l = DIALOGUES.find(x => x.id === TK.id).lines[+d.reveal]; const y = window.scrollY; render(); window.scrollTo(0, y); speak(l.fr); return; }
    if (d.ins) { const i = $("#ex-in"); if (i) { const a = i.selectionStart ?? i.value.length, b = i.selectionEnd ?? a; i.value = i.value.slice(0, a) + d.ins + i.value.slice(b); i.focus(); i.setSelectionRange(a + d.ins.length, a + d.ins.length); } return; }
    if (d.addmin) { logMinutes(+d.addmin); toast(t("toast.logged", { m: d.addmin })); render(); return; }
    if (d.delerr) { S.err = S.err.filter(x => x.id !== d.delerr); save(); render(); return; }
    if (d.open) { if (!S.res[d.open]) { S.res[d.open] = Date.now(); practised(); save(); } return; }
    if (d.fav) { S.fav[d.fav] ? delete S.fav[d.fav] : (S.fav[d.fav] = 1); save(); el.classList.toggle("on"); el.textContent = S.fav[d.fav] ? "♥" : "♡"; el.setAttribute("aria-pressed", !!S.fav[d.fav]); return; }
    if (d.done) {
      if (S.res[d.done]) delete S.res[d.done]; else { S.res[d.done] = Date.now(); practised(); toast(t("toast.done")); }
      save(); const card = el.closest(".res"); card.classList.toggle("is-done", !!S.res[d.done]);
      el.classList.toggle("on", !!S.res[d.done]); el.textContent = (S.res[d.done] ? "✓ " : "") + t("lib.done"); return;
    }
    if (d.step) {
      if (S.steps[d.step]) delete S.steps[d.step]; else { S.steps[d.step] = Date.now(); practised(); toast(t("toast.done")); }
      save(); const open = S.steps[d.step] ? null : d.step; const lvId = route().parts[1];
      render(); if (open) { const x = document.getElementById("step-" + open); if (x) x.open = true; }
      void lvId; return;
    }
    if (d.setlevel) { S.level = d.setlevel; S.welcomed = true; save(); if (d.go) location.hash = "#/path/" + d.setlevel; else render(); return; }
    if (d.feel) {
      $$(".feel-btn").forEach(b => b.classList.toggle("on", b === el));
      $("#feel-out").innerHTML = feelSuggestions(d.feel); return;
    }
    if (d.track !== undefined) { LIB.track = LIB.track === d.track ? "" : d.track; render(); return; }
    if (d.f) { LIB[d.f] = d.v; render(); return; }
    if (d.toggle) { LIB[d.toggle] = !LIB[d.toggle]; render(); return; }
    if (d.grade) {
      const c = SESSION.queue.shift(); grade(c, d.grade);
      if (d.grade === "again") SESSION.queue.push(c); else SESSION.done++;
      SESSION.flipped = false; render(); return;
    }
    if (d.delword !== undefined) { const c = S.mine[+d.delword]; if (c) { delete S.cards[c.id]; S.mine.splice(+d.delword, 1); save(); render(); } return; }
    switch (d.action) {
      case "flip": SESSION.flipped = true; render(); break;
      case "ex-next": exNext(); break;
      case "stop-speak": SEQ++; if ("speechSynthesis" in window) speechSynthesis.cancel(); break;
      case "rd-again": RD = null; render(); break;
      case "dg-trans": TK.trans = !TK.trans; render(); break;
      case "dg-role": TK.role = !TK.role; TK.shown = {}; render(); break;
      case "dg-done": { const id = TK.id; if (S.talk[id]) delete S.talk[id]; else { S.talk[id] = ymd(); practised(); toast(t("toast.done")); } save(); render(); break; }
      case "ex-again": startEx(EX ? EX.kind : route().parts[1]); render(); { const it = EX.items[0]; if (it && it.say && !it.sayAfter && it.t !== "speak") speak(it.say); } break;
      case "mic": micListen(el); break;
      case "err-clear": if (confirm(t("ex.clearConfirm"))) { S.err = []; save(); render(); } break;
      case "ics": downloadIcs(); break;
      case "practised": practised(); toast(t("toast.done")); render(); break;
      case "dismiss-welcome": S.welcomed = true; save(); render(); break;
      case "lib-reset": LIB = LIB0(); render(); break;
      case "export": exportData(); break;
      case "copy-code":
        (navigator.clipboard ? navigator.clipboard.writeText(toCode()) : Promise.reject()).then(() => toast(t("prog.copied")), () => prompt("", toCode()));
        break;
      case "paste-code": { const c = prompt(t("prog.paste")); if (c) { try { importData(fromCode(c)); } catch (err) { toast(t("prog.importErr")); } } break; }
      case "reset": if (confirm(t("prog.resetConfirm"))) { const l = S.lang; S = DEFAULT(); S.lang = l; save(); render(); } break;
    }
  });
  document.addEventListener("input", e => {
    if (e.target.id === "lib-q") { LIB.q = e.target.value; renderLibList(); }
    if (e.target.id === "search-q") renderSearch();
  });
  document.addEventListener("change", e => {
    if (e.target.matches("#placement input")) placementResult();
    if (e.target.id === "new-limit") { S.newPerSession = +e.target.value; save(); }
    const d = e.target.dataset || {};
    if (d.set) { S.pace[d.set] = +e.target.value; save(); render(); }
    if (d.fw) { if (e.target.checked) S.fw[d.fw] = 1; else delete S.fw[d.fw]; save(); render(); }
    if (d.gram) { if (e.target.checked) S.gram[d.gram] = 1; else delete S.gram[d.gram]; save(); const sm = e.target.closest("details"); if (sm) { const n = $$("input[data-gram]", sm).filter(x => x.checked).length; $("summary .muted", sm).textContent = n + "/" + $$("input[data-gram]", sm).length; } }
    if (d.plan) {
      const wk = weekKey(), [day, k] = d.plan.split(":"); S.plan[wk] = S.plan[wk] || {};
      if (e.target.checked) { S.plan[wk][planKey(day, k)] = 1; practised(); toast(t("toast.done")); } else delete S.plan[wk][planKey(day, k)];
      save(); render();
    }
    if (e.target.id === "import-file" && e.target.files[0]) {
      const r = new FileReader(); r.onload = () => importData(r.result); r.readAsText(e.target.files[0]);
    }
  });
  document.addEventListener("submit", e => {
    if (e.target.id === "ex-form") { e.preventDefault(); const v = $("#ex-in").value; if (v.trim()) exAnswer(v); return; }
    if (e.target.id === "add-word") {
      e.preventDefault();
      const f = new FormData(e.target); const fr = (f.get("fr") || "").trim(); const tr = (f.get("tr") || "").trim();
      if (!fr) return;
      S.mine.push({ id: "mine:" + fr + ":" + Date.now().toString(36), fr, tr, en: "", note: "" });
      save(); toast(t("toast.saved")); render();
    }
  });
  document.addEventListener("keydown", e => {
    if (EX && route().parts[0] === "practice" && !e.target.matches("input, textarea, select") && !e.metaKey && !e.ctrlKey) {
      const b = $$(".opts .opt:not([disabled])")[+e.key - 1];
      if (b) { b.click(); return; }
    }
    if (!SESSION || route().parts[0] !== "cards" || e.target.matches("input, textarea, select")) return;
    if (e.key === " " && !SESSION.flipped) { e.preventDefault(); SESSION.flipped = true; render(); }
    else if (SESSION.flipped && ["1", "2", "3"].includes(e.key)) { const b = $$(".grade button")[+e.key - 1]; if (b) b.click(); }
  });

  /* First visit: pick the interface language from the device. */
  if (!S.lang) {
    S.lang = /^en/i.test(navigator.language || "") ? "en" : "tr"; save();
  }
  render();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
