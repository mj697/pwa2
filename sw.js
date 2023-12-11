// DO NOT MODIFY

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                return cache.addAll(
                    [
                        "./",
                        "./src/master.css",
                        './images/logo192.png',
                        './images/logo512.png',
                        './src/getListItem.js'
                    ]
                );
            })
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(res => {
        return res || fetch(event.request)
    }))
});