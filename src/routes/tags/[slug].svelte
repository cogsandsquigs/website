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

  // generate no js for this page
  // export const hydrate = false;
</script>

<script lang="ts">
  import PostList from "$components/PostList.svelte";
  import { RssIcon } from "@rgossiaux/svelte-heroicons/outline";
  import { title } from "$lib/info";
  export let pages;
  export let tag;
</script>

<svelte:head>
  <title>{title + " - Tag: " + tag}</title>
  <meta property="og:title" content={title + " - Tag: " + tag} />
</svelte:head>

<div class="flex items-start justify-between">
  <h1 class="m-0">Tag: <a href="/tags/{tag}">{tag}</a></h1>
  <a class="" href="/rss.xml"><RssIcon class="icon" /></a>
</div>

<PostList posts={pages} />
