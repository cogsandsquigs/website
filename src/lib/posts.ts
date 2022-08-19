import { render } from "$lib/markdown";
import type { Page } from "$lib/types";

export const posts = async () => {
    let imports = import.meta.glob(["/src/content/blog/*.md"], { as: "raw" });
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

    return posts.sort((a, b) => {
        return (
            new Date(b.frontmatter.date).valueOf() -
            new Date(a.frontmatter.date).valueOf()
        );
    });
};
