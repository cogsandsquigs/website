<script lang="ts">
    import PostListing from "$lib/components/PostListing.svelte";
    import { posts } from "$lib/posts";
    import { onMount } from "svelte";

    let pages;

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
