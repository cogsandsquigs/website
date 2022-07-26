<script lang="ts" context="module">
    export const load = async ({ params, fetch }) => {
        let response = await fetch(`/api/pages/${params.slug}`);

        if (response.status !== 200) {
            return {
                status: response.status,
                error:
                    response.status === 404 ? `Not found: /${params.slug}` : "",
            };
        }

        let page = response.json();

        return {
            status: 200,
            props: {
                ...page,
                slug: params.slug,
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

<h1>{slug}</h1>
{@html content}
