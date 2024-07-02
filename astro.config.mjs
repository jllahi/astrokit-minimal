import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
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
		metaTags(),
	],
})
