<script lang="ts" context="module">
    throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

    // import { posts as ps } from "$lib/posts";

    // export const load = async () => {
    //     return {
    //         props: {
    //             posts: await ps(),
    //         },
    //     };
    // };
</script>

<script lang="ts">
    throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

    import Postlist from "$lib/components/Postlist.svelte";
    import type { Page } from "$lib/types";

    export let posts: Page[];
</script>

<h1>blog</h1>

<Postlist {posts} />
