<template>
    <div class='main_box'>
        <p class='head_title'>Fornecedores
            <el-button size='small' round style='background:#DC044D;color:#fff;float:right'>Novo Fornecedor</el-button>
        </p>
        <div class='input'>
            <div class='select'>
                <el-input size='small' type='text' placeholder='CNPJ / CPF / Nome Fantasia'style='width:75%'></el-input>
                <span class='el-icon-search'></span>
            </div>
            <div class='page'>
                <span class='page_text'>Paginação</span>
                <el-select size='small' style='width:100px'>
                    <el-option value='20'>20</el-option>
                    <el-option value=''>50</el-option>
                    <el-option value=''>100</el-option>
                    <el-option value=''>500</el-option>
                </el-select>
            </div>
        </div>
        <el-table
        ref="multipleTable"
		:data="tableData"
        stripe
		tooltip-effect="dark"
		style="width: 100%;margin-top:1%;"
		@selection-change="handleSelectionChange">
            <el-table-column label='Nome Fantasia'prop="address" align='center'>
            </el-table-column>
            <el-table-column label='CNPJ/CPF'prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Contato'prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Telefone'prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Operação' align='center'>
                <template slot-scope="scope">
                    <span class='el-icon-edit-outline'></span>
                    <span class='el-icon-delete'></span>
                </template>
            </el-table-column>
        </el-table>
        <div class="product-pagination" style="text-align:right;margin-top:20px">
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
        <my-fornecsdor></my-fornecsdor>
    </div>
    
</template>
<script>
import myFornecsdor from './components/fornecedor'
     export default{
         components:{
           myFornecsdor,
         },
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
<style rel='stylesheet/scss'lang="scss">
    .main_box{
        padding:20px;
        .head_title{
             color:#808080;
           font-size:20rem;
           padding-bottom:20px;
           border-bottom:1px solid #e0e0e0;
        }
        .input{
            padding-top:40px;
            display:flex;
            justify-content:space-between;
            .select{
                width:30%;
                height:32px;
                .el-icon-search{
                    display:inline-block;
                    width:32px;
                    height:33px;
                    background:#0aa1ed;
                    line-height:32px;
                    text-align:center;
                    position:relative;
                    left:-5px;
                    font-size:18rem;
                    color:#fff;
                }
            }
            .page{
                .page_text{
                    font-weight:bold;
                    color:#808080;
                    margin-right:30px;
                }
            } 
        }
        .has-gutter {
			tr,
			th {
				background-color: #e8e8e8;
				th>.cell {
					font-size: 18rem;
				}
			}
		}
        .el-icon-edit-outline,
        .el-icon-delete{
            display:inline-block;
            width:20px;
            height:20px;
            line-height:20px;
            font-size:18rem;
            background:#e0e0e0;
            margin-right:10px;
            cursor: pointer;
        }
    }
</style>