import { render } from "$lib/markdown";
import type { Page } from "$lib/types";

export const projects = async () => {
    let imports = import.meta.glob(["/src/content/projects/*.md"], {
        as: "raw",
    });
    let projects: Page[] = [];

    for (const path in imports) {
        await imports[path]().then((content) => {
            let rendered = render(content);
            projects.push({
                data: {
                    path: path.split("/")[path.split("/").length - 2],
                },
                frontmatter: rendered.data.frontmatter,
                slug: path.split("/")[path.split("/").length - 1].slice(0, -3),
                md: rendered.toString(),
            });
        });
    }

    return projects.sort((a, b) => {
        return (
            new Date(b.frontmatter.date).valueOf() -
            new Date(a.frontmatter.date).valueOf()
        );
    });
};
