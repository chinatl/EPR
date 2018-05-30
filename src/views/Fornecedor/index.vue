<template>
    <div>
	  	<div class="erp-header">
            <h3>{{$t('fornecedor["Fornecedores"]')}}</h3>
            <div>
                <el-button size='small' round type='danger' @click='$store.commit("TOGGLE_FORNECEDOR_MENU")'>{{$t('fornecedor["Novo Fornecedor"]')}}</el-button>
            </div>
        </div>
		<div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
		</div>
	<div class="erp-list" v-loading='loading'>
		<ul class="title">
			<li>{{$t('table["Nome Fantasia"]')}}</li>
			<li>{{$t('table["CNPJ/CPF"]')}}</li>
			<li>{{$t('table["Contato"]')}}</li>
			<li>{{$t('table["Telefone"]')}}</li>
			<li>{{$t('table["Operação"]')}}</li>
		</ul>
		<transition-group name="fade" tag='div'>
			<ul class="content" v-for='(item,index) in list' v-bind:key="index">
				<li>{{item.name}}</li>
				<li>{{item.name1}}</li>
				<li>{{item.name2}}</li>
				<li>{{item.name3}}</li>
				<li>
					<div class="table-icon">
						<span><i class='el-icon-edit-outline' @click='$store.commit("TOGGLE_FORNECEDOR_MENU")'></i></span>
						<span><i class='el-icon-delete' @click='$store.commit("TOGGLE_DELETE")'></i></span>
					</div>
				</li>
			</ul>
		</transition-group>
	</div>
	<pagination :total='total'></pagination>
	<my-fornecsdor></my-fornecsdor>
	<my-del></my-del>
</div>

</template>
<script>
	import myFornecsdor from './components/fornecedor';
	import myDel from '@/components/Del'
	export default {
		components: {
			myFornecsdor,
			myDel
		},
		data() {
			return {
				pageSize: '5',
				loading: false,
				value: '',
				total: 10,
				list: [{
						name: 'Nome Fantasia',
						name1: '92.543.757/0001-40',
						name2: 'Ricardo de Paula',
						name3: '(xx) xxxx-xxxx',
					},
					{
						name: 'Nome Fantasia',
						name1: '92.543.757/0001-40',
						name2: 'Ricardo de Paula',
						name3: '(xx) xxxx-xxxx',
					},
					{
						name: 'Nome Fantasia',
						name1: '92.543.757/0001-40',
						name2: 'Ricardo de Paula',
						name3: '(xx) xxxx-xxxx',
					},
				]
			}
		},
		methods: {

		}
	}

</script>
