<template>
    <div class='perfil_box'>
        <p class='title'>Perfil</p>
        <div class='main_box'>
            <span class='head_text'>Identificação</span>
            <div class='box sty'>
                <div class='msg_box'>
                    <p class='msg_name'>Nome de Contato</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>CNPJ/CPFo</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>Razão Social (Opcional)</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>Loja</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>  
            </div>
            
        </div>
        <div class='main_box'>
            <span class='head_text'>Endereço</span>
            <div class='box sty'>
                <div class='msg_box'>
                    <p class='msg_name'>Logradouro</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>Número</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>Complemento</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div> 
                
            </div>
            <div class='box mar sty'>
                <div class='msg_box'>
                    <p class='msg_name'>Bairro</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>Cidade</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>Estado</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>  
            </div>
        </div>
        <div class='main_box'>
            <span class='head_text'>Contato</span>
            <div class='box'>
                <div class='msg_box'>
                    <p class='msg_name'>E-Mail</p>
                    <p class='msg'>
                        <el-input type='text' size='small' :disabled="true" value='cadodepaulasilva159@gmail.com'></el-input>
                    </p>
                </div>
                <div class='msg_box left'>
                    <p class='msg_name'>Celular</p>
                    <p class='msg'>
                       <el-input type='text' size='small' :disabled="true" value='(xx) xxxxxxxxx'></el-input>
                    </p>
                </div>
            </div>
            
        </div>
        <p class='btn_box'>
            <el-button type='primary' round>Salvar</el-button>
        </p>
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
    .perfil_box{
        padding:20px;
        .title{
           color:#808080;
           font-size:20rem;
           padding-bottom:1%;
           border-bottom:1px solid #e0e0e0;
        }
        
        .main_box{
            border:2px solid #e0e0e0;
            border-radius:3px;
            padding:40px;
            color:#808080;
            position:relative;
            font-size:bold;
            margin-top:20px;
            font-size:15rem;
            .head_text{
                position:absolute;
                padding:0 20px;
                top:-10px;
                left:100px;
                background:#fff;
            }
            .box{
                display:flex;
                flex-wrap:wrap;
                .msg_box{
                    width:22%;
                    .msg{
                        margin-top:10px;
                    }
                }
                .left{
                    margin-left:20px;
                }
            }
           .mar{
                margin-top:20px;
            }
            .sty{
                justify-content:space-between;
            }   
        }
        .btn_box{
                text-align:right;
                margin-top:20px;
            } 
    }
</style>