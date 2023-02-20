<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';

  onMount(() => {
    setTimeout(function(){
      goto(`/${base}`);
    }, 4000);
  });
</script>


<h2>This isnt the page your looking for...</h2>

<div class="em">
  {$page.status}: {$page.error.message}
</div>

<style>
  h2 {
    margin: 1rem 0;
  }
  .em {
    font-style: italic;
    padding: 0 2rem;
  }
</style>