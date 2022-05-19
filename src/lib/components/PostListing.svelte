<script lang="ts">
  import { locale, dateOptions } from "$lib/info";
  export let post;
  export let size: "sm" | "md" | "lg" = "md";
</script>

{#if size === "lg"}
  <div />
{:else if size === "md"}
  <div>
    <h2><a href="/blog/{post.metadata.slug}">{post.metadata.title}</a></h2>
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
      <a href="/blog/{post.metadata.slug}">{post.metadata.title}</a>, posted on {new Date(
        post.metadata.date
      ).toLocaleDateString(locale, dateOptions)}
    </p>
    <h5 class="text-sm">
      Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a
            href={"/blog/tags/" + tag}>{tag}</a
          >{:else}<a href={"/blog/tags/" + tag}>{tag}</a>{/if}{/each}
    </h5>
  </div>
{/if}
