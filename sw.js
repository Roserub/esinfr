/* Offline support: serve the app shell from cache, refresh it in the background. */
const CACHE = "esinfr-v5";
const SHELL = [
  "./", "index.html", "manifest.webmanifest", "assets/style.css", "assets/icon.svg", "assets/i18n.js", "assets/i18n-exam.js",
  "assets/i18n-games.js", "assets/exam.js", "assets/games.js", "assets/app.js", "data/resources.js", "data/resources-fr.js",
  "data/path.js", "data/path-master.js", "data/decks.js", "data/decks-master.js", "data/guide.js", "data/guide-master.js",
  "data/guide-fr.js", "data/decks-more.js", "data/practice.js", "data/readings.js", "data/dialogues.js", "data/readings-a1a2-1.js",
  "data/readings-a1a2-2.js", "data/dialogues-a1a2-1.js", "data/dialogues-a1a2-2.js", "data/delf-a1-co-1.js", "data/delf-a1-co-2.js",
  "data/delf-a1-co-3.js", "data/delf-a1-co-4.js", "data/delf-a1-ce-1.js", "data/delf-a1-ce-2.js", "data/delf-a1-ce-3.js",
  "data/delf-a1-ce-4.js", "data/delf-a1-pe.js", "data/delf-a1-pe-2.js", "data/delf-a1-po.js", "data/delf-a1-po-2.js",
  "data/delf-a2-co-1.js", "data/delf-a2-co-2.js", "data/delf-a2-co-3.js", "data/delf-a2-co-4.js", "data/delf-a2-ce-1.js",
  "data/delf-a2-ce-2.js", "data/delf-a2-ce-3.js", "data/delf-a2-ce-4.js", "data/delf-a2-pe.js", "data/delf-a2-pe-2.js",
  "data/delf-a2-po.js", "data/delf-a2-po-2.js", "data/adv-a1-1.js", "data/adv-a1-2.js", "data/adv-a2-1.js", "data/adv-a2-2.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const network = fetch(e.request).then(res => { if (res.ok) cache.put(e.request, res.clone()); return res; }).catch(() => cached);
    return cached || network;
  }));
});
