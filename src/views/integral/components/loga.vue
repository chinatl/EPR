<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_loga"
    >
    <div slot='title' class="erp-dialog_title">
        {{$t('integral["Loja Virtual"]')}}
    </div>
    <div class='loga_box'>
        <div class='input_line'>
            <p>DNS</p>
            <el-input size='small'
            type='text'
            disabled
            value='88888888'
            style='margin-top:10px;'
            ></el-input>
        </div>
        <div class='input_line'>
            <p>{{$t('integral["Dominio"]')}}</p>
            <el-input size='small'
            type='text'
            disabled
            value='http://www.pmcell.com.br'
            style='margin-top:10px;'
            ></el-input>
        </div>
        <p
        style='text-align:right;margin-top:10px;'
        ><el-button type='primary' size='small' round>{{$t('integral["Salvar"]')}}</el-button></p>
    </div>
    
    </el-dialog>
</template>
<script>
    
</script>
<style rel='stylesheet/scss' lang="scss">
    .loga_box{
        padding:20px;
        padding-top:30px;
        .input_line{
            margin-top:20px;
        }
    }
</style>