<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_conva"
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('integral["Configurações CNOVA"]')}}
		</div>
		<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
			<div>
			<p>{{$t('integral["Token de Acesso"]')}}</p>
			<el-input type='text' size='small'></el-input>
			</div>
			<div>
			<p>{{$t('integral["Prazo de Entrega"]')}}</p>
			<el-input type='text' size='small'></el-input>
			</div>
		</div>
		<div class='erp-dialog-checkbox'>
			<el-checkbox v-model="checked">{{$t('integral["Token de Acesso"]')}}</el-checkbox>
			<el-select size='small'>
			<el-option>{{$t('integral["Oferecer envios pelo Mercado Envios"]')}}</el-option>
			<el-option>{{$t('integral["Oferecer envios pelo Correios"]')}}</el-option>
			</el-select>
		</div>  
		<div class='erp-dialog-checkbox'>
			<el-checkbox v-model="checked1">{{$t('integral["Prazo de Entrega"]')}}</el-checkbox>
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
				checked1:''
            }
        }
    }
</script>

<style rel='stylesheet/scss'lang="scss">
    .conva_box{
        padding:20px;
        .input_box{
            display:flex;
            justify-content:space-between;
            margin-bottom:50px;
            .input{
                width:40%;
            }
        }
        .choose{
            margin-top:20px;
            .span{
                display:inline-block;
                width:150px;
                margin-left:20px;

            }
        }
    }
</style>