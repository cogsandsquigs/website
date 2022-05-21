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
  import { RssOutline } from "svelte-heros";
  export let pages;
</script>

<svelte:head>
  <title>{title + " - Blog"}</title>
  <meta property="og:title" content={title + " - Blog"} />
</svelte:head>
<div class="flex justify-end">
  <a class="max-w-fit" href="/rss.xml"><RssOutline class="align-bottom" /> </a>
</div>

<h1
  class="transform duration-300 hover:-rotate-12 flex justify-center space-x-1"
>
  Blog
</h1>

{#each pages as post, index}
  {#if index > 0}
    <hr />
  {/if}
  <PostListing {post} />
{/each}
