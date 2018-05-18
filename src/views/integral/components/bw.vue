<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_bw"
    >
    <div slot='title' class="erp-dialog_title">
        {{$t('integral["Configurações"]')}}B2W
    </div>
    <div class='bw_box'>
        <div class='input'>
            <p>{{$t('integral["Chave de API"]')}}</p>
            <el-input type='text' size='small' style='margin-top:20px'></el-input>
        </div>
        <div class='input_box top'>
            <div class='input'>
                <p>{{$t('integral["E-Mail"]')}}</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>{{$t('integral["Accountmanager Key"]')}}</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
        </div>
        <p class='font'>{{$t('integral["Login SkyHub"]')}}</p>
        <div class='input_box top'>
            <div class='input'>
                <p>{{$t('integral["E-Mail"]')}}</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>{{$t('integral["Accountmanager Key"]')}}</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
        </div>
        <p class='font'>{{$t('integral["Login Portal B2W"]')}}</p>
        <div class='input_box top'>
            <div class='input'>
                <p>{{$t('integral["Usuário"]')}}</p>
                <el-input type='text' size='small' style='margin-top:20px'></el-input>
            </div>
            <div class='input'>
                <p>{{$t('integral["Senha"]')}}</p>
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
            <span  class='span'>{{$t('integral["Retirada em mãos"]')}}</span>
            <el-select size='small'>
                <el-option>{{$t('integral["Oferecer envios pelo Mercado Envios"]')}}</el-option>
                <el-option>{{$t('integral["Oferecer envios pelo Correios"]')}}</el-option>
            </el-select>
        </p>
        <div class='input top'>
            <p>{{$t('integral["Prazo de Expedição"]')}}</p>
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
    .bw_box{
        padding:20px;
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