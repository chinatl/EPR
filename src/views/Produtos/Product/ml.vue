<template>
<el-dialog
  :visible.sync="$store.state.product.show_ml"
>
	<div slot='title' class="market-title">{{$t('product["Precificação"]')}} Mercado Livre <span class="span"><el-switch v-model="delivery"></el-switch></span></div>
	<div class="market-content">
		<div class="sku">
			<span class="span">MLB13245678</span>
			<span class="span">{{$t('product["Escova Alisadora Magic Hair"]')}}</span>
			<span class="span">{{$t('product["Custo"]')}} </span>
			<span class="span">R$ 25,00</span>
		</div>
		<div class="search">
			<div class="fleft">
				<div class="item">
					<div class="item-span">{{$t('product["Preço Mínimo"]')}}</div>
					<el-input v-model="input"  size='small'></el-input>
				</div>
				<div class="item">
					<div class="item-span">{{$t('product["Reduzir em"]')}}</div>
					<el-input v-model="input1"  size='small'></el-input>
				</div>
			</div>
			<div class="fright">
				<input type="text" class="input" placeholder="ID/URL do Anúncio"><button class="button">{{$t('product["Adicionar Concorrente"]')}}</button>
			</div>
		</div>
		<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column align='center' :label='$t(`product["Vendedor"]`)'>
				<template slot-scope="scope">
								<span>{{scope.row.name}}</span>
							</template>
			</el-table-column>
			<el-table-column align='center' width='140' :label='$t(`product["Avaliação"]`)'>
				<template slot-scope="scope">
								<el-rate v-model="scope.row.evaluate"  disabled  :colors="['#3470C6', '#3470C6', '#3470C6']">></el-rate>
							</template>
			</el-table-column>
			<el-table-column align='center' :label='$t(`product["Preço"]`)'>
				<template slot-scope="scope">
								<span>{{scope.row.price}}</span>
							</template>
			</el-table-column>
			<el-table-column align='center' :label='$t(`product["Operação"]`)'>
				<template slot-scope="scope">
								<i class="el-icon-delete"></i>
							</template>
			</el-table-column>
		</el-table>
	</div>
</el-dialog>
</template>

<script>
	export default {
		props: ['show'],
		data() {
			return {
				dialog: this.show,
				delivery: false,
				input: 'R$ 28,00',
				input1: 'R$ 28,00',
				tableData: [{
					img: '',
					name: 'Pmcell',
					evaluate: 5,
					price: '46,69',
					price1: '25,00',
					price2: '11,69'
				}, {
					img: '',
					name: 'Pmcell',
					evaluate: 4,
					price: '46,69',
					price1: '25,00',
					price2: '11,69'
				}, {
					img: '',
					name: 'Pmcell',
					evaluate: 3,
					price: '46,69',
					price1: '25,00',
					price2: '11,69'
				}, {
					img: '',
					name: 'Pmcell',
					evaluate: 3,
					price: '46,69',
					price1: '25,00',
					price2: '11,69'
				}, {
					img: '',
					name: 'Pmcell',
					evaluate: 3,
					price: '46,69',
					price1: '25,00',
					price2: '11,69'
				}, {
					img: '',
					name: 'Pmcell',
					evaluate: 3,
					price: '46,69',
					price1: '25,00',
					price2: '11,69'
				}, {
					img: '',
					name: 'Pmcell',
					evaluate: 3,
					price: '46,69',
					price1: '25,00',
					price2: '11,69'
				}]
			}
		}
	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.market-title {
		font-size: 20px;
		font-weight: bold;
		padding: 15px 15px;
		margin: 0 10px;
		border-bottom: 2px solid #ccc;
		.span {
			padding-left: 20px;
		}
	}

	.market-content {
		padding: 0 20px;
		.sku {
			.span {
				margin-right: 20px;
				font-weight: bold;
				font-size: 18px;
			}
		}
		.search {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 20px 0;
			.fleft {
				display: flex;
				align-items: center;
				.item {
					display: flex;
					align-items: center;
					white-space: nowrap;
					margin-right: 30px;
					.item-span {
						margin-right: 20px;
						font-size: 16px;
					}
				}
			}
			.fright {
				display: flex;
				align-items: center;
				.input,
				.button {
					height: 32px;
					line-height: 32px;
					border: none;
					outline: none;
				}
				.input {
					border-radius: 20px 0 0 20px;
					border: 1px solid #ccc;
					padding-left: 10px;
					font-size: 12px;
				}
				.button {
					border-radius: 0 20px 20px 0;
					font-size: 12px;
					padding: 0 20px;
					background-color: #128AC6;
					color: #fff;
					cursor: pointer
				}
				.button:hover {
					background-color: rgba(18, 138, 198, .6);
				}

			}
		}
	}

</style>
