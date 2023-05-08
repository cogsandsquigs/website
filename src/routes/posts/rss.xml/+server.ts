import config from "$lib/config";
import { deserialize_from_json, type Page } from "$lib/pages";

export const prerender = true;

export const GET = async ({ fetch }) => {
	// Fetch all the posts.
	const response = await fetch(`/api/posts.json`);
	const posts = await response
		.json()
		// Deserialize everything fully.
		.then((posts) => posts.map(deserialize_from_json));

	const body = render(posts);
	const options = {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml"
		}
	};

	return new Response(body, options);
};

const render = (posts: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">

    <channel>
    
    <title>${config.title}</title>
    <description>${config.description}</description>
    <link>${config.site_url}</link>
    <atom:link href="${config.site_url}/posts/rss.xml" rel="self" type="application/rss+xml"/>
    
    ${posts
			.map(
				(post) => `<item>
                <guid isPermaLink="true">${config.site_url}/blog/${post.path}</guid>
                <title>${post.title}</title>
                <link>${config.site_url}/blog/${post.path}</link>
                <description>${post.description}</description>
                <pubDate>${post.date.toString()}</pubDate>
            </item>`
			)
			.join("")}

    </channel>

</rss>
`;
