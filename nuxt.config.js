const pkg = require('./package')


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
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},

	srcDir: 'client/',

	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#fff'},

	/*
	** Global CSS
	*/
	css: [],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: ['~/plugins/repository'],

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
			'./assets/vars/colors.scss'
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
