<script lang="ts" context="module">
    throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

    // import { pages } from "$lib/pages";

    // /** @type {import('./$types').Load} */
    // export const load = async ({ url, params }) => {
    //     let page = await pages().then((ps) =>
    //         ps.find((p) => p.slug === params.slug)
    //     );

    //     if (!page) {
    //         return {
    //             status: 404,
    //             error: `Not found: ${url.pathname}`,
    //         };
    //     }

    //     return {
    //         props: {
    //             title: page.frontmatter.title,
    //             html: page.md,
    //         },
    //     };
    // };
</script>

<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    export let title: string;
    export let html: string;
</script>

<h1>{title}</h1>

{@html html}
