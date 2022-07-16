<!--
    NOTE:
    Wherever this is used, you MUST
    enable hydration if posts is
    undefined.
-->
<script lang="ts">
    import Post from "$lib/components/PostListing.svelte";
    import dayjs from "dayjs";

    export let posts: any[];
    //export let size: "lg" | "md" | "sm" = "lg";
</script>

{#each posts as post, index}
    <div class="flex m-0 items-center">
        {#if index === 0 || dayjs(post.date).month() != dayjs(posts[index - 1].date).month() || dayjs(post.date).year() != dayjs(posts[index - 1].date).year()}
            <h3 class="m-0">
                {dayjs(post.date).format("MMMM YYYY")}
            </h3>
            <hr class="flex-1 ml-2 my-16" />
        {:else}
            <hr class="flex-1 ml-2 my-16" />
        {/if}
    </div>
    <Post {post} />
{/each}
