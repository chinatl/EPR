<template>
    <div class='main-box'>
	  	<div class="erp-header">
            <h3>Fornecedores</h3>
            <div>
                <el-button size='small' round type='danger'>Novo Fornecedor</el-button>
            </div>
        </div>
        <div class='input'>
            <div class='select'>
                <el-input size='small' type='text' placeholder='CNPJ / CPF / Nome Fantasia'style='width:75%' v-model='value'></el-input>
                <span class='el-icon-search'></span>
            </div>
            <div class='page'>
                <span class='page_text'>Paginação</span>
                <el-select size='small' style='width:100px' v-model='pagesize'>
                	<el-option lable='5' value='5'></el-option>
                	<el-option lable='10' value='10'></el-option>
                	<el-option lable='15' value='15'></el-option>
                	<el-option lable='20' value='20'></el-option>
                </el-select>
            </div>
        </div>
      <div class="table-bgc">
		<el-table
		:data="tableData"
		stripe
		tooltip-effect="dark"
		style="width: 100%;margin-top:1%;"
		>
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
					<div class="table-icon">
						<span><i class='el-icon-edit-outline' @click='$store.commit("TOGGLE_FORNECEDOR_MENU")'></i></span>
						<span><i class='el-icon-delete' @click='$store.commit("TOGGLE_DELETE")'></i></span>
					</div>
				</template>
</el-table-column>
</el-table>
</div>
<div class="product-pagination" style="text-align:right;margin-top:20px">
	<el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
	</el-pagination>
</div>
<my-fornecsdor></my-fornecsdor>
<my-del></my-del>
</div>

</template>
<script>
	import myFornecsdor from './components/fornecedor'
	import myDel from '@/views/Produtos/Components/delete'
	export default {
		components: {
			myFornecsdor,
			myDel
		},
		data() {
			return {
				pagesize: '5',
				value: '',
				total: 10,
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
					}
				]
			}
		},
		methods: {

		}
	}

</script>
<style rel='stylesheet/scss' lang="scss">
	.main-box {
		.input {
			padding-top: 40px;
			display: flex;
			justify-content: space-between;
			.select {
				width: 30%;
				height: 32px;
				.el-icon-search {
					display: inline-block;
					width: 32px;
					height: 33px;
					background: #0aa1ed;
					line-height: 32px;
					text-align: center;
					position: relative;
					left: -5px;
					font-size: 18rem;
					color: #fff;
				}
			}
			.page {
				.page_text {
					font-weight: bold;
					color: #808080;
					margin-right: 30px;
				}
			}
		}
	}

</style>
