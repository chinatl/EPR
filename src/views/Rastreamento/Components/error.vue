<template>
    <el-dialog
    :visible.sync="$store.state.rastreamento.show_error"
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('rastreamento["Reportar Erro"]')}}
		</div>
        <div class="body">
            <p class="line">{{$t('rastreamento["Pedido"]')}}: 13245678</p>
            <p class="line">{{$t('rastreamento["Observação"]')}}</p>
            <el-input
            style='margin-top:10px'
            type='textarea'
            :rows="10"
            placeholder="请输入内容"
            v-model="textarea">
            </el-input>
            <p style='text-align:right'>
                <el-button type='primary' round @click='submit'>{{$t('rastreamento["Enviar"]')}}</el-button>
            </p>
        </div>
    </el-dialog>

</template>


<script>
	export default {
		data() {
			return {
				textarea: ' ',
			};
		},
		methods: {
			submit() {
				this.$store.commit('TOGGLE_RASTREAMENTO_ERROR')
				this.$message({
					showClose: true,
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			}
		},
		created() {

		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.body {
		padding-top: 20px;
		p {
			padding: 5px 0;
			font-size: 18rem;
		}
	}

</style>
