<template>
	<view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {

		},
		props: {
			dialog: Object
		},
		watch: {
			dialog(obj) {
				let that = this;
				if (!obj.show) {
					return;
				}
				let params = {
					type: 'success',
					message: "庄生晓梦迷蝴蝶",
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
				}
				let data = Object;
				if (obj.type === "succcess") {
					data = Object.assign(params, obj)

				} else if (obj.type === "info") {
					params.type = "error";
					params.iconUrl = "https://cdn.uviewui.com/uview/demo/toast/error.png";

					data = Object.assign(params, obj)

				} else {
					params.type = "default";
					params.iconUrl = "https://cdn.uviewui.com/uview/demo/toast/default.png";
					data = Object.assign(params, obj)
				}
				that.$refs.uToast.show({
					...params,
					complete() {
						params.url && uni.navigateTo({
							url: params.url
						})
					}
				})
				setTimeout(function() {
					obj.show = false
				}, 2000)
			}
		}
	}
</script>

<style>

</style>
