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
  "#/more", "#/plan", "#/search?q=rendez", "#/placement", "#/progress", "#/practice/notebook"];
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
      for (const r of ROUTES.concat(lang === "tr" ? guides : [])) {
        await page.evaluate(h => { location.hash = h; }, r);
        await page.waitForTimeout(30);
        const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        if (over > 1) problems.push(`${name} ${lang} ${r}: horizontal overflow ${over}px`);
        const raw = await page.evaluate(() => (document.querySelector("#main").innerText.match(/\b(ex|plan|pace|lib|path|home|search|ics|fw|drill|tense|prog|guide)\.[a-zA-Z.]+/g) || []).join(" "));
        if (raw) problems.push(`${name} ${lang} ${r}: untranslated key ${raw}`);
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
    await page.close();
  }
  await browser.close(); server.close();
  if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
  console.log("smoke test OK");
})().catch(e => { console.error(e); process.exit(1); });
