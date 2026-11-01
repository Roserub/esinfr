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
  "#/exam", "#/exam/A2", "#/exam/A1/s/1", "#/exam/A2/sec/po", "#/exam/A1/sec/co"];
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
      if (ids.length < 250) problems.push(`only ${ids.length} DELF exercises`);
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
    await page.close();
  }
  await browser.close(); server.close();
  if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
  console.log("smoke test OK");
})().catch(e => { console.error(e); process.exit(1); });
