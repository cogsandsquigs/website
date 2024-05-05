import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		// Color scales generated with https://uicolors.app/create
		colors: {
			// Thematic colors
			primary: {
				DEFAULT: "#30adff",
				50: "#eff8ff",
				100: "#dfefff",
				200: "#b8e1ff",
				300: "#78c9ff",
				400: "#30adff",
				500: "#0693f1",
				600: "#0074ce",
				700: "#005ca7",
				800: "#024e8a",
				900: "#084272",
				950: "#06294b",
			},

			secondary: {
				DEFAULT: "#6A3CFF",
			},

			// Background/Foreground colors
			base: {
				50: "#f7f7f8",
				100: "#eeeef0",
				200: "#d9d9de",
				300: "#b9bac0",
				400: "#92939e",
				500: "#757682",
				600: "#5e5e6b",
				700: "#4d4d57",
				800: "#42424a",
				900: "#3a3a40",
				950: "#131315",
			},
		},

		fontFamily: {
			sans: ["Fira Mono", "monospace"],
			monospace: ["Fira Mono", "monospace"],
		},

		extend: {
			typography: ({ theme }) => ({
				base: {
					css: {
						"--tw-prose-body": theme("colors.base[50]"),
						"--tw-prose-headings": theme("colors.base[50]"),
						// "--tw-prose-lead": theme("colors.base[50]"),
						"--tw-prose-links": theme("colors.base[50]"),
						"--tw-prose-bold": theme("colors.base[50]"),
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
