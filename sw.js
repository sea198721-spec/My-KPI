// Disable outdated offline caches and return to network-first pages.
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil((async () => { for (const key of await caches.keys()) await caches.delete(key); await self.clients.claim(); })()); });
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request)); });
