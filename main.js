import App from '@/App'
import uView from "@/plugins/uView"
import Vue from 'vue'
import store from '@/store/index.js'
import '@/config/.env.js'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	uView
})
app.$mount()