<template>
	<el-dialog
		:visible.sync="$store.state.product.show_delete"
		  center
		>
		<div slot='title' class="del-title-large">Atenção</div>
		<p class="del-title del-h3">Ao executar a ação de exclusão do produto, todos os anúncios </p>
		<p class="del-title">ligados a ele serão desvínculados.</p>
		<p class="del-button">
			<el-button size='small' round type="primary" @click='agree'>Sim</el-button>
			<el-button size='small' round type="info" @click='cancel'>Não</el-button>
		</p>
	</el-dialog>
</template>
<script>
	export default {
		data() {
			return {
				dialog: true
			}
		},
		methods: {
			agree() {
				this.$store.commit("TOGGLE_DELETE");
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},
			cancel() {
				this.$store.commit("TOGGLE_DELETE");
				this.$message({
					message: '恭喜你，操作失败',
					type: 'warning'
				});
			}
		}
	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.del-title-large {
		font-size: 22px;
		font-weight: bold;
		margin: 10px 20px 0px 20px;
		padding-bottom: 20px;
		border-bottom: 2px solid #ccc
	}

	.bind-img {
		text-align: center;
		margin-bottom: 30px;
	}

	.del-title {
		text-align: center;
		margin-bottom: 0px;
		font-size: 18px;
		color: #000
	}

	.del-h3 {
		margin-top: -20px;
	}

	.del-button {
		text-align: center;
		margin-top: 12px;
		span {
			margin: 0 10px;
			font-size: 14px
		}
	}

</style>
