---
title: "Blog"
---

<script context="module">
  import * as ps from "$lib/posts"
  /** @type {import("@sveltejs/kit").Load} */
  export const load = async () => {
    let p = (await ps.posts()).map(x => x.metadata);
    return {props: {posts:p}};
  };
</script>

<script>
  export let posts;
  const locale = "en-US";
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
</script>

<svelte:head>

  <title>Ian Pratt | Blog</title>
</svelte:head>

# **Blog**

{#each posts as post}

## [{post.title}](/blog/{post.slug})

#### Published on {new Date(post.date).toLocaleDateString(locale, options)}

{#if post.tags != undefined}

##### Tags: {#each post.tags as tag, index}{#if index > 0}{", " + tag}{:else}{tag}{/if}{/each}

{/if}

{/each}
