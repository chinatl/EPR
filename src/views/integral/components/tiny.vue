<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_tiny"
    >
    <div slot='title' class="erp-dialog_title">
        {{$t('integral["Configurações Tiny"]')}}
    </div>
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
        .tiny_title{
            margin-bottom:10px;
        }
    }
</style>