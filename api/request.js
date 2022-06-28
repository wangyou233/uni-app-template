import {
	getToken
} from "@/cache/token.js"

// vuex 的使用  详情参考官网 https://uniapp.dcloud.io/vue-vuex
import store from '@/store/index.js'
console.log(process.uniEnv)
const api_url = process.uniEnv.baseUrl;
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
			uni.showLoading({
				title: '加载中...'
			});
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
						resolve(null)
					}
					resolve(res.data)
				
				},
				//请求失败
				fail: (e) => {
					uni.showToast({
						title: "" + e.data.msg,
						icon: 'none'
					});
					resolve(e.data);
				},
				//请求完成
				complete() {
					//隐藏加载
					if (!hideLoading) {
						uni.hideLoading();
					}
					resolve();
					return;
				}
			})
		})
	}
}
