<template>
    <el-dialog
    :title='$t(`integral["Configurações Tiny"]`)'
    :visible.sync="$store.state.integral.show_tiny"
    >
    <div class='tiny_box'>
        <p class='tiny_title'>{{$t('integral["Token de Acesso"]')}}</p>
        <el-input
        type='text'
        size='small'></el-input>
    </div>
    </el-dialog>
</template>
<script>
    
</script>
<style rel='stylesheet/scss' lang="scss">
    .tiny_box{
        padding:20px;
        border-top:1px solid #808080;
        .tiny_title{
            margin-bottom:10px;
        }
    }
</style>