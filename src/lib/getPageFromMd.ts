import { render } from "$lib/markdown";
import type { Page } from "$lib/types";

/**
 * Takes in a glob import of pages and returns an array of pages.
 * @param imports An array of globs to import.
 * @returns A promise for an array of pages.
 */
export const getPagesFromMd = async (
    imports: Record<string, () => Promise<string>>
): Promise<Page[]> => {
    let posts: Page[] = [];

    for (const path in imports) {
        await imports[path]().then(async (content) => {
            let rendered = await render(content);
            posts.push({
                data: {
                    path: path.split("/")[path.split("/").length - 2],
                },
                frontmatter: rendered.data.frontmatter,
                slug: path.split("/")[path.split("/").length - 1].slice(0, -3),
                md: rendered.toString(),
            });
        });
    }

    return posts
        .filter((page) => !page.frontmatter.draft || page.frontmatter.published)
        .sort((a, b) => {
            return (
                new Date(b.frontmatter.date).valueOf() -
                new Date(a.frontmatter.date).valueOf()
            );
        });
};
