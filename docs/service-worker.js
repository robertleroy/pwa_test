const _ = [
  "/pwa_test/_app/immutable/chunks/0-6b8b3da6.js",
  "/pwa_test/_app/immutable/chunks/1-3f6c560a.js",
  "/pwa_test/_app/immutable/chunks/2-50724d71.js",
  "/pwa_test/_app/immutable/chunks/3-9ae3c8d2.js",
  "/pwa_test/_app/immutable/chunks/4-0b545e71.js",
  "/pwa_test/_app/immutable/chunks/5-67c5d6ac.js",
  "/pwa_test/_app/immutable/chunks/_layout-95f8a586.js",
  "/pwa_test/_app/immutable/chunks/index-f05a2fe5.js",
  "/pwa_test/_app/immutable/chunks/paths-93b45301.js",
  "/pwa_test/_app/immutable/chunks/singletons-44533c24.js",
  "/pwa_test/_app/immutable/start-68c02871.js",
  "/pwa_test/_app/immutable/components/error.svelte-d70d6305.js",
  "/pwa_test/_app/immutable/assets/_layout-1ccb96b8.css",
  "/pwa_test/_app/immutable/modules/pages/_layout.js-11d4e431.js",
  "/pwa_test/_app/immutable/components/pages/_layout.svelte-90955cf9.js",
  "/pwa_test/_app/immutable/components/pages/_page.svelte-32d50acb.js",
  "/pwa_test/_app/immutable/components/pages/about/_page.md-bb8ad695.js",
  "/pwa_test/_app/immutable/components/pages/gh_pages/_page.md-182b464f.js",
  "/pwa_test/_app/immutable/components/pages/pwa/_page.md-a0766a34.js"
], u = [
  "/pwa_test/.nojekyll",
  "/pwa_test/apple-touch-icon.png",
  "/pwa_test/favicon.png",
  "/pwa_test/favicon.svg",
  "/pwa_test/manifest.json",
  "/pwa_test/pwa.png",
  "/pwa_test/pwa.svg",
  "/pwa_test/pwa_192.png",
  "/pwa_test/pwa_512.png",
  "/pwa_test/pwa_master.svg"
], m = "1676895967308", c = `cache-${m}`, n = [
  ..._,
  // the app itself
  ...u
  // everything in `static`
];
self.addEventListener("install", (t) => {
  async function a() {
    await (await caches.open(c)).addAll(n);
  }
  t.waitUntil(a());
});
self.addEventListener("activate", (t) => {
  async function a() {
    for (const e of await caches.keys())
      e !== c && await caches.delete(e);
  }
  t.waitUntil(a());
});
self.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET")
    return;
  async function a() {
    const e = new URL(t.request.url), s = await caches.open(c);
    if (n.includes(e.pathname))
      return s.match(t.request);
    try {
      const p = await fetch(t.request);
      return p.status === 200 && s.put(t.request, p.clone()), p;
    } catch {
      return s.match(t.request);
    }
  }
  t.respondWith(a());
});
