<script lang="ts" context="module">
    import NotionPageToHTML from "notion-page-to-html";
    import { Notion } from "$lib/notion";

    export const load = async ({ fetch }) => {
        let results = (
            await Notion.databases.query({
                database_id: "ea38bd5a70c64151897767a0a3f759a0",
                filter: {
                    or: [
                        { property: "slug", rich_text: { contains: "/" } },
                        { property: "slug", rich_text: { is_empty: true } },
                    ],
                },
            })
        ).results;

        if (results.length === 0) {
            return {
                status: 404,
                error: `Not found: /`,
            };
        }

        let page: any = results[0];

        let html = (
            await NotionPageToHTML.convert(page.url, {
                excludeCSS: true,
                excludeMetadata: true,
                excludeScripts: true,
                excludeHeaderFromBody: true,
                excludeTitleFromHead: true,
            })
        ).html
            // make details closed by default
            .replaceAll(/<details open="">|<details open>/gi, "<details>");

        let posts = await fetch(`/api/posts`) // adding url.origin to the endpoint b/c sveltekit fetch is not allowed here.
            .then((res) => res.json())
            .then((data) => data.slice(0, 3));

        return {
            status: 200,
            props: {
                content: html,
                posts: posts,
            },
        };
    };
</script>

<script lang="ts">
    import { title, subtitle } from "$lib/info";
    import type { Post } from "$lib/types";

    export let content: string;
    export let posts: Post[];
</script>

<svelte:head>
    <title>{title + " - " + subtitle}</title>
    <meta property="og:title" content={title + " - " + subtitle} />
</svelte:head>

<div class="space-y-2">
    <h1 class="m-0">{title}</h1>
    <h2>{subtitle}</h2>
</div>

{@html content}

<!-- TODO: Remove if/when notion-page-to-html supports databases -->
<h3 class="m-0">Recent posts:</h3>
<ul class="m-0">
    {#each posts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
    {/each}
</ul>
