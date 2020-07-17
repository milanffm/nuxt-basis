/* eslint-disable no-undef */

const apiUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:1337/' : 'http://localhost:1337/';

const features = [
	'fetch',
	'Object.entries',
	'IntersectionObserver',
].join('%2C');


module.exports = {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	env: {
		dev: (process.env.NODE_ENV !== 'production'),
		apiURL: apiUrl
	},
	head: {
		title: pkg.name,
		htmlAttrs: {
			lang: 'de',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Basis Meta Description' },
			{ hid: 'keywords', name: 'keywords', content: 'Keyword 1, Keyword 2' },
			{ hid: 'og:description', name: 'og:description', content: 'Basis Meta Description' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{ src: `https://polyfill.io/v3/polyfill.min.js?features=${features}`, body: true },
		],
	},
	/*
		** change pwa properties
		*/
	pwa: {
		meta: {
			author: 'graphicon'
		},
		manifest: {
			name: 'Nuxt Basis',
			short_name: 'Nuxt Basis',
			description: 'Basis Meta Description',
			lang: 'de',
			'background_color': '#fff',
			'theme_color': '#ff00ff',
		}
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#ff00ff' },
	/*
	** Global CSS
	*/
	css: [
		'~/assets/scss/theme.scss'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'~/plugins/global',
		'~/plugins/repository',
		{ src: '~/plugins/hammer.directive', mode: 'client' },
		{ src: '~/plugins/vue-matomo', mode: 'client' },
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
        '@nuxtjs/apollo'
	],
	styleResources: {
		scss: [
			'~/node_modules/bourbon/core/_bourbon.scss',
			'~/assets/scss/vars/*',
			'~/assets/scss/mixins/*',

		]
	},
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
            }
        }
    },
	/*
	** Axios module configuration
	*/
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		baseURL: apiUrl,
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
	}
};
