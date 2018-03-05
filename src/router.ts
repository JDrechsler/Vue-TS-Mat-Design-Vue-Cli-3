import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/components/Home/Home')
		},
		{
			path: '/settings',
			name: 'settings',
			component: () => import('@/components/Settings/Settings')
		},
		{
			path: '/cards',
			name: 'cards',
			component: () => import('@/components/Cards/Cards')
		}
	]
})
