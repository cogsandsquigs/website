<script>
  import "../lib/styles/globals.css";
  import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />

<div class="content">
  <slot />
</div>

<style>
  .content {
    padding: 2rem;
  }
</style>
