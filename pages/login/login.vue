<template>
	<base-content>
		<view class="u-page">
			<u--input v-model="loginInfo.phone"></u--input>
			<u--input v-model="loginInfo.pwd" password></u--input>
			<u-button type="primary" text="登录" @click="login"></u-button>
		</view>
	</base-content>
</template>
<script>
	const api = require("@/api/index")
	import baseContent from "@/components/common/baseContent/baseContent.vue"
	import {
		getLoginInfo,
		setLoginInfo,
		removeLoginInfo
	} from "@/cache/loginInfo"
	import {setToken} from "@/cache/token"
	import {setSchoolInfo} from "@/cache/schoolInfo"
	import {setUserId} from "@/cache/userId"
	export default {
		components:{baseContent},
		data() {
			return {
				loginInfo:{
					phone:"xh100",
					pwd:"123456",
					remember:true
				}

			}
		},
		created() {
			let loginInfo = getLoginInfo()
			console.log(loginInfo)
			if (loginInfo !== undefined && loginInfo !== "") {
				this.loginInfo = loginInfo
			}
		},
		methods: {
			login() {
				let that = this;
				let params = {
					phone: this.loginInfo.phone,
					pwd: this.loginInfo.pwd,
					userType: 2
				}
				api.login(params).then(res => {
					console.log(res)
					if(res != null){
						setToken(res.Token)
						setUserId(res.UserId)
						setSchoolInfo({
							SchoolId :res.SchoolId,
							IsVip:res.IsVip
						})
						if (this.loginInfo.remember) {
							setLoginInfo(this.loginInfo)
						} else {
							removeLoginInfo()
						}
						that.$store.dispatch("getUserInfo")
						uni.switchTab({
							url:"/pages/index/index"
						})
					}

				})
			}
		},
		mounted() {
		}
	}
</script>

<style lang="scss">

</style>
