<script>
  import "../lib/styles/globals.css";
  import Nav from "$lib/Nav.svelte";
</script>

<svelte:head>
  <title>Ian Pratt | Just a gay programmer</title>
</svelte:head>

<Nav />

<div class="content">
  <slot />
</div>

<style>
  .content {
    padding: 2rem;
  }
</style>
