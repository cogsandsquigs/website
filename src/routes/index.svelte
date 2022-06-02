<script context="module">
  import { posts } from "$lib/posts";

  /** @type {import("@sveltejs/kit").Load} */
  export async function load({}) {
    return {
      props: {
        pages: await posts(),
      },
    };
  }
</script>

<script lang="ts">
  import PostList from "$components/PostList.svelte";
  import Subtitle from "$components/Subtitle.svelte";
  import { title, subtitle } from "$lib/info";

  export let pages;
</script>

<svelte:head>
  <title>{title + " - " + subtitle}</title>
  <meta property="og:title" content={title + " - " + subtitle} />
</svelte:head>

<div class="space-y-2">
  <h1 class="m-0">{title}</h1>
  <h2 class="m-0"><Subtitle /></h2>
</div>

<PostList posts={pages} />
