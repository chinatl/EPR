<template>
    <div class="advertisement">
        <div class="erp-header">
            <h3>{{$t(`product["广告管理"]`)}}</h3>
            <div>
                <el-button size='small' round type='primary'  
                @click='$store.commit("TOGGLE_AUTO_LINK");'
                  >{{$t('product["Vínculo Automático"]')}}</el-button>
                <el-button size='small'
				@click='$store.commit("TOGGLE_FAST_COPY")'
                  round type='success'  icon="el-icon-star-on">{{$t('button["Clonar Loja"]')}}</el-button>
                <el-button size='small' round type='danger'
			 	@click='$store.commit("TOGGLE_EDIT")'>{{$t('product["Novo Anúncio"]')}}</el-button>
            </div>
        </div>
        <div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Título/ID do Anúncio' v-model='form.value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
			<div>
				<span>{{$t(`input["Status"]`)}}</span>
				<el-select  size='small' v-model='form.status' placeholder='Selecionar' style='width:100px'>
					<el-option value='0' label='Todos'></el-option>
					<el-option value='1' label='Ativo'></el-option>
					<el-option value='2' label='Pausado'></el-option>
				</el-select>
			</div>
			<div>
				<span>{{$t(`input["Situação"]`)}}</span>
				<el-select  size='small' v-model='form.qingkuang' style='width:170px'>
					<el-option value='0' label='Todos'></el-option>
					<el-option value='1' label='Vínculados(25)'></el-option>
					<el-option value='2' label='Não Vínculados(25)'></el-option>
				</el-select>
			</div>
			<div>
				<span>{{$t(`input["Marketplace"]`)}}</span>
				<el-select  size='small'  v-model='form.market' >
					<el-option value='0' label='Todos'></el-option>
					<el-option value='1' label='Mercado Livre | MegaHaribaba'></el-option>
					<el-option value='2' label='B2W | Pmcell'></el-option>
				</el-select>
			</div>
			<div >
				<span>{{$t(`input["Precificação"]`)}}</span>
				<el-select size='small' v-model='form.price'  style='width:100px'>
					<el-option value='0' label='Todos'></el-option>
					<el-option value='1' label='Ativo'></el-option>
					<el-option value='2' label='Desativo'></el-option>
				</el-select>
			</div>
			
		</div>
        <div class="product-table">
			<div class="carousel-items" v-for='item in [1,2,3]' v-once>
				<div v-for='item in [1,2,3,4]' class="my-item">
					<my-item :name='["b2w","mg"][Math.floor(Math.random()*2)]'></my-item>
				</div>
			</div>
		</div>
		<pagination :total='total'></pagination>
		<my-market></my-market>
		<my-ml></my-ml>
		<my-unbind ></my-unbind><!--解绑提示-->
		<my-del ></my-del> <!--删除提示-->
		
		<my-edit></my-edit><!--编辑-->
		<auto-link></auto-link><!--自动链接-->
		<fast-copy></fast-copy><!--快速复制-->
</div>
</template>
<script>
	import myMarket from './Product/market'
	import myMl from './Product/ml'
	import myEdit from './Product/edit.vue'
	import myEntrada from './Product/entrada'
	import myItem from './Components/item.vue'
	import myUnbind from './Components/unbind.vue'
	import myDel from './Components/delete.vue'
	import autoLink from './Components/autolink.vue'
	import fastCopy from './Product/fastcopy.vue'
	export default {
		components: {
			myMarket,
			myMl,
			myEntrada,
			myItem,
			myUnbind,
			myDel,
			myEdit,
			fastCopy,
			autoLink /*自动连接*/
		},
		data() {
			return {
				v_switch: false,
				total: 15,
				value: '',
				form:{
					value:'',	
					status:'0',	
					market:'0',	
					price:'0',	
					qingkuang:'0',	
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
//			this.init()
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
</style>
