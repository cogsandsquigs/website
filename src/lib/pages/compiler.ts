import { read } from "to-vfile";
import { matter } from "vfile-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import type { Page } from "$lib/pages/page";

// Compiles a page from a file into HTML. Returns two objects: the content, as a `string`,
// and the metadata, as an `any` object.
export const compile_md_file = async (path: string): Promise<Page> => {
	const file = (await unified()
		.use(remarkParse)
		.use(remarkFrontmatter, ["yaml", "toml"])
		.use(() => (_: any, file: any) => {
			matter(file, { strip: true });
		})
		//@ts-ignore - For some reason, TS freaks out.
		// TODO: Fix?
		.use(remarkRehype)
		.use(rehypeStringify)
		.process(await read(`./content/${path}.md`))) as any;

	return {
		path: path,
		content: file.value,
		meta: {
			title: file.data.matter.title,
			date: file.data.matter.date,
			description: file.data.matter.description,
			tags: file.data.matter.tags ?? []
		}
	};
};
