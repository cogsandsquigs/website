/**
 * This file contains a fix for the pulldown-cmark crate used to build Zola. Currently, it does not properly render
 * footnotes in HTML. This file modifies the HTML on render to make it properly work. Otherwise, the footnotes look ugly
 * as hell. This code was adapted from https://github.com/getzola/zola/issues/1070#issuecomment-1166637092.
 */

// The DOMContentLoaded event fires when the initial HTML
// document has been completely loaded and parsed, without
// waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", (_event) => {
	const references = document.getElementsByClassName("footnote-reference");

	// For each footnote reference, set an id so we can refer to it from the definition.
	// If the definition had an id of 'some_id', then the reference has id `some_id_ref`.
	for (const reference of references) {
		const link = reference.firstChild;
		const id = link.getAttribute("href").slice(1); // skip the '#'
		link.setAttribute("id", `${id}_ref`);
	}

	const footnotes = document.getElementsByClassName("footnote-definition");

	// As an asthetic choice, we insert a <hr> element before the first footnote definition, if there are any.
	if (footnotes.length > 0) {
		const hr = document.createElement("hr");
		footnotes[0].parentNode.insertBefore(hr, footnotes[0]);
	}

	// For each footnote-definition, add an anchor element with an href to its corresponding reference.
	// The text used for the added anchor is 'Leftwards Arrow with Hook' (U+21A9).
	for (const footnote of footnotes) {
		const id = footnote.getAttribute("id");
		const backReference = document.createElement("a");
		backReference.setAttribute("href", `#${id}_ref`);
		backReference.textContent = "↩";

		// Instead of appending to the footnote block like the original script, we append to the definition.
		const definition = footnote.childNodes[1];
		definition.append(" ");
		definition.append(backReference);
	}
});
