/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#057AFF',
				secondary: '#463AA1',
				accent: '#C149AD',
				neutral: '#111827',
				base: '#111827'
			}
		}
	},
	plugins: []
};
