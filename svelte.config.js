import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from "mdsvex";
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
  kit: {
    paths: {
      base: dev ? '' : '/pwa_test',
    },
    adapter: adapter(
      // default options are shown. On some platforms
      // these options are set automatically — see below
      {
        pages: "docs",
        assets: "docs",
        fallback: "app.html",
        // precompress: false,
        // strict: true,
      }
    ),
  },
  
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svelte.md', '.md', '.svx'],
      smartypants: { dashes: 'oldschool' }
    })
  ],
};

export default config;
