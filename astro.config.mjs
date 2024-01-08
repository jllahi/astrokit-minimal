import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { astroImageTools } from 'astro-imagetools'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['sun', 'moon'],
			},
		}),
		astroImageTools,
	],
})
