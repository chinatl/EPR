<template>
    <div>
		<div class="erp-header">
       		<h3>{{$t('expedic["Saida"]')}}</h3>
       		<div>
                <el-button size='small' round type='primary' 
                @click='$store.commit("TOGGLE_ALL_ARROR")'
                >{{$t('expedic["Expedir Pedidos"]')}}</el-button>
       		</div>
       	</div>
		<div class='erp-bar'>
			<div>
				<span>Buscar</span>
				<el-input type='text' size='small'
					suffix-icon="el-icon-search"
					style='width:250px'
					placeholder='Código do Pedido / Nome ' v-model='value'></el-input>
			</div>
			<div>
				<div class="erp-right-item">
					<span>{{$t('select["Data"]')}}</span>
					<el-select class='select Selecionar' size='small' v-model='pageSize' placeholder='Selecionar' style='width:100px;'>
						<el-option value='5' label='5'></el-option>
						<el-option value='10' label='10'></el-option>
						<el-option value='15' label='15'></el-option>
					</el-select>
				</div>
				<div class="erp-right-item">
					<span>{{$t('select["Período"]')}}</span>
					<el-date-picker size='small' v-model="value7" type="daterange" align="right" unlink-panels range-separator=" " start-placeholder="1/12/2017" end-placeholder="30/12/2017" :picker-options="pickerOptions2" style='width:220px'>
					</el-date-picker>
				</div>
			</div>
		</div>
        <div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class='flex1'><el-checkbox v-model='checkAll' @change='all'></el-checkbox></li>
				<li>{{$t(`table["Loja"]`)}}</li>
				<li>{{$t(`table["Cód. do Pedido"]`)}}</li>
				<li class="flex5">{{$t(`table["Cliente (Apelido)"]`)}}</li>
				<li>{{$t(`table["Rastreio"]`)}}</li>
				<li>{{$t(`table["Data de Empa"]`)}}</li>
				<li class='flex3'>{{$t(`table["Status"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in tableData' v-bind:key="index">
					<li class='flex1'><el-checkbox v-model='item.checked' @change='choose($event,index)'  ></el-checkbox></li>
					<li>{{item.name}}</li>
					<li>{{item.phone}}</li>
					<li class="flex5">{{item.Mar}}</li>
					<li>{{item.ss}}</li>
					<li>{{item.Estoque}}</li>
					<li class='flex3'>{{item.address}}</li>
				</ul>
			</transition-group>
		</div>
		<div class="erp-page">
			<el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
			</el-pagination>
		</div>
		<my-order></my-order>
		<my-error 
			title='Informação'
			message='16  Pedidos foram expedidos.'
		></my-error>

<!--		<inform></inform>-->
	</div>
</template>
<script>
	import myOrder from './components/order'
	import myError from '@/components/Error' //删除提示
	export default {
		components: {
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
		}
	}

</script>
