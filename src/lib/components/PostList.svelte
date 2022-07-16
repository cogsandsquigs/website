<!--
    NOTE:
    Wherever this is used, you MUST
    enable hydration if posts is
    undefined.
-->
<script lang="ts">
    import PostListing from "$components/PostListing.svelte";
    import dayjs from "dayjs";

    export let posts: any[];
    export let size: "lg" | "md" | "sm" = "lg";
</script>

<div class="">
    {#if size == "lg"}
        {#each posts as post, index}
            <div class="flex m-0 items-center">
                {#if index === 0 || dayjs(post.date).month() != dayjs(posts[index - 1].date).month() || dayjs(post.date).year() != dayjs(posts[index - 1].metadata.date).year()}
                    <h3 class="m-0">
                        {dayjs(post.date).format("MMMM YYYY")}
                    </h3>
                    <hr class="flex-1 ml-2 my-16" />
                {:else}
                    <hr class="flex-1 ml-2 my-16" />
                {/if}
            </div>
            <PostListing {post} />
        {/each}
    {:else if size == "md"}
        {#each posts as post, index}
            {#if index > 0}
                <hr class="flex-1 mx-2 my-4" />
            {/if}
            <PostListing {post} size="md" />
        {/each}
    {:else if size == "sm"}
        {#each posts as post, index}
            {#if index > 0}
                <hr class="flex-1 mx-2 mt-0 mb-2" />
            {/if}
            <PostListing {post} size="sm" />
        {/each}
    {/if}
</div>
