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
  import { RssOutline } from "svelte-heros";
  export let pages;
</script>

<svelte:head>
  <title>Ian Pratt | Blog</title>
</svelte:head>

<a class="flex justify-end" href="/rss.xml"
  ><RssOutline class="align-bottom" />
</a>

<h1
  class="transform duration-300 hover:-rotate-12 flex justify-center space-x-1"
>
  Blog
</h1>

{#each pages as post}
  <PostListing {post} />
{/each}
