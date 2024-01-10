import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import debugcss from 'astro-debugcss'
import mkcert from 'vite-plugin-mkcert'

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
		debugcss(),
	],
	vite: {
		plugins: [mkcert()],
	},
})
