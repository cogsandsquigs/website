import { getPagesFromMd } from "./getPageFromMd";

/**
 * Get all the stuff (projects, posts, etc) and return them.
 * @returns A promise for an array of pages.
 */
export const all = () =>
    getPagesFromMd(
        import.meta.glob<string>(
            ["/src/content/blog/*.md", "/src/content/projects/*.md"],
            { as: "raw" }
        )
    );
