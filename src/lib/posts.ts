import { getPagesFromMd } from "$lib/getPageFromMd";

export const posts = () =>
    getPagesFromMd(import.meta.glob("/src/content/blog/*.md"));
