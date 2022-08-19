import { all } from "$lib/all";
import type { Page } from "$lib/types";
import type { PageLoad } from "./$types";

const base = "https://cogsandsquigs.gq";

export const GET: PageLoad = async () => {
    const body = render(await all());
    const headers = {
        "Cache-Control": `max-age=0, s-max-age=${600}`,
        "Content-Type": "application/xml",
    };
    return new Response(body || "", { headers });
};

const render = (posts: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
  <atom:link href="${base}/rss" rel="self" type="application/rss+xml" />
  <title>David W Parker</title>
  <link>${base}</link>
  <description>My little slice of the blogosphere</description>
  ${posts
      .map(
          ({ frontmatter, slug }) => `<item>
  <guid>${base}/blog/${slug}</guid>
  <title>${frontmatter.title}</title>
  <link>${base}/blog/${slug}</link>
  <description>${frontmatter.description}</description>
  <pubDate>${new Date(frontmatter.date).toUTCString()}</pubDate>
  </item>`
      )
      .join("")}
  </channel>
  </rss>
  `;
