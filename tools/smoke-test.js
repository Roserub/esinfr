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

const ROUTES = ["#/", "#/path", "#/path/A0", "#/path/A2", "#/path/B1", "#/practice", "#/library", "#/cards", "#/cards/survival", "#/cards/falsefriends/list",
  "#/more", "#/plan", "#/search?q=rendez", "#/placement", "#/progress", "#/practice/notebook", "#/read", "#/read/r-seance", "#/talk", "#/talk/d-kine", "#/path/C1",
  "#/exam", "#/exam/A2", "#/exam/A1/s/1", "#/exam/A2/sec/po", "#/exam/A1/sec/co",
  "#/exam/A1/s/20", "#/exam/A2/s/20", "#/exam/A2/survie", "#/games", "#/games/memory/A1", "#/games/order/A2", "#/adv", "#/adv/av-cafe", "#/adv/av-train"];
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
        const raw = await page.evaluate(() => (document.querySelector("#main").innerText.match(/\b(ex|plan|pace|lib|path|home|search|ics|fw|drill|tense|prog|guide|rd|dg|cards|dx|focus)\.[a-zA-Z.]+/g) || []).join(" "));
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
    await page.evaluate(() => { location.hash = "#/"; });
    const box = await page.$(".plan-list input");
    if (box) { await box.click(); await page.waitForTimeout(50); const saved = await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem("esinfr.v1")).plan).length); if (!saved) problems.push(`${name}: plan tick not saved`); }
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
    for (const lv of ["A1", "A2"]) {
      await page.evaluate(lv => { location.hash = "#/exam/" + lv + "/s/1"; }, lv);
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
        if (await page.$("#dx-text")) { await page.fill("#dx-text", "Bonjour, je suis désolée, je ne peux pas venir samedi. Merci beaucoup pour l'invitation. On se voit dimanche ? Bises."); await page.click("[data-dx=checktext]"); await page.click("[data-dx=self][data-v='1']"); }
        while (await page.$("[data-dx=answered]")) await page.click("[data-dx=answered]");
        if (await page.$("[data-dx=dlg-next]")) await page.click("[data-dx=dlg-next]");
        if (await page.$("[data-dx=checkpo]")) { if (await page.$("[data-dx=tick]")) await page.click("[data-dx=tick]"); await page.click("[data-dx=checkpo]"); await page.click("[data-dx=self][data-v='2']"); }
        if (await page.$("[data-dx=next]")) await page.click("[data-dx=next]"); else break;
      }
      if (!(await page.$(".dx-result .dx-ring"))) problems.push(`${name}: DELF ${lv} paper 1 did not reach the score screen`);
      const best = await page.evaluate(lv => (JSON.parse(localStorage.getItem("esinfr.v1")).delf.best || {})[lv + "-1"], lv);
      if (!best) problems.push(`${name}: DELF ${lv} paper 1 score not saved`);
    }
    await page.evaluate(() => { location.hash = "#/exam/A1/flash"; });
    for (let i = 0; i < 10; i++) { await page.click("[data-dx=flash-pick]"); await page.click("[data-dx=flash-next]"); }
    if (!(await page.$(".dx-result"))) problems.push(`${name}: quick challenge did not end`);
    // Every main section is one tap away: bottom bar has DELF and Games, Today has the quick grid.
    await page.evaluate(() => { location.hash = "#/"; });
    await page.waitForSelector(".quick");
    const tabs = await page.$$eval(".tabbar a", as => as.map(a => a.dataset.tab));
    for (const tb of ["home", "exam", "games", "practice", "cards", "more"]) if (!tabs.includes(tb)) problems.push(`${name}: no ${tb} button in the bottom bar`);
    const quick = await page.$$eval(".quick a", as => as.map(a => a.getAttribute("href")));
    for (const h of ["#/exam", "#/adv", "#/games", "#/read", "#/talk", "#/library"]) if (!quick.includes(h)) problems.push(`${name}: quick grid misses ${h}`);
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
    await page.click('.tabbar a[data-tab="games"]'); await page.waitForSelector(".gm-adv-tile");
    if (!(await page.$('.tabbar a[data-tab="games"].on'))) problems.push(`${name}: games tab not highlighted`);
    // Survival: always pick the first option until the three lives are gone.
    await page.evaluate(() => { location.hash = "#/exam/A2/survie"; });
    for (let i = 0; i < 400 && !(await page.$(".dx-result")); i++) { await page.click("[data-dx=flash-pick]"); await page.click("[data-dx=flash-next]"); }
    if (!(await page.$(".dx-result"))) problems.push(`${name}: survival did not end`);
    // Adventures: play every story to the end (one wrong answer first, then the good ones).
    const advIds = await page.evaluate(() => (window.ADVENTURES || []).map(a => a.id));
    if (advIds.length < 20) problems.push(`only ${advIds.length} adventures`);
    for (const id of name === "phone" ? advIds : advIds.slice(0, 2)) {
      await page.evaluate(id => { location.hash = "#/adv/" + id; }, id);
      await page.waitForSelector(".av-h");
      let triedWrong = false;
      for (let step = 0; step < 40 && !(await page.$(".av-end")); step++) {
        if (await page.$("[data-gm=av-go]")) { await page.click("[data-gm=av-go]"); continue; }
        const pick = await page.evaluate(id => {
          const a = window.ADVENTURES.find(x => x.id === id), texts = [...document.querySelectorAll("[data-gm=av-pick] [lang=fr]")].map(e => e.textContent);
          const n = Object.values(a.nodes).find(n => n.choices && n.choices.length === texts.length && n.choices.every((c, i) => c.fr === texts[i]));
          return n ? { ok: n.choices.findIndex(c => c.ok), bad: n.choices.findIndex(c => !c.ok && !c.go) } : null;
        }, id);
        if (!pick) { problems.push(`${name}: adventure ${id} lost its node`); break; }
        if (!triedWrong && pick.bad >= 0) { triedWrong = true; await page.click(`[data-gm=av-pick][data-i="${pick.bad}"]`); if (!(await page.$(".av-fb"))) problems.push(`${name}: adventure ${id} shows no feedback`); }
        await page.click(`[data-gm=av-pick][data-i="${pick.ok}"]`);
      }
      if (!(await page.$(".av-end"))) problems.push(`${name}: adventure ${id} did not reach the end`);
      const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (over > 1) problems.push(`${name}: adventure ${id}: horizontal overflow ${over}px`);
    }
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
  for (const mode of ["drop", "noend"]) {
    const ctx = await browser.newContext({ viewport: SIZES.phone });
    await ctx.addInitScript(mode => {
      const log = window.__said = []; let cur = null, q = [], drop = mode === "drop" ? 1 : 0;
      const S = { speaking: false, pending: false, paused: false, getVoices: () => [{ name: "Amélie", lang: "fr-FR", localService: true }], addEventListener() {}, resume() {},
        cancel() { q = []; if (cur) { const u = cur; cur = null; S.speaking = false; if (u.onerror) u.onerror({ error: "interrupted" }); } },
        speak(u) { if (drop) { drop--; return; } q.push(u); if (!cur) S.next(); },
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
    if (mode === "drop") for (const [kind, id] of [["read", "r-cafe"], ["talk", (await page.evaluate(() => window.DIALOGUES[0].id))]]) {
      await page.evaluate(h => { location.hash = h; }, `#/${kind}/${id}`);
      await page.waitForSelector("[data-speakall]");
      const all = await page.evaluate(([kind, id]) => (kind === "read" ? window.READINGS.find(r => r.id === id).text : window.DIALOGUES.find(d => d.id === id).lines.map(l => l.fr).join(" ")).replace(/[\s,]/g, ""), [kind, id]);
      await page.evaluate(() => { window.__said.length = 0; });
      await page.click("[data-speakall]");
      await page.waitForFunction(n => window.__said.join("").replace(/[\s,]/g, "").length >= n, all.length, { timeout: 60000 }).catch(() => {});
      const heard = await page.evaluate(() => window.__said.join("").replace(/[\s,]/g, ""));
      if (heard !== all) problems.push(`audio: "listen to all" on ${kind} ${id} read ${heard.length}/${all.length} characters`);
    }
    await ctx.close();
  }
  await browser.close(); server.close();
  if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
  console.log("smoke test OK");
})().catch(e => { console.error(e); process.exit(1); });
