<template>
    <el-dialog
    title="Loja Virtual"
    :visible.sync="$store.state.integral.show_loga"
    >
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
            <p>Dominio</p>
            <el-input size='small'
            type='text'
            disabled
            value='http://www.pmcell.com.br'
            style='margin-top:10px;'
            ></el-input>
        </div>
        <p
        style='text-align:right;margin-top:10px;'
        ><el-button type='primary' size='small' round>Salvar</el-button></p>
    </div>
    
    </el-dialog>
</template>
<script>
    
</script>
<style rel='stylesheet/scss' lang="scss">
    .loga_box{
        padding:20px;
        border-top:1px solid #808080;
        padding-top:30px;
        .input_line{
            margin-top:20px;
        }
    }
</style>