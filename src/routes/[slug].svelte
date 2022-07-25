<script lang="ts" context="module">
    export const load = async ({ params, fetch }) => {
        let html = await fetch(`/api/pages/${params.slug}`)
            .then((res) => res.json())
            .then((data) => data.content);

        return {
            status: 200,
            props: {
                slug: params.slug,
                content: html,
            },
        };
    };
</script>

<script lang="ts">
    import { title } from "$lib/info";

    export let slug: string;
    export let content: string;
</script>

<svelte:head>
    <title>{title + " - " + slug}</title>
    <meta property="og:title" content={title + " - " + slug} />
</svelte:head>

{@html content}
