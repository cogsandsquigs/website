import { getPagesFromMd } from "./getPageFromMd";

export const pages = async () =>
    getPagesFromMd(
        import.meta.glob<string>("/src/content/*.md", { as: "raw" })
    );
