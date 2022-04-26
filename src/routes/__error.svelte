<script context="module">
  export function load({ url, error, status }) {
    return {
      props: {
        path: url.pathname,
        error,
        status,
      },
    };
  }
</script>

<script>
  export let status;
  export let error;
  export let path;
</script>

<div class="wrap">
  <h1>{status}</h1>
  <h3>
    {#if status == 404 && !path.startsWith("/blog")}
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
