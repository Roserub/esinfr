/* Offline support. Network first (so a new version shows on the very next visit), cache as the offline fallback.
   When a new version activates, open pages are reloaded once so nobody stays on the old one. */
const CACHE = "esinfr-v15";
const SHELL = [
  "./", "index.html", "manifest.webmanifest", "assets/style.css", "assets/icon.svg", "assets/icon-180.png", "assets/i18n.js", "assets/i18n-exam.js",
  "assets/i18n-games.js", "assets/i18n-voice.js", "assets/voice.js", "assets/exam.js", "assets/games.js", "assets/app.js", "data/resources.js", "data/resources-fr.js",
  "data/path.js", "data/path-master.js", "data/decks.js", "data/decks-master.js", "data/guide.js", "data/guide-master.js",
  "data/guide-fr.js", "data/decks-more.js", "data/practice.js", "data/readings.js", "data/dialogues.js", "data/readings-a1a2-1.js",
  "data/readings-a1a2-2.js", "data/dialogues-a1a2-1.js", "data/dialogues-a1a2-2.js", "data/delf-a1-co-1.js", "data/delf-a1-co-2.js",
  "data/delf-a1-co-3.js", "data/delf-a1-co-4.js", "data/delf-a1-ce-1.js", "data/delf-a1-ce-2.js", "data/delf-a1-ce-3.js",
  "data/delf-a1-ce-4.js", "data/delf-a1-pe.js", "data/delf-a1-pe-2.js", "data/delf-a1-po.js", "data/delf-a1-po-2.js",
  "data/delf-a2-co-1.js", "data/delf-a2-co-2.js", "data/delf-a2-co-3.js", "data/delf-a2-co-4.js", "data/delf-a2-ce-1.js",
  "data/delf-a2-ce-2.js", "data/delf-a2-ce-3.js", "data/delf-a2-ce-4.js", "data/delf-a2-pe.js", "data/delf-a2-pe-2.js",
  "data/delf-a2-po.js", "data/delf-a2-po-2.js", "data/delf-a1-p21.js", "data/delf-a1-p22.js", "data/delf-a1-p23.js", "data/delf-a1-p24.js", "data/delf-a1-p25.js", "data/delf-a1-p26.js", "data/delf-a2-p21.js", "data/delf-a2-p22.js", "data/delf-a2-p23.js", "data/delf-a2-p24.js", "data/delf-a2-p25.js", "data/delf-a2-p26.js",
  "data/delf-a1-p27.js", "data/delf-a1-p28.js", "data/delf-a1-p29.js", "data/delf-a1-p30.js", "data/delf-a1-p31.js", "data/delf-a1-p32.js", "data/delf-a1-p33.js", "data/delf-a1-p34.js", "data/delf-a1-p35.js", "data/delf-a1-p36.js", "data/delf-a1-p37.js", "data/delf-a1-p38.js", "data/delf-a1-p39.js", "data/delf-a1-p40.js", "data/delf-a1-p41.js", "data/delf-a1-p42.js", "data/delf-a1-p43.js", "data/delf-a1-p44.js", "data/delf-a1-p45.js", "data/delf-a1-p46.js", "data/delf-a1-p47.js", "data/delf-a1-p48.js", "data/delf-a1-p49.js", "data/delf-a1-p50.js", "data/delf-a2-p27.js", "data/delf-a2-p28.js", "data/delf-a2-p29.js", "data/delf-a2-p30.js", "data/delf-a2-p31.js", "data/delf-a2-p32.js", "data/delf-a2-p33.js", "data/delf-a2-p34.js", "data/delf-a2-p35.js", "data/delf-a2-p36.js", "data/delf-a2-p37.js", "data/delf-a2-p38.js", "data/delf-a2-p39.js", "data/delf-a2-p40.js", "data/delf-a2-p41.js", "data/delf-a2-p42.js", "data/delf-a2-p43.js", "data/delf-a2-p44.js", "data/delf-a2-p45.js", "data/delf-a2-p46.js", "data/delf-a2-p47.js", "data/delf-a2-p48.js", "data/delf-a2-p49.js", "data/delf-a2-p50.js",
  "data/decks-delf.js", "data/decks-delf-phrases.js", "data/guide-delf.js", "data/adv-a1-1.js", "data/adv-a1-2.js", "data/adv-a2-1.js", "data/adv-a2-2.js",
  "data/readings-tr-1.js", "data/readings-tr-2.js", "data/readings-tr-3.js", "data/basics.js", "assets/basics.js", "assets/i18n-basics.js",
  "data/readings-a1a2-3.js", "data/readings-a1a2-4.js", "data/dialogues-a1a2-3.js", "data/dialogues-a1a2-4.js", "data/decks-a1a2.js",
  "data/readings-tr-4.js", "data/readings-tr-5.js", "data/basics-2.js", "data/adv-a1-3.js", "data/adv-a2-3.js",
  "data/readings-a1a2-5.js", "data/readings-a1a2-6.js", "data/dialogues-a1a2-5.js", "data/dialogues-a1a2-6.js", "data/decks-a1a2-2.js",
  "data/readings-tr-6.js", "data/readings-tr-7.js", "data/basics-3.js", "data/adv-a1-4.js", "data/adv-a2-4.js",
  "data/readings-a1a2-7.js", "data/readings-a1a2-8.js", "data/dialogues-a1a2-7.js", "data/dialogues-a1a2-8.js", "data/decks-a1a2-3.js",
  "data/readings-tr-8.js", "data/readings-tr-9.js", "data/basics-4.js", "data/adv-a1-5.js", "data/adv-a2-5.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const old = (await caches.keys()).filter(k => k !== CACHE);
    await Promise.all(old.map(k => caches.delete(k)));
    await self.clients.claim();
    if (old.length) for (const c of await self.clients.matchAll({ type: "window" })) { try { c.navigate(c.url); } catch (err) { /* ignore */ } }
  })());
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    try {
      const res = await fetch(e.request, { cache: "no-cache" });
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    } catch (err) {
      return (await cache.match(e.request, { ignoreSearch: true })) || (e.request.mode === "navigate" ? cache.match("index.html") : Response.error());
    }
  }));
});
