import { posts } from "$lib/posts";
import { title, website, description, locale } from "$lib/info";

export async function get() {
  const body = xml((await posts()).map((x) => x.metadata));

  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml",
  };
  return {
    headers,
    body,
  };
}

const xml = (
  posts
) => `<?xml version="1.0"?>
<rss version="2.0">
  <channel>
    <title>${title}</title>
    <link>${website}</link>
    <description>${description}</description>
    <language>${locale}</language>
    ${posts
    .map(
      (post) =>
        `
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>${website}/blog/${post.slug}</link>
          <pubDate>${new Date(post.date)}</pubDate>
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
