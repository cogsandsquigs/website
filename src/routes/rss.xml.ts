import { title, subtitle, locale } from "$lib/info";

/** @type {import('./__types/rss.xml').RequestHandler}*/
export const GET = async ({ url }) => {
    let posts = await fetch(`${url.origin}/api/posts`)
        .then((res) => res.json())
        .then((posts) => posts);

    return {
        status: 200,
        body: `<rss version="2.0">
    <channel>
        <title>${title}</title>
        <link>${url.origin}</link>
        <description>${subtitle}</description>
    </channel>
    
    ${posts
        .map(
            (post) => `<item>
        <title>${post.title}</title>
        <link>${url.origin}/post/${post.slug}</link>
        <description>${post.description}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
        )
        .join("\n\n    ")}
</rss>`,
    };
};
