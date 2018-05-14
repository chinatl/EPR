<template>
    <el-dialog
    title="Configurações B2W"
    :visible.sync="$store.state.integral.show_bw"
    width="50%"
    >
    <div class='conva_box'>
        <div class='input'>
            <p>Chave de API</p>
            <el-input type='text' size='small' style='margin-top:20px'></el-input>
        </div>
        <div class='input_box top'>
            <div class='input'>
                <p>E-Mail</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>Accountmanager Key</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
        </div>
        <p class='font'>Login SkyHub</p>
        <div class='input_box top'>
            <div class='input'>
                <p>E-Mail</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>Accountmanager Key</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
        </div>
        <p class='font'>Login Portal B2W</p>
        <div class='input_box top'>
            <div class='input'>
                <p>Usuário</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>Senha</p>
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
        <div class='input top'>
            <p>Prazo de Expedição</p>
            <el-input type='text' size='small' style='width:50%;margin-top:20px'></el-input>
        </div>
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
        .top{
            margin-top:30px;
        }
        .choose{
            margin-top:20px;
            .span{
                display:inline-block;
                width:150px;
                margin-left:20px;

            }
        }
        .font{
            font-size:18rem;
            color:#808080;
        }
    }
</style>