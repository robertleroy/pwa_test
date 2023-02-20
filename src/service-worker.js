import { build, files } from '$service-worker';
 
/* Create a unique cache name for this deployment
   update assets by altering CACHE_NAME           */
const CACHE_NAME = "cache-pwa-0.0.3";
 
const ASSETS = [
  ...build, /* the app itself           */
  ...files  /* everything in `static`   */
];
 

/* INSTALL */
self.addEventListener('install', (event) => {
  console.info("install");
  /* Create a new cache and add all files to it */
  // self.skipWaiting();

  async function addFilesToCache() {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(ASSETS);
  }
 
  event.waitUntil(addFilesToCache());
});


/* ACTIVATE */
self.addEventListener('activate', (event) => {
  console.info("activate");

  /* Remove previous cached data from disk  */
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key.includes('cache-pwa') && key !== CACHE_NAME) await caches.delete(key);     
    }
  }
 
  event.waitUntil(deleteOldCaches());
});
 

/* FETCH */
self.addEventListener('fetch', (event) => {
  /* ignore POST requests etc */
  if (event.request.method !== 'GET') return;
 
  async function respond() {
    // const url = new URL(event.request.url);
    const cache = await caches.open(CACHE_NAME);
 
    /* `build`/`files` can always be served from the cache */
    // if (ASSETS.includes(url.pathname)) {
    //   return cache.match(event.request);
    // }
 
    /* for everything else, try the network first, but
       fall back to the cache if we're offline          */
    try {
      const response = await fetch(event.request);
 
      if (response.status === 200) {
        cache.put(event.request, response.clone());
      }
 
      return response;
    } catch {
      return cache.match(event.request);
    }
  }
 
  event.respondWith(respond());
});