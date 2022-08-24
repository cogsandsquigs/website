export const prerender = true;

import * as pathLib from "path";
import { all } from "$lib/all";
import type { Page } from "$lib/types";
import type { RequestHandler } from "./$types";

const base = "cogsandsquigs.gq";

export const GET: RequestHandler = async () => {
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
  <atom:link href="https://${base}/rss.xml" rel="self" type="application/rss+xml" />
  <title>Cogs and Squigs</title>
  <link>https://${base}</link>
  <description>My little slice of the blogosphere</description>
  ${posts
      .map(
          ({ path, slug, title, date, description }) => `<item>
  <guid>https://${pathLib.join(base, path, slug)}</guid>
  <title>${title}</title>
  <link>https://${pathLib.join(base, path, slug)}</link>
  <description>${description}</description>
  <pubDate>${new Date(date as any).toUTCString()}</pubDate>
  </item>`
      )
      .join("")}
  </channel>
  </rss>
  `;
