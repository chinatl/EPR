<template>
    <el-dialog
    title="Resposta Rápida | @"
    :visible.sync="$store.state.sac.show_msg"
    width="40%"
    >
    <div class='msg_box'>
        <p class='msg_header'>
            <el-input size='small' type='text' placeholder='Pesquisar...' style='width:30%;'></el-input>
            <span class='el-icon-search'></span>
        </p>
        <div class='msg_section'>
            <ul class='left_nav'>
                <li class='nav_item'><span>Acompanhamento</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Voltagem</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Estoque</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Tamanho</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Descrição da Mensagem</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Descrição da Mensagem</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Saudações</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Disponível de Entrega</span><span class='el-icon-close'></span></li>
                <li class='nav_item'><span>Garantia</span><span class='el-icon-close'></span></li>
            </ul>
            <div class='right_list'>
                <div class='list_item'>
                    <p>Título</p>
                    <el-input type='text' size='small'></el-input>
                </div>
                <div class='list_item'>
                    <p>Palavra-Chave</p>
                    <el-input type='text' size='small'></el-input><span class='el-icon-question'></span>
                </div>
                <div class='list_textarea'>
                    <p>Resposta</p>
                    <el-input  type="textarea" :rows="5"></el-input>
                </div>
                <p class='btn_box'><el-button type='primary' round size='small'>Adicionar</el-button></p>
            </div>
        </div>
    </div>
    
    </el-dialog>
</template>
<script>

  export default {
    data() {
      return {
       
      };
    },
    methods: {
      
    }
  };
</script>
<style rel='stylesheet/scss'lang="scss">
    .msg_box{
        padding:20px;
        border-top:1px solid #808080;
        .msg_header{
            margin:20px 0;
            .el-icon-search{
                display:inline-block;
                width:32px;
                height:33px;
                background:#0aa1ed;
                text-align:center;
                line-height:33px;
                font-size:18rem;
                color:#fff;
                position:relative;
                left:-6px;
                top:1px;
            }
        }
        .msg_section{
           color:#808080;
           margin-top:30px;
           display:flex;
           .left_nav{
               width:35%;
               font-size:13rem;
               margin-right:20px;
               .nav_item{
                   display:flex;
                   justify-content:space-between;
                   height:30px;
                   line-height:30px;
                   .el-icon-close{
                        text-align:center;
                        line-height:30px;
                        cursor:pointer
                   }
               }

           }
           .right_list{
               width:60%;
               border-left:1px solid #e0e0e0;
               padding-left:20px;
               .list_item{
                   width:70%;
                   position:relative;
                   margin-bottom:10px;
                    p{
                        margin-bottom:10px;
                    }
                    .el-icon-question{
                        color:#0aa1ed;
                        font-size:18rem;
                        position:absolute;
                        right:-25px;
                        top:40px;

                    }
               }
               
           }
           .btn_box{
               text-align:right;
               margin-top:20px;
           }
        }

    }
</style>