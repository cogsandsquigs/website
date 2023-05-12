import "@citation-js/plugin-bibtex";
import Cite from "citation-js";
import { visit } from "unist-util-visit";

/**
 * The core plugin for remark-bib.
 * @param {import("../index").Options}  options The options for the plugin.
 * @type {import('unified').Plugin<[import("../index").Options?]|[], import('mdast').Root>}
 */
export const rehypeBibPlugin =
	(options = {}) =>
	(tree, _) => {
		// console.log(tree);

		let bib = parseBibliography(tree);
	};

/**
 * Runs phase 1 of the plugin - parsing the bibliography. This is the first
 * phase because it needs to be run before all other citation directives can
 * be parsed/filled out.
 * @param {import("../index").Options} options The options for the plugin.
 * @param {import('unified').Plugin<[], import('mdast').Root>} tree The tree to
 * run the plugin on.
 * @returns {import('citation-js').Cite | undefined} The parsed bibliography, as a `Cite` object.
 */
const parseBibliography = (
	options = {
		bib_style: { format: "html", type: "string", style: "citation-apa" }
	},
	tree
) => {
	let bib = new Cite();

	visit(tree, "containerDirective", (node, index, parent) => {
		// Early exit if this isn't a bibliography directive
		if (node.name !== "bib") {
			return;
		}

		console.log(node);

		visit(node, "paragraph", (node, index, parent) => {
			let rawBibtex = node.children[0].value;

			bib.add(rawBibtex);
		});

		// Remove the node from the tree
		console.log(parent);

		let replacementNode = {
			type: "html",
			value: bib.format("bibliography", {
				format: "html",
				type: "string",
				style: "citation-apa"
			}),
			position: node.position
		};
	});

	console.log(bib);
	console.log(bib.format("bibliography", options.bib_style));

	return undefined;
};
