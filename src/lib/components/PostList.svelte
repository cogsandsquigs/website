<!--
    NOTE:
    Wherever this is used, you MUST
    enable hydration if posts is
    undefined.
-->
<script lang="ts">
  import PostListing from "$components/PostListing.svelte";
  import * as p from "$lib/posts";
  import Error from "./Error.svelte";

  export let posts: any[] = undefined;
</script>

{#if posts === undefined}
  {#await p.posts()}
    <h2>Loading posts...</h2>
  {:then pages}
    {#each pages as post, index}
      {#if index > 0}
        <hr />
      {/if}
      <PostListing {post} />
    {/each}
  {:catch}
    <div class="max-w-max flex justify-center">
      <Error>Error!</Error>
    </div>
  {/await}
{:else}
  {#each posts as post, index}
    {#if index > 0}
      <hr />
    {/if}
    <PostListing {post} />
  {/each}
{/if}
