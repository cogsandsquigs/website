<script context="module">
  import { posts } from "$lib/posts";

  function arrayMatch(arr1, arr2) {
    var arr = []; // Array to contain match elements
    for (var i = 0; i < arr1.length; ++i) {
      for (var j = 0; j < arr2.length; ++j) {
        if (arr1[i] == arr2[j]) {
          // If element is in both the arrays
          arr.push(arr1[i]); // Push to arr array
        }
      }
    }

    return arr; // Return the arr elements
  }

  export async function load({ fetch, url, params }) {
    // gets the post with the matching slug
    let pages = (await posts()).filter(
      (page) => page.metadata.slug === params.slug
    );

    // if there is a post w/ matching slug,
    // return it so it can be rendered
    if (pages.length !== 0) {
      let post = pages[0];

      let reccomended = (await posts())
        .filter((page) => page.metadata.slug !== params.slug)
        .sort(function compare(a, b) {
          return (
            arrayMatch(b.metadata.tags, post.metadata.tags).length -
            arrayMatch(a.metadata.tags, post.metadata.tags).length
          );
        })
        .slice(0, 3);

      return {
        props: {
          post: post,
          reccomended: reccomended,
        },
      };
    }

    // if there is none, then return an error
    return {
      status: 404,
      error: "Blog post not found! Try looking for another, would ya?",
    };
  }
</script>

<script>
  import PostListing from "$lib/components/PostListing.svelte";
  export let post;
  export let reccomended;
</script>

<!--
  post.renderer gets us the renderer.
  This way we can render the post's
  mdsvex content!
 -->

<svelte:component this={post.renderer} />

{#if reccomended != undefined && reccomended.length > 0}
  <hr />

  If you like this article, you might enjoy these!
  <ul>
    {#each reccomended as post}
      <li class="my-0">
        <PostListing {post} minimal="true" />
      </li>
    {/each}
  </ul>
{/if}
