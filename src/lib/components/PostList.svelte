<!--
    NOTE:
    Wherever this is used, you MUST
    enable hydration.
-->
<script lang="ts">
    import PostListing from "$lib/components/PostListing.svelte";
    import { posts } from "$lib/posts";
    import { onMount } from "svelte";

    let pages;
    // USE AWAIT BLOCK
    // Get the posts
    onMount(async () => {
        pages = await posts();
    });
</script>

{#if pages != undefined}
    {#each pages as post, index}
        {#if index > 0}
            <hr />
        {/if}
        <PostListing {post} />
    {/each}
{:else}
    <h2>Loading posts...</h2>
{/if}
