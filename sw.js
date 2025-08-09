// Offline-first service worker for GitHub Pages (visual build)
const CACHE = 'rc-cache-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './sw.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './media/cover.jpg',
  './media/sample.wav'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE && caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try { return await fetch(req); }
      catch (e) { return caches.match('./index.html'); }
    })());
    return;
  }
  if (url.origin === location.origin) {
    event.respondWith(caches.match(req).then(res => res || fetch(req)));
  }
});
