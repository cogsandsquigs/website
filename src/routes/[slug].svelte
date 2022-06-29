<script context="module">
  import { posts } from "$lib/posts";

  // scores the similarity of two posts
  function scorePostSimilarity(post1, post2) {
    let score = 0;

    for (const tag1 of post1.metadata.tags) {
      for (const tag2 of post2.metadata.tags) {
        if (tag1 === tag2) {
          score++;
        }
      }
    }

    return score;
  }

  export async function load({ params }) {
    // gets the post with the matching slug
    let post = (await posts()).filter(
      (page) => page.metadata.slug === params.slug
    )[0];

    let rest = (await posts()).filter(
      (page) => page.metadata.slug !== params.slug
    );

    if (post === undefined) {
      // if there is none, then return an error
      return {
        status: 404,
        error: "Blog post not found! Try looking for another, would ya?",
      };
    }

    /**
     * recommendation function for posts
     */

    rest.sort(
      (a, b) => scorePostSimilarity(post, b) - scorePostSimilarity(post, a)
    );

    return {
      props: {
        post: post,
        recommended: rest
          .slice(0, 3)
          .sort((a, b) => b.metadata.date - a.metadata.date),
      },
    };
  }
</script>

<script lang="ts">
  // TODO: make css only import one-dark-code css when used
  import "$styles/one-dark-code.css";
  import "victormono";
  import PostListing from "$components/PostListing.svelte";
  import PostList from "$components/PostList.svelte";
  export let post: any;
  export let recommended: any;
</script>

<PostListing {post} size="lg" link={false} />
<hr class="mt-2 mb-6" />

<!--
  post.renderer gets us the renderer.
  This way we can render the post's
  mdsvex content!
 -->

<svelte:component this={post.renderer} />

{#if recommended != null && recommended.length > 0}
  <hr class="mt-2 mb-6" />
  <h3>You might like:</h3>
  <PostList posts={recommended} size="sm" />
{/if}
