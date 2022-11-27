/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["content/**/*.md", "**/layouts/**/*.html"],

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
				base: "#131315"
			}
		}
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")]
};
