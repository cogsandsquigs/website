<script lang="ts" context="module">
  import { posts } from "$lib/posts";

  /** @type {import("@sveltejs/kit").Load} */
  export async function load({ params }) {
    let pages = (await posts()).filter(
      (page) =>
        page.metadata.tags != undefined &&
        page.metadata.tags.indexOf(params.slug) > -1
    );

    if (pages == undefined || pages.length == 0) {
      return {
        status: 404,
        error: "No post has this tag. What even is " + params.slug + "???",
      };
    }

    return {
      props: {
        pages,
        tag: params.slug,
      },
    };
  }
</script>

<script lang="ts">
  import PostListing from "$lib/components/PostListing.svelte";
  import { RssIcon } from "@rgossiaux/svelte-heroicons/outline";
  import { title } from "$lib/info";
  export let pages;
  export let tag;
</script>

<svelte:head>
  <title>{title + " - Tag: " + tag}</title>
  <meta property="og:title" content={title + " - Tag: " + tag} />
</svelte:head>

<div class="flex justify-end">
  <a class="" href="/rss.xml"><RssIcon class="w-6" /></a>
</div>

<h1>Tag: {tag}</h1>

{#each pages as post, index}
  {#if index > 0}
    <hr />
  {/if}
  <PostListing {post} />
{/each}
