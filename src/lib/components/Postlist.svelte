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
        </li>
    {/each}
</ul>
