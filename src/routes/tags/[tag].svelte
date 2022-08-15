<script lang="ts" context="module">
    import { posts as ps } from "$lib/posts";

    /** @type {import('./__types/[tag]').Load} */
    export const load = async ({ params }) => {
        let posts = await ps().then((ps) =>
            ps.filter((p) => p.frontmatter.tags.includes(params.tag))
        );

        return {
            props: {
                title: params.tag,
                posts: posts,
            },
        };
    };
</script>

<script lang="ts">
    import Postlist from "$lib/components/Postlist.svelte";
    import type { Page } from "$lib/types";

    export let title: string;
    export let posts: Page[];
</script>

<h1>{title}</h1>

<Postlist {posts} />
