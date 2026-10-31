/* Offline support: serve the app shell from cache, refresh it in the background. */
const CACHE = "esinfr-v1";
const SHELL = [
  "./", "index.html", "manifest.webmanifest",
  "assets/style.css", "assets/app.js", "assets/i18n.js", "assets/icon.svg",
  "data/resources.js", "data/resources-fr.js", "data/path.js", "data/path-master.js", "data/decks.js", "data/decks-master.js",
  "data/guide.js", "data/guide-master.js", "data/guide-fr.js", "data/practice.js",
  "data/decks-more.js", "data/readings.js", "data/dialogues.js"
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
