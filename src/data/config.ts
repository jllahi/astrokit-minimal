export const SITE = {
	title: 'AstroKit',
	description: 'A heavily optimized description full of well-researched keywords.',
	image: '/open-graph.jpg',
	language: 'es',
	opengraph: {
		title: 'AstroKit',
		description: 'We are all made from stars',
		image: '/open-graph.jpg',
	},
	nav: [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'About',
			url: '/about',
		},
		{
			label: 'Heroes',
			url: '/heroes',
		},
		{
			label: 'Colors',
			url: '/colors',
		},
		{
			label: 'Blog',
			url: '/posts',
		},
	],
	urls: {
		posts: 'posts',
		tags: 'tags',
		category: 'categories',
	},
	pagination: 6,
	scheduled: 16000,
	social: {
		twitter: 'https://twitter.com/shadcn',
		github: 'https://github.com/shadcn-ui/ui',
	},
}
