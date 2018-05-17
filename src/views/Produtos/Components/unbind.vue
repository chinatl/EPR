<template>
	<el-dialog
		:visible.sync="$store.state.product.show_unbind"
		  center
		>
		<div slot='title' class="bind-title">Anúncio Desvinculado com Sucesso</div>
		<p class="bind-img">
			<img :src="require('@/assets/img/unbind.png')" style="height:70px">
		</p>
		<p class="bind-button">
			<el-button size='small' round type="primary">ok</el-button>
		</p>
	</el-dialog>
</template>
<script>
	export default {
		data() {
			return {
				dialog: true
			}
		}
	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.bind-title {
		font-size: 22px;
		font-weight: bold;
		margin: 10px 20px;
		padding-bottom: 20px;
		border-bottom: 2px solid #ccc
	}

	.bind-img {
		text-align: center;
		margin-bottom: 30px;
	}

	.bind-button {
		text-align: center;
		span {
			margin: 0 10px;
			font-size: 14px
		}
	}

</style>
