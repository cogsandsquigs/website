import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			// Thematic colors
			primary: "#30ADFF",
			secondary: "#6A3CFF",
			accent: "#FF23FF",

			// Background colors
			base: {
				DEFAULT: "#131315",
				light: "#5B5B65",
			},

			// Foreground/Text colors
			foreground: {
				DEFAULT: "#D1D5DB",
			},
		},

		extend: {},
	},
	plugins: [typography],
};
