var cacheNameStatic = 'miquelalvarez';

var currentCacheNames = [ cacheNameStatic ];

var cachedUrls = [
  // 3rd party CDN
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
    'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800',
    'https://fonts.googleapis.com/css?family=Raleway:300,500,800',
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js',
    'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js',
  // Local assets
    'css/style.css',
    'css/window.css',
    'font-awesome/css/font-awesome.min.css',
    'font-awesome/css/font-awesome.min.css',
    'js/jquery.waypoints.min.js',
    'js/flowtype.js',
    'img/miguel-min.jpg',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg'
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.delete(cacheNameStatic).then(function() {
      return caches.open(cacheNameStatic);
    }).then(function (cache) {
      return cache.addAll(cachedUrls);
    }).catch(function(e) {
    })
  );
});


// A new ServiceWorker is now active
  self.addEventListener("activate", function (event) {
    event.waitUntil(
      caches.keys()
        .then(function (cacheNames) {
          return Promise.all(
            cacheNames.map(function (cacheName) {
              if (currentCacheNames.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
    );
  });

self.addEventListener("fetch", function (event) {
    event.respondWith(
      caches.open(cacheNameStatic).then(function(cache) {
        return cache.match(event.request).then(function(response) {
          var fetchPromise = fetch(event.request).then(function(networkResponse) {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          return response || fetchPromise;
        })
      })
    );
  });
