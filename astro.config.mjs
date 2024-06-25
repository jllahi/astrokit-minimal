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
				heroicons: ['sun', 'moon'],
			},
		}),
		metaTags(),
	],
})
