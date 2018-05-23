<template>
    <div>
		<div class="erp-header">
       		<h3>{{$t('expedic["Empacotamento"]')}} <span class="else-con" style="border:none"> <img
            style='width:20px;height:20px;'
            :src="require('@/assets/img/mark.jpg')" alt=""></span></h3>
       		<div>
			 	<el-button size='small' round
               	@click='$store.commit("TOOGLE_EXPEDIC_DETAIL")'
                 type='success'>{{$t('button["Relatório de Saída"]')}}</el-button>
                <el-button size='small' round type='primary'>{{$t('expedic["Imprimir Etiquetas"]')}}</el-button>
       		</div>
       	</div>
		<div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
			<div>
				<div>
					<span>{{$t('expedic["Data"]')}}</span>
					<el-select class='select Selecionar' size='small' v-model='pageSize' placeholder='Selecionar' style='width:100px;'>
						<el-option value='5' label='5'></el-option>
						<el-option value='10' label='10'></el-option>
						<el-option value='15' label='15'></el-option>
					</el-select>
				</div>
				<div>
					<span>{{$t('expedic["Período"]')}}</span>
					<el-date-picker size='small' v-model="value7" type="daterange" align="right" unlink-panels range-separator=" " start-placeholder="1/12/2017" end-placeholder="30/12/2017" :picker-options="pickerOptions2" style='width:220px'>
					</el-date-picker>
				</div>
			</div>
		</div>
        <div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class='flex1'><el-checkbox v-model='checkAll' @change='all'></el-checkbox></li>
				<li>{{$t('expedic["Loja"]')}}</li>
				<li>{{$t('expedic["Cód. do Pedido"]')}}</li>
				<li class="flex5">{{$t('expedic["Cliente (Apelido)"]')}}</li>
				<li>{{$t('expedic["Rastreio"]')}}</li>
				<li>{{$t('expedic["Data de Pag"]')}}.</li>
				<li class='flex3'>{{$t('expedic["Status"]')}}</li>
				<li class='flex3'>{{$t('expedic["Operação"]')}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in tableData' v-bind:key="index" @click='show_item(item)'>
					<li class='flex1'><el-checkbox v-model='item.checked' @change='choose($event,index)'  ></el-checkbox></li>
					<li>{{item.name}}</li>
					<li>{{item.phone}}</li>
					<li class="flex5">{{item.Mar}}</li>
					<li>{{item.ss}}</li>
					<li>{{item.Estoque}}</li>
					<li class='flex3'>{{item.address}}</li>
					<li class='flex3'>
						<div class="table-icon">
							<span @click.stop='$store.commit("TOOGLE_EXPEDIC_ORDER")'><svg-icon icon-class='mask' style='font-size:26px;'></svg-icon></span>
							<span><svg-icon icon-class='box' style='font-size:20px;'></svg-icon></span>
						</div>
					</li>
				</ul>
			</transition-group>
		</div>
		<div class="erp-page">
			<el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
			</el-pagination>
		</div>
		<my-order></my-order>
		<my-details></my-details>
		<a-list></a-list>
		<my-error
			title='Erro'
			message='Tivemos uma falha de comunicaçao na impressão 
da etiqueta, Favor conferir no marketplace.'
		></my-error>
	</div>
</template>
<script>
	import myOrder from './components/order' //打包
	import myError from '@/components/Error' //删除提示
	import myDetails from './components/details' //给按钮添加 展示所有详情
	import aList from './components/alist' //显示每条列表的详情
	export default {
		components: {
			aList,
			myDetails,
			myOrder,
			myError
		},
		data() {
			return {
				value: '',
				loading: false,
				pageSize: '5',
				value7: '',
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
				],
				checkAll: false,


			}
		},
		methods: {
			show_item(item) {
				this.$store.commit('TOOGLE_EXPEDIC_ALIST');
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
			pickerOptions2() {}
		},
		created() {
			this.$store.commit('TOGGLE_ALL_ARROR')
		}
	}

</script>
