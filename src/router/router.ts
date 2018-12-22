import Vue from 'vue'
import Router from 'vue-router'

import routesAccount from '@/router/routes/accounts'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue'),
		},
		{
			path: '/roulette',
			name: 'roulette',
			component: () => import(/* webpackChunkName: "roulette" */ '@/pages/Roulette.vue'),
		},
	],
})
