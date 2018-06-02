<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_walmart"
    >
		<div  slot='title' class="erp-dialog_title">
			{{$t('integral["Configurações Walmart"]')}}
		</div>
		<div class='erp-dialog-item  no-border'>
			<div class='width20'>
				<p>{{$t('integral["Login"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
			<div class='width20'>
				<p>{{$t('integral["Senha"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
			<div class='width20'>
				<p>{{$t('integral["Prazo de Entrega"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
			<div class='width20'>
				<p>shop id</p>
				<el-input type='text' size='small'></el-input>
			</div>
		</div>
	   <div class='erp-dialog-item just-start no-border '>
			<div class='width40'>
				<p>{{$t('integral["Envio do Produto"]')}}</p>
				<el-select size='small' v-model='shop' style='width:100%'>
					<el-option value='1' :label='$t(`integral["Oferecer envios pelo Mercado Envios"]`)'></el-option>
					<el-option value='2' :label='$t(`integral["Oferecer envios pelo Correios"]`)'></el-option>
				</el-select>
			</div>
			<div style="margin-left:40px">
				<p>&nbsp;&nbsp;</p>
				<el-checkbox v-model="checked1">{{$t('integral["Retirada em mãos"]')}}</el-checkbox>
			</div>
		</div>
    </el-dialog>
</template>
<script>
    export default{
        data(){
            return{
				shop:'1',
                checked1:false,
            }
        }
    }
</script>