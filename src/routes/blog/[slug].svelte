<script lang="ts" context="module">
    import type { Post } from "$lib/types";

    export const load = async ({ params, fetch }) => {
        const { slug } = params;

        let post: Post = await (await fetch(`/api/posts/${slug}`)).json();

        if (!post) {
            return {
                status: 404,
                error: new Error(`Not found: /blog/${slug}`),
            };
        }

        return {
            status: 200,
            props: { post },
        };
    };
</script>

<script lang="ts">
    import dayjs from "dayjs";

    export let post: Post;
</script>

<h1>{post.title}</h1>
<h3>Created at: {dayjs(post.createdAt).format("MM/DD/YYYY")}</h3>
{@html post.content}
