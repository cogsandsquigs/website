import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		// Color scales generated with https://uicolors.app/create
		colors: {
			// Thematic colors
			primary: {
				...colors.sky,
				DEFAULT: colors.sky["400"],
			},

			secondary: {
				...colors.violet,
				DEFAULT: colors.violet["600"],
			},

			// Background/Foreground colors
			base: colors.slate,
		},

		fontFamily: {
			sans: ["Fira Mono", "monospace"],
			monospace: ["Fira Mono", "monospace"],
		},

		// TODO: Make custom prose colorscheme that mirrors `slate`
	},
	plugins: [typography],
};
