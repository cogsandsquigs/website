import config from "$config";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

/**
 * The RSS feed for my blog page.
 * @returns A response which is a string of XML representing the RSS feed for my blog.
 */
export const get: APIRoute = async (): Promise<{ body: string }> => {
	const posts = await getCollection("blog");
	return rss({
		title: config.title,
		description: config.description,
		site: config.site_url,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/blog/${post.slug}`
		})),
		customData: "<language>en-us</language>"
	});
};
