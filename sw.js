const cacheName = 'flowbill-v10'; // เปลี่ยนเลขเวอร์ชั่นตรงนี้

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim()); // บังคับให้เริ่มทำงานทันที
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
