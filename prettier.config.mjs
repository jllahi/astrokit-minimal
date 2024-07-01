/** @type {import('prettier').Config} */

export default {
	// module.exports = {
	// These settings are duplicated in .editorconfig:
	tailwindAttributes: ['class:list', 'cn'],
	tailwindFunctions: ['class:list', 'tv', 'cn'],
	tabWidth: 2, // indent_size = 2
	useTabs: true, // indent_style = space
	endOfLine: 'lf', // end_of_line = lf
	semi: false, // default: true
	singleQuote: true, // default: false
	printWidth: 80, // default: 80
	trailingComma: 'es5',
	bracketSpacing: true,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-organize-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
