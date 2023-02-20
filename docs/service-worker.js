const _ = [
  "/pwa_test/_app/immutable/chunks/0-23a4aeca.js",
  "/pwa_test/_app/immutable/chunks/1-92c365ac.js",
  "/pwa_test/_app/immutable/chunks/2-4c5e8afd.js",
  "/pwa_test/_app/immutable/chunks/3-9ae3c8d2.js",
  "/pwa_test/_app/immutable/chunks/4-e2b4f341.js",
  "/pwa_test/_app/immutable/chunks/5-67c5d6ac.js",
  "/pwa_test/_app/immutable/chunks/_layout-95f8a586.js",
  "/pwa_test/_app/immutable/chunks/index-f05a2fe5.js",
  "/pwa_test/_app/immutable/chunks/paths-93b45301.js",
  "/pwa_test/_app/immutable/chunks/singletons-3747866d.js",
  "/pwa_test/_app/immutable/start-0dcb0abc.js",
  "/pwa_test/_app/immutable/assets/_error-a61fa775.css",
  "/pwa_test/_app/immutable/components/pages/_error.svelte-4b625053.js",
  "/pwa_test/_app/immutable/assets/_layout-4b55a68b.css",
  "/pwa_test/_app/immutable/modules/pages/_layout.js-11d4e431.js",
  "/pwa_test/_app/immutable/components/pages/_layout.svelte-e8a99eba.js",
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
], o = "1676907683504", c = `cache-${o}`, n = [
  ..._,
  // the app itself
  ...l
  // everything in `static`
];
self.addEventListener("install", (a) => {
  console.log("install");
  async function e() {
    await (await caches.open(c)).addAll(n), console.log("addFilesToCache");
  }
  a.waitUntil(e());
});
self.addEventListener("activate", (a) => {
  console.log("activate");
  async function e() {
    for (const t of await caches.keys())
      t !== c && await caches.delete(t), console.log("deleteOldCaches");
  }
  a.waitUntil(e());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function e() {
    const t = new URL(a.request.url), s = await caches.open(c);
    if (n.includes(t.pathname))
      return s.match(a.request);
    try {
      const p = await fetch(a.request);
      return p.status === 200 && s.put(a.request, p.clone()), p;
    } catch {
      return s.match(a.request);
    }
  }
  a.respondWith(e());
});
