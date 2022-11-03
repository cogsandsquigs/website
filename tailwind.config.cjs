/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#4338ca',
				secondary: '#2563eb',
				accent: '#0ea5e9',
				neutral: '#111827',
				base: '#111827',
				white: '#f3f4f6'
			}
		}
	},
	plugins: []
};
