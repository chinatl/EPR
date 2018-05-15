<template>
    <div>
		<div class="erp-header">
       		<h3>Empacotamento <span class="else-con" style="border:none"> <img
            style='width:20px;height:20px;'
            :src="require('@/assets/img/mark.jpg')" alt=""></span></h3>
       		<div>
			 	<el-button size='small' round type='success'>Relatório de Saída</el-button>
                <el-button size='small' round type='primary'>Imprimir Etiquetas</el-button>
       		</div>
       	</div>
        <div class='input'>
            <div class='select'>
                <el-input size='small' type='text' placeholder='CNPJ / CPF / Nome Fantasia'style='width:75%'></el-input>
                <span class='el-icon-search'></span>
            </div>
            <div class='h_box'>
                <div class='page'>
                    <span class='page_text'>Data</span>
                    <el-select size='small' style='width:100px'>
                        <el-option value='20'>20</el-option>
                        <el-option value=''>50</el-option>
                        <el-option value=''>100</el-option>
                        <el-option value=''>500</el-option>
                    </el-select>
                </div>
                <div style='width:300px'  class="col">
                    <span class='tle'>Período </span>
                    <el-date-picker
                    class="date"
                    size='small'
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator=" "
                    start-placeholder="1/12/2017"
                    end-placeholder="30/12/2017"
                    :picker-options="pickerOptions2">
                    </el-date-picker>
                </div>
            </div>   
        </div>
        <div class="table-bgc">
			<el-table
				:data="tableData"
				stripe
				tooltip-effect="dark"
				style="width:100%;margin-top:2%;"
				stripe
				@selection-change="handleSelectionChange">
					<el-table-column type="selection" align='center' width="55">
					</el-table-column>
					<el-table-column label='Loja' prop="name" align='center'>
					</el-table-column>
					<el-table-column label='Cód. do Pedido' prop="phone" align='center'>
					</el-table-column>
					<el-table-column label='Cliente (Apelido)' prop="Mar" align='center'>
					</el-table-column>
					<el-table-column label='Rastreio' prop="ss" align='center'>
					</el-table-column>
					<el-table-column label='Data de Pag.' prop="Estoque" align='center'>
					</el-table-column>
					<el-table-column label='Status' prop="address" align='center'>
					</el-table-column>
					<el-table-column label='Operação' prop="address" align='center'>
						<template slot-scope="scope">
							<div class="table-icon">
								<span><svg-icon icon-class='mask' style='font-size:26px;'></svg-icon></span>
								<span><svg-icon icon-class='box' style='font-size:26px;'></svg-icon></span>
							</div>
						</template>
					</el-table-column>
		</el-table>
        </div>
<div class="product-pagination" style="text-align:right;margin-top:20px">
	<el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
	</el-pagination>
</div>
<my-order></my-order>
<inform></inform>
</div>
</template>
<script>
	import myOrder from './components/order'
	import Inform from './components/inform'
	export default {
		components: {
			myOrder,
			Inform
		},
		data() {
			return {
				value: 'value',
				total: 10,
				tableData: [{
						name: 'Americanas.com',
						address: 'Pronto',
						Mar: 'Ricardo de Paula (RPSilva159)',
						Estoque: '06/02/2018',
						phone: '15235368645',
						ss: '12345678912BR'
					},
					{
						name: 'Americanas.com',
						address: 'Pronto',
						Mar: 'Ricardo de Paula (RPSilva159)',
						Estoque: '06/02/2018',
						phone: '152292665425',
						ss: '12345678912BR'
					},
					{
						name: 'Submarino',
						address: 'Cancelado',
						Mar: 'Ricardo de Paula (RPSilva159)',
						Estoque: '06/02/2018',
						phone: '15252358645',
						ss: '12345678912BR'
					}
				]
			}
		},
		methods: {

		}
	}

</script>
<style rel='stylesheet/scss' lang="scss">
	.header_box {
		border-bottom: 1px solid #e0e0e0;
		height: 40px;
		.title {
			color: #000;
			font-size: 20rem;
			padding-bottom: 20px;
		}
		.btn_box {
			float: right;
			position: relative;
			.btn {
				color: #fff;
				background: green;
			}
			.bj {
				background: #E72460;
			}
		}
	}

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
				cursor: pointer;
			}
		}
		.h_box {
			width: 50%;
			display: flex;
			justify-content: space-between;
			.page {
				.page_text {
					font-weight: bold;
					color: #808080;
					margin-right: 30px;
				}
			}
			.col {
				display: flex;
				.tle {
					line-height: 32px;
					margin-right: 5px;
					font-size: 13rem;
					font-weight: bold;
					color: #808080;
				}
			}
		}


	}

</style>
