<script>
  import './app.css';
  let title = 'PWA';
  
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
      
      <a href='/'>
        <img src="/pwa.svg" alt="logo">
      </a>
    </div>

    {#if !online}
    <div class="offline">offline</div>
    {/if}
    <nav>
      {#each routes as route}
      <div class='route'>
        <a href={route.path}>{route.name}</a>
      </div>
      {/each}
    </nav>
  </div>
</header>

<main>
  <div class='router'><slot /></div>
</main>

<style lang='postcss'>
  header {
    border-bottom: 1px solid #ccc;
  }
  header .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 1rem;
    padding: 1rem 2rem;
  }

  header a {  color: inherit; }
  header a:not(:hover:not(:active)) { text-decoration: none; }
  header nav {
    display: flex;
    align-items: middle;
    gap: 0 1rem;
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
  .router {  padding: 0.5rem 2rem; }
</style>