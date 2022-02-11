<script context="module">
  /** @type {import("@sveltejs/kit").Load} */
  export const load = async ({ fetch }) => {
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };
</script>

<script>
  export let posts;
  const locale = "en-US";
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
</script>

<svelte:head>

  <title>Ian Pratt | Just a gay programmer</title>
</svelte:head>

# **Posts**

{#each posts as post}

## [{post.title}](/posts/{post.slug})

#### Published on {new Date(post.date).toLocaleDateString(locale, options)}

{/each}
