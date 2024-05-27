import tailwind from '@astrojs/tailwind'
import debugcss from 'astro-debugcss'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
// import mkcert from 'vite-plugin-mkcert'
import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'
import AstroDevtoolbarTailwind from 'astro-devtoolbar-tailwind'
import embeds from 'astro-embed/integration'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'

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
				heroicons: ['moon', 'sun'],
				'simple-icons': ['astro', 'react', 'tailwindcss'],
			},
		}),
		db(),
		react(),
		embeds(),
		mdx(),
		robotsTxt(),
		metaTags(),
		debugcss(),
		AstroDevtoolbarTailwind(),
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
