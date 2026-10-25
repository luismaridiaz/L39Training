const VERSION = 'l39-v2-2';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(VERSION).then(c=> Promise.all(CORE.map(u=>
    c.add(new Request(u, u.startsWith('http') ? { mode:'cors' } : {})).catch(()=>{})))).then(()=> self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(ks=> Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=> self.clients.claim()));
});
self.addEventListener('fetch', e=>{
  if(e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch:true }).then(hit=>{
    const net = fetch(e.request).then(r=>{
      if(r && (r.ok || r.type === 'opaque')){ const cp = r.clone(); caches.open(VERSION).then(c=>c.put(e.request, cp)); }
      return r;
    }).catch(()=> hit);
    return hit || net;
  }));
});
