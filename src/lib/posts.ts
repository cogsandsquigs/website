import { getPagesFromMd } from "$lib/getPageFromMd";

export const posts = () =>
    getPagesFromMd(
        import.meta.glob<string>(["/src/content/blog/*.md"], { as: "raw" })
    );
