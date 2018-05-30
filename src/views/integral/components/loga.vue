<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_loga"
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('integral["Loja Virtual"]')}}
		</div>
		<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
			<div>
				<p>DNS</p>
				<el-input type='text' size='small' disabled value='888.888.888'></el-input>
			</div>
		</div>
		<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
			<div>
				<p>{{$t('integral["Dominio"]')}}</p>
				<el-input type='text' size='small' disabled value='http://www.pmcell.com.br'></el-input>
			</div>
		</div>
    	<p class='erp-dialog-button'>
			<el-button type='primary' round @click='submit'>{{$t('fornecedor["Salvar"]')}}</el-button>
		</p>
    </el-dialog>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			submit() {

			}
		}
	}

</script>
