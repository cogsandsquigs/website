import { render } from "$lib/markdown";

export const pages = async () => {
    let imports = import.meta.glob(["/src/content/*.md"], { as: "raw" });
    let pages: { slug: string; frontmatter: any; md: string }[] = [];

    for (const path in imports) {
        await imports[path]().then((content) => {
            let rendered = render(content);
            pages.push({
                slug: path.slice(13, -3),
                md: rendered.toString(),
                frontmatter: rendered.data.frontmatter,
            });
        });
    }

    return pages;
};
