<script>  
  import TOC from '$lib/components/TOC.svelte';
  const links = [
    { name: 'Adapter Static', path: '#top' },
    // { name: 'Config Adapter', path: '#config' },
    { name: 'Pre-Render Pages', path: '#prerender' },
    { name: 'Configure Paths', path: '#paths' }
  ]
</script>



<div class="page">
  <div class="toc">
  <TOC {links}/>
  </div>

  <div class="content"> 

# Github Pages


## Install and Configure adapter-static 

``` bash
npm i -D @sveltejs/adapter-static
```


``` js
/* svelte.config.js */
import adapter from "@sveltejs/adapter-static";
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: dev ? '' : '/pwa_test',
    },
    adapter: adapter({ /* build to `docs` for gh-pages */
      pages: "docs",
      assets: "docs",
      fallback: "app.html",
    }),
  },
};

export default config;

```

``` js
/* adapter options defaults */
adapter: adapter({
  pages: 'build', /* output folder */
  assets: 'build', /* output folder */
  fallback: null, /* 404 fallback page */
  precompress: false, /* gzip files*/
  strict: true /* Check if whole app is accessible */
})
```


<br><br id='prerender' />

## Pre-Render pages

``` js
// +layout.js
export const prerender = true;
```


<br><br id='paths' />  

## Configure Relative Paths

``` js
// svelte.config.cjs
const config = {
  kit: {
    paths: {
      base: dev ? '' : '/pwa_test',
    },
  },
}
```

``` svelte  
<!-- all relative paths prefaces with { base } -->
<script>
  import { base } from '$app/paths';

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];
</script>

<header class=''>
  <div class='title'>      
    <a href='{ base }/'>
      <img src="{ base }/pwa.svg" alt="logo">
    </a>
  </div>

  <nav>
    {#each routes as route}
    <div class='route'>
      <a href={base}{route.path}>{route.name}</a>
    </div>
    {/each}
  </nav>
</header>
```


  </div>
</div>