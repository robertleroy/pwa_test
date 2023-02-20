<script>  
  import { base } from '$app/paths';
  export let links = [];
</script>

<div class='toc'>
  {#each links as link}
  <div class="link">
    <a href={ base }{ link.path }>{ link.name }</a>
  </div>
  {/each}
</div>