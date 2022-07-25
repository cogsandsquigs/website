<script lang="ts" context="module">
    import NotionPageToHTML from "notion-page-to-html";
    import { Notion } from "$lib/notion";

    export const load = async ({ params }) => {
        let results = (
            await Notion.databases.query({
                database_id: "ea38bd5a70c64151897767a0a3f759a0",
                filter: {
                    property: "slug",
                    rich_text: {
                        contains: params.slug,
                    },
                },
            })
        ).results;

        if (results.length === 0) {
            return {
                status: 404,
                error: `Not found: /${params.slug}`,
            };
        }

        let page: any = results[0];

        let html = (
            await NotionPageToHTML.convert(page.url, {
                excludeCSS: true,
                excludeMetadata: true,
                excludeScripts: true,
                excludeTitleFromHead: true,
            })
        ).html
            // make details closed by default
            .replaceAll(/<details open="">|<details open>/gi, "<details>");

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
