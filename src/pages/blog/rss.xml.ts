import config from "$config";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
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
}
