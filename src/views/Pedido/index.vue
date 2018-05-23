<template>
    <div>
       	<div class="erp-header">
       		<h3>{{$t('pedido["Pedidos"]')}} <span class="else-con ">*{{$t('pedido["Mantemos as mensagens arquivados por 3 meses"]')}}.</span></h3>
       		<div>
		  		<el-button type='success' size='small' round @click='$store.commit("TOGGLE_ORDER_DETAIL")'>{{$t('pedido["Exportar Tiny"]')}}</el-button>
            	<el-button type='danger' size='small' round 
            	@click='$store.commit("TOGGLE_ORDER_NEWORDER")'
            	>{{$t('pedido["Novo Pedido"]')}}</el-button>
       		</div>
       	</div>
		
		<div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value' style='width:120px'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
			<div>
				 <span>{{$t('pedido["Paginação"]')}}</span>
                <el-select  size='small' v-model='pageSize' style='width:68px'>
                    <el-option value='5' label='5'></el-option>
                    <el-option value='10' label='10'></el-option>
                    <el-option value='15' label='15'></el-option>
                </el-select>
			</div>
			<div>
				<span >Status</span>
                <el-select size='small' v-model='value' placeholder='Todos'  style='width:170px' >
					<el-option value='1' :label='$t(`pedido["Todos"]`)'></el-option>
					<el-option value='2' :label='$t(`pedido["Incluído"]`) + " (20)"'></el-option>
					<el-option value='3' :label='$t(`pedido["Aprovado"]`) + " (30)"'></el-option>
					<el-option value='4' :label='$t(`pedido["Expedido"]`) + " (18)"'></el-option>
					<el-option value='5' :label='$t(`pedido["Postado"]`) + " (18)"'></el-option>
					<el-option value='6' :label='$t(`pedido["Concluido"]`) + " (12)"'></el-option>
					<el-option value='7' :label='$t(`pedido["Cancelados"]`) + " (2)"'></el-option>
					<el-option value='8' :label='$t(`pedido["Não vinculados"]`) + " (5)"'></el-option>
					<el-option value='9' :label='$t(`pedido["Reclamações"]`) + " (5)"'></el-option>
					<el-option value='10'  :label='$t(`pedido["Erro"]`) + " (0)"'></el-option>
                </el-select>
			</div>
			<div>
				<span>Loja</span>
				<el-select size='small' v-model='value' placeholder='Todos'>
				<el-option value='1' :label='$t(`pedido["Todos"]`)'></el-option>
				<el-option value='2' :label='$t(`pedido["MegaHaribaba"]`) + "| "+" Mercado Livre" '></el-option>
				<el-option value='3' label='B2W'></el-option>
				<el-option value='3' :label='$t(`pedido["Walmart"]`)'></el-option>
				<el-option value='3' :label='$t(`pedido["Netshoes"]`)'></el-option>
				</el-select>
			</div>
			<div >
				<span>{{$t(`relatorios["Período"]`)}} </span>
				<el-date-picker size='small' v-model="value7" type="daterange" align="right" unlink-panels range-separator=" " start-placeholder="1/12/2017" end-placeholder="30/12/2017" :picker-options="pickerOptions2" style='width:220px'>
				</el-date-picker>
			</div>
		</div>
		<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class='flex1'><el-checkbox v-model='checkAll' @change='all'></el-checkbox></li>
				<li class="flex3">{{$t(`pedido["Loja"]`)}}</li>
				<li>{{$t(`pedido["Cód. do Pedido"]`)}}</li>
				<li>{{$t(`pedido["Rastreio"]`)}}</li>
				<li>{{$t(`pedido["Cliente (Apelido)"]`)}}</li>
				<li class="flex3">{{$t(`pedido["Data Pag."]`)}}</li>
				<li class="flex3">{{$t(`pedido["Status"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in list' v-bind:key="index">
					<li class='flex1'><el-checkbox v-model='item.checked' @change='choose($event,index)'></el-checkbox>
					<li class="flex3">{{item.name}}</li>
					<li>{{item.address}}</li>
					<li>{{item.Marca}}</li>
					<li>
  						<span class="icon-message" @click='$store.commit("TOGGLE_ORDER_ORDER")'>
  							<span class="icon-number">12</span>
							<svg-icon icon-class='message'></svg-icon>
  						</span>
						{{item.Estoque}}
					</li>
					<li class="flex3">{{item.date}}</li>
					<li class="flex3">{{item.status}}</li>
				</ul>
			</transition-group>
		</div>
        <div class="erp-page">
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
         <my-detail></my-detail> 
         <my-order></my-order>
         <new-order></new-order>
    </div>
</template>
<script>
	import myDetail from './components/detail'
	import myOrder from './components/order'
	import newOrder from './components/new'
	export default {
		components: {
			myDetail,
			myOrder,
			newOrder
		},
		data() {

			return {
				loading: false,
				value: '',
				value7: '',
				total: 10,
				pageSize: '5',
				show: false,
				checkAll: false,
				list: [{
						name: 'Americanas.com',
						address: '132456789123',
						Marca: '12345678912BR',
						Estoque: 'Ricardo de Paula...',
						date: '25/11/2017',
						status: 'Incluido'
					},
					{
						name: 'Loja Física',
						address: '132456789123',
						Marca: '12345678912BR',
						Estoque: 'Ricardo de Paula...',
						date: '25/11/2017',
						status: 'Aprovado'
					},
					{
						name: 'Submarino',
						address: '132456789123',
						Marca: '12345678912BR',
						Estoque: 'Ricardo de Paula...',
						date: '25/11/2017',
						status: 'Erro'
					},
					{
						name: 'Submarino',
						address: '132456789123',
						Marca: '12345678912BR',
						Estoque: 'Ricardo de Paula...',
						date: '25/11/2017',
						status: 'Cancelado'
					}
				]
			}
		},
		methods: {
			row_click() {
				this.$store.commit('TOGGLE_ORDER_ORDER');
			},
			pickerOptions2(e) {
				console.log(e)
			},
			all(e) {
				console.log(e);
				this.list.forEach(res => res.checked = e)
			},
			choose(e, i) {
				if (e) {
					var flag = false;
					this.list.forEach(res => {
						if (!res.checked) {
							flag = true;
						}
					});
					this.checkAll = !flag;
				} else {
					var flag = true;
					this.list.forEach(res => {
						if (!res.checked) {
							flag = false;
						}
					});
					this.checkAll = flag;
				}
			},
		}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>
	.icon-message {
		font-size: 24px;
		margin-right: 20px;
		color: #999;
		position: relative;
		cursor: pointer;
		.icon-number {
			position: absolute;
			right: -10px;
			top: 8px;
			background-color: #999;
			color: #fff;
			height: 20px;
			width: 20px;
			line-height: 20px;
			border-radius: 50%;
			font-size: 11px;
			display: inline-block;
			text-align: center;
		}
		&:hover {
			color: #B72C2C;
			.icon-number {
				background-color: #B72C2C;
			}
		}
	}

</style>
