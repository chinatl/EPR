<template>
    <div class='set_box'>
        <p class='title'>Configurações Gerais</p>
        <p class='title subtitle'>Senha</p>
        <div class='message_box'>
            <p class='input_box'>
                <span class='input_name title'>Senha de Login:</span>
                <span class='input'><el-input size='small' type='password'></el-input></span>
               <span class='el-icon-edit-outline'></span>
               <span class='el-icon-refresh'></span>
            </p>
            <p class='input_box'>
                <span class='input_name title'>Telefone:</span>
                <span class='input'><el-input size='small' type='text' value='xxxxxxxx'></el-input></span>
               <span class='el-icon-edit-outline'></span>
               <span class='empty'></span>
            </p>
            <p class='input_box'>
                <span class='input_name title'>Senha de Administração:</span>
                <span class='input'><el-input size='small' type='password'></el-input></span>
               <span class='el-icon-edit-outline'></span>
               <span class='el-icon-refresh'></span>    
            </p>
        </div>
         <p class='title subtitle'>SAC</p>
        <div class='message_box'> 
            <div class='input_box'>
                <span class='desc'></span>
                <div class='text'>
                    Resposta automática desabilitada. O sistema não irá responder automáticamente, 
                    e também não sugerir respostas.
                </div>
                <el-radio v-model="radio" label=" " style='float:right'></el-radio>
            </div>
            <div class='input_box'>
                <span class='desc'></span>
                <div class='text'>
                   Resposta automática habilitada; O sistema irá sugerir respostas automáticamente.
                </div>
                <el-radio v-model="radio" label=" " style='float:right'></el-radio>
            </div>
            <div class='input_box'>
                <span class='desc'></span>
                <div class='text'>
                    esposta automática habilitada. O sistema enviará todas as respostas automáticamente sem revisão.
                </div>
                <el-radio v-model="radio" label=" " style='float:right'></el-radio>
            </div>
        </div>
        <p class='title subtitle'>Taxa de Comissão</p>
        <div class='module_box'>
            <div class='module'>
                <p class='m_title'>Mercado Livre</p>
                <div class='img_box'>
                <img :src="require('@/assets/img/mg.png')" alt="">
                </div>
                <p class='m_text'>
                    <span>Clássico</span>
                    <span>Premium</span>
                </p>
                <p class='el-input'>
                    <el-input text='text' size='small' style='width:70px;'></el-input>
                    <el-input text='text' size='small' style='width:70px;'></el-input>
                    <el-button size='small' type='primary' icon="el-icon-check" style='height:32px;position:relative;top:5px;'></el-button>
                </p>
            </div>
            <div class='module'>
                <p class='m_title'>Mercado Livre</p>
                <div class='text'>
                    B2W
                </div>
                <p class='m_text'>
                    Comissão Mkt.
                </p>
                <p class='el-input'>
                    <el-input text='text' size='small' style='width:140px;'></el-input>
                    <el-button size='small' type='primary'  style='height:32px;position:relative;top:5px;'>ok</el-button>
                </p>
            </div>
            <div class='module'>
                <p class='m_title'>Walmart</p>
                <div class='text'>
                    B2W
                </div>
                <p class='m_text'>
                    Comissão Mkt.
                </p>
                <p class='el-input'>
                    <el-input text='text' size='small' style='width:140px;'></el-input>
                    <el-button size='small' type='primary'  style='height:32px;position:relative;top:5px;'>ok</el-button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{
            
        }
    }
</script>
<style rel='stylesheet/scss' lang='scss'>
    .set_box{
         padding:20px;
        .title{
           color:#808080;
           font-size:20rem;
           padding-bottom:1%;
           border-bottom:1px solid #e0e0e0;
        }
        .subtitle{
            margin-top:50px;
            border:none;
            padding-left:50px;
        }
        .message_box{
            padding: 20px 100px 60px;
            border-bottom:1px solid #808080;
            .input_box{
                display:flex;
                height:60px;
                padding-top:20px;
                .input_name{
                    width:50%;
                    border:none;
                    margin-right:10%;
                }
                .input{
                    width:50%;
                }
                .el-icon-edit-outline,
                .el-icon-refresh{
                    font-size:40rem;
                    color:#808080;
                    cursor:pointer;
                }
                .empty{
                    display:inline-block;
                    width:48px;
                    height:36px;
                }
                .desc{
                    width:10px;
                    height:10px;
                    background:#808080;
                    border-radius:50%;
                    
                    margin-right:20%;
                }
                .text{
                    width:70%;
                    font-size:15rem;
                    font-weight:bold;
                    color:#808080;
                     margin-right:15%;
                }
            }
        }
        .module_box{
            margin-top:50px;
            padding: 20px 100px 60px;
            display:flex;
            .module{
                width:230px;
                height:210px;
                padding: 20px;
                border:1px solid #808080;
                border-radius:10px;
                color:#808080;
                font-weight:bold;
                margin-right:10%;
                .m_title{
                    text-align:center; 
                }
                .img_box{
                    height:100px;
                    padding-top:25px;
                    text-align:center;
                    img{
                        width:100px;
                        height:60px;
                    }
                }
                .text{
                     font-size:60rem;
                     padding:25px 0 7px;
                     color:#0aa1ed;
                     text-align:center;
                }
                .m_text{
                    padding:0 20px;
                    span{
                        margin-right:10%
                    }
                }
                .el-input{
                    display:flex;
                    margin-top:5px;
                    
                }
            }
        }
        
    }
</style>