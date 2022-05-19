<script lang="ts" context="module">
  import { posts } from "$lib/posts";

  /** @type {import("@sveltejs/kit").Load} */
  export const load = async () => {
    return {
      props: {
        pages: await posts(),
      },
    };
  };
</script>

<script lang="ts">
  import PostListing from "$lib/components/PostListing.svelte";
  export let pages;
</script>

<svelte:head>
  <title>Ian Pratt | Blog</title>
</svelte:head>

<h1>Blog</h1>

{#each pages as post}
  <PostListing {post} />
{/each}
