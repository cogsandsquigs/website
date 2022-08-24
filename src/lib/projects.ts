import { getPagesFromMd } from "./getPageFromMd";

export const projects = () =>
    getPagesFromMd(import.meta.glob("/src/content/projects/*.md"));
