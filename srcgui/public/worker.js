const cacheName = 'wattlab-v2';

let urlsToCache = [
    './index.html',
    './logo.ico',
    './imagenes/slides/Cali.jpg',
    './imagenes/slides/Slide0.jpg',
    './imagenes/slides/Slide1.jpg',
    './imagenes/PQRS.jpg',
    './imagenes/ConsultaFactura.jpg',
];

// Install a service worker
self.addEventListener('install', e=> {
    // Perform install steps
    e.waitUntil(
        caches
            .open(cacheName)
            .then(function (cache) {
                console.log('ServiceWorker: Caching files');
                return cache.addAll(urlsToCache);
            })
            .then(()=>self.skipWaiting())
    );
});


self.addEventListener('activate', e => {
    
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if ( cache !== cacheName){
                        console.log('ServiceWorker: Clearing cache');
                        return caches.delete(cache);
                    }  
                })
            );
        })
    );
});


// Cache and return requests
self.addEventListener('fetch', e=> {
    console.log('ServiceWorker: Fetching'); 

    e.respondWith( 
        fetch(e.request)
        .then(res=>{
                const resClone = res.clone();
                caches
                .open(cacheName)
                .then(cache=>{
                    cache.put(e.request, resClone);
                });
                return res;
        })
          .catch(err =>caches.match(e.request).then(res=>res))
    ); 
});

// Update a service worker
