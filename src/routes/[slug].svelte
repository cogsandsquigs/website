<script lang="ts" context="module">
    import { pages } from "$lib/pages";

    /** @type {import('./__types/[slug]').Load} */
    export const load = async ({ params }) => {
        let page = await pages().then((ps) =>
            ps.find((p) => {
                return p.slug === params.slug;
            })
        );

        if (!page) {
            return {
                status: 404,
                error: "Page not found",
            };
        }

        return {
            props: {
                title: page?.frontmatter.title,
                html: page?.md,
            },
        };
    };
</script>

<script lang="ts">
    export let title: string;
    export let html: string;
</script>

<h1>{title}</h1>

{@html html}
