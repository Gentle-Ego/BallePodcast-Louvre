// Nome della cache e risorse da cacheare
const CACHE_NAME = 'cache-v1';
const urlsToCache = [
  '/',                // Se la tua app risponde sulla root
  '/index.html',      // Il file HTML principale
  '/favicon.ico',     // Favicon
  '/manifest.json',   // Manifest PWA
  '/logicicon.png',   // Icona (può essere la stessa usata nel manifest)
  '/episodes/mona-lisa.jpg',
  '/episodes/mona-lisa.mp3'
];


// Evento "install": viene eseguito al primo caricamento, per cacheare le risorse
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento "fetch": intercetta le richieste e prova a servirle dalla cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se la risorsa è in cache, restituiscila
        if (response) {
          return response;
        }
        // Altrimenti, effettua la richiesta di rete
        return fetch(event.request);
      })
  );
});

// Evento "activate": pulizia delle vecchie cache
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
