<script lang="ts" context="module">
  import { posts } from "$lib/posts"
  
  /** @type {import("@sveltejs/kit").Load} */
  export const load = async () => {
    
    return {
      props: {
        pages: (await posts()),
      }
    };
  };
</script>

<script lang="ts">
  import { locale, dateOptions } from "$lib/info"
  export let pages;
</script>

<svelte:head>
  <title>Ian Pratt | Blog</title>
</svelte:head>

<h1>Blog</h1>

{#each pages as post}
  <h2><a href="/blog/{post.metadata.slug}">{post.metadata.title}</a></h2>
  <h4>Published on {new Date(post.metadata.date).toLocaleDateString(locale, dateOptions)}</h4>

  {#if post.metadata.tags != undefined}
    <h5>Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a href={"/blog/tags/" + tag}>{tag}</a>{:else}<a href={"/blog/tags/" + tag}>{tag}</a>{/if}{/each}</h5>
  {/if}
{/each}
