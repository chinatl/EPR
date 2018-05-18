<template>
    <el-dialog
     :title='$t(`expedic["Error"]`)'
    :visible.sync="$store.state.expedic.show_inform"
    center    
    >
    <div class='error_box'>
        <div class='error_msg'>
            {{$t('expedic["Tivemos uma falha de comunicaçao na impressão da etiqueta, Favor conferir no marketplace"]')}}.
           
        </div>
        <p style='text-align:center'><el-button size='small' type='primary' round> ok </el-button></p>
    </div>
    </el-dialog>
</template>
<script>
    
</script>
<style rel='stylesheet/scss' lang='scss'>
    .error_box{
        padding:20px;
        .error_msg{
            padding:0 50px;
            
            margin-bottom:30px;
            
        }
    }
</style>