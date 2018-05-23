<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_walmart"
    >
		<div  slot='title' class="erp-dialog_title">
			{{$t('integral["Configurações Walmart"]')}}
		</div>
		<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
			<div>
				<p>{{$t('integral["Login"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
			<div>
				<p>{{$t('integral["Senha"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
			<div>
				<p>{{$t('integral["Prazo de Entrega"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
		</div>
	   <div class='erp-dialog-checkbox'>
			<el-checkbox v-model="checked">{{$t('integral["Envio do Produto"]')}}</el-checkbox>
			<el-select size='small'>
				<el-option>{{$t('integral["Oferecer envios pelo Mercado Envios"]')}}</el-option>
				<el-option>{{$t('integral["Oferecer envios pelo Correios"]')}}</el-option>
			</el-select>
	   </div>  
		<div class='erp-dialog-checkbox'>
			<el-checkbox v-model="checked1">{{$t('integral["Retirada em mãos"]')}}</el-checkbox>
			<el-select size='small'>
				<el-option>{{$t('integral["Oferecer envios pelo Mercado Envios"]')}}</el-option>
				<el-option>{{$t('integral["Oferecer envios pelo Correios"]')}}</el-option>
			</el-select>
	   </div>
    </el-dialog>
</template>
<script>
    export default{
        data(){
            return{
                checked:true,
                checked1:true,
            }
        }
    }
</script>