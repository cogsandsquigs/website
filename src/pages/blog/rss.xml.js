import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const blog = await getCollection("blog");

	return rss({
		// `<title>` field in output xml
		title: "Cogs and Squigs",
		// `<description>` field in output xml
		description: "My little slice of the blogosphere",
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: context.site,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: blog
			.map((post) => ({
				title: post.data.title,
				pubDate: post.data.date,
				description: post.data.description,
				customData: post.data.customData,
				// Compute RSS link from post `slug`
				// This example assumes all posts are rendered as `/blog/[slug]` routes
				link: `/blog/${post.slug}/`,
				// (optional) inject custom xml
				customData: `<language>en-us</language>`,
			}))
			.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
	});
}
