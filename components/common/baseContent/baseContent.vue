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

		}
	}
</script>

<style>

</style>
