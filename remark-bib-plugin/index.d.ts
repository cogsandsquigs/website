/**
 * The options for the plugin.
 */

export interface Options {
	/**
	 * The style to use for the bibliography. This is the `...options` option for `@citation-js/core` in the
	 * `Cite.format` function.
	 * @default { format: "html", type: "string", style: "citation-apa" }
	 */
	bib_style: any;
}
