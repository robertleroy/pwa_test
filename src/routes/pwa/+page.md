<script>  
  import TOC from '$lib/components/TOC.svelte';
  const links = [
    { name: 'Images', path: '#top' },
    { name: 'Manifest', path: '#manifest' },
    { name: 'Service Worker', path: '#worker' }
  ]
</script>

<div class="page">
  <div class="toc">
  <TOC {links}/>
  </div>

  <div class="content"> 

# PWA

## Images
  - 512x512
  - 192x192
  - safe area: 80% of image
  - maskable: 60% of image
  - place in `static` folder

<br id="manifest" />

## Manifst
- short_name or name
- icons - must include a 192px and a 512px icon
- start_url
- display: standalone, fullscreen, or minimal-ui
- place in `static` folder


``` html
<link rel="manifest" 
      crossorigin="use-credentials" 
      href="%sveltekit.assets%/manifest.json" />

<link rel="apple-touch-icon" 
      href="%sveltekit.assets%/apple-touch-icon.png">
```

``` json
/* manifest.json */
{
  "name": "svelte-test-pwa",
  "short_name": "svelte-pwa",
  "start_url": "/pwa_test/",
  "scope": "/pwa_test/",
  "display": "standalone",
  "background_color": "#fff",
  "description": "Test for a simple pwa",
  "theme_color": "#5a0fc8",
  "accent_color": "#c8590f",
  "orientation": "portrait",
  "icons": [
    {
      "src": "logo.svg",
      "type": "image/svg",
      "sizes": "192x192 512x512",
      "purpose": "maskable any"
    },
    {
      "src": "pwa_512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "maskable"
    },
    {
      "src": "pwa_192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "maskable"
    }
  ]
}
```


<br id="worker" />

## Service Worker

- place in `src` next to app.html


``` js
/* src/service-worker.js */
import { build, files } from '$service-worker';
 
/* Create a unique cache name for this deployment
   update assets by altering CACHE_NAME           */
const CACHE_NAME = "cache-pwa-0.0.2";
 
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
```

 

  </div>
</div>