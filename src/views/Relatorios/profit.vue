<template>
    <div class='main_box'>
		<div class="erp-header">
            <h3>{{$t(`relatorios["利润报表"]`)}}</h3>
        </div>
        	<div class='erp-bar'>
		<div class='erp-search-button'>
			<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
			<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
		</div>
		<div>
			<span>Paginação</span>
			<el-select class='select Selecionar' size='small' v-model='pageSize' style='width:60px;'>
				<el-option value='5' label='5'></el-option>
				<el-option value='10' label='10'></el-option>
				<el-option value='15' label='15'></el-option>
			</el-select>
		</div>
		<div>
			<span>Ordernar por</span>
			<el-select class='select Selecionar' size='small' v-model='value' placeholder='Selecionar' style='width:80px;'>
				<el-option value='5' label='5'></el-option>
				<el-option value='10' label='10'></el-option>
				<el-option value='15' label='15'></el-option>
			</el-select>
		</div>
		<div >
			<span>Período </span>
			<el-date-picker size='small' v-model="value7" type="daterange" align="right" unlink-panels range-separator=" " start-placeholder="1/12/2017" end-placeholder="30/12/2017" :picker-options="pickerOptions2" style='width:220px'>
			</el-date-picker>
		</div>
		<div>
			<el-button type="success" size='small' round class="btn"><span class="text"><i class='el-icon-share'></i> Exportar CSV</span></el-button>
		</div>
	</div>
	<div class="erp-list" v-loading='loading'>
		<ul class="title">
			<li>Imagem</li>
			<li>SKU</li>
			<li>Nome</li>
			<li>Vendas</li>
			<li>Nota de Potencial</li>
			<li></li>
		</ul>
		<transition-group name="fade" tag='div'>
			<ul class="content" v-for='(item,index) in list' v-bind:key="index">
				<li><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
				<li>{{item.address}}</li>
				<li>{{item.Marca}}</li>
				<li>{{item.Estoque}}</li>
				<li>{{item.sss}}</li>
				<li>{{item.Marca}}</li>
			</ul>
		</transition-group>
	</div>
	<div class="erp-page">
		<el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
		</el-pagination>
	</div>
</div>
</template>
<script>
	export default {
		data() {
			return {
				loading: true,
				pageSize: 5,
				value: "",
				value7: '',
				total: 10,
				list: []
			}
		},
		methods: {
			render_icon() {
				return <i class = 'el-icon-question'
				style = 'color:#0aa1ed' > < /i>
			},
			pickerOptions2() {

			},
			handleSelectionChange() {}
		},
		created() {
			setTimeout(res => {
				this.loading = false;
				this.list = [{
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'R$ 700,00',
					Estoque: '200',
					sss: 'R$ 440,00',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'R$ 700,00',
					Estoque: '200',
					sss: 'R$ 440,00',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'R$ 700,00',
					Estoque: '200',
					sss: 'R$ 440,00',
				}]
			}, 1000)
		}
	}

</script>