<template>
    <div class="advertisement">
        <div class="erp-header">
            <h3>{{$t(`product["广告管理"]`)}}</h3>
            <div>
                <el-button size='small' round type='primary'   icon="el-icon-edit">{{$t('product["Vínculo Automático"]')}}</el-button>
                <el-button size='small' round type='success'  icon="el-icon-star-on">{{$t('product["Clonar Loja"]')}}</el-button>
                <el-button size='small' round type='danger' >{{$t('product["Novo Anúncio"]')}}</el-button>
            </div>
        </div>
        <div class="advertisement-select">
			<div class="select-item">
				<div class="label"><label for="">{{$t('product["Busca"]')}}</label></div>
				<div><el-input size='small'></el-input></div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">{{$t('product["Status"]')}}</label></div>
				<div>
					<el-select v-model="value" placeholder="请选择" size='small' style='width:100%'>
						<el-option value='1' label='1'></el-option>
						<el-option value='2' label='2'></el-option>
						<el-option value='3' label='3'></el-option>
					</el-select>
				</div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">{{$t("product['Situação']")}}</label></div>
				<div>
					<el-select v-model="value" placeholder="请选择" size='small' style='width:100%'>
						<el-option value='1' label='1'></el-option>
						<el-option value='2' label='2'></el-option>
						<el-option value='3' label='3'></el-option>
					</el-select>
				</div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">{{$t("product['Marketplace']")}}</label></div>
				<div>
					<el-select v-model="value" placeholder="请选择" size='small'style='width:100%'>
						<el-option value='1' label='1'></el-option>
						<el-option value='2' label='2'></el-option>
						<el-option value='3' label='3'></el-option>
					</el-select>
				</div>
			</div>
			<div class="select-item">
				<div class="label"><label for="">{{$t("product['Precificação']")}}</label></div>
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
			<div class="carousel-items" v-for='item in [1,2,3]'>
				<div v-for='item in [1,2,3,4]' class="my-item">
					<my-item :name='["b2w","mg"][Math.floor(Math.random()*2)]'></my-item>
				</div>
			</div>
		</div>
		<pagination :total='total'></pagination>
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
				total: 15,
				value: '',
				formInline: {
					input: '',
					number: 20,
					numer1: ''
				},
				tableData: []
			}
		},
		methods: {
			handleSelectionChange(e) {

			},
			change(e) {

			},
			init() {
				this.$post('seachMsgAdvert', {
					userId: '123456'
				}).then(res => {
					this.tableData = res;
				})
			}
		},
		created() {
			this.init()
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
		.title {
			font-size: 20rem;
		}
	}

	.table_font {
		font-size: 16px
	}

	.advertisement {
		/*		padding: 20px; */
		min-width: 1000px;
		background-color: #fff
	}

	/*
		div.el-table--enable-row-transition .el-table__body td {
			padding: 0
		}
*/

	/*--------------product-select------------*/

	.advertisement-select {
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
		.carousel-items {
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;
			margin: 20px auto;
			.my-item {
			}
		}
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



	.product-pagination {
		text-align: right
	}



	.el-table--enable-row-transition .el-table__body td {
		padding: 20px 10px;
	}

</style>
