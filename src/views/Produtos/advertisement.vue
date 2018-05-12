<template>
    <div class="layout advertisement">
        <div class="product-header">
            <div class="title">{{$t(`product["广告管理"]`)}}</div>
            <div>
                <el-button size='small' round type='primary'   icon="el-icon-edit">Vínculo Automático</el-button>
                <el-button size='small' round type='success'  icon="el-icon-star-on">Clonar Loja</el-button>
                <el-button size='small' round type='danger' >Novo Anúncio</el-button>
            </div>
        </div>
        <div class="advertisement-select">
			<div class="select-item">
				<div class="label"><label for="">Busca</label></div>
				<div><el-input size='small'></el-input></div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">Status</label></div>
				<div>
					<el-select v-model="value" placeholder="请选择" size='small' style='width:100%'>
						<el-option value='1' label='1'></el-option>
						<el-option value='2' label='2'></el-option>
						<el-option value='3' label='3'></el-option>
					</el-select>
				</div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">Situação</label></div>
				<div>
					<el-select v-model="value" placeholder="请选择" size='small' style='width:100%'>
						<el-option value='1' label='1'></el-option>
						<el-option value='2' label='2'></el-option>
						<el-option value='3' label='3'></el-option>
					</el-select>
				</div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">Marketplace</label></div>
				<div>
					<el-select v-model="value" placeholder="请选择" size='small'style='width:100%'>
						<el-option value='1' label='1'></el-option>
						<el-option value='2' label='2'></el-option>
						<el-option value='3' label='3'></el-option>
					</el-select>
				</div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">Precificação</label></div>
				<div>
					<el-select v-model="value" placeholder="请选择" size='small'style='width:100%'>
						<el-option value='1' label='1'></el-option>
						<el-option value='2' label='2'></el-option>
						<el-option value='3' label='3'></el-option>
					</el-select>
				</div>
			</div>
        </div>
        <div class="product-table">
			<div class="carousel-item">
				<div  v-for='item in [1,2,3,4,5,6,7,8,9,10]' class="my-item">
					<my-item :name='["b2w","mg"][Math.floor(Math.random()*2)]'></my-item>
				</div>
			</div>
			<div class="product-pagination">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :page-size='20'
				  :total="total">
				</el-pagination>
			</div>
		</div>
<my-market></my-market>
<my-ml></my-ml>
<my-unbind ></my-unbind>
<my-del ></my-del>
<my-entrada></my-entrada>
</div>
</template>
<script>
	import myMarket from './Product/market'
	import myMl from './Product/ml'
	import myEntrada from './Product/entrada'
	import myItem from './Components/item.vue'
	import myUnbind from './Components/unbind.vue'
	import myDel from './Components/delete.vue'
	export default {
		components: {
			myMarket,
			myMl,
			myEntrada,
			myItem,
			myUnbind,
			myDel
		},
		data() {
			return {
				v_switch: false,
				total:15,
				value:'',
				formInline: {
					input: '',
					number: 20,
					numer1: ''
				},
				tableData: [{
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, ]
			}
		},
		methods: {
			handleSelectionChange(e) {
				console.log(e)
			},
			change(e) {}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.product-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
		.title{
           font-size:20rem;
		}
	}
	.table_font {
		font-size: 16px
	}
	.advertisement {
		padding: 20px; 
	}
/*
		div.el-table--enable-row-transition .el-table__body td {
			padding: 0
		}
*/

	/*--------------product-select------------*/

	.advertisement-select{
		margin: 10px 0;
		display: flex;
		justify-content: space-between;
		.select-item {
			width: 15%;
			.label {
				margin: 12px 0;
				font-size: 20px;
				font-weight: normal;
				color: #aaa
			}
		}
	}
	.product-table {
		padding: 20px 0;
	}
	.el-form--inline {
		display: flex;
		justify-content: space-between;
	}

	.product .el-form-item .sel-by-id {
		position: absolute;
		right: -44px;
		top: 0
	}

	.carousel-item {
		border-radius: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.product-pagination {
		text-align: right
	}

	.my-item {
		width: 17%;
		margin-bottom: 20px;
	}

	.el-table--enable-row-transition .el-table__body td {
		padding: 20px 10px;
	}

</style>
