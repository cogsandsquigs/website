import { title, website, description, locale } from "$lib/info";

export async function get() {
    const body = xml(
        await fetch("/api/posts")
            .then((res) => res.json())
            .then((data) => data)
    );

    const headers = {
        "Cache-Control": "max-age=0, s-maxage=3600",
        "Content-Type": "application/xml",
    };
    return {
        headers,
        body,
    };
}

const xml = (posts) => `<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <atom:link href="${website}/rss.xml" rel="self" type="application/rss+xml" />
    <title>${title}</title>
    <description>${description}</description>
    <link>${website}</link>
    <language>${locale}</language>
    ${posts
        .map(
            (post) =>
                `
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <link>${website}/blog/${post.slug}</link>
          <guid>${website}/blog/${post.slug}</guid>
          ${post.tags
              .map(
                  (tag) =>
                      `
                <category domain="${website}/blog/tags/${tag}">${tag}</category>
              `
              )
              .join("")}
        </item>
        `
        )
        .join("")}
  </channel>
</rss>
`;
