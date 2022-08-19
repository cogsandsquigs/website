<script lang="ts">
    import type { Page } from "$lib/types";
    import dayjs from "dayjs";

    export let posts: Page[];
</script>

<ul class="list-none p-0">
    {#each posts as post, index}
        {#if index == 0 || dayjs(post.frontmatter.date).month() != dayjs(posts[index - 1].frontmatter.date).month() || dayjs(post.frontmatter.date).year() != dayjs(posts[index - 1].frontmatter.date).year()}
            <div class="flex items-center">
                <h2 class="m-0 mr-2">
                    {dayjs(post.frontmatter.date).format("MMMM YYYY")}
                </h2>
                <hr class="flex-1 m-0" />
            </div>
        {:else}
            <hr class="mx-16 my-4 flex-1 m-0" />
        {/if}
        <li class="pl-8">
            <h2 class="m-0">
                <a href={`/blog/${post.slug}`}>{post.frontmatter.title}</a>
            </h2>
            <p class="m-0">
                Created on {post.frontmatter.date}
            </p>
            <p class="m-0 text-sm">
                Tags:
                {#each post.frontmatter.tags as tag, index}
                    {#if index > 0}, {/if}
                    <a href={`/blog/tags/${tag}`}>{tag}</a>
                {/each}
            </p>
        </li>
    {/each}
</ul>
