<template>
<el-dialog
	:visible.sync="$store.state.product.show_market"
  @close='closeDialog'
>
	<div slot='title' class="market-title">Precificação <span class="span"><el-switch v-model="delivery"></el-switch></span></div>
	<div class="market-content">
		<div class="sku">
			<span class="span">SKU 103100</span>
			<span class="span">Escova Alisadora Magic Hair</span>
			<span class="span"><el-button type='primary' size='mini' round>1</el-button></span>
		</div>
		<div class="search">
			<div class="fleft">
				<div class="item">
					<span class="item-span">Custo</span>
					<span class="item-span">R$ 25,00</span>
				</div>
				<div class="item">
					<div class="item-span" style="margin-right:50px">Preço Mínimo 
						<el-tooltip class="item" effect="dark" content="Valor mínimo atingido na precificação
buybox automático."placement="bottom">
						 	<i class="el-icon-question"></i>
						</el-tooltip>
					</div>
					<el-input v-model="input"  size='small'></el-input>
				</div>
			</div>
			<div class="fright">
				<span class="item-span">CEP</span>
				<el-input size='small'></el-input>
				<el-button icon="el-icon-search"  size='small' type='primary'></el-button>
			</div>
		</div>
		<el-table
			:data="tableData"
			style="width: 100%">
			<el-table-column
			align='center'
			label="图片">
				<template slot-scope="scope">
					<img :src="require('@/assets/img/pmc.png')" style="height:70px">
				</template>
</el-table-column>
<el-table-column align='center' label="Nome">
	<template slot-scope="scope">
					<span>{{scope.row.name}}</span>
				</template>
</el-table-column>
<el-table-column align='center' width='140' label="Avaliação">
	<template slot-scope="scope">
					<el-rate v-model="scope.row.evaluate"  disabled></el-rate>
				</template>
</el-table-column>
<el-table-column align='center' label="Preço">
	<template slot-scope="scope">
					<span>{{scope.row.price}}</span>
				</template>
</el-table-column>
<el-table-column align='center' label="Frete">
	<template slot-scope="scope">
					<span>{{scope.row.price1}}</span>
				</template>
</el-table-column>
<el-table-column align='center' label="Preço + Frete">
	<template slot-scope="scope">
					<span>{{scope.row.price2}}</span>
				</template>
</el-table-column>
</el-table>
</div>
</el-dialog>
</template>

<script>
	export default {
		data() {
			return {
				delivery: false,
				input: 'R$ 28,00',
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
				}]
			}
		},
		methods: {
			closeDialog() {
				this.dialog = false;
			}
		},

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
				>.item {
					display: flex;
					align-items: center;
					white-space: nowrap;
					margin-right: 30px;
					.item-span {
						margin-right: 20px;
						font-size: 16px;
						position: relative;
						.el-icon-question {
							position: absolute;
							right: -60px;
							top: 4px;
							color: #65B1AF;
						}
					}
				}
			}
			.fright {
				display: flex;
				align-items: center;
				.item-span {
					margin-right: 10px;
					font-size: 16px;
					font-weight: bold
				}
				.el-button--primary {
					background-color: rgba(101, 177, 175, 1);
					border-color: rgba(101, 177, 175, 1);
					&:hover {
						background-color: rgba(101, 177, 175, .8);
						border-color: rgba(101, 177, 175, .9);
					}
				}
			}
		}
	}

</style>
