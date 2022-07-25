import type { Post } from "$lib/types"
import { compile } from "$lib/markdown";
import { Notion } from "$lib/notion";

/** @type {import('./__types/[slug]').RequestHandler}*/
export const GET = async ({ params }) => {
    let results = (await Notion.databases.query({
        database_id: "f03b1f24dc6641c49838f77ffee53390",
        filter: {
            property: "slug",
            rich_text: {
                contains: params.slug,
            },
        },
    })).results;

    if (results.length === 0) {
        return {
            status: 404,
            error: `Not found: /blog/${params.slug}`
        }
    }

    let page: any = results[0];

    // TODO: make this more efficient
    let post: Post = {
        slug: (await Notion.pages.properties.retrieve({
            page_id: page.id,
            property_id: page.properties.slug.id
        }) as any).formula.string,
        title: (await Notion.pages.properties.retrieve({
            page_id: page.id,
            property_id: "title"
        }) as any).results[0].title.text.content,
        description: (await Notion.pages.properties.retrieve({
            page_id: page.id,
            property_id: page.properties.Description.id
        }) as any).results[0].rich_text.text.content,
        createdAt: page.created_time,
        tags: (await Notion.pages.properties.retrieve({
            page_id: page.id,
            property_id: page.properties.Tags.id
        }) as any).multi_select.map(tag => tag.name),
        content: ""
    };


    return {
        status: 200,
        body: post,
    };
};
