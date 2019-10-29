import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
	Vue.use(VueMatomo, {
		router: app.router,
		requireConsent: true,
		//Todo add siteId
		host: 'https://piwik.graphicon.de',
		siteId: 35,

		/** Other configuration options **/
	})
}
