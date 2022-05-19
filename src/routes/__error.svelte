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

<div class="wrap">
  <h1>{status}</h1>
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
