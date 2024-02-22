import tailwind from '@astrojs/tailwind'
import debugcss from 'astro-debugcss'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
// import mkcert from 'vite-plugin-mkcert'
import AstroDevtoolbarTailwind from 'astro-devtoolbar-tailwind'
import metaTags from 'astro-meta-tags'

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
				heroicons: ['sun', 'moon'],
			},
		}),
		debugcss(),
		metaTags(),
		AstroDevtoolbarTailwind(),
	],
	// vite: {
	// 	plugins: [mkcert()],
	// },
})
