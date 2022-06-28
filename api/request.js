import {
	getToken
} from "@/cache/token.js"

// vuex 的使用  详情参考官网 https://uniapp.dcloud.io/vue-vuex
import store from '@/store/index.js'
console.log(process.uniEnv)
const api_url = process.uniEnv.baseUrl;

function show_alert(obj, type = "info") {
  if (typeof obj === "string") {
    obj = { title: obj, type: type };
  }
  store.commit("show_alert_dialog", obj);
}

export default class Request {
	http(param) {
		// 请求参数
		var url = param.url,
			method = param.method,
			header = {},
			data = param.data || {},
			token = param.token || "",
			hideLoading = param.hideLoading || false;
		var requestUrl = api_url + url;
		if (method) {
			method = method.toUpperCase(); //小写改为大写
			if (method == "POST" || method == "PUT") {
				header = {
					'Content-Type': "application/json",
					'Authorization': "Bearer " + getToken()
				};
			} else {
				header = {
					'Authorization': "Bearer " + getToken()
				}
			}
		}

		//加载圈
		if (!hideLoading) {
			    store.commit("set_loading", true);
			// uni.showLoading({
			// 	title: '加载中...'
			// });
		}

		// 返回promise
		return new Promise((resolve, reject) => {
			// 请求
			uni.request({
				url: requestUrl,
				data: data,
				method: method,
				header: header,
				success: (res) => {
					// 判断 请求api 格式是否正确
					if (res.statusCode && res.statusCode != 200) {
						uni.showToast({
							title: "api错误" + res.errMsg,
							icon: 'none'
						});
						return;
					}
					if (res.data.Success && res.data.ErrorCode == 0) {
						resolve(res.data.Data)
					} else {
						uni.showToast({
							title: res.data.Msg
						})
						show_alert(res.data.Msg,"error")
						resolve(null)
					}
					resolve(res.data)
				
				},
				//请求失败
				fail: (e) => {
					show_alert(e.data.msg,"error")
					resolve(e.data);
				},
				//请求完成
				complete() {
					//隐藏加载
					if (!hideLoading) {
						store.commit("set_loading", false);
					}
					resolve();
					return;
				}
			})
		})
	}
}
