import config from "$config";
import { getBlogPosts } from "$lib/collections";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

/**
 * The RSS feed for my blog page.
 * @returns A response which is a string of XML representing the RSS feed for my blog.
 */
export const GET: APIRoute = async (): Promise<{ body: string }> => {
	const posts = await getBlogPosts();
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
