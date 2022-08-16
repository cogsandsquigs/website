<script lang="ts" context="module">
    import { posts } from "$lib/posts";

    /** @type {import('./__types/[slug]').Load} */
    export const load = async ({ url, params }) => {
        let page = await posts().then((ps) =>
            ps.find((p) => p.slug === params.slug)
        );

        if (!page) {
            return {
                status: 404,
                error: `Not found: ${url.pathname}`,
            };
        }

        return {
            props: {
                title: page.frontmatter.title,
                date: page.frontmatter.date,
                html: page.md,
            },
        };
    };
</script>

<script lang="ts">
    export let title: string;
    export let date: Date;
    export let html: string;
</script>

<!-- Include KaTex scripts, as they are used in these pages -->
<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossorigin="anonymous"
    />
    <script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js"
        integrity="sha384-X/XCfMm41VSsqRNQgDerQczD69XqmjOOOwYQvr/uuC+j4OPoNhVgjdGFwhvN02Ja"
        crossorigin="anonymous"></script>
    <script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js"
        integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR"
        crossorigin="anonymous"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            renderMathInElement(document.body, {
                // customised options
                // • auto-render specific keys, e.g.:
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false },
                    { left: "\\(", right: "\\)", display: false },
                    { left: "\\[", right: "\\]", display: true },
                ],
                // • rendering keys, e.g.:
                throwOnError: false,
            });
        });
    </script>
</svelte:head>

<h1 class="m-0">{title}</h1>
<h3 class="m-0">Created on {date}</h3>

<div class="mt-4">
    {@html html}
</div>
