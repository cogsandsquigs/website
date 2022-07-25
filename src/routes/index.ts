import NotionPageToHTML from "notion-page-to-html";
import { Notion } from "$lib/notion";

export const GET = async ({ url }) => {
    let results = (
        await Notion.databases.query({
            database_id: "ea38bd5a70c64151897767a0a3f759a0",
            filter: {
                property: "slug",
                rich_text: {
                    contains: "/",
                },
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

    return {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: {
            slug: "/",
            html: html,
            posts: await fetch(`${url.origin}/api/posts`) // adding url.origin to the endpoint b/c sveltekit fetch is not allowed here.
                .then((res) => res.json())
                .then((data) => data.slice(0, 3)),
        },
    };
};
