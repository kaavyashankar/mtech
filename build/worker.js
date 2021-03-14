var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/',
  '/completed'
];

// Install a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        // eslint-disable-next-line array-callback-return
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function(error) {
      console.log(
        "[Service Worker] Network request Failed. Serving content from cache: " +
          error
      );
      //Check to see if you have it in the cache
      //Return response
      //If not in the cache, then return error page
      return caches
        .open(
          "sw-precache-v3-sw-precache-webpack-plugin-https://silent-things.surge.sh"
        )
        .then(function(cache) {
          return cache.match(event.request).then(function(matching) {
            var report =
              // eslint-disable-next-line eqeqeq
              !matching || matching.status == 404
                ? Promise.reject("no-match")
                : matching;
            return report;
          });
        });
    })
  );
});

