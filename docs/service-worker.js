const _ = [
  "/pwa_test/_app/immutable/chunks/0-784bc731.js",
  "/pwa_test/_app/immutable/chunks/1-92c365ac.js",
  "/pwa_test/_app/immutable/chunks/2-4c5e8afd.js",
  "/pwa_test/_app/immutable/chunks/3-9ae3c8d2.js",
  "/pwa_test/_app/immutable/chunks/4-e2b4f341.js",
  "/pwa_test/_app/immutable/chunks/5-67c5d6ac.js",
  "/pwa_test/_app/immutable/chunks/_layout-95f8a586.js",
  "/pwa_test/_app/immutable/chunks/index-f05a2fe5.js",
  "/pwa_test/_app/immutable/chunks/paths-93b45301.js",
  "/pwa_test/_app/immutable/chunks/singletons-3747866d.js",
  "/pwa_test/_app/immutable/start-4f0b3325.js",
  "/pwa_test/_app/immutable/assets/_error-a61fa775.css",
  "/pwa_test/_app/immutable/components/pages/_error.svelte-4b625053.js",
  "/pwa_test/_app/immutable/assets/_layout-470b0a0a.css",
  "/pwa_test/_app/immutable/modules/pages/_layout.js-11d4e431.js",
  "/pwa_test/_app/immutable/components/pages/_layout.svelte-7922a3fa.js",
  "/pwa_test/_app/immutable/components/pages/_page.svelte-d6f6ea2f.js",
  "/pwa_test/_app/immutable/components/pages/about/_page.md-bb8ad695.js",
  "/pwa_test/_app/immutable/components/pages/gh_pages/_page.md-f7198e8e.js",
  "/pwa_test/_app/immutable/components/pages/pwa/_page.md-a0766a34.js"
], l = [
  "/pwa_test/.nojekyll",
  "/pwa_test/apple-touch-icon.png",
  "/pwa_test/favicon.png",
  "/pwa_test/favicon.svg",
  "/pwa_test/green.png",
  "/pwa_test/manifest.json",
  "/pwa_test/pwa.png",
  "/pwa_test/pwa.svg",
  "/pwa_test/pwa_192.png",
  "/pwa_test/pwa_512.png",
  "/pwa_test/pwa_master.svg",
  "/pwa_test/splash.png"
], o = "1676907453808", n = `cache-${o}`, c = [
  ..._,
  // the app itself
  ...l
  // everything in `static`
];
self.addEventListener("install", (a) => {
  console.log("install");
  async function t() {
    await (await caches.open(n)).addAll(c), console.log("addFilesToCache");
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  console.log("activate");
  async function t() {
    for (const e of await caches.keys())
      e !== n && await caches.delete(e), console.log("deleteOldCaches");
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(a.request.url), s = await caches.open(n);
    if (c.includes(e.pathname))
      return s.match(a.request);
    try {
      const p = await fetch(a.request);
      return p.status === 200 && s.put(a.request, p.clone()), p;
    } catch {
      return s.match(a.request);
    }
  }
  a.respondWith(t());
});
