<!--
    NOTE:
    Wherever this is used, you MUST
    enable hydration if posts is
    undefined.
-->
<script lang="ts">
  import PostListing from "$components/PostListing.svelte";
  import * as p from "$lib/posts";
  import Error from "./Error.svelte";
  import dayjs from "dayjs";

  export let posts: any[] = undefined;
</script>

<div class="">
  {#if posts === undefined}
    {#await p.posts()}
      <h2>Loading posts...</h2>
    {:then pages}
      {#each posts as post, index}
      <div class="flex m-0 items-center">
        {#if index === 0 || dayjs(post.metadata.date).month() != dayjs(posts[index - 1].metadata.date).month() || dayjs(post.metadata.date).year() != dayjs(posts[index - 1].metadata.date).year()}
          <h3 class="m-0">
            {dayjs(post.metadata.date).format("MMMM YYYY")}
          </h3>
          <hr class="flex-1 ml-2 my-16" />
        {:else}
          <hr class="flex-1 ml-2 my-16" />
        {/if}
      </div>
      <PostListing {post} />
    {/each}
    {:catch}
      <div class="max-w-max flex justify-center">
        <Error>Error!</Error>
      </div>
    {/await}
  {:else}
    {#each posts as post, index}
      <div class="flex m-0 items-center">
        {#if index === 0 || dayjs(post.metadata.date).month() != dayjs(posts[index - 1].metadata.date).month() || dayjs(post.metadata.date).year() != dayjs(posts[index - 1].metadata.date).year()}
          <h3 class="m-0">
            {dayjs(post.metadata.date).format("MMMM YYYY")}
          </h3>
          <hr class="flex-1 ml-2 my-16" />
        {:else}
          <hr class="flex-1 ml-2 my-16" />
        {/if}
      </div>
      <PostListing {post} />
    {/each}
  {/if}
</div>
