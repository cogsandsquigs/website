/**
 * Code taken from https://github.com/kwshi/rehype-katex-svelte
 *
 * Using this here because I want the latest versions of KaTeX
 */
import { fromString as hastFromString } from "hast-util-from-string";
import { selectAll } from "hast-util-select";
import { toString as hastToString } from "hast-util-to-string";

// TODO fix katex types: currently `@types/katex`'s type stubs pretend katex
// exports properties on a module level (i.e. `export const`), but actually it
// `export default`s a single object with properties.  The difference is that
// `export const renderToString` allows syntax like `import {renderToString}
// from 'katex'` to work, whereas `export default {renderToString}` doesn't and
// instead requires `import Katex` (default) and `Katex.renderToString`.
// Currently this relies on `allowSyntheticDefaultImports` to type-check, but
// it really shouldn't, because the type declaration is wrong.
import Katex from "katex";

const rehypeKatexSvelte = (options) => (tree) => {
	// Searches for every math node and renders it using KaTeX
	for (const node of selectAll(".math-inline,.math-display", tree)) {
		// Gets the content to display.
		const displayMode = node.properties?.className?.includes("math-display");
		// Renders it with KaTeX.
		const rendered = Katex.renderToString(hastToString(node), {
			...options,
			displayMode
		});
		// Replaces the node with the rendered output.
		hastFromString(node, `{@html ${JSON.stringify(rendered)}}`);
	}
};

/**
 * END CODE
 */

import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkMath from "remark-math";

const config = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],

	smartypants: {
		dashes: "oldschool"
	},

	remarkPlugins: [remarkMath],
	rehypePlugins: [
		rehypeKatexSvelte,
		{
			delimiters: [
				{ left: "$$", right: "$$", display: true },
				{ left: "$", right: "$", display: false },
				{ left: "\\(", right: "\\)", display: false },
				{ left: "\\[", right: "\\]", display: true }
			]
		}
	]
});

export default config;
