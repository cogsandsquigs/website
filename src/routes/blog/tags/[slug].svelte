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
  export let pages;
  export let tag;
</script>

<h1>Tag: {tag}</h1>

{#each pages as post}
  <PostListing {post} />
{/each}
