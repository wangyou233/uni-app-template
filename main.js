import App from './App'
import uView from "./plugins/uView"
import Vue from 'vue'


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	uView
})
app.$mount()