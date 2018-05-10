<template>
    <div class="main_box">
        <div class='title'>Rastreamento</div>
        <div class='th_box'>
             <div class='select-input col'>
                <el-input  size='small' placeholder='ID do pedido / Nome / Rastreio'class="input" v-model='value'></el-input>
                <span class='el-icon-search'></span> 
            </div>
            <div class="col">
                <span class='tle'>Paginação </span>
                <el-select  size='small' v-model='value' placeholder=' ' style='width:80px'>
                    <el-option value='1'>5</el-option>
                    <el-option value='2'>10</el-option>
                    <el-option value='3'>15</el-option>
                </el-select>
           </div>
        </div>
        
    </div>
</template>
<script>
     export default{
        data(){
            return{
                value:'value',
                total:10,
                tableData: [{
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: ''
				},
                {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: ''
				},
                {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: ''
				}]
            }
        },
        methods:{

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .main_box{
        padding:20px;
        .title{
            color:#808080;
           font-size:20rem;
           padding-bottom:1%;
           border-bottom:1px solid #e0e0e0;
        }
        .th_box{
           margin-top:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .select-input {
                 width:22%;
                display:flex;
            }
            .el-icon-search{
                display:inline-block;
                width:32px;
                height:32px;
                font-size:20rem;
                color:#fff;
                background:#0aa1ed;
                text-align:center;
                line-height:32px;
                position:relative;
                left:-6px;
                margin:0;
                margin-right:4%;
            }
            .col{
                display:flex;
               .tle{
                   line-height:32px;
                   margin-right:5px;
                   font-size:13rem;
                   font-weight:bold;
                   color:#808080;
               }
           } 
        }
    }
</style>