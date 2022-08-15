import { render } from "$lib/markdown";
import type { Page } from "$lib/types";

export const posts = async () => {
    let imports = import.meta.glob(["/src/content/blog/*.md"], { as: "raw" });
    let posts: Page[] = [];

    for (const path in imports) {
        await imports[path]().then((content) => {
            let rendered = render(content);
            posts.push({
                slug: path.slice(18, -3),
                md: rendered.toString(),
                frontmatter: rendered.data.frontmatter,
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
