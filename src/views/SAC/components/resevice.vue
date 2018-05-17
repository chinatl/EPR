<template>
    <el-dialog
    title="Configuração de Mensagem de Auto Pós-Compra"
    :visible.sync="$store.state.sac.show_resevice"
    >
    <div class='re_box'>
        <div style='margin-bottom:15px;'>
            <el-switch
            v-model="value">
            </el-switch>
            <span style='margin-left:50px;'>Enviar uma mensagem ao comprador quando o pagamento for concluído.</span>
        </div>
        <div style='text-align:right'>
            <el-input type="textarea"
            :rows="5" style='width:80%;'>
            </el-input>
        </div>
        <div style='margin:50px 0;'>
            <el-switch
            v-model="value">
            </el-switch>
            <span style='margin-left:50px;'>Enviar automaticamente código de rastreio ao comprador quando o pedido for postado.</span>
        </div>
        <div style='margin-bottom:15px;'>
            <el-switch
            v-model="value">
            </el-switch>
            <span style='margin-left:50px;'>Enviar uma mensagem ao comprador após o pedido entregue.</span>
        </div>
        <div style='text-align:right'>
            <el-input type="textarea"
            :rows="5" style='width:80%;'>
            </el-input>
        </div>
        <div style='text-align:right;margin-top:20px;'>
            <el-button size='small' type='primary' round>Concluir</el-button>
        </div>
    </div>
    
    </el-dialog>
</template>
<script>
    export default{
        data(){
            return{
                value:true
            }
        },
        methods:{

        }
    }
</script>
<style rel='stylesheet/scss'lang="scss">
    .re_box{
        padding:20px;
        border-top:1px solid #808080;
    }
</style>