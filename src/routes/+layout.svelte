<script>
  import { base } from '$app/paths';
  import './app.css';
  let title = 'PWA';

  // console.log(`test: ${$app/paths}`)
  
  let online;
  const routes = [
    // { name: 'Home', path: '/' },
    { name: 'PWA', path: '/pwa' },
    { name: 'Github Pages', path: '/gh_pages' },
    // { name: 'About', path: '/about' },
  ];
</script>

<svelte:window bind:online />



<header class=''>
  <div class='flex'>
    <div class='title' style:color={online ? 'currentColor' : 'red'}>
      
      <a href='{ base }/'>
        <img src="{ base }/pwa.svg" alt="logo">
      </a>
    </div>

    {#if !online}
    <div class="offline">offline</div>
    {/if}

    <nav>
      {#each routes as route}
      <div class='route'>
        <a href={base}{route.path}>{route.name}</a>
      </div>
      {/each}
    </nav>
  </div>
</header>

<main>
  <div class='router'><slot /></div>
  
  <br/> <br/> 
</main>

<style lang='postcss'>
  header .flex, .router {
    max-width: 1200px;
    margin: 0 auto;
  }
  header {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: var(--header-height);

    display: flex;
    align-items: baseline;
    border-bottom: 1px solid #ccc;
    background-color: var(--background-color);
    z-index: 10;
  }
  main {
    margin-top: var(--header-height);
  }
  .flex {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 1rem;
    padding: 1rem 2rem;
    
    a {  color: inherit; 
      &:not(:hover:not(:active)) { text-decoration: none; }
    }
    nav {
      display: flex;
      align-items: center;
      gap: 0 1rem;
    }
  }
  
  img { 
    height: 1.5rem; 
    vertical-align: middle;
  }
  .offline { 
    font-family: "Georgia", "Garamond", "Didot", serif;
    color: tomato; 
    /* font-variant: small-caps; */
    /* font-weight: bold;; */
  }
  .router {  
    position: relative;
    padding: 0.5rem 2rem; 
  }
</style>