import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
// import SuiVue from 'semantic-ui-vue'

import '@/inc/global-components'
// console.log('CO', co)
// Vue.use(SuiVue)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
