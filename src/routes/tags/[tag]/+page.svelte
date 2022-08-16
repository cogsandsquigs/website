<script lang="ts" context="module">
    throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

    // import { posts as ps } from "$lib/posts";

    // /** @type {import('./$types').Load} */
    // export const load = async ({ params }) => {
    //     let posts = await ps().then((ps) =>
    //         ps.filter((p) => p.frontmatter.tags.includes(params.tag))
    //     );

    //     return {
    //         props: {
    //             title: params.tag,
    //             posts: posts,
    //         },
    //     };
    // };
</script>

<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    import Postlist from "$lib/components/Postlist.svelte";
    import type { Page } from "$lib/types";

    export let title: string;
    export let posts: Page[];
</script>

<h1>{title}</h1>

<Postlist {posts} />
