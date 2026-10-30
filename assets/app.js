/* Esin FR — single-page app, no dependencies. Progress lives in localStorage. */
(function () {
  "use strict";

  const KEY = "esinfr.v1";
  const RES = window.RESOURCES, PATH = window.PATH, DECKS = window.DECKS, GUIDE = window.GUIDE, LEVELS = window.LEVELS;
  const RES_BY_ID = Object.fromEntries(RES.map(r => [r.id, r]));
  const INTERVALS = [0, 1, 3, 7, 16, 35, 90]; // days per Leitner box (1..6)
  const TYPES = ["course", "video", "podcast", "app", "reading", "news", "tv", "tool", "community", "official", "exam", "mooc"];
  const TRACKS = ["core", "life", "health", "sport", "academic", "exam", "turkish", "culture"];
  const TRACK_ICONS = { core: "📘", life: "🏠", health: "🩺", sport: "🤾", academic: "🎓", exam: "📝", turkish: "🇹🇷", culture: "🎬" };
  const SKILLS = ["l", "r", "s", "w", "g", "v", "p"];

  /* ───────── State ───────── */
  const DEFAULT = () => ({ v: 1, lang: null, level: null, steps: {}, res: {}, fav: {}, cards: {}, days: {}, mine: [], newPerSession: 10, lib: {}, welcomed: false });
  let S = load();
  function load() {
    try { return Object.assign(DEFAULT(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
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
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\(.*?\)|\//g, " "));
    u.lang = "fr-FR"; u.rate = 0.9; if (frVoice) u.voice = frVoice;
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
        <button class="icon-btn fav ${fav ? "on" : ""}" data-fav="${r.id}" aria-pressed="${fav}" title="${esc(t("lib.fav"))}">${fav ? "★" : "☆"}</button>
      </div>
      <div class="badges">
        <span class="badge lv">${lv}</span>
        <span class="badge">${esc(t("type." + r.type))}</span>
        <span class="badge ${r.cost === "free" ? "free" : "freemium"}">${esc(t("cost." + r.cost))}</span>
        ${r.help.includes("tr") ? '<span class="badge tr">TR</span>' : ""}${r.help.includes("en") ? '<span class="badge en">EN</span>' : ""}
      </div>
      ${compact ? "" : `<p class="res-desc">${esc(desc(r))}</p>`}
      <div class="res-actions">
        <a class="btn small" href="${esc(r.url)}" target="_blank" rel="noopener" data-open="${r.id}">${esc(t("lib.open"))}</a>
        <button class="btn small ghost ${done ? "on" : ""}" data-done="${r.id}" aria-pressed="${done}">${done ? "✓ " : ""}${esc(t("lib.done"))}</button>
      </div>
    </article>`;
  }
  const chip = (label, attrs, on) => `<button class="chip ${on ? "on" : ""}" ${attrs} aria-pressed="${!!on}">${label}</button>`;
  const progressBar = pct => `<div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;

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
      <div class="row"><a class="btn" href="#/placement">${esc(t("home.start"))}</a><button class="btn ghost" data-action="dismiss-welcome">OK</button></div>
    </section>` : ""}

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
        ${due ? `<p class="big">${due}</p><a class="btn" href="#/cards/due">${esc(t("home.review"))}</a>` : `<p class="muted">${esc(t("home.cardsNone"))}</p><a class="btn ghost" href="#/cards">${esc(t("nav.cards"))}</a>`}
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
      <p class="muted small">${esc(t("home.monthDays", { n: monthDays }))}</p>
      ${practisedToday ? `<p class="ok-msg">${esc(t("home.practisedDone"))}</p>` : `<button class="btn ghost" data-action="practised">${esc(t("home.practised"))}</button>`}
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
      <div class="row between"><h2>${lv.id} · ${esc(loc(lv.name))}</h2><span class="muted small">${esc(t("path.hours", { h: lv.hours }))}</span></div>
      <p><b>${esc(t("path.can"))}:</b> ${esc(loc(lv.can))}</p>
      ${progressBar(p.pct)}
      ${lv.id === curLevel() ? `<p class="muted small">✓ ${esc(t("path.current"))}</p>` : `<button class="btn small ghost" data-setlevel="${lv.id}">${esc(t("path.setLevel"))}</button>`}
    </section>
    ${p.done === p.total ? `<p class="ok-msg">${esc(t("home.allDone"))}</p>` : ""}
    <div class="steps">${steps}</div>`;
  }

  let LIB = Object.assign({ q: "", level: "", type: "", track: "", skill: "", freeOnly: false, tr: false, favs: false }, S.lib || {});
  function libFiltered() {
    const q = LIB.q.trim().toLowerCase();
    return RES.filter(r =>
      (!LIB.level || r.levels.includes(LIB.level)) &&
      (!LIB.type || r.type === LIB.type) &&
      (!LIB.track || r.tracks.includes(LIB.track)) &&
      (!LIB.skill || r.skills.includes(LIB.skill)) &&
      (!LIB.freeOnly || r.cost === "free") &&
      (!LIB.tr || r.help.includes("tr")) &&
      (!LIB.favs || S.fav[r.id]) &&
      (!q || (r.name + " " + r.d.en + " " + r.d.tr + " " + r.type + " " + r.tracks.join(" ")).toLowerCase().includes(q))
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
      <div class="frow">
        ${chip("€0 " + esc(t("lib.freeOnly")), 'data-toggle="freeOnly"', LIB.freeOnly)}
        ${chip("🇹🇷 " + esc(t("lib.trHelp")), 'data-toggle="tr"', LIB.tr)}
        ${chip("★ " + esc(t("lib.favs")), 'data-toggle="favs"', LIB.favs)}
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
        <div class="row between"><h3>${esc(loc(d.name))}</h3>${d.level ? `<span class="badge lv">${d.level}</span>` : ""}</div>
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
    if (deckId === "due") cards = allDecks().flatMap(d => d.cards.filter(c => S.cards[c.id] && S.cards[c.id].due <= now));
    else {
      const d = deckById(deckId); if (!d) return null;
      const due = d.cards.filter(c => S.cards[c.id] && S.cards[c.id].due <= now);
      const fresh = d.cards.filter(c => !S.cards[c.id]).slice(0, S.newPerSession);
      cards = due.concat(fresh);
    }
    SESSION = { deckId, queue: cards.slice(), done: 0, total: cards.length, flipped: false };
    return SESSION;
  }
  function viewStudy(deckId) {
    if (!SESSION || SESSION.deckId !== deckId) startSession(deckId);
    if (!SESSION) return `<p>?</p>`;
    const d = deckId === "due" ? { name: { en: t("home.review"), tr: t("home.review"), fr: t("home.review") } } : deckById(deckId);
    if (!SESSION.queue.length) {
      const fin = SESSION.total > 0;
      SESSION = null;
      return `<a class="back" href="#/cards">← ${esc(t("cards.back"))}</a>
        <section class="card center"><p class="big">🌿</p><p>${esc(fin ? t("cards.finished") : t("home.cardsNone"))}</p>
        <a class="btn" href="#/cards">${esc(t("cards.back"))}</a></section>`;
    }
    const c = SESSION.queue[0];
    const trans = lang() === "en" ? [c.en, c.tr] : [c.tr, c.en];
    return `<a class="back" href="#/cards">← ${esc(t("cards.back"))}</a>
      <p class="muted small">${esc(loc(d.name))} · ${SESSION.done}/${SESSION.total}</p>
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
      <p class="muted small">${RES.length} · ${DECKS.reduce((n, d) => n + d.cards.length, 0)} 🃏 · ${PATH.reduce((n, l) => n + l.steps.length, 0)} ✓</p></section>`;
  }

  function viewGuide(id) {
    const g = GUIDE.find(x => x.id === id) || GUIDE[0];
    const body = lang() === "tr" ? g.tr : g.en;
    const i = GUIDE.indexOf(g), next = GUIDE[i + 1];
    return `<a class="back" href="#/more">← ${esc(t("guide.back"))}</a>
      <article class="card guide"><h1>${g.icon} ${esc(loc(g.t))}</h1>${body}</article>
      ${next ? `<a class="btn ghost" href="#/guide/${next.id}">${next.icon} ${esc(loc(next.t))} →</a>` : ""}`;
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
      </section>
      <section class="card">
        ${PATH.map(l => { const p = levelProgress(l.id); return `<div class="lvrow"><b>${l.id}</b>${progressBar(p.pct)}<span class="muted small">${p.done}/${p.total}</span></div>`; }).join("")}
      </section>
      <section class="card">
        <p class="eyebrow">${esc(t("prog.last12"))}</p>
        <div class="cal">${cells.map(d => `<i class="${S.days[ymd(d)] ? "on" : ""} ${d > end ? "future" : ""}" title="${ymd(d)}"></i>`).join("")}</div>
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

  /* ───────── Backup ───────── */
  function exportData() {
    const blob = new Blob([JSON.stringify(S, null, 1)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "esin-fr-backup-" + ymd() + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  function importData(text) {
    try {
      const obj = JSON.parse(text);
      if (!obj || typeof obj !== "object" || obj.v !== 1) throw new Error("bad");
      S = Object.assign(DEFAULT(), obj); save(); LIB = Object.assign(LIB, S.lib || {});
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
    const { parts, params } = route();
    const top = parts[0] || "home";
    const tab = { home: "home", path: "path", library: "library", cards: "cards", more: "more", guide: "more", placement: "more", progress: "more" }[top] || "home";
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
      default: html = viewHome();
    }
    main.innerHTML = `<div class="view ${raw !== lastRendered ? "anim" : ""}">${html}</div>`;
    lastRendered = raw;
    if (top === "library") { renderLibList(); }
    if (top === "placement") placementResult();
    const st = params.get("step");
    if (st) { const el = document.getElementById("step-" + st); if (el) el.scrollIntoView({ block: "start" }); }
  }
  let lastTop = null;
  window.addEventListener("hashchange", () => {
    const top = route().parts[0] || "home";
    if (top !== "cards") SESSION = null;
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
    if (d.speak) { speak(d.speak); return; }
    if (d.open) { if (!S.res[d.open]) { S.res[d.open] = Date.now(); practised(); save(); } return; }
    if (d.fav) { S.fav[d.fav] ? delete S.fav[d.fav] : (S.fav[d.fav] = 1); save(); el.classList.toggle("on"); el.textContent = S.fav[d.fav] ? "★" : "☆"; el.setAttribute("aria-pressed", !!S.fav[d.fav]); return; }
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
      case "practised": practised(); toast(t("toast.done")); render(); break;
      case "dismiss-welcome": S.welcomed = true; save(); render(); break;
      case "lib-reset": LIB = { q: "", level: "", type: "", track: "", skill: "", freeOnly: false, tr: false, favs: false }; render(); break;
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
  });
  document.addEventListener("change", e => {
    if (e.target.matches("#placement input")) placementResult();
    if (e.target.id === "new-limit") { S.newPerSession = +e.target.value; save(); }
    if (e.target.id === "import-file" && e.target.files[0]) {
      const r = new FileReader(); r.onload = () => importData(r.result); r.readAsText(e.target.files[0]);
    }
  });
  document.addEventListener("submit", e => {
    if (e.target.id === "add-word") {
      e.preventDefault();
      const f = new FormData(e.target); const fr = (f.get("fr") || "").trim(); const tr = (f.get("tr") || "").trim();
      if (!fr) return;
      S.mine.push({ id: "mine:" + fr + ":" + Date.now().toString(36), fr, tr, en: "", note: "" });
      save(); toast(t("toast.saved")); render();
    }
  });
  document.addEventListener("keydown", e => {
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
