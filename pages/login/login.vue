<template>
	<view>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	const api = require("@/api/index")
	import {
		getLoginInfo,
		setLoginInfo,
		removeLoginInfo
	} from "@/cache/loginInfo"
	export default {
		methods: {
			login() {
				let params = {
					phone: this.loginInfo.phoneNum,
					pwd: this.loginInfo.passWord,
					userType: 2

				}
				api.login(params).then(res => {
					console.log(res)

					if (this.loginInfo.remember) {
						setLoginInfo(this.loginInfo)
					} else {
						removeLoginInfo()
					}
				})
			}
		},
		data() {
			return {
				loginInfo: {
					phoneNum: "1",
					passWord: "2",
					remember: false
				}
			}
		},
		created() {
			let loginInfo = getLoginInfo()
			if (loginInfo != undefined) {
				this.loginInfo = loginInfo
			}
			this.login()
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	
</style>
