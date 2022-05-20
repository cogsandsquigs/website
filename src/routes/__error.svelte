<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    };
  }
</script>

<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>Ian Pratt | {status}</title>
</svelte:head>

<div class="wrap">
  <h1 class="transition duration-300 hover:-rotate-12">{status}</h1>
  <h3>
    {#if status == 404}
      This page doesn't exist, doofus. What were you even looking for?
    {:else}
      {error.message}
    {/if}
  </h3>
</div>

<style>
  .wrap {
    text-align: center;
  }
</style>
