/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		extend: {
			colors: {
				// The primary color
				primary: "#30adff",

				// The secondary color
				secondary: "#6a3cff",

				// The accent/complement to the primary and secondary colors
				accent: "#ff23ff",

				// The base/background color
				base: "#131315",

				// A lighter base/background color
				// TODO: is this really the color I want?
				"base-light": "#5b5b65",

				// The text color
				text: "#d1d5db",

				// A lighter (brighter) text color
				"text-bright": "#f9fafb"
			}
		}
	},

	plugins: [require("@tailwindcss/typography")]
};

module.exports = config;
