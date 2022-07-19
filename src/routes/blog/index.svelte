<script lang="ts" context="module">
    export const load = async ({ fetch }) => {
        let request = await fetch("/api/posts");
        return {
            status: request.status,
            error: request.error,
            props: { posts: await request.json() },
        };
    };
</script>

<script lang="ts">
    import PostList from "$lib/components/PostList.svelte";
    import type { Post } from "$lib/types";

    export let posts: Post[];
</script>

<h1>Blog</h1>
<PostList {posts} />
