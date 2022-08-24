import { getPagesFromMd } from "./getPageFromMd";

export const pages = async () =>
    getPagesFromMd(import.meta.glob("/src/content/*.md"));
