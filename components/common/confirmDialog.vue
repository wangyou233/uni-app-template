<template>
	<view class="u-page">
		<u-modal :content="dialog.message" :show="dialog.show" showCancelButton closeOnClickOverlay @confirm="confirm"
			@cancel="cancel" @close="close"></u-modal>
	</view>
</template>

<script>
	export default {
		props: {
			dialog: Object
		},
		methods: {
			cancel() {
				this.dialog.show = false;
				if (typeof this.dialog.cancel == "function") {
					this.dialog.cancel();
				}
			},
			confirm() {
				this.dialog.show = false;
				if (typeof this.dialog.confirm == "function") {
					this.dialog.confirm();
				}
			},
			close() {
				this.dialog.show = false;
				if (typeof this.dialog.close == "function") {
					this.dialog.close();
				}
			},
		}
	}
</script>

<style>
</style>
