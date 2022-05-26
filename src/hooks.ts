// This is for minifing all the pages that generate
// that are not api endpoints, but instead actuall
// HTML pages with CSS and JS.
import { minify } from 'html-minifier';

const minifyOptions = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    decodeEntities: true,
    html5: true,
    ignoreCustomComments: [/^#/],
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    removeEmptyElements: true
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const response = await await resolve(
        event,
        {
            transformPage: ({ html }) => minify(html, minifyOptions), // minifies html
        }
    );

    return response;
}