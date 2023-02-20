const o = [
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
], l = [
  "/pwa_test/.nojekyll",
  "/pwa_test/apple-touch-icon.png",
  "/pwa_test/favicon.png",
  "/pwa_test/favicon.svg",
  "/pwa_test/manifest.json",
  "/pwa_test/pwa.png",
  "/pwa_test/pwa.svg",
  "/pwa_test/pwa_1922.png",
  "/pwa_test/pwa_5122.png",
  "/pwa_test/pwa_master.svg"
], _ = "1676912758400", s = `cache-${_}`;
console.log("CACHE", s);
const n = [
  ...o,
  // the app itself
  ...l
  // everything in `static`
];
self.addEventListener("install", (a) => {
  console.log("install");
  async function t() {
    await (await caches.open(s)).addAll(n), console.log("addFilesToCache");
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  console.log("activate");
  async function t() {
    for (const e of await caches.keys())
      e !== s && await caches.delete(e), console.log("deleteOldCaches");
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(a.request.url), p = await caches.open(s);
    if (n.includes(e.pathname))
      return p.match(a.request);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && p.put(a.request, c.clone()), c;
    } catch {
      return p.match(a.request);
    }
  }
  a.respondWith(t());
});
