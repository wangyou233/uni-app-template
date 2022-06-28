<template>
	<view class="u-page " :class="{ 'ma-lg': padding }">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			padding:{
				type:Boolean,
				default:true
			}
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
