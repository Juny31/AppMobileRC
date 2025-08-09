// Offline-first service worker (v2)
const CACHE='rc-cache-pro-v4';
const ASSETS=['./','./index.html','./manifest.webmanifest','./sw.js','./icons/icon-192.png','./icons/icon-512.png','./media/cover.jpg','./media/sample.wav'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE&&caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const url=new URL(e.request.url);if(e.request.mode==='navigate'){e.respondWith((async()=>{try{return await fetch(e.request)}catch(_){return caches.match('./index.html')}})());return}if(url.origin===location.origin){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))}});
