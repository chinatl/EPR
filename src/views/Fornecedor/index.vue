<template>
    <div v-loading.fullscreen = 'full_loading'>
	  	<div class="erp-header">
            <h3>{{$t('fornecedor["Fornecedores"]')}}</h3>
            <div>
                <el-button size='small' round type='danger' @click='add'>{{$t('fornecedor["Novo Fornecedor"]')}}</el-button>
            </div>
        </div>
		<div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome' v-model='nome'></el-input>
				<el-button size='mini' type='primary' @click='init(5,1)'><i class="el-icon-search"></i></el-button>
			</div>
		</div>
	<div class="erp-list" v-loading='loading'>
		<ul class="title">
			<li>{{$t('table["Nome Fantasia"]')}}</li>
			<li>{{$t('table["CNPJ/CPF"]')}}</li>
			<li>{{$t('table["complemento"]')}}</li>
			<li>{{$t('table["Telefone"]')}}</li>
			<li>{{$t('table["Operação"]')}}</li>
		</ul>
		<div>
			<no-data v-if='!list.length'></no-data>
			<ul class="content" v-for='(item,index) in list' v-bind:key="index">
				<li>{{item.nome}}</li>
				<li>{{item.cnpj}}</li>
				<li>{{item.complemento}}</li>
				<li>{{item.celular}}</li>
				<li>
					<div class="table-icon">
						<span><i class='el-icon-edit-outline' @click='update(item)'></i></span>
						<span><i class='el-icon-delete' @click='del(item)'></i></span>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<pagination :total='total'></pagination>
	<my-fornecsdor :id='id'></my-fornecsdor>
	<erp-del message='Confirmar a remoção ?' @ok='agree_item' @cancelar='cancae_item'></erp-del>
</div>

</template>
<script>
	import myFornecsdor from './components/fornecedor';
	export default {
		components: {
			myFornecsdor,
		},
		data() {
			return {
				full_loading: false,
				pageSize: '5',
				loading: false,
				value: '',
				total: 0,
				list: [],
				nome: '',
				pageNo: 1,
				pageSize: 5,
				id: ''
			}
		},
		created() {
			this.init(5, 1);
		},
		methods: {
			/*初始化*/
			init(pageSize, pageNo) {
				this.loading = true;
				this.$get('supplier/query', {
					nome: this.nome,
					pageNo: pageNo,
					pageSize: pageSize,
				}).then(res => {
					this.loading = false;
					this.list = res.data.content;
					this.total = res.data.totalElements;
				}).catch(res => {
					this.loading = false;
				})
			},
			/*添加供应商*/
			add() {
				this.$store.state.fornecedor.type = 'add';
				this.$store.state.fornecedor.form = {
					"bairro": "",
					"celular": "",
					"cidade": "",
					"cnpj": "",
					"complemento": "",
					"estado": "",
					"fantasic": "",
					"logradouro": "",
					"nome": "",
					"numero": "",
					"social": "",
					"supplierMail": "",
//					"userId": this.$store.getters.userId
				}
				this.$store.commit("TOGGLE_FORNECEDOR_MENU");
			},
			/*修改供应商*/
			update(item) {
				this.id = item.id;
				this.$store.state.fornecedor.form = Object.assign({}, item);
				this.$store.state.fornecedor.type = 'update';
				this.$store.commit("TOGGLE_FORNECEDOR_MENU");
			},
			/*删除供应商*/
			del(item) {
				this.$store.commit('TOGGLE_ALL_DEL', item.id);
			},
			agree_item(id) {
				this.full_loading = true;
				this.$delete(`supplier/remove/${id}`).then(res => {
					this.full_loading = false;
					this.$store.commit('TOGGLE_ALL_DEL');
					this.init(5, 1);
					this.$message({
						message: res.data,
						type: 'success'
					})
				}).catch(res => {
					this.full_loading = false;
				})
			},
			cancae_item() {
				this.$store.commit('TOGGLE_ALL_DEL');
			}
		}
	}

</script>
