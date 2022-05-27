<script context="module">
  import { posts } from "$lib/posts";

  // generate no JS for this page
  export const hydrate = false;

  export async function load({ params }) {
    // gets the post with the matching slug
    let post = (await posts()).filter(
      (page) => page.metadata.slug === params.slug
    )[0];

    if (post === undefined) {
      // if there is none, then return an error
      return {
        status: 404,
        error: "Blog post not found! Try looking for another, would ya?",
      };
    }

    return {
      props: {
        post: post,
      },
    };
  }
</script>

<script lang="ts">
  // TODO: make css only import one-dark-code css when used
  import "$styles/one-dark-code.css";
  import PostListing from "$components/PostListing.svelte";

  export let post;
  export let recomended;
</script>

<PostListing {post} size="lg" link={false} />
<hr class="mt-2 mb-6" />

<!--
  post.renderer gets us the renderer.
  This way we can render the post's
  mdsvex content!
 -->

<svelte:component this={post.renderer} />
