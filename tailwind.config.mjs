import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
const theme = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		// Color scales generated with https://uicolors.app/create
		colors: {
			primary: "#89b4fa", // Catppuccin mocha blue
			secondary: "#b4befe", // Catpuccin mocha lavender
			// neutral: "#181825", // Catppuccin mocha crust
			text: "#cdd6f4", // Catppucin mocha text
			base: "#1e1e2e", // Catppuccin mocha base
			"base-darker": "#181825",
			info: "#89b4fa", // Catppuccin mocha blue
			success: "#a6e3a1", // Catppuccin mocha green
			warning: "#f9e2af", // Catppuccin mocha yellow
			error: "#f38ba8", // Catppuccin mocha red
		},

		fontFamily: {
			sans: ["Victor Mono", "monospace"],
			monospace: ["Victor Mono", "monospace"],
		},

		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": theme("colors.text"),
						"--tw-prose-headings": theme("colors.text"),
						// "--tw-prose-lead": theme("colors.pink[700]"),
						"--tw-prose-links": theme("colors.primary"),
						"--tw-prose-bold": theme("colors.text"),
						// "--tw-prose-counters": theme("colors.pink[600]"),
						// "--tw-prose-bullets": theme("colors.pink[400]"),
						// "--tw-prose-hr": theme("colors.pink[300]"),
						// "--tw-prose-quotes": theme("colors.pink[900]"),
						// "--tw-prose-quote-borders": theme("colors.pink[300]"),
						// "--tw-prose-captions": theme("colors.pink[700]"),
						// "--tw-prose-code": theme("colors.pink[900]"),
						// "--tw-prose-pre-code": theme("colors.pink[100]"),
						// "--tw-prose-pre-bg": theme("colors.pink[900]"),
						// "--tw-prose-th-borders": theme("colors.pink[300]"),
						// "--tw-prose-td-borders": theme("colors.pink[200]"),
						// "--tw-prose-invert-body": theme("colors.pink[200]"),
						// "--tw-prose-invert-headings": theme("colors.white"),
						// "--tw-prose-invert-lead": theme("colors.pink[300]"),
						// "--tw-prose-invert-links": theme("colors.white"),
						// "--tw-prose-invert-bold": theme("colors.white"),
						// "--tw-prose-invert-counters": theme("colors.pink[400]"),
						// "--tw-prose-invert-bullets": theme("colors.pink[600]"),
						// "--tw-prose-invert-hr": theme("colors.pink[700]"),
						// "--tw-prose-invert-quotes": theme("colors.pink[100]"),
						// "--tw-prose-invert-quote-borders":
						// 	theme("colors.pink[700]"),
						// "--tw-prose-invert-captions": theme("colors.pink[400]"),
						// "--tw-prose-invert-code": theme("colors.white"),
						// "--tw-prose-invert-pre-code": theme("colors.pink[300]"),
						// "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
						// "--tw-prose-invert-th-borders":
						// 	theme("colors.pink[600]"),
						// "--tw-prose-invert-td-borders":
						// 	theme("colors.pink[700]"),
					},
				},
			}),
		},
	},
	plugins: [typography],
};

export default theme;
