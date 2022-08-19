import { render } from "$lib/markdown";
import type { Page } from "$lib/types";

export const pages = async () => {
    let imports = import.meta.glob(["/src/content/*.md"], { as: "raw" });
    let pages: Page[] = [];

    for (const path in imports) {
        await imports[path]().then(async (content) => {
            let rendered = await render(content);
            pages.push({
                data: {
                    path: path.split("/")[path.split("/").length - 2],
                },
                frontmatter: rendered.data.frontmatter,
                slug: path.split("/")[path.split("/").length - 1].slice(0, -3),
                md: rendered.toString(),
            });
        });
    }

    return pages;
};
