const i = [
  "/pwa_test/_app/immutable/chunks/0-f1a1b1a4.js",
  "/pwa_test/_app/immutable/chunks/1-92c365ac.js",
  "/pwa_test/_app/immutable/chunks/2-4c5e8afd.js",
  "/pwa_test/_app/immutable/chunks/3-9ae3c8d2.js",
  "/pwa_test/_app/immutable/chunks/4-76f6ceb9.js",
  "/pwa_test/_app/immutable/chunks/5-67c5d6ac.js",
  "/pwa_test/_app/immutable/chunks/_layout-95f8a586.js",
  "/pwa_test/_app/immutable/chunks/index-f05a2fe5.js",
  "/pwa_test/_app/immutable/chunks/paths-93b45301.js",
  "/pwa_test/_app/immutable/chunks/singletons-3747866d.js",
  "/pwa_test/_app/immutable/start-b89b2b0e.js",
  "/pwa_test/_app/immutable/assets/_error-a61fa775.css",
  "/pwa_test/_app/immutable/components/pages/_error.svelte-4b625053.js",
  "/pwa_test/_app/immutable/assets/_layout-fd300b26.css",
  "/pwa_test/_app/immutable/modules/pages/_layout.js-11d4e431.js",
  "/pwa_test/_app/immutable/components/pages/_layout.svelte-56e0a1f0.js",
  "/pwa_test/_app/immutable/components/pages/_page.svelte-d6f6ea2f.js",
  "/pwa_test/_app/immutable/components/pages/about/_page.md-bb8ad695.js",
  "/pwa_test/_app/immutable/components/pages/gh_pages/_page.md-769cbd6c.js",
  "/pwa_test/_app/immutable/components/pages/pwa/_page.md-a0766a34.js"
], _ = [
  "/pwa_test/.nojekyll",
  "/pwa_test/apple-touch-icon.png",
  "/pwa_test/favicon.png",
  "/pwa_test/favicon.svg",
  "/pwa_test/logo.svg",
  "/pwa_test/manifest.json",
  "/pwa_test/pwa.png",
  "/pwa_test/pwa.svg",
  "/pwa_test/pwa_192.png",
  "/pwa_test/pwa_512.png",
  "/pwa_test/pwa_master.svg"
], c = "cache-pwa-0.0.5", o = [
  ...i,
  // the app itself
  ..._
  // everything in `static`
];
self.addEventListener("install", (a) => {
  console.info("install"), self.skipWaiting();
  async function t() {
    await (await caches.open(c)).addAll(o);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  console.info("activate");
  async function t() {
    const n = (await caches.keys()).filter((e) => e.includes("cache-pwa")).filter((e) => e !== cacheName);
    console.info("oldCaches", n);
    for (const e of n)
      e !== c && await caches.delete(e);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const s = await caches.open(c);
    try {
      const p = await fetch(a.request);
      return p.status === 200 && s.put(a.request, p.clone()), p;
    } catch {
      return s.match(a.request);
    }
  }
  a.respondWith(t());
});
