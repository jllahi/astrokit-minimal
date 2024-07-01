import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import embeds from 'astro-embed/integration'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: process.env.CI ? 'https://astro-shadcn-ui-template.vercel.app' : 'http://localhost:4321',
	// compressHTML: false,
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				ri: [
					'arrow-left-double-fill',
					'arrow-right-double-fill',
					'calendar-2-line',
					'github-line',
					'mail-line',
					'twitter-x-line',
					'whatsapp-line',
				],
				heroicons: ['moon', 'sun', 'bars-3-bottom-right'],
				'simple-icons': ['astro', 'react', 'tailwindcss'],
			},
		}),
		db(),
		react(),
		embeds(),
		mdx(),
		robotsTxt(),
		metaTags(),
	],
	// vite: {
	// 	plugins: [mkcert()],
	// },
	output: 'hybrid',
	adapter: vercel({
		// webAnalytics: {
		// 	enabled: true,
		// },
		// imagesConfig: {
		//   sizes: [320, 640, 1280],
		// },
	}),
})
