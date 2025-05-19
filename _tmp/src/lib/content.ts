import { getCollection } from "astro:content";

export const posts = (await getCollection("blog"))
    .filter((p) => !p.data.draft || import.meta.env.DEV)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const projects = (await getCollection("projects"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
