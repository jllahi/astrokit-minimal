const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	darkMode: ['class'], // '[data-mode="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			// colors: {
			// 	'color-black': colors.gray[900],
			// 	'color-white': colors.gray[100],

			// 	'color-bg-light': colors.pink[300],
			// 	'color-bg-dark': colors.pink[950],

			// 	'color-primary-darker': colors.pink[900],
			// 	'color-primary-dark': colors.pink[700],
			// 	'color-primary': colors.pink[500],
			// 	'color-primary-light': colors.pink[300],
			// 	'color-primary-lighter': colors.pink[100],

			// 	'color-secondary-darker': colors.orange[900],
			// 	'color-secondary-dark': colors.orange[700],
			// 	'color-secondary': colors.orange[500],
			// 	'color-secondary-light': colors.orange[300],
			// 	'color-secondary-lighter': colors.orange[100],

			// 	'color-accent-darker': colors.sky[900],
			// 	'color-accent-dark': colors.sky[700],
			// 	'color-accent': colors.sky[500],
			// 	'color-accent-light': colors.sky[300],
			// 	'color-accent-lighter': colors.sky[100],

			// 	'color-success-dark': colors.green[800],
			// 	'color-success': colors.green[500],
			// 	'color-success-light': colors.green[200],

			// 	'color-error-dark': colors.red[800],
			// 	'color-error': colors.red[500],
			// 	'color-error-light': colors.red[200],

			// 	'color-warning-dark': colors.yellow[800],
			// 	'color-warning': colors.yellow[500],
			// 	'color-warning-light': colors.yellow[200],
			// },
			// container: {
			// 	center: true,
			// 	padding: '2rem',
			// 	screens: {
			// 		'2xl': '1400px', // '820px',
			// 	},
			// },
			// borderRadius: {
			// 	lg: 'var(--radius)',
			// 	md: 'calc(var(--radius) - 2px)',
			// 	sm: 'calc(var(--radius) - 4px)',
			// },
			// keyframes: {
			// 	'accordion-down': {
			// 		from: { height: '0' },
			// 		to: { height: 'var(--radix-accordion-content-height)' },
			// 	},
			// 	'accordion-up': {
			// 		from: { height: 'var(--radix-accordion-content-height)' },
			// 		to: { height: '0' },
			// 	},
			// },
			// animation: {
			// 	'accordion-down': 'accordion-down 0.2s ease-out',
			// 	'accordion-up': 'accordion-up 0.2s ease-out',
			// },
		},
	},
	plugins: [
		// require('@tailwindcss/typography'),
	],
}
export default tailwindConfig
