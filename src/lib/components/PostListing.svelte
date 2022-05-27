<script lang="ts">
  import { locale, dateOptions } from "$lib/info";
  import { RssIcon } from "@rgossiaux/svelte-heroicons/outline";

  export let post;
  export let size: "sm" | "md" | "lg" = "md";
  export let link: boolean = true;
</script>

{#if size === "lg"}
  <div class="space-y-0">
    <div class="flex justify-between items-start">
      <h1 class="m-0">
        {#if link}
          <a href="/{post.metadata.slug}">{post.metadata.title}</a>
        {:else}
          {post.metadata.title}
        {/if}
      </h1>
      <a href="/rss.xml"><RssIcon class="icon" /></a>
    </div>

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
            , <a href={"/tags/" + tag}>{tag}</a>
          {:else}
            <a href={"/tags/" + tag}>{tag}</a>
          {/if}
        {/each}
      </p>
    {/if}
  </div>
{:else if size === "md"}
  <div class="space-y-0">
    <h2 class="mb-0">
      {#if link}
        <a href="/{post.metadata.slug}">{post.metadata.title}</a>
      {:else}
        {post.metadata.title}
      {/if}
    </h2>
    <p class="m-0 font-bold">{post.metadata.description}</p>
    <p class="m-0">
      Posted on {new Date(post.metadata.date).toLocaleDateString(
        locale,
        dateOptions
      )}
    </p>

    {#if post.metadata.tags != undefined}
      <p class="m-0">
        Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a
              href={"/tags/" + tag}>{tag}</a
            >{:else}<a href={"/tags/" + tag}>{tag}</a>{/if}{/each}
      </p>
    {/if}
  </div>
{:else if size === "sm"}
  <div class="pb-1">
    <p class="m-0">
      {#if link}
        <a href="/{post.metadata.slug}">{post.metadata.title}</a>,
      {:else}
        {post.metadata.title},
      {/if}
      posted on {new Date(post.metadata.date).toLocaleDateString(
        locale,
        dateOptions
      )}
    </p>
    <p class="text-sm text-[#fff] font-bold">
      Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a
            href={"/tags/" + tag}>{tag}</a
          >{:else}<a href={"/tags/" + tag}>{tag}</a>{/if}{/each}
    </p>
  </div>
{/if}
