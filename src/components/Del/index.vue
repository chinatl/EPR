<template>
<div class="error-page">
	<el-dialog
		:visible.sync="$store.state.all.show_del"
		  center
		>
		<div slot='title' class="error-header">Atenção</div>
		<div class="error-content">
			<p class="error-message">Ao executar a ação de exclusão do produto, todos os anúncios</p>
			<p class="error-message">ligados a ele serão desvínculados.</p>
			<p class="error-button">
				<el-button size='small' round type="primary" @click='agree'><span class="error-inner">{{$t('product["Sim"]')}}</span></el-button>
				<el-button size='small' round type="info" @click='cancel'><span class="error-inner">{{$t('product["Não"]')}}</span></el-button>
			</p>
		</div>
	</el-dialog>
</div>
</template>
<script>
	export default {
		data() {
			return {
				dialog: true,
			}
		},
		methods: {
			agree() {
				this.$store.commit("TOGGLE_ALL_DEL");
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},
			cancel() {
				this.$store.commit("TOGGLE_ALL_DEL");
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
