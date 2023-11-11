// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
	colorMode: {
		preference: 'dark', // default value of the color mode
		fallback: 'dark', // fallback value if the preference can't be detected
		classSuffix: '', // optional, default value: ''
		storageKey: 'nuxt-color-mode' // optional, default value: 'color-mode'
	},
	app: {
		head: {
			htmlAttrs: { lang: 'en' },
			link: [
				{ rel: 'canonical', href: 'https://carpeta.luciaa.live' },
				{ rel: 'icon', href: '/owo.webp' },
				{ rel: 'preconnect', href: 'https://cdn.discordapp.com', crossorigin: 'anonymous' }
				// <link rel="preload" as="image" href="img.png" />
			],
			meta: [
				{
					'http-equiv': 'Cache-Control',
					content: '1y'
				},
				{ 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
				{ 'http-equiv': 'Expires', content: '1y' },
				{ 'http-equiv': 'Pragma', content: '1y' },
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: 'Lucía Álvarez' },
				{ name: 'application-name', content: 'Lucía Álvarez' },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'theme-color', content: '#85D2FC' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, maximum-scale=5'
				},
				{ name: 'designer', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: 'https://carpeta.luciaa.live' },
				{
					name: 'keywords',
					content: 'mishu, Lucía Álvarez Carpeta, Lucía Álvarez, Lucía Carpeta, mishu Carpeta'
				},
				{ name: 'msapplication-config', content: '/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#85D2FC' },
				{ name: 'owner', content: 'Lucía Álvarez, mishudiscord@gmail.com' },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: 'mishudiscord@gmail.com' },
				{ name: 'revisit-after', content: '7 days' },
				{
					name: 'robots',
					content: 'archive,follow,imageindex,index,odp,snippet,translate'
				},
				{ name: 'shortlink', content: 'https://carpeta.luciaa.live' },
				{
					name: 'subject',
					content: "Lucía Álvarez's personal carpeta."
				},
				{
					name: 'summary',
					content: "Lucía Álvarez's personal carpeta."
				},
				{ name: 'url', content: 'https://carpeta.luciaa.live' },
				{ property: 'og:email', content: 'mishudiscord@gmail.com' },
				{ property: 'og:locale', content: 'en_US' },
				{ property: 'og:site_name', content: 'Lucía Álvarez' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://carpeta.luciaa.live' },
				{ property: 'twitter:card', content: 'summary_large_image' },
				{ property: 'twitter:creator', content: '@mishu' },
				{ property: 'twitter:site', content: '@mishu' },
				{ property: 'twitter:url', content: 'https://carpeta.luciaa.live' }
			]
		}
	}
});
