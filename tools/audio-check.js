/* Audio check: every play button on the site speaks, with a French voice, exactly the French text it should.
   1. Content: every text the site can read aloud (readings, dialogues, Basics, cards, DELF listening and
      speaking, adventures, games, exercises) is checked: French only, no emoji, no Turkish or English, no markup.
   2. Buttons: every audio button on every screen is tapped; it must start speech and light up while playing.
   3. iPhone rules: a fake speech engine that behaves like iOS Safari (speech is blocked until a tap has
      started it, speaking right after a cancel can be dropped) must still play the main buttons to the end.
   Run: node tools/audio-check.js   (needs the "playwright" package and a Chromium) */
const http = require("http"), fs = require("fs"), path = require("path");
const { chromium } = require("playwright");
const ROOT = path.join(__dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webmanifest": "application/manifest+json" };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]); if (p.endsWith("/")) p += "index.html";
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(res);
});

/* A fake speech engine. mode "fast": everything is spoken at once (content crawl).
   mode "ios": like iOS Safari — speak() outside a tap is queued but never starts until a tap has unlocked
   the engine; a speak() within 30 ms of cancel() is dropped; voices: English first, French ones too. */
function fakeEngine(mode) {
  const log = window.__said = [], calls = window.__calls = [];
  let gesture = false, unlocked = mode !== "ios", lastCancel = -1e9, cur = null, q = [];
  for (const ev of ["click", "touchend", "pointerup", "keydown"]) window.addEventListener(ev, () => { gesture = true; setTimeout(() => { gesture = false; }, 0); }, true);
  const V = (name, lang, local) => ({ name, lang, localService: local, voiceURI: name, default: false });
  const voices = [V("Samantha", "en-US", true), V("Yelda", "tr-TR", true), V("Amélie", "fr-CA", true), V("Thomas", "fr-FR", true), V("Audrey", "fr-FR", true), V("Grandma (French (France))", "fr-FR", true)];
  const S = {
    speaking: false, pending: false, paused: false, onvoiceschanged: null,
    getVoices: () => voices, addEventListener() {}, removeEventListener() {}, resume() { S.paused = false; }, pause() {},
    cancel() {
      lastCancel = performance.now();
      const all = (cur ? [cur] : []).concat(q); cur = null; q = []; S.speaking = false; S.pending = false;
      all.forEach(u => u.onerror && u.onerror({ error: "interrupted" }));
    },
    speak(u) {
      calls.push({ text: u.text, gesture });
      if (mode === "ios" && performance.now() - lastCancel < 30) return; // dropped
      if (!unlocked) { if (gesture) unlocked = true; else { q.push(u); S.pending = true; return; } }
      q.push(u); S.pending = !!cur; if (!cur) next();
    }
  };
  function next() {
    const u = q.shift(); if (!u) { S.speaking = false; S.pending = false; return; }
    if (!unlocked) { q.unshift(u); return; }
    cur = u; S.speaking = true; S.pending = q.length > 0;
    setTimeout(() => {
      if (cur !== u) return;
      if (u.volume !== 0 && u.text.trim()) log.push({ text: u.text, lang: u.lang, voice: u.voice ? u.voice.lang : "", vname: u.voice ? u.voice.name : "" });
      if (u.onstart) u.onstart();
      setTimeout(() => { if (cur !== u) return; cur = null; S.speaking = false; if (u.onend) u.onend(); next(); }, mode === "fast" ? 1 : 10);
    }, 2);
  }
  window.__unlocked = () => unlocked;
  Object.defineProperty(window, "speechSynthesis", { value: S, configurable: true });
  window.SpeechSynthesisUtterance = function (t) { this.text = t; this.lang = ""; this.voice = null; this.rate = 1; this.pitch = 1; this.volume = 1; };
}

/* What French spoken text may not contain. */
function badText(s) {
  const out = [];
  if (!s || !String(s).trim()) return ["empty"];
  if (/\p{Extended_Pictographic}|[\u2190-\u21FF\u2600-\u27BF\u2700-\u27BF✓✗✔✘•●○◦▶⏹⭐★☆]/u.test(s)) out.push("emoji/symbol");
  if (/[ğĞıİşŞ]/.test(s)) out.push("Turkish letters");
  if (/[<>*_#\[\]{}|`~=\\]|\+(?!\d)/.test(s)) out.push("markup");
  const word = list => new RegExp(`(?<![\\p{L}'-])(${list})(?![\\p{L}'-])`, "iu");
  if (word("the|and|you|your|is|are|with|this|that|what|of|for|it's|i'm|please|hello|thank|thanks|yes").test(s)) out.push("English word");
  if (word("bir|için|değil|evet|hayır|merhaba|teşekkür|güzel|nasılsın|tamam").test(s)) out.push("Turkish word");
  if (/\.\.\.\.|\?\?|!!!|\s[,.;:!?](?=\s|$)(?<![!?;:] [!?;:])/.test(s) && !/« |\s[:;!?]/.test(s)) out.push("odd punctuation");
  return out;
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = `http://localhost:${server.address().port}/index.html`;
  const browser = await chromium.launch();
  const problems = [], stats = {};
  const fail = m => problems.push(m);

  /* ── 1. Content: every speakable text, straight from the data ── */
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await ctx.addInitScript(fakeEngine, "fast");
    const page = await ctx.newPage();
    page.on("pageerror", e => fail("page error " + e.message));
    await page.goto(base);
    const texts = await page.evaluate(() => {
      const out = [], add = (where, text, viaSpeak) => out.push({ where, text: viaSpeak ? String(text).replace(/\(.*?\)|\//g, " ") : String(text) });
      (window.DECKS || []).forEach(d => d.cards.forEach(c => add(`card ${d.id} "${c.fr}"`, c.fr, true)));
      (window.READINGS || []).forEach(r => { r.text.split(/\n\s*\n/).forEach((p, i) => add(`reading ${r.id} §${i + 1}`, p)); r.gloss.forEach(w => add(`reading ${r.id} gloss`, w[0], true)); });
      (window.DIALOGUES || []).forEach(d => d.lines.forEach((l, i) => add(`dialogue ${d.id} line ${i + 1}`, l.fr)));
      (window.BASICS || []).forEach(b => b.groups.forEach((g, gi) => g.items.forEach(it => { add(`basics ${b.id} "${it.fr}"`, it.say || it.fr); if (it.ex) add(`basics ${b.id} example`, it.ex, true); })));
      (window.ADVENTURES || []).forEach(a => Object.entries(a.nodes).forEach(([k, n]) => (n.say || []).forEach(([who, s]) => add(`adventure ${a.id} node ${k} (${who})`, s))));
      (window.DELF || []).forEach(it => {
        (it.audio || []).forEach(([, s], i) => add(`DELF ${it.id} audio ${i + 1}`, s));
        (it.questions || []).forEach((q, qi) => (q.audio || []).forEach(([, s]) => add(`DELF ${it.id} question ${qi + 1} audio`, s)));
        (it.prompts || []).forEach((p, i) => { if (it.kind === "entretien") add(`DELF ${it.id} prompt ${i + 1}`, p.q, true); if (p.m) add(`DELF ${it.id} prompt ${i + 1} example`, p.m, true); });
        if (typeof it.model === "string") add(`DELF ${it.id} model`, it.model, true);
        if (Array.isArray(it.model)) it.model.forEach((l, i) => add(`DELF ${it.id} model line ${i + 1}`, l[1], true));
      });
      return out;
    });
    stats.texts = texts.length;
    const seen = new Set();
    const cleaned = await page.evaluate(ts => ts.map(x => window.APP.tts.clean(x.text)), texts);
    texts.forEach((x, i) => { x.text = cleaned[i]; });
    for (const { where, text } of texts) { const b = badText(text); if (b.length && !seen.has(where + text)) { seen.add(where + text); fail(`content: ${where}: ${b.join(", ")}: «${text.slice(0, 140)}»`); } }
    // DELF listening: every exercise has a recording (or one per question), and every number in a right
    // answer is really said in the recording (a transcript that does not match its questions).
    const delf = await page.evaluate(() => (window.DELF || []).filter(x => x.sec === "co").map(x => ({ id: x.id, audio: (x.audio || []).map(l => l[1]).join(" "), qs: (x.questions || []).map(q => ({ q: q.q, a: q.o[q.a], qa: (q.audio || []).map(l => l[1]).join(" ") })) })));
    stats.delfCo = delf.length;
    const nums = s => (s.replace(/(\d)\s+(?=\d{3}\b)/g, "$1").match(/\d+(?:[,.]\d+)?/g) || []);
    const WORDN = { un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10, onze: 11, douze: 12, treize: 13, quatorze: 14, quinze: 15, seize: 16, vingt: 20, trente: 30, quarante: 40, cinquante: 50, soixante: 60, cent: 100, mille: 1000, midi: 12, minuit: 0 };
    // Right answers that are worked out rather than heard word for word (checked by hand).
    const NUM_OK = { "a1-s24-co2": "6 euros 50", "a2-s20-co1": "une heure et demie", "a2-s43-co1": "outside 7–9 h and 17–19 h", "a2-s45-co2": "half of 400 000 €", "a2-s48-co1": "7 h 40 instead of 7 h 50" };
    for (const x of delf) {
      if (NUM_OK[x.id]) continue;
      if (!x.audio.trim() && x.qs.some(q => !q.qa.trim())) fail(`DELF ${x.id}: no recording`);
      for (const q of x.qs) {
        const heard = (x.audio + " " + q.qa).toLowerCase(), said = new Set(nums(heard));
        Object.entries(WORDN).forEach(([w, n]) => { if (new RegExp(`\\b${w}\\b`).test(heard)) said.add(String(n)); });
        for (const n of nums(q.a.replace(/\b0(\d)\b/g, "$1"))) {
          const m = n.replace(/^0+(?=\d)/, "");
          if (!said.has(n) && !said.has(m) && !heard.includes(n)) fail(`DELF ${x.id}: right answer «${q.a}» to «${q.q}» has ${n}, not said in the recording`);
        }
      }
    }
    await ctx.close();
  }

  /* ── 2. Buttons: tap every audio button on every screen ── */
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
    await ctx.addInitScript(fakeEngine, "fast");
    const page = await ctx.newPage();
    page.on("pageerror", e => fail("page error " + e.message));
    await page.goto(base);
    await page.evaluate(() => {
      const T = window.APP.tts, orig = T.play;
      window.__plays = [];
      T.play = function (lines, o, done) { window.__plays.push((lines || []).map(l => l[1])); return orig.call(this, lines, o, done); };
    });
    const routes = await page.evaluate(() => [].concat(
      ["#/", "#/practice/listen", "#/practice/dictation", "#/practice/speak", "#/practice/conj", "#/practice/gender", "#/games/order/A1", "#/games/order/A2", "#/exam/A1/flash", "#/exam/A2/flash"],
      window.DECKS.map(d => "#/cards/" + d.id + "/list"), window.DECKS.slice(0, 3).map(d => "#/cards/" + d.id),
      window.READINGS.map(r => "#/read/" + r.id), window.DIALOGUES.map(d => "#/talk/" + d.id),
      window.BASICS.map(b => "#/basics/" + b.id), window.BASICS.map(b => "#/basics/" + b.id + "/quiz"),
      window.ADVENTURES.map(a => "#/adv/" + a.id)));
    const SEL = "[data-speak],[data-speakall],[data-dx=play],[data-dx=flash-play],[data-gm=av-play],[data-gm=ord-play]";
    const crawl = async (label, setup) => {
      await setup();
      await page.waitForTimeout(5);
      return page.evaluate(async ([label, SEL]) => {
        const bad = [], wait = ms => new Promise(r => setTimeout(r, ms));
        const n = document.querySelectorAll(SEL).length;
        for (let i = 0; i < n; i++) {
          const b = document.querySelectorAll(SEL)[i]; if (!b || b.disabled) continue;
          window.APP.tts.stop(); await wait(0);
          const before = window.__plays.length;
          b.click();
          const now = document.querySelectorAll(SEL)[i];
          if (window.__plays.length === before) { bad.push(`${label}: button «${(b.innerText || b.getAttribute("aria-label") || "").trim().slice(0, 40)}» plays nothing`); continue; }
          if (!document.querySelector(".is-playing")) bad.push(`${label}: button «${(b.innerText || b.getAttribute("aria-label") || "").trim().slice(0, 40)}» does not light up while playing`);
          void now;
        }
        window.APP.tts.stop();
        return { n, bad };
      }, [label, SEL]);
    };
    let buttons = 0;
    for (const r of routes) {
      const res = await crawl(r, () => page.evaluate(h => { location.hash = h; }, r));
      buttons += res.n; res.bad.forEach(fail);
      if (!res.n && /^#\/(read|talk|basics|cards\/[^/]+\/list)/.test(r)) fail(`${r}: no audio button`);
    }
    // DELF: every exercise of every paper (listening plays, speaking prompts and models).
    const ids = await page.evaluate(() => window.DELF.map(x => x.id));
    for (const id of ids) {
      const res = await crawl("DELF " + id, () => page.evaluate(id => window.EXAM.start([id], "ex", id.slice(0, 2).toUpperCase(), null), id));
      buttons += res.n; res.bad.forEach(fail);
      const sec = id.split("-")[2].replace(/\d+$/, "");
      if (sec === "co" && !res.n) fail(`DELF ${id}: no play button`);
    }
    // Model answers and examples appear once checked: open them and tap their buttons too.
    for (const id of ids.filter(i => /-(pe|po)\d/.test(i))) {
      const res = await crawl("DELF model " + id, async () => {
        await page.evaluate(id => window.EXAM.start([id], "ex", id.slice(0, 2).toUpperCase(), null), id);
        for (const s of ["[data-dx=example]", "[data-dx=answered]", "[data-dx=dlg-next]", "[data-dx=dlg-next]", "[data-dx=checkpo]", "[data-dx=checktext]"]) if (await page.$(s)) await page.click(s);
      });
      buttons += res.n; res.bad.forEach(fail);
    }
    stats.buttons = buttons;
    // Everything the buttons asked to read passes the content rules.
    const plays = await page.evaluate(() => window.__said.map(u => u.text).concat(window.__plays.flat().map(x => window.APP.tts.clean(x))));
    const seen = new Set();
    for (const s of plays) { if (seen.has(s)) continue; seen.add(s); const b = badText(s); if (b.length) fail(`spoken text: ${b.join(", ")}: «${s.slice(0, 140)}»`); }
    stats.spoken = seen.size;
    // Every utterance used French: lang fr-FR and a French voice (never the English or Turkish voice, nor a novelty voice).
    const said = await page.evaluate(() => window.__said);
    const wrong = said.filter(u => !/^fr/i.test(u.lang) || (u.voice && !/^fr/i.test(u.voice)) || /Grandma/.test(u.vname));
    if (wrong.length) fail(`${wrong.length} utterances not in French, e.g. ${JSON.stringify(wrong[0])}`);
    if (!said.length) fail("no utterance was spoken at all");
    await ctx.close();
  }

  /* ── 3. iPhone rules ── */
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true,
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1" });
    await ctx.addInitScript(fakeEngine, "ios");
    const flat = s => s.replace(/[\s,]/g, "");
    const check = async (label, url, setup, button, want, anagram) => {
      const page = await ctx.newPage();
      page.on("pageerror", e => fail(`iOS ${label}: page error ${e.message}`));
      await page.goto(base + url);
      await page.waitForTimeout(600); // auto-play (adventures) tries to speak before any tap: blocked, like on iOS
      if (setup) await setup(page);
      const expect = flat(await page.evaluate(want));
      await page.evaluate(() => { window.__said.length = 0; });
      await page.tap(button);
      await page.waitForTimeout(30);
      if (!(await page.$(".is-playing"))) fail(`iOS ${label}: no visual feedback after the tap`);
      await page.waitForFunction(n => window.__said.map(u => u.text).join("").replace(/[\s,]/g, "").length >= n, expect.length, { timeout: 30000 }).catch(() => {});
      const got = flat(await page.evaluate(() => window.__said.map(u => u.text).join("")));
      const sort = x => [...x].sort().join("");
      if (anagram ? sort(got) !== sort(expect) : !got.startsWith(expect)) fail(`iOS ${label}: heard ${got.length}/${expect.length} characters («${got.slice(0, 60)}»)`);
      await page.waitForTimeout(1200);
      if (await page.$(".is-playing")) fail(`iOS ${label}: still shown as playing after the end`);
      await page.close();
    };
    const r = "r-cafe";
    await check("reading: listen to all", "#/read/" + r, null, "[data-speakall]", () => window.READINGS.find(x => x.id === "r-cafe").text);
    await check("reading: one paragraph", "#/read/" + r, null, ".rd-p [data-speak]", () => window.READINGS.find(x => x.id === "r-cafe").text.split(/\n\s*\n/)[0]);
    await check("dialogue: play all", "#/talk/d-boulangerie", null, "[data-speakall]", () => window.DIALOGUES.find(x => x.id === "d-boulangerie").lines.map(l => l.fr).join(""));
    await check("basics: listen to all", "#/basics/numbers", null, "[data-speakall]", () => window.BASICS_UI.lines("b:numbers:0").lines.map(l => l[1]).join(""));
    await check("basics: one word", "#/basics/alphabet", null, ".bs-item [data-speak]", () => document.querySelector(".bs-item [data-speak]").dataset.speak);
    await check("adventure: listen again", "#/adv/av-cafe", null, "[data-gm=av-play]", () => { const a = window.ADVENTURES.find(x => x.id === "av-cafe"); return a.nodes[a.start].say.map(l => l[1]).join(""); });
    await check("games: sentence puzzle listen", "#/games/order/A1", null, "[data-gm=ord-play]", () => [...document.querySelectorAll(".ord-bank .tok")].map(e => e.textContent).join(""), true);
    await check("DELF A1 listening", "#/exam", p => p.evaluate(() => window.EXAM.start(["a1-s01-co1"], "ex", "A1", null)), "[data-dx=play]", () => window.DELF.find(x => x.id === "a1-s01-co1").audio.map(l => l[1]).join(""));
    await check("DELF A2 listening", "#/exam", p => p.evaluate(() => window.EXAM.start(["a2-s30-co1"], "ex", "A2", null)), "[data-dx=play]", () => { const x = window.DELF.find(x => x.id === "a2-s30-co1"); return (x.audio || x.questions[0].audio).map(l => l[1]).join(""); });
    await check("cards: word", "#/cards/survival/list", null, "[data-speak]", () => document.querySelector("[data-speak]").dataset.speak.replace(/\(.*?\)|\//g, " "));
    // Adventure: once the learner has tapped, the next scenes play on their own.
    {
      const page = await ctx.newPage();
      await page.goto(base + "#/adv");
      await page.tap('a[href="#/adv/av-cafe"]');
      await page.waitForTimeout(1500);
      const heard = await page.evaluate(() => window.__said.length);
      if (!heard) fail("iOS adventure: the first scene is not heard after tapping the adventure");
      await page.close();
    }
  }

  await browser.close(); server.close();
  console.log(`audio check: ${stats.texts} texts, ${stats.delfCo} DELF recordings, ${stats.buttons} buttons tapped, ${stats.spoken} spoken texts`);
  if (problems.length) { console.error(problems.length + " problems\n" + problems.join("\n")); process.exit(1); }
  console.log("audio check OK");
})().catch(e => { console.error(e); process.exit(1); });
