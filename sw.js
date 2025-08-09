// SW v8 — cache landing + app + assets
const CACHE='rc-cache-cupertino-v8';
const ASSETS=['./','./index.html','./app.html','./manifest.webmanifest','./sw.js','./icons/icon-192.png','./icons/icon-512.png','./media/cover.jpg','./media/logo.svg','./media/sample.wav'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>x!==CACHE&&caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.mode==='navigate'){
    e.respondWith((async()=>{try{return await fetch(e.request)}catch(_){return caches.match('./app.html')}})()); return;
  }
  if(url.origin===location.origin){ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); }
});
