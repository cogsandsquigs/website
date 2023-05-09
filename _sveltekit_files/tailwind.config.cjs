/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// The primary color
				primary: '#30adff',

				// The secondary color
				secondary: '#6a3cff',

				// The accent/complement to the primary and secondary colors
				accent: '#ff23ff',

				// The base/background color
				base: '#131315'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
