<script lang="ts">
  import { locale, dateOptions } from "$lib/info";
  export let post;
  export let size: "sm" | "md" | "lg" = "md";
  export let link: boolean = true;
</script>

{#if size === "lg"}
  <div class="space-y-0">
    <h1 class="m-0">
      {#if link}
        <a href="/blog/{post.metadata.slug}">{post.metadata.title}</a>
      {:else}
        {post.metadata.title}
      {/if}
    </h1>
    <h3>{post.metadata.description}</h3>
    <p>
      Posted on {new Date(post.metadata.date).toLocaleDateString(
        locale,
        dateOptions
      )}
    </p>

    {#if post.metadata.tags != undefined}
      <p class="m-0 p-0">
        Tags:
        {#each post.metadata.tags as tag, index}
          {#if index > 0}
            , <a href={"/blog/tags/" + tag}>{tag}</a>
          {:else}
            <a href={"/blog/tags/" + tag}>{tag}</a>
          {/if}
        {/each}
      </p>
    {/if}
  </div>
{:else if size === "md"}
  <div>
    <h2>
      {#if link}
        <a href="/blog/{post.metadata.slug}">{post.metadata.title}</a>
      {:else}
        {post.metadata.title}
      {/if}
    </h2>
    <h6>{post.metadata.description}</h6>
    <h4>
      Posted on {new Date(post.metadata.date).toLocaleDateString(
        locale,
        dateOptions
      )}
    </h4>

    {#if post.metadata.tags != undefined}
      <h5>
        Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a
              href={"/blog/tags/" + tag}>{tag}</a
            >{:else}<a href={"/blog/tags/" + tag}>{tag}</a>{/if}{/each}
      </h5>
    {/if}
  </div>
{:else if size === "sm"}
  <div class="pb-1">
    <p class="m-0">
      {#if link}
        <a href="/blog/{post.metadata.slug}">{post.metadata.title}</a>,
      {:else}
        {post.metadata.title},
      {/if}
      posted on {new Date(post.metadata.date).toLocaleDateString(
        locale,
        dateOptions
      )}
    </p>
    <h5 class="text-sm">
      Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a
            href={"/blog/tags/" + tag}>{tag}</a
          >{:else}<a href={"/blog/tags/" + tag}>{tag}</a>{/if}{/each}
    </h5>
  </div>
{/if}
