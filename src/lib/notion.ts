import type { Post } from "$lib/types";
import { Client } from "@notionhq/client";
import NotionPageToHtml from "notion-page-to-html";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify";

/**
 * Notion page properties:
 * slug: { id: 'E%5Dlu' },
 * Description: { id: 'R%5EPL' },
 * Published: { id: 'VFlz' },
 * Tags: { id: '~%5BOR' },
 * 'Created at': { id: '~qQ%3F' },
 * Title: { id: 'title' }
 */

/** The Notion API client. */
export const Notion = new Client({
    auth: import.meta.env.VITE_NOTION_TOKEN,
});

export const getPost = async (slug: string): Promise<Post | null> => {
    let results = (
        await Notion.databases.query({
            database_id: "f03b1f24dc6641c49838f77ffee53390",
            filter: {
                and: [
                    {
                        property: "slug",
                        rich_text: {
                            contains: slug,
                        },
                    },
                    {
                        property: "Published",
                        checkbox: {
                            equals: true,
                        },
                    },
                ],
            },
        })
    ).results;

    if (results.length === 0) {
        return null;
    }

    let page: any = results[0];

    let post: Post = {
        slug,
        title: await Notion.pages.properties
            .retrieve({
                page_id: page.id,
                property_id: "title",
            })
            .then(({ results }) => results[0].title.text.content),

        description: await Notion.pages.properties
            .retrieve({
                page_id: page.id,
                property_id: "R%5EPL",
            })
            .then(({ results }) => results[0].rich_text.text.content),

        tags: await Notion.pages.properties
            .retrieve({
                page_id: page.id,
                property_id: "~%5BOR",
            })
            .then(({ multi_select }) => multi_select.map((tag) => tag.name)),

        createdAt: await Notion.pages.properties
            .retrieve({
                page_id: page.id,
                property_id: "~qQ%3F",
            })
            .then(({ date }) => date.start),

        content: await unified()
            .use(rehypeParse)
            .use(rehypePrism, {
                showLineNumbers: true,
            })
            .use(rehypeStringify)
            .process(
                (
                    await NotionPageToHtml.convert(page.url, {
                        excludeCSS: true,
                        excludeHeaderFromBody: true,
                        excludeMetadata: true,
                        excludeScripts: true,
                        excludeTitleFromHead: true,
                    })
                ).html
            )
            .then(({ value }) =>
                value
                    .toString()
                    .replaceAll(
                        /<details open="">|<details open>/gi,
                        `<details>`
                    )
            ),
    };

    return post;
};

export const getAllPosts = async (): Promise<Post[]> => {
    let results = (
        await Notion.databases.query({
            database_id: "f03b1f24dc6641c49838f77ffee53390",
            filter: {
                property: "Published",
                checkbox: {
                    equals: true,
                },
            },
            sorts: [
                {
                    property: "Created at",
                    direction: "descending",
                },
            ],
        })
    ).results;

    let posts: Post[] = [];

    for (let page of results) {
        let post: Post = {
            slug: await Notion.pages.properties
                .retrieve({
                    page_id: page.id,
                    property_id: "E%5Dlu",
                })
                .then(({ formula }) => formula.string),

            title: await Notion.pages.properties
                .retrieve({
                    page_id: page.id,
                    property_id: "title",
                })
                .then(({ results }) => results[0].title.text.content),

            description: await Notion.pages.properties
                .retrieve({
                    page_id: page.id,
                    property_id: "R%5EPL",
                })
                .then(({ results }) => results[0].rich_text.text.content),

            tags: await Notion.pages.properties
                .retrieve({
                    page_id: page.id,
                    property_id: "~%5BOR",
                })
                .then(({ multi_select }) =>
                    multi_select.map((tag) => tag.name)
                ),

            createdAt: await Notion.pages.properties
                .retrieve({
                    page_id: page.id,
                    property_id: "~qQ%3F",
                })
                .then(({ date }) => date.start),

            content: "", // excluding content for now because it is not needed when getting all posts, and it takes a lot of time to load
        };

        posts.push(post);
    }

    return posts;
};
