import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import type { APIRoute } from "astro";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
    const posts = await getCollection("blog");
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site ?? "",
        customData: "<language>en-us</language>",
        items: posts.map((post) => ({
            ...post.data,
            pubDate: post.data.date, // TODO: Change this attribute
            categories: post.data.taxonomies.tags, // Fix tags
            link: `/blog/${post.id}/`,
            content: parser.render(post.body ?? ""),
        })),
        // Reverse sort
    });
};
