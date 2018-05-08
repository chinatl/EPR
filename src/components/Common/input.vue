<template>
	<div :class='$props.className'>
		<div class="label"><label for="">{{$props.title}}</label></div>
		<div><el-input size='small' :model='model_value' @change="change"></el-input></div>
	</div>	
</template>

<script>
	export default {
		data() {
			return {
				model_value: ''
			}
		},
		props: ['title', "className", "model"],
		watch: {
			model_value(res) {
				console.log(res)
			}
		},
		methods: {
			change(e) {
				console.log(e)
				this.$emit("change", e)
			}
		},
		created() {
			this.model_value = this.model;
			console.log(this.model)
		}

	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.select-item {
		width: 15%;
		.label {
			margin: 12px 0;
			font-size: 20px;
			font-weight: bold;
			color: #aaa
		}
	}

</style>
