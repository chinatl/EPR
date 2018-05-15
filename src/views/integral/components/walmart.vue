<template>
    <el-dialog
    title="Configurações Walmart"
    :visible.sync="$store.state.integral.show_walmart"
    width="50%"
    >
    <div class='walmart_box'>
        <div class='input_box'>
            <div class='input'>
                <p>Login</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>Senha</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>Prazo de Entrega</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
        </div>
        <p class='choose'>
            <el-checkbox v-model="checked"></el-checkbox>
            <span class='span'>Envio do Produto</span>
            <el-select size='small'>
                <el-option>Oferecer envios pelo Mercado Envios</el-option>
                <el-option>Oferecer envios pelo Correios</el-option>
            </el-select>
        </p>
        <p class='choose'>
            <el-checkbox></el-checkbox>
            <span  class='span'>Retirada em mãos</span>
            <el-select size='small'>
                <el-option>Oferecer envios pelo Mercado Envios</el-option>
                <el-option>Oferecer envios pelo Correios</el-option>
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
        border-top:1px solid #808080;
        .input_box{
            display:flex;
            justify-content:space-between;
            margin-bottom:50px;
            .input{
                width:25%;
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