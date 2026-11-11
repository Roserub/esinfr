/* Opens the LIVE site (or the URL given) the way Esin does: iPhone Safari (WebKit), iPad, and Chrome on a Mac,
   with the launch splash ON, then a second visit, and checks that the app really shows up (splash gone, home
   screen rendered, no script error). Screenshots go to live-shots/.
   Run: node tools/live-check.js [url]   (needs the "playwright" package with WebKit and Chromium) */
const fs = require("fs");
const { webkit, chromium, devices } = require("playwright");
const URL = process.argv[2] || "https://roserub.github.io/esinfr/";
const RUNS = [
  ["iphone-safari", webkit, devices["iPhone 13"]],
  ["ipad-safari", webkit, devices["iPad (gen 7)"]],
  ["mac-chrome", chromium, { viewport: { width: 1440, height: 900 } }],
];
fs.mkdirSync("live-shots", { recursive: true });
(async () => {
  const problems = [];
  for (const [name, engine, opts] of RUNS) {
    const browser = await engine.launch();
    const ctx = await browser.newContext(opts);
    /* behave like a real visitor: the splash is skipped for automated browsers */
    await ctx.addInitScript(() => { try { Object.defineProperty(Navigator.prototype, "webdriver", { get: () => false }); } catch (e) {} });
    const page = await ctx.newPage();
    page.on("pageerror", e => problems.push(`${name}: page error ${e.message}`));
    /* a passing 5xx from GitHub Pages is GitHub's hiccup, not ours: report it, fail only if the app then doesn't show */
    page.on("response", r => { if (r.status() >= 500) console.log(`  (GitHub answered ${r.status()} for ${r.url()})`); else if (r.status() >= 400) problems.push(`${name}: HTTP ${r.status()} ${r.url()}`); });
    page.on("console", m => { if (m.type() === "error" && !/status of 5\d\d/.test(m.text())) problems.push(`${name}: console ${m.text()}`); });
    for (const visit of ["first", "second"]) {
      if (visit === "second") await page.evaluate(() => sessionStorage.clear());
      const res = await page.goto(URL, { waitUntil: "load", timeout: 60000 });
      if (!res || !res.ok()) problems.push(`${name} ${visit}: HTTP ${res && res.status()}`);
      const sawSplash = await page.evaluate(() => !!document.getElementById("splash"));
      await page.waitForTimeout(8000); /* splash must leave by itself (max 5.5 s) */
      const st = await page.evaluate(() => ({
        splash: !!document.getElementById("splash"),
        splashing: document.documentElement.classList.contains("splashing"),
        main: (document.querySelector("main") || {}).innerText ? document.querySelector("main").innerText.trim().length : 0,
      }));
      await page.screenshot({ path: `live-shots/${name}-${visit}.png` });
      console.log(`${name} ${visit}: splash seen=${sawSplash} still there=${st.splash} locked=${st.splashing} home text=${st.main}`);
      if (st.splash || st.splashing) problems.push(`${name} ${visit}: splash never went away`);
      if (st.main < 100) problems.push(`${name} ${visit}: home screen is empty`);
    }
    await browser.close();
  }
  if (problems.length) { console.error("\nPROBLEMS\n" + [...new Set(problems)].join("\n")); process.exit(1); }
  console.log("\nLive site OK on iPhone, iPad and Mac");
})();
