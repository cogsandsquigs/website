<script lang="ts" context="module">
    import type { Post } from "$lib/types";
    import "$styles/one-dark-code.css";

    export const load = async ({ params, fetch }) => {
        const { slug } = params;

        let request = await fetch(`/api/posts/${slug}`);

        if (request.status == 404) {
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
    import { dateFormat, title } from "$lib/info";
    import dayjs from "dayjs";

    export let post: Post;
</script>

<svelte:head>
    <title>{title + " - " + post.title}</title>
    <meta property="og:title" content={title + " - " + post.title} />

    <!-- Load KaTeX CSS -->
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossorigin="anonymous"
    />

    <!-- The loading of KaTeX is deferred to speed up page rendering -->
    <script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js"
        integrity="sha384-X/XCfMm41VSsqRNQgDerQczD69XqmjOOOwYQvr/uuC+j4OPoNhVgjdGFwhvN02Ja"
        crossorigin="anonymous">
    </script>

    <!-- To automatically render math in text elements, include the auto-render extension: -->
    <script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js"
        integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR"
        crossorigin="anonymous"
        on:load={window.renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true },
            ],
        })}>
    </script>
</svelte:head>

<h1 class="mb-0">{post.title}</h1>
<h2 class="my-0">Created at: {dayjs(post.createdAt).format(dateFormat)}</h2>
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
