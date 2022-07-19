<script lang="ts" context="module">
    export const load = async ({ params, fetch }) => {
        let request = await fetch("/api/posts");
        return {
            status: request.status,
            error: request.error,
            props: {
                tag: params.tag,
                posts: (await request.json()).filter((post: Post) =>
                    post.tags.includes(params.tag)
                ),
            },
        };
    };
</script>

<script lang="ts">
    import PostList from "$lib/components/PostList.svelte";
    import type { Post } from "$lib/types";

    export let tag: string;
    export let posts: Post[];
</script>

<h1>Tag: <a href={`/blog/tags/${tag}`}>{tag}</a></h1>
<PostList {posts} />
