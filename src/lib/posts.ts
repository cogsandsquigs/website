import { render } from "$lib/markdown";
import type { Page } from "$lib/types";

export const posts = async () => {
    let imports = import.meta.glob(["/src/content/blog/*.md"], { as: "raw" });
    let pages: Page[] = [];

    for (const path in imports) {
        await imports[path]().then((content) => {
            let rendered = render(content);
            pages.push({
                slug: path.slice(18, -3),
                md: rendered.toString(),
                frontmatter: rendered.data.frontmatter,
            });
        });
    }

    return pages;
};
