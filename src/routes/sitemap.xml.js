import { website } from "$lib/info";

import { projects } from "$lib/projects";
import { posts } from "$lib/posts";
import { pages } from "$lib/pages";

export const get = async () => {
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml",
  };
  return {
    headers,
    status: 200,
    body: await render(),
  };
};

const render = async () => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >

      ${(await pages())
        .map((page) =>
          page.isPrivate
            ? null
            : `
        <url>
          <loc>${website}/${page.slug}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        `
        )
        .join("")}

      ${(await projects())
        .map((post) =>
          post.isPrivate
            ? null
            : `
        <url>
          <loc>${website}/projects/${post.slug}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
        `
        )
        .join("")}

      ${(await posts())
        .map((post) =>
          post.isPrivate
            ? null
            : `
      <url>
        <loc>${website}/blog/${post.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      `
        )
        .join("")}
    </urlset>`;
};
