<template>
    <div class="main-box">
        <div class="erp-header">
			<h3>{{$t('rastreamento["Rastreamento"]')}}</h3>
       	</div>
        <div class="erp-bar">
        	<div class="erp-search-button">
        		<el-input  size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
        	</div>
        	<div>
        		<div class="introduce-icon">
        			<img :src="require('@/assets/img/Rastreamento_06.gif')"  alt="">
        			<div>
						<p class="border-line">{{$t('rastreamento["Etiqueta Gerada"]')}}</p>
						<p>(0)</p>
        			</div>
        		</div>
        		<div class="introduce-icon">
        			<img :src="require('@/assets/img/Rastreamento_03.gif')"  alt="">
        			<div>
						<p class="border-line">{{$t('rastreamento["Postados"]')}}</p>
						<p>(0)</p>
        			</div>
        		</div>
        		<div class="introduce-icon">
        			<img :src="require('@/assets/img/Rastreamento_18.gif')"  alt="">
        			<div>
						<p class="border-line">{{$t('rastreamento["Em Trânsito"]')}}</p>
						<p>(0)</p>
        			</div>
        		</div>
        		<div class="introduce-icon">
        			<img :src="require('@/assets/img/Rastreamento_15.gif')"  alt="">
        			<div>
						<p class="border-line">{{$t('rastreamento["Retirada"]')}}</p>
						<p>(0)</p>
        			</div>
        		</div>
        		<div class="introduce-icon">
        			<img :src="require('@/assets/img/Rastreamento_12.gif')"  alt="">
        			<div>
						<p class="border-line">{{$t('rastreamento["Entregue"]')}}</p>
						<p>(0)</p>
        			</div>
        		</div>
        		<div class="introduce-icon" @click="$store.commit('TOGGLE_TRAN_ERROR')">
        			<img :src="require('@/assets/img/Rastreamento_09.gif')"  alt="">
        			<div>
						<p class="border-line">{{$t('rastreamento["Erro"]')}}</p>
						<p>(0)</p>
        			</div>
        		</div>
        	</div>
        </div>
        <div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class='flex1'><el-checkbox v-model='checkAll' @change='all'></el-checkbox></li>
				<li>{{$t(`rastreamento["Loja"]`)}}</li>
				<li>{{$t(`rastreamento["Id do Pedido"]`)}}</li>
				<li class="flex3">{{$t(`rastreamento["Data Pedido"]`)}}</li>
				<li>{{$t(`rastreamento["Nome"]`)}}</li>
				<li>{{$t(`rastreamento["Codigo de Rastreio"]`)}}</li>
				<li class='flex3'>{{$t(`rastreamento["Estados"]`)}}</li>
				<li class='flex3'>{{$t(`rastreamento["Operação"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in tableData' :key="index" @click='row_click($event,item,index)'>
					<li class='flex1'><el-checkbox v-model='item.checked' @change='choose($event,index)'  ></el-checkbox></li>
					<li>{{item.name}}</li>
					<li>{{item.id}}</li>
					<li  class="flex3">{{item.date}}</li>
					<li>{{item.Nome}}</li>
					<li>{{item.Estoque}}</li>
					<li class='flex3'>{{item.Estados}}</li>
					<li class='flex3'>
						<i class="el-icon-warning" ></i>
					</li>
				</ul>
			</transition-group>
		</div>
		<div class="erp-page">
			<el-pagination background
		 	layout="total, sizes, prev, pager, next, jumper"
		 	:page-size='20'
			:total="total"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange">
			</el-pagination>
		</div>
		<my-detail></my-detail>
		<my-error></my-error>
		<dropdown></dropdown>
</div>
</template>
<script>
	import myDetail from './components/detail'
	import Dropdown from './components/dropdown'
	import myError from './components/error'
	export default {
		components: {
			myDetail,
			Dropdown,
			myError
		},
		data() {
			return {
				value: '',
				loading: false,
				pageSize: '5',
				total: 10,
				checkAll: false,
				isShow: false,
				tableData: [{
					name: 'Mercado Livre',
					id: '132456789123',
					date: '27/11/2017',
					Nome: 'Ricardo de Paula',
					Estoque: 'PO155119095BR',
					Estados: 'Expedido',
					sss: '',
				}, {
					name: 'Americanas.com',
					id: '132456789123',
					date: '27/11/2017',
					Nome: 'Ricardo de Paula',
					Estoque: 'PO155119095BR',
					Estados: 'Postado',
					sss: '',
				}, {
					name: 'Mercado Livre',
					id: '132456789123',
					date: '27/11/2017',
					Nome: 'Ricardo de Paula',
					Estoque: 'PO155119095BR',
					Estados: 'Postado',
					sss: '',
				}, ]
			}
		},
		methods: {
			handleSizeChange(){
				
			},
			handleCurrentChange(){
				
			},
			show() {
				this.isShow = true;
			},
			handleSelectionChange() {

			},
			all(e) {
				this.tableData.forEach(res => res.checked = e)
			},
			choose(e, i) {
				if (e) {
					var flag = false;
					this.tableData.forEach(res => {
						if (!res.checked) {
							flag = true;
						}
					});
					this.checkAll = !flag;
				} else {
					var flag = true;
					this.tableData.forEach(res => {
						if (!res.checked) {
							flag = false;
						}
					});
					this.checkAll = flag;
				}
			},
			row_click(event, item, index) {
				if (event.target.className === 'el-icon-warning') {
					this.$store.commit('TOGGLE_RASTREAMENTO_ERROR')
				} else {
					this.$store.commit('TOGGLE_RASTREAMENTO_DROPDOWN')
				}
			},
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.introduce-icon {
		display: flex;
		align-items: center;
		border-right: 1px solid #ccc;
		>img {
			margin-right: 10px;
		}
		>div {
			>p {
				white-space: nowrap;
				text-align: center;
				line-height: 1.5
			}
			>.border-line {
				border-bottom: 1px solid #000;
			}
		}

	}

	.el-icon-warning {
		font-size: 18px;
		&:hover {
			color: #DC044D
		}
	}

</style>
