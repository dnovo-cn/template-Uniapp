import Vue from 'vue'
import App from './App'
import store from '@/libs/store/index'
import uView from "uview-ui";

Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})

// 注入全局变量
import globalData from '@/libs/config/globalData'
Vue.use(globalData, app);

// 注入工具函数
import utilFunction from '@/libs/util/index'
Vue.use(utilFunction, app);

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/libs/request/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/libs/request/http.api.js'
Vue.use(httpApi, app)

app.$mount()
