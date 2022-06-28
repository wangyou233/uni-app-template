import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const api = require("@/api/index")
import {
	getUserId
} from '@/cache/userId'
const store = new Vuex.Store({
	state: {
		loading_count: 0,
		confirm_dialog: {
			show: false,
			message: ""
		},
		alert_dialog: {
			icon: "",
			show: true,
			message: "",
			params: Object,
			position: "center",
			complete: Function(),
		},
		userInfo: {

		}
	},
	getters: {
		alert_dialog: state => {
			return state.alert_dialog
		},
		userInfo: state => {
			return state.userInfo
		},
		confirm_dialog: state => {
			return state.confirm_dialog;
		},
		loading: state => {
			return state.loading_count > 0;
		},
	},
	mutations: {
		show_confirm_dialog(state, dialog) {
			state.confirm_dialog = dialog;
		},
		set_user_info(state, data) {
			state.userInfo = data;
		},
		set_loading(state, is_loading) {
			if (is_loading) {
				state.loading_count += 1;
			} else {
				if (state.loading_count > 0) {
					state.loading_count -= 1;
				}
			}
		},
		show_alert_dialog(state, data) {
			state.alert_dialog = Object.assign({
				icon: "",
				show: true,
				message: "",
				params: Object,
				position: "center",
				complete: Function(),
			}, data)
		}
	},
	actions: {
		async getUserInfo({
			commit,
			state
		}, payload) {
			return new Promise((resolve, reject) => {
				api.getUserInfo(getUserId()).then(res => {
					if (res !== null) {
						commit("set_user_info",res)
					}
				})
			})
		},
	}
});

export default store;
