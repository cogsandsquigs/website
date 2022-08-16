<script lang="ts" context="module">
    import { posts as ps } from "$lib/posts";

    export const load = async () => {
        return {
            props: {
                posts: await ps(),
            },
        };
    };
</script>

<script lang="ts">
    import Postlist from "$lib/components/Postlist.svelte";
    import type { Page } from "$lib/types";

    export let posts: Page[];
</script>

<h1>blog</h1>

<Postlist {posts} />
