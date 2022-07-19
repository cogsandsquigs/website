<script lang="ts">
    import { dateFormat } from "$lib/info";

    import type { Post } from "$lib/types";
    import dayjs from "dayjs";

    export let posts: Post[];
</script>

{#each posts as post, index}
    <div class="flex items-center my-6">
        <!-- If it is a new month or year than the previous post, add the current month and year to beginning of hr tag-->
        {#if index === 0 || dayjs(post.createdAt).month() !== dayjs(posts[index - 1].createdAt).month() || dayjs(post.createdAt).year() !== dayjs(posts[index - 1].createdAt).year()}
            <h2 class="m-0 mr-2">
                {dayjs(post.createdAt).format("MMMM YYYY")}
            </h2>
        {/if}
        <hr class="flex-1 m-0" />
    </div>
    <h2 class="m-0"><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
    <h3 class="m-0">{post.description}</h3>
    <p class="m-0">Created at: {dayjs(post.createdAt).format(dateFormat)}</p>
    <p class="m-0">
        Tags:
        {#each post.tags as tag, index}
            {#if index !== 0}
                ,
            {/if}
            <a href={`/blog/tags/${tag}`} class="m-1">{tag}</a>
        {/each}
    </p>
{/each}
