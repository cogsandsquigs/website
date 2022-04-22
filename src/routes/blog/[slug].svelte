<script context="module">
  export async function load({ fetch, url, params }) {
    // grab all of the post files
    const files = import.meta.glob("/src/posts/*.md");

    // async awaits for each post
    let pages = [];
    for (let file in files) {
      pages.push(await files[file]());
    }

    // gets the post with the matching slug
    pages = pages.filter(page => page.metadata.slug === params.slug);

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
  post.default gets us the renderer.
  This way we can render the post's 
  mdsvex content!
 -->
<svelte:component this={post.default}/>