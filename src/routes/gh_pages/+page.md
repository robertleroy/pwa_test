# Github Pages

Install adapter-static 

``` bash
npm i -D @sveltejs/adapter-static
```

- Import & Config adapter
- Config base path for gh repo

``` js
// svelte.config.js
import adapter from "@sveltejs/adapter-static";
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: dev ? '' : '/pwa_test',
    },
    adapter: adapter({
      fallback: "app.html",
    }),
  },
};

export default config;

```



Adapter can take options:
``` js
  adapter: adapter({
    // default options are shown. 
    pages: 'build', /* output folder */
    assets: 'build', /* output folder */
    fallback: null, /* 404 fallback page */
    precompress: false, /* gzip files*/
    strict: true /* Check if whole app is accessible */
  })
```

Pre-render pages

``` js
// +layout.js
export const prerender = true;
```