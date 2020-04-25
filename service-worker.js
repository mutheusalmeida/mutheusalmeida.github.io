const cacheName = 'mutheus-v1.0';
const expectedCaches = [
    cacheName
];
const staticCache = [
    '/',
    '/styles/style.css',
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(staticCache);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (!expectedCaches.includes(key)) return caches.delete(key);
            })
        ))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});