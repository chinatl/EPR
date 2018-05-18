<template>
    <el-dialog
    :title='$t(`integral["Configurações CNOVA"]`)'
    :visible.sync="$store.state.integral.show_conva"
    >
    <div class='conva_box'>
        <div class='input_box'>
            <div class='input'>
                <p>{{$t('integral["Token de Acesso"]')}}</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>{{$t('integral["Prazo de Entrega"]')}}</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
        </div>
        <p class='choose'>
            <el-checkbox v-model="checked"></el-checkbox>
            <span class='span'>{{$t('integral["Envio do Produto"]')}}</span>
            <el-select size='small'>
                <el-option>{{$t('integral["Oferecer envios pelo Mercado Envios"]')}}</el-option>
                <el-option>{{$t('integral["Oferecer envios pelo Correios"]')}}</el-option>
            </el-select>
        </p>
        <p class='choose'>
            <el-checkbox></el-checkbox>
            <span class='span'>{{$t('integral["Retirada em mãos"]')}}</span>
            <el-select size='small'>
                <el-option>{{$t('integral["Oferecer envios pelo Mercado Envios"]')}}</el-option>
                <el-option>{{$t('integral["Oferecer envios pelo Correios"]')}}</el-option>
            </el-select>
        </p>
    </div>

    </el-dialog>
</template>
<script>
    export default{
        data(){
            return{
                checked:true
            }
        }
    }
</script>

<style rel='stylesheet/scss'lang="scss">
    .conva_box{
        padding:20px;
        border-top:1px solid #808080;
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