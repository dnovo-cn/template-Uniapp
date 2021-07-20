import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin: true, // 	是否处于登录状态
	},
	getters: {},
	mutations: {},
	actions: {}
})

export default store
