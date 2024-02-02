import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import debugcss from 'astro-debugcss'
import { tailwindConfigViewer } from 'astro-tailwind-config-viewer'
// import mkcert from 'vite-plugin-mkcert'
import metaTags from 'astro-meta-tags'

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
		tailwindConfigViewer(),
		metaTags(),
	],
	// vite: {
	// 	plugins: [mkcert()],
	// },
})
