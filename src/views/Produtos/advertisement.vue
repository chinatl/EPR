<template>
    <div class="advertisement">
   		<div class="erp-event-button">
       		<button class="erp-btn"
		 	@click='$store.commit("TOGGLE_AUTO_LINK")'>
		 	{{$t('product["Vínculo Automático"]')}}</button>
       		<button class="erp-btn" @click='$store.commit("TOGGLE_FAST_COPY")'><i class="el-icon-star-on"></i>{{$t('button["Clonar Loja"]')}}</button>
       		<button class="erp-btn" @click='$store.commit("TOGGLE_EDIT")'>{{$t('product["Novo Anúncio"]')}}</button>
       	</div>
		<div class='erp-select-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Título/ID do Anúncio' v-model='title_value'></el-input>
				<el-button size='mini' type='primary' @click='search_by_id'><i class="el-icon-search"></i></el-button>
			</div>
			<div>
				<span>{{$t(`input["Status"]`)}}</span>
				<el-select  size='small' v-model='status' placeholder='Selecionar' style='width:100px' @change='change_status'>
					<el-option value='' label='Todos'></el-option>
					<el-option value='closed' label='closed'></el-option>
					<el-option value='paused' label='paused'></el-option>
					<el-option value='active' label='active'></el-option>
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
				<span>{{$t(`input["Precificação"]`)}}</span>
				<el-select size='small' v-model='form.price'  style='width:100px'>
					<el-option value='0' label='Todos'></el-option>
					<el-option value='1' label='Ativo'></el-option>
					<el-option value='2' label='Desativo'></el-option>
				</el-select>
			</div>
		</div>
        <div class="product-table">
        	<div class="left-sider">
        		<svg-icon icon-class='mg'></svg-icon>
        		<span>Mercado Livre</span>
        	</div>
			<div class="carousel-items" v-for='(item,index) in live_arr'>
				<my-item name='mg' :index='index' :data="item"></my-item>
			</div>
		</div>
		<div class="adver-page">
			<el-pagination background
			layout="total, sizes, prev, pager, next, jumper"
			:total="total"
			:page-sizes="[5, 10, 15, 20]"
			@size-change="handleSizeChange"
			:page-size="pageSize"
			:current-page="pageNo"
			@current-change="handleCurrentChange">
			</el-pagination>
		</div>
        <div class="adver-block"></div>
        <div class="product-table">
        	<div class="left-sider walmart">
        		<svg-icon icon-class='walmart'></svg-icon>
        		<span>Walmart</span>
        	</div>
			<div class="carousel-items" v-for='(item,index) in walmart_arr'>
				<my-item name='walmart' :index='index' :data="item"></my-item>
			</div>
		</div>
		<div class="adver-page" v-if='walmart_arr.length'>
			<el-pagination background
			layout="total, sizes, prev, pager, next, jumper"
			:total="total"
			:page-sizes="[5, 10, 15, 20]"
			@size-change="handleSizeChange"
			:page-size="pageSize"
			:current-page="pageNo"
			@current-change="handleCurrentChange">
			</el-pagination>
		</div>
		<div class="adver-block"></div>
        <div class="product-table">
        	<div class="left-sider b2w">
<!--        		<svg-icon icon-class='walmart'></svg-icon>-->
				<img :src="require('@/assets/img/b2w.png')" alt="">
        		<span>Americanas</span>
        	</div>
			<div class="carousel-items" v-for='(item,index) in b2w_arr'>
				<my-item name='b2w' :index='index' :data="item"></my-item>
			</div>
		</div>
<!--		<pagination :total='total'></pagination>-->
		<my-market></my-market>
		<my-ml></my-ml>
		<my-unbind ></my-unbind><!--解绑提示-->
		<my-del :message='["Ao executar a ação de exclusão do produto, todos os anúncios","ligados a ele serão desvínculados ?"]'></my-del> <!--删除提示-->
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
	import autoLink from './Components/autolink.vue'
	import fastCopy from './Product/fastcopy.vue'
	import myDel from '@/components/del'
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
				pageSize: 5,
				pageNo: 1,
				total: 12,
				value: '',
				form: {
					value: '',
					status: '0',
					market: '0',
					price: '0',
					qingkuang: '0',
				},
				tableData: [],
				status: '',
				title_value: '',
				id_reg: /^(MLB)?\d*$/,
				live_arr: [], //
				b2w_arr: [],
				walmart_arr: []
			}
		},
		methods: {
			search_by_id() {
				if (this.id_reg.test(this.title_value)) {
					this.init('', this.title_value)
				} else {
					this.init(this.title_value, '')
				}
			},
			handleSizeChange(e) {

			},
			handleCurrentChange(e) {

			},
			handleSelectionChange(e) {

			},
			change(e) {

			},
			/*初始化 'Mercado Livre' 列表*/
			init_live(title = '', advertId = '') {
				this.$post('mercadoLive/seachMsgAdvertbycondition', {
					userId: this.$store.getters.userId,
					terrace: 'Mercado Livre',
					status: this.status,
					title: title,
					advertId: advertId
				}).then(res => {
					this.live_arr = res.data.length < 12 ? res.data : res.data.slice(0, 12);
				})
			},
			/*初始化 B2W 列表*/
			init_b2w(title = '', advertId = '') {
				this.$post('mercadoLive/seachMsgAdvertbycondition', {
					userId: this.$store.getters.userId,
					terrace: 'B2W',
					status: this.status,
					title: title,
					advertId: advertId
				}).then(res => {
					this.b2w_arr = res.data.length < 12 ? res.data : res.data.slice(0, 12);
				})
			},
			/*初始化 Walmart 列表*/
			init_walmart(title = '', advertId = '') {
				this.$post('mercadoLive/seachMsgAdvertbycondition', {
					userId: this.$store.getters.userId,
					terrace: 'Walmart',
					status: this.status,
					title: title,
					advertId: advertId
				}).then(res => {
					this.walmart_arr = res.data.length < 12 ? res.data : res.data.slice(0, 12);
				})
			},
			/*筛选状态*/
			change_status() {

			}

		},
		created() {
			this.init_b2w();
			this.init_walmart();
			this.init_live();
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.adver-page {
		text-align: right;
		margin-bottom: 10px;
	}

	.adver-block {
		height: 24px;
		margin-left: -20px;
		margin-right: -20px;
		background-color: #eaedf3;
	}

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
		/*		min-width: 1000px;*/
		/*		background-color: #f5f5f6*/
	}

	/*
		div.el-table--enable-row-transition .el-table__body td {
			padding: 0
		}
*/

	/*--------------product-select------------*/

	.product-table {
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		/*		margin: 0px auto;*/
		margin-top: 10px;
		position: relative;
		.left-sider {
			position: absolute;
			top: 300px;
			left: -50px;
			width: 300px;
			transform: rotate(-90deg);
			transform-origin: 0 0;
			display: flex;
			align-items: center;
			background-color: #FFBC00;
			padding: 0 20px;
			justify-content: center;
			height: 40px;
			&.walmart {
				background-color: #1E457C;
				.svg-icon {
					font-size: 30px;
				}

			}
			&.b2w {
				background-color: #3DE2B3;
				.svg-icon {
					font-size: 30px;
				}

			}
			.svg-icon {
				font-size: 40px;
			}
			>span {
				font-size: 24px;
				color: #fff;
				margin: 0 10px;
			}
		}
		.carousel-items {
			margin-right: 20px;
			margin-bottom: 20px;
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
