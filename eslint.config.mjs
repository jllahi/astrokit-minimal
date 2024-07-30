import { includeIgnoreFile } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import parser from 'astro-eslint-parser'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
	{
		ignores: [
			'**/dist/',
			'**/.astro/',
			'**/node_modules/',
			'**/npm-debug.log*',
			'**/yarn-debug.log*',
			'**/yarn-error.log*',
			'**/pnpm-debug.log*',
			'**/.env',
			'**/.env.production',
			'**/.DS_Store',
			'**/.github',
			'**/.changeset',
			'**/pnpm-lock.yaml',
		],
	},
	includeIgnoreFile(gitignorePath),
	...compat.extends('eslint:recommended', 'plugin:astro/recommended'),
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
			},

			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			'no-mixed-spaces-and-tabs': 'off',
		},
	},
	{
		files: ['**/*.astro'],

		languageOptions: {
			parser: parser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},

		rules: {},
	},
	...compat.extends('plugin:@typescript-eslint/recommended').map((config) => ({
		...config,
		files: ['**/*.ts'],
	})),
	{
		files: ['**/*.ts'],

		languageOptions: {
			parser: tsParser,
		},

		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	},
	{
		files: ['**/*.d.ts'],

		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
	...compat
		.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/recommended-requiring-type-checking'
		)
		.map((config) => ({
			...config,
			files: ['**/*.tsx'],
		})),
	{
		files: ['**/*.tsx'],

		plugins: {
			'@typescript-eslint': typescriptEslint,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				tsconfigRootDir: '/home/jllahi/Code/Projects/astrokit-minimal',
				project: ['./tsconfig.json'],
			},
		},

		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	},
	{
		files: ['**/*.astro/*.js', '*.astro/*.js'],

		languageOptions: {
			parser: tsParser,
		},
	},
]
