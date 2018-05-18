<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_walmart"
    >
    <div  slot='title' class="erp-dialog_title">
        {{$t('integral["Configurações Walmart"]')}}
    </div>
    <div class='walmart_box'>
        <div class='input_box'>
            <div class='width30'>
                <p>{{$t('integral["Login"]')}}</p>
                <el-input type='text' size='small'></el-input>
            </div>
            <div class='width30'>
                <p>{{$t('integral["Senha"]')}}</p>
                <el-input type='text' size='small'></el-input>
            </div>
            <div class='width30'>
                <p>{{$t('integral["Prazo de Entrega"]')}}</p>
                <el-input type='text' size='small'></el-input>
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
            <span  class='span'>{{$t('integral["Retirada em mãos"]')}}</span>
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
    .walmart_box{
        padding:20px;
        .input_box{
            display:flex;
            justify-content:space-between;
            margin-bottom:50px;
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