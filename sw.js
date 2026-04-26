const cacheName = 'flowbill-v7'; // เปลี่ยนเลขเวอร์ชั่นเวลาอัปเดตแอป
const staticAssets = [
  './',
  './index.html'
];

// ติดตั้ง Service Worker และเก็บไฟล์ลง Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(staticAssets))
  );
  self.skipWaiting();
});

// กลยุทธ์: Network First (ดึงเน็ตก่อน ถ้าล้มเหลวค่อยใช้ Cache)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
