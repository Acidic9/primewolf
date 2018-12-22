export default [
	{
		path: 'signin',
		name: 'signin',
		component: () => import(/* webpackChunkName: "about" */ '@/pages/accounts/Signin.vue'),
	},
	{
		path: 'signup',
		name: 'signup',
		component: () => import(/* webpackChunkName: "about" */ '@/pages/accounts/Signup.vue'),
	},
]
