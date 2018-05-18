<template>
    <div class='main_box'>
	  	<div class="erp-header">
            <h3>{{$t('fornecedor["Fornecedores"]')}}</h3>
            <div>
                <el-button size='small' round type='danger'>{{$t('fornecedor["Novo Fornecedor"]')}}</el-button>
            </div>
        </div>
		<div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
			<div>
				<span>{{$t('fornecedor["Paginação"]')}}</span>
				<el-select class='select Selecionar' size='small' v-model='pageSize' style='width:100px;'>
					<el-option value='5' label='5'></el-option>
					<el-option value='10' label='10'></el-option>
					<el-option value='15' label='15'></el-option>
				</el-select>
			</div>
		</div>
	<div class="erp-list" v-loading='loading'>
		<ul class="title">
			<li>{{$t('fornecedor["Imagem"]')}}</li>
			<li>SKU</li>
			<li>{{$t('fornecedor["Nome"]')}}</li>
			<li>{{$t('fornecedor["Vendas"]')}}</li>
			<li>{{$t('fornecedor["Nota de Potencial"]')}}</li>
			<li></li>
		</ul>
		<transition-group name="fade" tag='div'>
			<ul class="content" v-for='(item,index) in list' v-bind:key="index">
				<li><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
				<li>{{item.address}}</li>
				<li>{{item.Marca}}</li>
				<li>{{item.Estoque}}</li>
				<li>{{item.sss}}</li>
				<li>
					<div class="table-icon">
						<span><i class='el-icon-edit-outline' @click='$store.commit("TOGGLE_FORNECEDOR_MENU")'></i></span>
						<span><i class='el-icon-delete' @click='$store.commit("TOGGLE_DELETE")'></i></span>
					</div>
				</li>
			</ul>
		</transition-group>
	</div>
	<div class="erp-page">
		<el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
		</el-pagination>
	</div>
<my-fornecsdor></my-fornecsdor>
<my-del></my-del>
</div>

</template>
<script>
	import myFornecsdor from './components/fornecedor'
	import myDel from '@/views/Produtos/Components/delete'
	export default {
		components: {
			myFornecsdor,
			myDel
		},
		data() {
			return {
				pageSize: '5',
				value: '',
				total: 10,
				list: [{
						name: '1000103-00',
						address: 'Escova Alisadora',
						Marca: 'Pmcell',
						Estoque: '200',
						sss: ''
					},
					{
						name: '1000103-00',
						address: 'Escova Alisadora',
						Marca: 'Pmcell',
						Estoque: '200',
						sss: ''
					},
					{
						name: '1000103-00',
						address: 'Escova Alisadora',
						Marca: 'Pmcell',
						Estoque: '200',
						sss: ''
					}
				]
			}
		},
		methods: {

		}
	}
</script>
