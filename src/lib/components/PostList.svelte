<!--
    NOTE:
    Wherever this is used, you MUST
    enable hydration.
-->
<script lang="ts">
  import PostListing from "$components/PostListing.svelte";
  import { posts } from "$lib/posts";
  import Error from "./Error.svelte";
</script>

{#await posts()}
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
