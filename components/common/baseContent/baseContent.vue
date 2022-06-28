<template>
	<view class="u-page " :class="{ 'ma-lg': padding }">
		<slot></slot>
		<m-loading-dialog :loading="loading"></m-loading-dialog>
		<m-confirm-dialog :dialog="confirm_dialog"></m-confirm-dialog>
		<m-alert-dialog :dialog="alert_dialog"></m-alert-dialog>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex";

	export default {
		props: {
			padding: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			...mapGetters(["loading", "confirm_dialog", "alert_dialog"])
		},
		data() {
			return {

			}
		},

		methods: {

		},
		mounted() {
			//组件用法
			// this.show_confirm({
			// 	message: "123",
			// 	confirm: function() {
			// 		console.log(1)
			// 	},
			// 	cancel:function(){
					
			// 	},
			// 	close:function(){
					
			// 	}
			// });
			// this.show_loading()
			// this.hide_loading();
			// this.show_alert("123", "error");
			// this.show_alert("success123", "success");
			// this.show_alert("info123", "info");

		}
	}
</script>

<style>

</style>
