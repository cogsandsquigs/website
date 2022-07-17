<script lang="ts" context="module">
    import type { Post } from "$lib/types";

    export const load = ({ params, fetch }) => {
        const { slug } = params;

        let post: Post = fetch(`/api/posts/${slug}`);

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
    export let post: Post;
</script>
