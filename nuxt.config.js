const pkg = require('./package');

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
	},
	head: {
		title: pkg.name,
		htmlAttrs: {
			lang: 'de',
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		],
		script: [
			{ src: `https://polyfill.io/v3/polyfill.min.js?features=${features}`, body: true },
		],
	},

	/*
	** Customize manifest.json
	*/
	manifest: {
		lang: 'de',
		"background_color": "#fff",
		"theme_color": "#000",
	},

	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#ccc'},

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
		{ src:  '~/plugins/hammer.directive', mode: 'client'}
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources',
	],

	styleResources: {
		scss: [
			'~/node_modules/bourbon/core/_bourbon.scss',
			'~/assets/scss/vars/*',
			'~/assets/scss/mixins/*',

		]
	},
	/*
	** Axios module configuration
	*/
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:1337/' : 'http://localhost:1337/',
	},

	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	}
}
