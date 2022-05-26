<!--
    NOTE:
    Wherever this is used, you MUST
    enable hydration.
-->
<script lang="ts">
    import PostListing from "$lib/components/PostListing.svelte";
    import { posts } from "$lib/posts";
</script>

{#await posts()}
    <h2>Loading posts...</h2>
{:then pages}
    {#each pages as post, index}
        {#if index > 0}
            <hr />
        {/if}
        <PostListing {post} />
    {/each}
{:catch}
    <!-- TODO: error component-->
    <h2>Error!</h2>
{/await}
