<script context="module">
  import { posts } from "$lib/posts";

  export async function load({ fetch, url, params }) {
    // gets the post with the matching slug
    let pages = (await posts()).filter(
      page => page.metadata.slug === params.slug
    );

    // if there is a post w/ matching slug,
    // return it so it can be rendered
    if (pages.length !== 0) {
      return {
        props: {
          post: pages[0]
        }
      };
    }

    // if there is none, then return an error
    return {
      status: 404,
      error: "Blog post not found! Try looking for another, would ya?"
    };
  }
</script>

<script>
  export let post;
</script>

<!--
  post.renderer gets us the renderer.
  This way we can render the post's
  mdsvex content!
 -->

<svelte:component this={post.renderer} />
