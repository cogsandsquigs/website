import NotionPageToHTML from "notion-page-to-html";
import { Notion } from "$lib/notion";

export const GET = async ({ params }) => {
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
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: {
            slug: params.slug,
            content: html,
        },
    };
};
