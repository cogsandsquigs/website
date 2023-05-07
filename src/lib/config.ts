export default {
	title: "Cogs And Squigs",
	author: "Ian Pratt",
	// Uses a scheme to replace {author} and {year} with the values from the config object in
	// `$components/Footer.svelte`
	copyright: "© {author} 2019-{year}",

	// The nav menu for the site
	nav_menu: [
		{
			// identifier: "about",
			name: "About",
			url: "/about"
		},
		{
			// identifier: "blog",
			name: "Blog",
			url: "/posts"
		},
		{
			// identifier: "github",
			name: "Github",
			url: "https://github.com/cogsandsquigs"
		}
	],

	// i18n config
	languages: {
		en: {
			keywords: "",
			languageName: "English",

			// Navigation between posts
			menu_more: "Show me more!",
			newer_posts: "Newer posts",
			older_Posts: "Older posts",
			read_more: "Read more",
			read_other_posts: "Read other posts",

			// Error messages
			error_404_back_button_label: "Why don't you go back home?",
			error_404_message: "Whatever you're looking for - it doesn't exist. Sorry."
		}
	}
};
