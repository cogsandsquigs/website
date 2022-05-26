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
  import { title } from "$lib/info";
  import { RssIcon } from "@rgossiaux/svelte-heroicons/outline";
  export let pages;
</script>

<svelte:head>
  <title>{title + " - Blog"}</title>
  <meta property="og:title" content={title + " - Blog"} />
</svelte:head>

<div class="flex items-start justify-between">
  <h1 class="m-0">Blog</h1>
  <a href="/rss.xml"><RssIcon class="icon" /></a>
</div>

{#each pages as post, index}
  {#if index > 0}
    <hr />
  {/if}
  <PostListing {post} />
{/each}
