// The configuration for this website!
export default {
	// Title, author, other stuff that needs to go here.
	title: "Cogs And Squigs",
	author: "Ian Pratt",
	description: "My little slice of the blogosphere.",
	site_url: "https://cogsandsquigs.gq", // Site URL for generating RSS feed.

	// Uses a scheme to replace {author} and {year} with the values from the config object in
	// `$components/Footer.astro`
	copyright: "© {author} 2019-{year}",

	// i18n config
	languages: {
		en: {
			// The navigation menu for the site
			menu: {
				main: [
					{
						// identifier: "about",
						name: "About",
						url: "/about"
					},
					{
						// identifier: "blog",
						name: "Blog",
						url: "/blog"
					},
					{
						// identifier: "cv",
						name: "CV",
						url: "/cv"
					}
				]
			},

			// The date format
			date_format: {
				weekday: "long",
				year: "numeric",
				month: "short",
				day: "numeric"
			} as Intl.DateTimeFormatOptions,

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
