<script lang="ts">
    import type { Page } from "$lib/types";

    export let posts: Page[];
</script>

<ul>
    {#each posts as post}
        <li>
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
                    <a href={`/tags/${tag}`}>{tag}</a>
                {/each}
            </p>
        </li>
    {/each}
</ul>
