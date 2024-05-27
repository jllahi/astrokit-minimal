import tailwind from '@astrojs/tailwind'
import debugcss from 'astro-debugcss'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
// import mkcert from 'vite-plugin-mkcert'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import AstroDevtoolbarTailwind from 'astro-devtoolbar-tailwind'
import metaTags from 'astro-meta-tags'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
	site: process.env.CI ? 'https://astro-shadcn-ui-template.vercel.app' : 'http://localhost:4321',
	// compressHTML: false,
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		mdx(),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['sun', 'moon'],
			},
		}),
		debugcss(),
		metaTags(),
		AstroDevtoolbarTailwind(),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['sun', 'moon'],
				ri: [
					'arrow-left-double-fill',
					'calendar-2-line',
					'github-line',
					'mail-line',
					'twitter-x-line',
					'whatsapp-line',
				],
				// uis: ['*'],
			},
		}),
		robotsTxt(),
	],
	// vite: {
	// 	plugins: [mkcert()],
	// },
})
