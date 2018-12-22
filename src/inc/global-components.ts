import Vue from 'vue'

const req = require.context('@/components/base', true, /^(.*\.(vue$))[^.]*$/im)
req.keys().forEach((key: string) => {
	const componentName = key.substr(2, key.length - 6)
	const component = req(key).default
	Vue.component(componentName, component)
})
