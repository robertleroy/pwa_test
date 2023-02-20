const c = [
  "/pwa_test/_app/immutable/chunks/0-fbc29f0a.js",
  "/pwa_test/_app/immutable/chunks/1-92c365ac.js",
  "/pwa_test/_app/immutable/chunks/2-4c5e8afd.js",
  "/pwa_test/_app/immutable/chunks/3-9ae3c8d2.js",
  "/pwa_test/_app/immutable/chunks/4-2c06e275.js",
  "/pwa_test/_app/immutable/chunks/5-858ec6d0.js",
  "/pwa_test/_app/immutable/chunks/TOC-2a526c9d.js",
  "/pwa_test/_app/immutable/chunks/_layout-95f8a586.js",
  "/pwa_test/_app/immutable/chunks/index-f05a2fe5.js",
  "/pwa_test/_app/immutable/chunks/paths-93b45301.js",
  "/pwa_test/_app/immutable/chunks/singletons-3747866d.js",
  "/pwa_test/_app/immutable/start-39dd37ce.js",
  "/pwa_test/_app/immutable/assets/_error-a61fa775.css",
  "/pwa_test/_app/immutable/components/pages/_error.svelte-4b625053.js",
  "/pwa_test/_app/immutable/assets/_layout-15e66b71.css",
  "/pwa_test/_app/immutable/modules/pages/_layout.js-11d4e431.js",
  "/pwa_test/_app/immutable/components/pages/_layout.svelte-5f2f220d.js",
  "/pwa_test/_app/immutable/components/pages/_page.svelte-d6f6ea2f.js",
  "/pwa_test/_app/immutable/components/pages/about/_page.md-bb8ad695.js",
  "/pwa_test/_app/immutable/components/pages/gh_pages/_page.md-ba021ac0.js",
  "/pwa_test/_app/immutable/components/pages/pwa/_page.md-bbe24b39.js"
], n = [
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
], p = "cache-pwa-0.0.2", _ = [
  ...c,
  /* the app itself           */
  ...n
  /* everything in `static`   */
];
self.addEventListener("install", (a) => {
  console.info("install");
  async function e() {
    await (await caches.open(p)).addAll(_);
  }
  a.waitUntil(e());
});
self.addEventListener("activate", (a) => {
  console.info("activate");
  async function e() {
    for (const t of await caches.keys())
      t.includes("cache-pwa-") && t !== p && await caches.delete(t);
  }
  a.waitUntil(e());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function e() {
    const t = await caches.open(p);
    try {
      const s = await fetch(a.request);
      return s.status === 200 && t.put(a.request, s.clone()), s;
    } catch {
      return t.match(a.request);
    }
  }
  a.respondWith(e());
});
