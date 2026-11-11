/* End-to-end smoke test: serves the site, opens every screen on phone, iPad and Mac sizes,
   plays each exercise, and fails on any console error or horizontal overflow.
   Run: node tools/smoke-test.js   (needs the "playwright" package and a Chromium) */
const http = require("http"), fs = require("fs"), path = require("path");
const { chromium } = require("playwright");
const ROOT = path.join(__dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webmanifest": "application/manifest+json", ".json": "application/json" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]); if (p.endsWith("/")) p += "index.html";
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(res);
});

const ROUTES = ["#/", "#/session", "#/cards/today", "#/path", "#/path/A0", "#/path/A2", "#/path/B1", "#/practice", "#/library", "#/cards", "#/cards/survival", "#/cards/falsefriends/list",
  "#/more", "#/plan", "#/search?q=rendez", "#/placement", "#/progress", "#/practice/notebook", "#/read", "#/read/r-seance", "#/talk", "#/talk/d-kine", "#/path/C1",
  "#/exam", "#/exam/A2", "#/exam/A1/s/1", "#/exam/A2/sec/po", "#/exam/A1/sec/co",
  "#/exam/A1/s/20", "#/exam/A2/s/20", "#/exam/A1/s/50", "#/exam/A2/s/50", "#/exam/A2/survie", "#/games", "#/games/memory/A1", "#/games/order/A2", "#/adv", "#/adv/av-cafe", "#/adv/av-train",
  "#/basics", "#/basics/alphabet", "#/basics/sounds", "#/basics/numbers", "#/basics/house", "#/basics/house/quiz", "#/basics/alphabet/quiz", "#/read/r-cafe"];
const EXERCISES = ["sounds", "numbers", "listen", "dictation", "conj", "gender", "mistakes", "speak"];
const SIZES = { phone: { width: 375, height: 760 }, ipad: { width: 820, height: 1180 }, mac: { width: 1440, height: 900 } };

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = `http://localhost:${server.address().port}/index.html`;
  const browser = await chromium.launch();
  const problems = [];
  for (const [name, viewport] of Object.entries(SIZES)) {
    const page = await browser.newPage({ viewport });
    page.on("pageerror", e => problems.push(`${name}: page error ${e.message}`));
    page.on("console", m => { if (m.type() === "error") problems.push(`${name}: console ${m.text()}`); });
    await page.goto(base);
    const guides = await page.evaluate(() => window.GUIDE.map(g => "#/guide/" + g.id));
    for (const lang of ["tr", "en", "fr"]) {
      await page.click(`.lang-switch [data-lang=${lang}]`);
      for (const r of ROUTES.concat(lang !== "en" ? guides : [])) {
        await page.evaluate(h => { location.hash = h; }, r);
        await page.waitForTimeout(30);
        const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        if (over > 1) problems.push(`${name} ${lang} ${r}: horizontal overflow ${over}px`);
        const raw = await page.evaluate(() => (document.querySelector("#main").innerText.match(/\b(ex|plan|pace|lib|path|home|search|ics|fw|drill|tense|prog|guide|rd|dg|cards|dx|focus|vc|ss|bk)\.[a-zA-Z.]+/g) || []).join(" "));
        if (raw) problems.push(`${name} ${lang} ${r}: untranslated key ${raw}`);
        if (lang === "fr" && r.startsWith("#/guide/") && await page.evaluate(() => document.querySelector("#main").innerText.includes(window.I18N.fr["guide.inEnglish"]))) problems.push(`${name} fr ${r}: guide page not in French`);
      }
      if (lang === "fr") {
        await page.evaluate(() => { location.hash = "#/library"; });
        await page.waitForTimeout(50);
        const inFr = await page.evaluate(() => { const txt = document.querySelector("#main").innerText; return window.RESOURCES.some(r => txt.includes(r.d.fr)) && !window.RESOURCES.some(r => txt.includes(r.d.en)); });
        if (!inFr) problems.push(`${name} fr: resource descriptions not in French`);
        await page.evaluate(() => { location.hash = "#/guide/pron"; });
        if (!(await page.evaluate(() => document.querySelector("#main").innerText.includes("Règle d'or")))) problems.push(`${name} fr: pronunciation guide not in French`);
      }
    }
    // Play every exercise once (10 answers each).
    for (const ex of EXERCISES) {
      await page.evaluate(h => { location.hash = h; }, "#/practice/" + ex);
      for (let i = 0; i < 10; i++) {
        if (await page.$(".opt:not([disabled])")) await page.click(".opt:not([disabled])");
        else if (await page.$("#ex-in:not([readonly])")) { await page.fill("#ex-in", "test"); await page.press("#ex-in", "Enter"); }
        else if (await page.$("[data-ans='✓']")) await page.click("[data-ans='✓']");
        if (!(await page.$("#ex-next"))) { problems.push(`${name}: ${ex} item ${i}: no next button: ` + (await page.evaluate(() => document.querySelector("#main").innerText.slice(0, 300)))); break; }
        await page.click("#ex-next");
      }
      if (!(await page.$(".ex-end"))) problems.push(`${name}: exercise ${ex} did not reach the end screen`);
    }
    // Reading: answer every question, the score must be saved.
    await page.evaluate(() => { location.hash = "#/read/r-cafe"; });
    for (let i = 0; i < 6; i++) { const o = await page.$(".rq .opt:not([disabled])"); if (!o) break; await o.click(); }
    if (!(await page.evaluate(() => !!JSON.parse(localStorage.getItem("esinfr.v1")).read["r-cafe"]))) problems.push(`${name}: reading score not saved`);
    // Dialogue: role-play hides my lines, reveal shows one.
    await page.evaluate(() => { location.hash = "#/talk/d-boulangerie"; });
    await page.click("[data-action=dg-role]");
    const hidden = await page.$$eval("[data-reveal]", els => els.length);
    if (hidden < 3) problems.push(`${name}: role-play hides only ${hidden} lines`);
    await page.click("[data-reveal]");
    if ((await page.$$eval("[data-reveal]", els => els.length)) !== hidden - 1) problems.push(`${name}: reveal did not work`);
    // Mistakes review empties the notebook when answered right (choice items only: click the right option).
    await page.evaluate(() => { location.hash = "#/practice/notebook"; });
    if (!(await page.$("[data-delerr]"))) problems.push(`${name}: notebook is empty after wrong answers`);
    // Weekly plan: tick today's first task, it must be saved.
    await page.evaluate(() => { location.hash = "#/plan"; });
    const box = await page.$(".plan-day.today .plan-list input");
    if (box) { await box.click(); await page.waitForTimeout(50); const saved = await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem("esinfr.v1")).plan).length); if (!saved) problems.push(`${name}: plan tick not saved`); }
    // Today's session: 3-4 steps; finishing today's cards ticks the first one; the bar on the step page leads back.
    await page.evaluate(() => { location.hash = "#/session"; });
    const steps = await page.$$(".sess-step");
    if (steps.length < 3) problems.push(`${name}: today's session has ${steps.length} steps`);
    await page.click('.sess-step a[data-sess="cards"]');
    if (!(await page.$(".sess-back"))) problems.push(`${name}: no way back to the session from today's cards`);
    for (let k = 0; k < 60 && await page.$("[data-action=flip], .grade"); k++) { if (await page.$("[data-action=flip]")) await page.click("[data-action=flip]"); await page.click("[data-grade=good]"); }
    await page.evaluate(() => { location.hash = "#/session"; });
    if (!(await page.$(".sess-step.is-done"))) problems.push(`${name}: cards step not ticked after today's cards`);
    // Typed cards: the right answer typed without accents, in capitals, counts as right.
    await page.evaluate(() => { const s = JSON.parse(localStorage.getItem("esinfr.v1")); s.typeMode = true; localStorage.setItem("esinfr.v1", JSON.stringify(s)); location.hash = "#/cards/survival"; location.reload(); });
    await page.waitForSelector("#type-in");
    const fr = await page.evaluate(() => window.DECKS.find(d => d.id === "survival").cards.find(c => !JSON.parse(localStorage.getItem("esinfr.v1")).cards[c.id]).fr);
    await page.fill("#type-in", fr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase());
    await page.press("#type-in", "Enter");
    if (!(await page.$(".type-fb.exact"))) problems.push(`${name}: typed answer "${fr}" without accents not accepted`);
    await page.evaluate(() => { const s = JSON.parse(localStorage.getItem("esinfr.v1")); s.typeMode = false; localStorage.setItem("esinfr.v1", JSON.stringify(s)); location.hash = "#/"; location.reload(); });
    await page.waitForSelector(".sess-home");
    // Library filters.
    await page.evaluate(() => { location.hash = "#/library"; });
    await page.click("[data-toggle=star]");
    const n = await page.$$eval("#lib-list .res", els => els.length);
    if (n < 10) problems.push(`${name}: top picks filter shows ${n}`);
    // DELF mock exams: every exercise renders (phone), whole papers reach the score screen, quick challenge ends.
    if (name === "phone") {
      const ids = await page.evaluate(() => (window.DELF || []).map(x => x.id));
      if (ids.length < 500) problems.push(`only ${ids.length} DELF exercises`);
      for (const id of ids) {
        await page.evaluate(id => window.EXAM.start([id], "ex", id.slice(0, 2).toUpperCase(), null), id);
        if (!(await page.evaluate(() => !!document.querySelector(".dx-h")))) problems.push(`DELF ${id} did not render`);
        const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        if (over > 1) problems.push(`DELF ${id}: horizontal overflow ${over}px`);
      }
    }
    for (const [lv, sj] of [["A1", 1], ["A2", 1], ["A1", 27], ["A2", 50]]) {
      await page.evaluate(([lv, sj]) => { location.hash = "#/exam/" + lv + "/s/" + sj; }, [lv, sj]);
      await page.click("[data-dx=start][data-kind=sujet]");
      await page.waitForSelector(".dx-h");
      for (let step = 0; step < 20; step++) {
        const nq = (await page.$$(".dx-q")).length;
        for (let k = 1; k <= nq; k++) { const sel = `.dx-q:nth-child(${k}) .opt:not([disabled])`; if (await page.$(sel)) await page.click(sel); }
        if (await page.$("[data-dx=check]")) await page.click("[data-dx=check]");
        if (await page.$("#dx-form")) {
          const nf = (await page.$$("[data-dxf]")).length;
          for (let k = 0; k < nf; k++) { const tag = await page.$eval(`#dx-f${k}`, e => e.tagName + ":" + e.type); if (tag.startsWith("SELECT")) await page.selectOption(`#dx-f${k}`, { index: 1 }); else await page.fill(`#dx-f${k}`, tag.endsWith("date") ? "2026-11-01" : "Martin 0612345678 esin@exemple.fr"); }
          await page.click("[data-dx=checkform]");
        }
        if (await page.$("#dx-text")) { await page.fill("#dx-text", "Bonjour, je suis désolée, je ne peux pas venir samedi. Merci beaucoup pour l'invitation. On se voit dimanche ? Bises."); await page.click("[data-dx=checktext]"); for (let i = 0; i < 4; i++) await page.click(`[data-dx=rub][data-i='${i}'][data-v='1']`); }
        while (await page.$("[data-dx=answered]")) await page.click("[data-dx=answered]");
        if (await page.$("[data-dx=dlg-next]")) await page.click("[data-dx=dlg-next]");
        if (await page.$("[data-dx=checkpo]")) { if (await page.$("[data-dx=tick]")) await page.click("[data-dx=tick]"); await page.click("[data-dx=checkpo]"); for (let i = 0; i < 4; i++) await page.click(`[data-dx=rub][data-i='${i}'][data-v='2']`); }
        if (await page.$("[data-dx=next]")) await page.click("[data-dx=next]"); else break;
      }
      if (!(await page.$(".dx-result .dx-ring"))) problems.push(`${name}: DELF ${lv} paper ${sj} did not reach the score screen`);
      const best = await page.evaluate(([lv, sj]) => (JSON.parse(localStorage.getItem("esinfr.v1")).delf.best || {})[lv + "-" + sj], [lv, sj]);
      if (!best) problems.push(`${name}: DELF ${lv} paper ${sj} score not saved`);
    }
    await page.evaluate(() => { location.hash = "#/exam/A1/flash"; });
    for (let i = 0; i < 10; i++) { await page.click("[data-dx=flash-pick]"); await page.click("[data-dx=flash-next]"); }
    if (!(await page.$(".dx-result"))) problems.push(`${name}: quick challenge did not end`);
    // Every main section is one tap away: the five-tab bar (Doucement design), and the 3x3 grid on Today holds DELF, games and the rest.
    await page.evaluate(() => { location.hash = "#/"; });
    await page.waitForSelector(".quick");
    const tabs = await page.$$eval(".tabbar a", as => as.map(a => a.dataset.tab));
    for (const tb of ["home", "path", "practice", "cards", "more"]) if (!tabs.includes(tb)) problems.push(`${name}: no ${tb} button in the bottom bar`);
    const quick = await page.$$eval(".quick a", as => as.map(a => a.getAttribute("href")));
    for (const h of ["#/basics", "#/exam", "#/adv", "#/games", "#/practice", "#/read", "#/talk", "#/cards", "#/library"]) if (!quick.includes(h)) problems.push(`${name}: quick grid misses ${h}`);
    // Tab labels are never cut off, in any language.
    for (const lg of ["tr", "en", "fr"]) {
      await page.click(`.lang-switch [data-lang=${lg}]`);
      const cut = await page.$$eval(".tabbar a span:last-child", ss => ss.filter(s => s.scrollWidth > s.clientWidth + 1).map(s => s.textContent));
      if (cut.length) problems.push(`${name} ${lg}: tab labels cut off: ${cut.join(", ")}`);
    }
    // Cards: the DELF decks have their own filter, reachable from the DELF tab.
    await page.evaluate(() => { location.hash = "#/cards?f=delf"; });
    const delfDecks = await page.$$eval(".decks .deck", ds => ds.length);
    if (delfDecks < 20) problems.push(`${name}: DELF deck filter shows ${delfDecks} decks`);
    await page.evaluate(() => { location.hash = "#/exam"; });
    if (!(await page.$('.dx-study a[href="#/cards?f=delf"]'))) problems.push(`${name}: no DELF decks link on the DELF tab`);
    await page.evaluate(() => { location.hash = "#/"; }); await page.click('.quick a[href="#/games"]'); await page.waitForSelector(".gm-adv-tile");
    if (!(await page.$('.tabbar a[data-tab="home"].on'))) problems.push(`${name}: home tab not highlighted on games`);
    // Interface emojis are drawn as Lucide icons (tab bar, home grid, listen buttons); the logo is the Moody cat.
    await page.evaluate(() => { location.hash = "#/"; }); await page.waitForTimeout(50);
    if ((await page.$$(".tabbar .ic")).length !== 5) problems.push(`${name}: tab bar icons missing`);
    if ((await page.$$(".quick .ic")).length !== 9) problems.push(`${name}: home grid icons missing`);
    if (!(await page.$('.brand img[src="assets/logo.svg"]'))) problems.push(`${name}: Moody logo missing in the header`);
    await page.evaluate(() => { location.hash = "#/read/r-cafe"; }); await page.waitForTimeout(50);
    if (await page.$$eval(".speak", bs => bs.some(b => /\u{1F50A}/u.test(b.textContent)))) problems.push(`${name}: a listen button still shows an emoji`);
    // Survival: always pick the first option until the three lives are gone.
    await page.evaluate(() => { location.hash = "#/exam/A2/survie"; });
    for (let i = 0; i < 400 && !(await page.$(".dx-result")); i++) { await page.click("[data-dx=flash-pick]"); await page.click("[data-dx=flash-next]"); }
    if (!(await page.$(".dx-result"))) problems.push(`${name}: survival did not end`);
    // Adventures: play every story to the end (one wrong answer first, then the good ones).
    const advIds = await page.evaluate(() => (window.ADVENTURES || []).map(a => a.id));
    if (advIds.length < 20) problems.push(`only ${advIds.length} adventures`);
    const okFirst = [0, 0]; // [not first, first]: with shuffled options the right answer must not sit on top every time
    for (const id of name === "phone" ? advIds : advIds.slice(0, 2)) {
      await page.evaluate(id => { location.hash = "#/adv/" + id; }, id);
      await page.waitForSelector(".av-h");
      let triedWrong = false;
      for (let step = 0; step < 40 && !(await page.$(".av-end")); step++) {
        if (await page.$("[data-gm=av-go]")) { await page.click("[data-gm=av-go]"); continue; }
        const pick = await page.evaluate(id => {
          const a = window.ADVENTURES.find(x => x.id === id), texts = [...document.querySelectorAll("[data-gm=av-pick] [lang=fr]")].map(e => e.textContent);
          // options are shown shuffled: find the step by its set of options, then use the original index (data-i)
          const key = l => l.slice().sort().join("|");
          const n = Object.values(a.nodes).find(n => n.choices && key(n.choices.map(c => c.fr)) === key(texts));
          const okPos = [...document.querySelectorAll("[data-gm=av-pick]")].findIndex(b => n && n.choices[+b.dataset.i].ok);
          return n ? { ok: n.choices.findIndex(c => c.ok), bad: n.choices.findIndex(c => !c.ok && !c.go), okPos } : null;
        }, id);
        if (!pick) { problems.push(`${name}: adventure ${id} lost its node`); break; }
        if (!triedWrong) okFirst[pick.okPos === 0 ? 1 : 0]++;
        if (!triedWrong && pick.bad >= 0) { triedWrong = true; await page.click(`[data-gm=av-pick][data-i="${pick.bad}"]`); if (!(await page.$(".av-fb"))) problems.push(`${name}: adventure ${id} shows no feedback`); }
        await page.click(`[data-gm=av-pick][data-i="${pick.ok}"]`);
      }
      if (!(await page.$(".av-end"))) problems.push(`${name}: adventure ${id} did not reach the end`);
      const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (over > 1) problems.push(`${name}: adventure ${id}: horizontal overflow ${over}px`);
    }
    if (name === "phone" && okFirst[1] > 0.7 * (okFirst[0] + okFirst[1])) problems.push(`adventures: right answer shown first ${okFirst[1]}/${okFirst[0] + okFirst[1]} times (options not shuffled?)`);
    // Memory: match the pairs using the game's own tiles, then the sentence puzzle with the right order.
    await page.evaluate(() => { location.hash = "#/games/memory/A1"; });
    await page.waitForSelector(".mem-grid");
    const memPairs = await page.evaluate(() => { const a = [...document.querySelectorAll(".mem")]; return a.length; });
    if (memPairs !== 12) problems.push(`${name}: memory has ${memPairs} cards`);
    for (let i = 0; i < 12; i++) {
      for (let j = i + 1; j < 12; j++) {
        if (await page.$(`.mem[data-i="${i}"].ok`)) break;
        if (await page.$(`.mem[data-i="${j}"].ok`)) continue;
        await page.click(`.mem[data-i="${i}"]`); await page.click(`.mem[data-i="${j}"]`);
        if (await page.$(`.mem[data-i="${i}"].ok`)) break;
        await page.waitForTimeout(1150);
      }
    }
    if (!(await page.$(".av-end"))) problems.push(`${name}: memory did not end`);
    await page.evaluate(() => { location.hash = "#/games/order/A1"; });
    for (let r = 0; r < 8; r++) {
      await page.waitForSelector(".ord-bank");
      const n = (await page.$$(".ord-bank .tok")).length;
      for (let k = 0; k < n; k++) await page.click(".ord-bank .tok");
      await page.click("[data-gm=ord-check]"); await page.click("[data-gm=ord-next]");
    }
    if (!(await page.$(".dx-result"))) problems.push(`${name}: sentence puzzle did not end`);
    await page.close();
  }
  // Audio: with a fake speech engine, "Listen" reads the whole recording, even when the
  // first utterance is dropped and when the engine never says it has finished.
  for (const mode of ["drop", "noend", "badvoice"]) {
    const ctx = await browser.newContext({ viewport: SIZES.phone });
    await ctx.addInitScript(mode => {
      const log = window.__said = []; let cur = null, q = [], drop = mode === "drop" ? 1 : 0;
      const S = { speaking: false, pending: false, paused: false, getVoices: () => [{ name: "Amélie", lang: "fr-FR", localService: true }], addEventListener() {}, resume() {},
        cancel() { q = []; if (cur) { const u = cur; cur = null; S.speaking = false; if (u.onerror) u.onerror({ error: "interrupted" }); } },
        speak(u) { if (drop) { drop--; return; } if (mode === "badvoice" && u.voice) { S.speaking = true; cur = u; return; } q.push(u); if (!cur) S.next(); },
        next() { const u = q.shift(); if (!u) return; cur = u; S.speaking = true; setTimeout(() => { if (cur !== u) return; log.push(u.text); if (u.onstart) u.onstart(); setTimeout(() => { if (cur !== u) return; cur = null; S.speaking = false; if (mode !== "noend" && u.onend) u.onend(); S.next(); }, 20); }, 5); } };
      Object.defineProperty(window, "speechSynthesis", { value: S, configurable: true });
      window.SpeechSynthesisUtterance = function (t) { this.text = t; this.pitch = 1; };
    }, mode);
    const page = await ctx.newPage();
    await page.goto(base + "#/exam");
    await page.evaluate(() => window.EXAM.start(["a1-s19-co1"], "ex", "A1", null));
    await page.click("[data-dx=play]");
    const want = await page.evaluate(() => window.DELF.find(x => x.id === "a1-s19-co1").audio.map(l => l[1]).join(" ").replace(/[\s,]/g, ""));
    await page.waitForFunction(n => window.__said.join("").replace(/[\s,]/g, "").length >= n, want.length, { timeout: 60000 }).catch(() => {});
    const got = await page.evaluate(() => window.__said.join("").replace(/[\s,]/g, ""));
    if (got !== want) problems.push(`audio (${mode}): read ${got.length}/${want.length} characters of DELF A1 19 listening 1`);
    // "Listen to all" on a reading and on a dialogue reads everything to the end.
    if (mode === "drop") for (const [kind, id] of [["read", "r-cafe"], ["talk", (await page.evaluate(() => window.DIALOGUES[0].id))], ["basics", "calendar"]]) {
      await page.evaluate(h => { location.hash = h; }, `#/${kind}/${id}`);
      await page.waitForSelector("[data-speakall]");
      const all = await page.evaluate(([kind, id]) => (kind === "read" ? window.READINGS.find(r => r.id === id).text : kind === "talk" ? window.DIALOGUES.find(d => d.id === id).lines.map(l => l.fr).join(" ")
        : window.BASICS_UI.lines("b:" + id + ":0").lines.map(l => l[1]).join(" ")).replace(/[\s,]/g, ""), [kind, id]);
      await page.waitForSelector("[data-speakall]");
      await page.evaluate(() => { window.__said.length = 0; });
      await page.click("[data-speakall]");
      await page.waitForTimeout(15);
      if (!(await page.$("[data-speakall].is-playing"))) problems.push(`audio: "listen to all" on ${kind} shows no playing state`);
      await page.waitForFunction(() => !!document.querySelector("[data-pl].speaking"), null, { timeout: 3000 }).catch(() => problems.push(`audio: "listen to all" on ${kind} highlights nothing`));
      await page.waitForFunction(n => window.__said.join("").replace(/[\s,]/g, "").length >= n, all.length, { timeout: 60000 }).catch(() => {});
      const heard = await page.evaluate(() => window.__said.join("").replace(/[\s,]/g, ""));
      if (heard !== all) problems.push(`audio: "listen to all" on ${kind} ${id} read ${heard.length}/${all.length} characters`);
    }
    await ctx.close();
  }
  // Cheat buttons show the real translation; the Basics quiz plays to the end and saves a score.
  {
    const page = await browser.newPage({ viewport: SIZES.phone });
    page.on("pageerror", e => problems.push(`cheat: page error ${e.message}`));
    await page.goto(base + "#/read/r-cafe");
    await page.click("[data-rdtr='0']");
    if (!(await page.evaluate(() => { const x = window.READING_TR["r-cafe"], s = document.querySelector("#main").innerText; return s.includes(x.tr[0]) || s.includes(x.en[0]); }))) problems.push("cheat: reading paragraph translation not shown");
    await page.click("[data-rqtr='0']");
    if (!(await page.$(".rq .opt-tr"))) problems.push("cheat: question translation not shown");
    const did = await page.evaluate(() => window.DIALOGUES[0].id);
    await page.evaluate(h => { location.hash = h; }, "#/talk/" + did);
    await page.click("[data-dgtr='0']");
    if (!(await page.evaluate(() => [window.DIALOGUES[0].lines[0].tr, window.DIALOGUES[0].lines[0].en].some(x => document.querySelector(".bubble .tr-line").innerText.includes(x))))) problems.push("cheat: dialogue line translation not shown");
    await page.click("[data-action='tr-all']");
    if ((await page.$$(".bubble .tr-line")).length !== await page.evaluate(() => window.DIALOGUES[0].lines.length)) problems.push("cheat: 'all translations' does not show every line");
    for (const b of await page.evaluate(() => window.BASICS.map(x => x.id))) {
      await page.evaluate(h => { location.hash = h; }, "#/basics/" + b + "/quiz");
      for (let i = 0; i < 12 && await page.$("[data-bs='ans']:not([disabled])"); i++) { await page.click("[data-bs='ans']:not([disabled])"); await page.click("[data-bs='next']"); }
      if (!(await page.$(".ex-end"))) problems.push(`basics ${b}: quiz did not end`);
    }
    if (await page.evaluate(() => Object.keys(window.APP.S.basics).length) !== await page.evaluate(() => window.BASICS.length)) problems.push("basics: quiz scores not saved");
    await page.close();
  }
  // Speech recognition: with a fake recogniser, the panel shows live words, then a word-by-word comparison,
  // a retry, clear error messages, and a fallback when the browser has no recogniser.
  for (const [name, viewport] of Object.entries(SIZES)) {
    const ctx = await browser.newContext({ viewport });
    await ctx.addInitScript(() => {
      class FakeSR { constructor() { window.__sr = this; } start() {} stop() { this._end(); } abort() { this._end(); }
        _end() { if (this.done) return; this.done = true; setTimeout(() => this.onend && this.onend(), 10); } }
      window.SpeechRecognition = FakeSR;
      window.__srSay = parts => window.__sr.onresult({ results: parts.map(([txt, fin]) => Object.assign([{ transcript: txt }], { isFinal: fin })) });
      window.__srErr = code => { window.__sr.onerror({ error: code }); window.__sr._end(); };
    });
    const page = await ctx.newPage();
    page.on("pageerror", e => problems.push(`voice ${name}: page error ${e.message}`));
    const fail = m => problems.push(`voice ${name}: ${m}`);
    await page.goto(base + "#/practice/speak");
    const target = await page.evaluate(() => document.querySelector(".ex-card .fr-big").innerText.trim());
    await page.click("[data-vc=start]");
    if (!(await page.$(".vc.listening .vc-dot"))) fail("no listening state");
    await page.evaluate(t => window.__srSay([[t.split(" ")[0], true], [t, false]]), target);
    if (!(await page.evaluate(() => document.querySelector(".vc-mid").textContent.length > 0))) fail("interim words not shown live");
    // Partial answer: only the first word.
    await page.evaluate(t => { window.__srSay([[t.split(" ")[0], true]]); window.__sr.stop(); }, target);
    await page.waitForSelector(".vc.done", { timeout: 3000 }).catch(() => fail("no result after a partial answer"));
    if (target.split(" ").length > 2 && !(await page.$(".vc-w.miss"))) fail("missed words not highlighted");
    if (name === "phone") await page.screenshot({ path: path.join(require("os").tmpdir(), "vc-partial.png"), fullPage: true });
    // Retry with the full sentence: everything matched, then continue.
    await page.click("[data-vc=start]");
    await page.evaluate(t => { window.__srSay([[t, true]]); window.__sr.stop(); }, target);
    await page.waitForSelector(".vc.done .vc-next", { timeout: 3000 }).catch(() => fail("no result after retry"));
    if (await page.$(".vc-cmp .vc-w.miss")) fail("full sentence still shows missed words: " + target);
    if (name !== "phone") await page.screenshot({ path: path.join(require("os").tmpdir(), `vc-done-${name}.png`), fullPage: true });
    await page.click(".vc-next");
    if (!(await page.$(".fb.ok"))) fail("full sentence not accepted");
    await page.click("#ex-next");
    // Errors: microphone blocked, then silence.
    for (const [code, key] of [["not-allowed", "vc.e.perm"], ["no-speech", "vc.e.silence"]]) {
      await page.click("[data-vc=start]");
      await page.evaluate(c => window.__srErr(c), code);
      await page.waitForSelector(".vc.error", { timeout: 3000 }).catch(() => {});
      const ok = await page.evaluate(k => document.querySelector(".vc").innerText.includes(window.APP.t(k).slice(0, 20)), key);
      if (!ok) fail(`error ${code} not explained`);
    }
    // DELF speaking: a free answer is shown as heard.
    await page.evaluate(() => window.EXAM.start([window.DELF.find(x => x.sec === "po" && x.kind === "entretien").id], "ex", "A1", null));
    await page.waitForSelector(".vc [data-vc=start]");
    await page.click("[data-vc=start]");
    await page.evaluate(() => { window.__srSay([["je m'appelle Esin", true]]); window.__sr.stop(); });
    await page.waitForSelector(".vc.done", { timeout: 3000 }).catch(() => fail("DELF answer not shown"));
    if (!(await page.evaluate(() => document.querySelector(".vc.done").innerText.includes("je m'appelle Esin")))) fail("DELF transcript missing");
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (over > 1) fail(`horizontal overflow ${over}px`);
    await ctx.close();
  }
  // No recogniser (Firefox, old iPhone): explain, keep "I said it" and offer recording.
  {
    const ctx = await browser.newContext({ viewport: SIZES.phone });
    await ctx.addInitScript(() => { delete window.webkitSpeechRecognition; delete window.SpeechRecognition; window.webkitSpeechRecognition = undefined; });
    const page = await ctx.newPage();
    await page.goto(base + "#/practice/speak");
    if (!(await page.$(".vc.unsupported"))) problems.push("voice: no unsupported-browser message");
    await page.click("[data-ans='✓']");
    if (!(await page.$("#ex-next"))) problems.push("voice: 'I said it' fallback broken");
    await ctx.close();
  }
  await browser.close(); server.close();
  if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
  console.log("smoke test OK");
})().catch(e => { console.error(e); process.exit(1); });
