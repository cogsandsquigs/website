<script context="module">
  import { posts } from "$lib/posts";

  export async function load({ params }) {
    let pages = (await posts()).filter(
      page =>
        page.metadata.tags != undefined &&
        page.metadata.tags.indexOf(params.slug) > -1
    );

    if (pages == undefined || pages.length == 0) {
      return {
        status: 404,
        error: "No post has this tag. What even is " + params.slug + "???"
      }
    }

    return {
      props: {
        pages,
        tag: params.slug
      }
    };
  }
</script>

<script>
  export let pages
  export let tag;
  const locale = "en-US";
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
</script>

<h1>Tag: {tag}</h1>

{#each pages as post}

<h2><a href="/blog/{post.metadata.slug}">{post.metadata.title}</a></h2>

<h4>Published on {new Date(post.metadata.date).toLocaleDateString(locale, options)}</h4>

{#if post.metadata.tags != undefined}
  <h5>
    Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a href={"/blog/tags/" + tag}>{tag}</a>{:else}<a href={"/blog/tags/" + tag}>{tag}</a>{/if}{/each}
  </h5>
{/if}

{/each}
