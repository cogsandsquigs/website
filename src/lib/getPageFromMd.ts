import dayjs from "dayjs";
import type { Page } from "$lib/types";
import { dev } from "$app/env";

/**
 * Takes in a glob import of pages and returns an array of pages.
 * @param imports An array of globs to import.
 * @returns A promise for an array of pages.
 */
export const getPagesFromMd = async (
    imports: Record<any, () => Promise<any>>
) => {
    let pages: Page[] = [];

    for (const [path, importFn] of Object.entries(imports)) {
        const page = await importFn();
        if (dev || !page.metadata.draft || page.metadata.published) {
            pages.push({
                render: page.default,
                path: path.split("/")[path.split("/").length - 2],
                slug: path.split("/")[path.split("/").length - 1].slice(0, -3),
                ...page.metadata,
            });
        }
    }

    return pages.sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix());
};
