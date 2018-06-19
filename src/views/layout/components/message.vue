<template>
<div class="layout-message"  v-loading.fullscreen='loading'>
	<el-dialog title="提示" :visible.sync="$store.state.all.show_message" center>
		<div slot='title' class="erp-dialog_title">
			Sugerir ou Reportar Erro
		</div>
		<div class='layout-message-title'>
			<h3>Título</h3>
			<el-input size='small' v-model='title'></el-input>
		</div>
		<div class='layout-message-title'>
			<h3>Descrição</h3>
			<el-input 
			 size='small'
			 type="textarea"
			 v-model='content'
		     :autosize="{ minRows: 4, maxRows: 8}">
		     </el-input>
		</div>
		<p class='erp-dialog-button'>
			<button class='erp-btn' @click='submit'>{{$t('button["Enviar"]')}}</button>
		</p>
	</el-dialog>
</div>
</template>

<script>
	//
	export default {
		data() {
			return {
				title: '',
				content: '',
				loading: false
			}
		},
		methods: {
			submit() {
				if (!this.title) {
					this.$message({
						message: 'Por favor, Digite o título',
						type: 'error'
					})
					return
				}
				if (!this.content) {
					this.$message({
						message: 'Por favor, insira o conteúdo',
						type: 'error'
					})
					return
				}
				this.loading = true;
				this.$post('repost/save', {
					title: this.title,
					content: this.content,
				}).then(res => {
					this.loading = false;
					this.$store.commit("TOGGLE_ALL_MESSAGE");
					this.content = '';
					this.title = '';
					this.$message({
						message: res.data,
						type: 'success'
					})
				}).catch(res => {
					this.loading = false;
				})
			}
		}
	}

</script>

<style rel='stylesheet/scss' lang="scss">
	.layout-message {
		div.el-dialog {
			width: 760px;
		}
		.layout-message-title {
			margin: 10px 0;
			h3 {
				margin-bottom: 6px;
			}
		}
	}

</style>
