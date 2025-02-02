import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
    const posts = await getCollection("blog");
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site ?? "",
        items: posts
            .map((post) => ({
                ...post.data,
                pubDate: post.data.date, // TODO: Change this attribute
                link: `/blog/${post.id}/`,
            }))
            // Reverse sort
            .sort((a, b) => b.date.getTime() - a.date.getTime()),
    });
};
