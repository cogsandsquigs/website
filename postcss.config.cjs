/** @type {import('postcss-load-config').Config} */
module.exports = {
	plugins: [
		// Add TailwindCSS styles (not entirely necessary due to Astro's built-in Tailwind support)
		require("tailwindcss"),
		// Add autoprefixer - auto adds vendor prefixes to CSS, so that one stylesheet can be used across browsers
		require("autoprefixer"),
		// Minify CSS.
		require("cssnano")
	]
};
