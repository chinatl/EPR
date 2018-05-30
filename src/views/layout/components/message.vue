<template>
<div class="layout-message">
	<el-dialog title="提示" :visible.sync="$store.state.all.show_message" center>
		<div slot='title' class="erp-dialog_title">
			Sugerir ou Reportar Erro
		</div>
		<div class='layout-message-title'>
			<h3>Título</h3>
			<el-input size='small'></el-input>
		</div>
		<div class='layout-message-title'>
			<h3>Descrição</h3>
			<el-input 
			 size='small'
			 type="textarea"
		     :autosize="{ minRows: 4, maxRows: 8}">
		     </el-input>
		</div>
		<p class='erp-dialog-button'>
			<el-button type='success' round @click='submit'>{{$t('button["Enviar"]')}}</el-button>
		</p>
	</el-dialog>
</div>
</template>

<script>
	//
	export default {
		data() {
			return {
				sss: true
			}
		},
		methods: {
			submit() {

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
