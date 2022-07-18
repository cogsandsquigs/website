<script lang="ts" context="module">
    import type { Post } from "$lib/types";
    import "$styles/one-dark-code.css";

    export const load = async ({ params, fetch }) => {
        const { slug } = params;

        let request = await fetch(`/api/posts/${slug}`);

        if (request.status != 200) {
            return {
                status: 404,
                error: new Error(`Not found: /blog/${slug}`),
            };
        }

        return {
            status: request.status,
            props: { post: await request.json() },
        };
    };
</script>

<script lang="ts">
    import dayjs from "dayjs";

    export let post: Post;
</script>

<h1 class="mb-0">{post.title}</h1>
<h2 class="my-0">Created at: {dayjs(post.createdAt).format("MM/DD/YYYY")}</h2>
<h3 class="m-0 font-extralight">{post.description}</h3>
{#if post.tags.length > 0}
    <h4 class="m-0">
        Tags:
        {#each post.tags as tag, index}
            {#if index > 0}
                ,
            {/if}
            <a href="/blog/tags/{tag}">{tag}</a>
        {/each}
    </h4>
{/if}
<hr class="my-4" />
{@html post.content}
