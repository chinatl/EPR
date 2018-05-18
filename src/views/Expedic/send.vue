<template>
    <div>
		<div class="erp-header">
       		<h3>Empacotamento</h3>
       		<div>
			 	<el-button size='small' round type='success'>Relatório de Saída</el-button>
                <el-button size='small' round type='primary'>Imprimir Etiquetas</el-button>
       		</div>
       	</div>
		<div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
			<div>
				<span>Data</span>
				<el-select class='select Selecionar' size='small' v-model='pageSize' placeholder='Selecionar' style='width:100px;'>
					<el-option value='5' label='5'></el-option>
					<el-option value='10' label='10'></el-option>
					<el-option value='15' label='15'></el-option>
				</el-select>
			</div>
			<div>
				<span>Período</span>
				<el-date-picker size='small' v-model="value7" type="daterange" align="right" unlink-panels range-separator=" " start-placeholder="1/12/2017" end-placeholder="30/12/2017" :picker-options="pickerOptions2" style='width:220px'>
				</el-date-picker>
			</div>
		</div>
        <div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class='flex1'><el-checkbox v-model='checkAll' @change='all'></el-checkbox></li>
				<li>Loja</li>
				<li>Cód. do Pedido</li>
				<li class="flex5">Cliente (Apelido)</li>
				<li>Rastreio</li>
				<li>Data de Pag.</li>
				<li class='flex3'>Status</li>
				<li class='flex3'>Operação</li>
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
					<li class='flex3'>
						<div class="table-icon">
							<span><svg-icon icon-class='mask' style='font-size:26px;'></svg-icon></span>
							<span><svg-icon icon-class='box' style='font-size:26px;'></svg-icon></span>
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
		<inform></inform>
	</div>
</template>
<script>
	import myOrder from './components/order'
	import Inform from './components/inform'
	export default {
		components: {
			myOrder,
			Inform
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
				console.log(e);
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
