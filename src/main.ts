import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'

import '@/inc/global-components'
import apolloClient from '@/inc/apolloClient'
import apolloProvider from '@/inc/apolloProvider'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	apolloProvider: apolloProvider(apolloClient),
	render: (h) => h(App),
}).$mount('#app')
