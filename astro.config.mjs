import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	// compressHTML: false,
	integrations: [
		tailwind({
			// applyBaseStyles: false,
		}),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['moon', 'sun', 'bars-3-bottom-right'],
				'simple-icons': ['astro', 'react', 'tailwindcss'],
			},
		}),
		metaTags(),
	],
	// vite: {
	// 	plugins: [mkcert()],
	// },
})
