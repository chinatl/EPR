<template>
	<div>
		<div class="erp-select-bar space-between">
			<div>
				<div class='erp-search-button'>
					<el-input type='text' size='small' placeholder='Pesquisar...' v-model='value'></el-input>
					<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
				</div>
				<div><span class="arrtbute-span" @click='$store.commit("TOGGLE_ATTR_CORES")'>Variação não encontrada.</span></div>
			</div>
			<div>
				<button class="erp-btn" @click='add_attr_dialog = true'>{{$t(`button["Adicionar Variação"]`)}}</button>
			</div>
		</div>
		<div class="attrbute-box">
			<h3>Variações Hariexpress</h3>
			<ul class="attr-box">
				<li v-for='(item,index) in all_attr'  :key='index' @click='update(index)'>{{item}}</li>
			</ul>
			<p class="has-no-data">
			Variação não encontrada!
			<span class="blue"  @click='add_attr_dialog = true'> {{$t(`button["Adicione uma nova variação"]`)}} </span>
			</p>
			<pagination :total='total'></pagination>
		</div>
		<div class="attrbute-box">
			<h3>Minhas Variações</h3>
			<ul class="attr-box">
				<li>Cores</li>
				<li>Voltagem</li>
				<li>Tamanho</li>
			</ul>
		</div>
		<cores></cores>
   	<el-dialog
	  :visible.sync="edit_attr_dialog"
	  class='cores-dialog'
	 >
		<div slot='title' class="erp-dialog_title">
			Editar Variação | Cores
			<span class="attr-tittle">
				<span class="text">Variação Visual</span>
				<el-switch
				  v-model="value3">
				</el-switch>
			</span>
		</div>
		<div class='erp-dialog-item  no-border'>
			<div>
				<p>Atributos</p>
				<div class='erp-search-button'>
					<el-input type='text' size='small' placeholder='Pesquisar...' v-model='value'></el-input>
					<el-button size='mini' type='primary' @click='add_attr'><i class="el-icon-plus"></i></el-button>
				</div>
			</div>
		</div>
		<ul class="cores-dialog-list">
			<li v-for='(item,index) in attr_arr' :key='index'>
				{{item}}
				<i class="el-icon-close" @click='del_attr(index)'></i>
			</li>
		</ul>
		<p class='erp-dialog-button'>
			<button class="erp-btn info circle size16" @click='submit'>{{$t('button["ok"]')}}</button>
		</p>
	</el-dialog>
	<el-dialog
		:visible.sync="add_attr_dialog"
		class='cores-dialog'
	>
		<div slot='title' class="erp-dialog_title">
			Nova Variação
			
		</div>
		
		<div class='erp-dialog-item  no-border'>
			<div class='width40'>
				<p>Nome </p>
				<el-input type='text' size='small' placeholder='Pesquisar...' v-model='name'></el-input>
			</div>	
			<div>
				<p>&nbsp;</p>
				<div>
					<span style="margin-left:40px;margin-right:12px;font-size:16px;vertical-align:sub">Variação Visual</span><el-switch v-model="value4"></el-switch>
				</div>
			</div>
		</div>
		<div class='erp-dialog-item  no-border'>
			<div class='width40'>
				<p>Atributos</p>
				<div class='erp-search-button'>
					<el-input type='text' size='small'  v-model='value'></el-input>
					<el-button size='mini' type='primary' @click='add_add_attr'><i class="el-icon-plus"></i></el-button>
				</div>
			</div>
		</div>
		<ul class="cores-dialog-list">
			<li v-for='(item,index) in add_attr_arr' :key='index'>
				{{item}}
				<i class="el-icon-close" @click='add_del_attr(index)'></i>
			</li>
		</ul>
		<p class='erp-dialog-button'>
			<button class="erp-btn   size16" @click='submit_add'>{{$t('button["ok"]')}}</button>
		</p>
	</el-dialog>
	<el-dialog
		:visible.sync="detail_dialog"
	>
		<div slot='title' class="erp-dialog_title" style="text-align:center">
			<h3 style="margin-bottom:12px">Atenção</h3>
			<p style="font-size:16px;color:#999">Existem produtos utilizando esta variação. (Vermelho)</p>
		</div>
		<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li>{{$t(`table["Imagem"]`)}}</li>
				<li>SKU</li>
				<li>{{$t(`table["Nome"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in list' v-bind:key="index">
					<li><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
					<li>{{item.sku}}</li>
					<li>{{item.name}}</li>
				</ul>
			</transition-group>
		</div>
		<p class='erp-dialog-button'>
			<button class="erp-btn size16 info circle" @click='submit_detail'>{{$t('button["ok"]')}}</button>
		</p>
	</el-dialog>
	</div>
</template>
<script>
	import cores from './attr/cores.vue'
	export default {
		components: {
			cores
		},
		data() {
			return {
				loading: false,
				list: [{
					sku: '1000103-00',
					name: 'Escova Alisadora',
				}, {
					sku: '1000103-00',
					name: 'Escova Alisadora',
				}, {
					sku: '1000103-00',
					name: 'Escova Alisadora',
				}, {
					sku: '1000103-00',
					name: 'Escova Alisadora',
				}],
				all_attr: [
					"Cores", "Voltagem", "Tamanho", "Textura", "Material", "Aro",
					"Cores", "Voltagem", "Tamanho", "Textura", "Material", "Aro",
					"Cores", "Voltagem", "Tamanho", "Textura", "Material", "Aro",
					"Cores", "Voltagem", "Tamanho", "Textura", "Material", "Aro",
				],
				name: '',
				value3: true,
				value4: true,
				total: 10,
				value: '',
				attr_arr: ['Azul', 'Azul'],
				add_attr_arr: ['Azul', 'Azul'],
				edit_attr_dialog: false,
				detail_dialog: false,
				add_attr_dialog: false
			}
		},
		methods: {
			submit_detail() {
				this.add_attr_dialog = false;
				setTimeout(res => {
					this.detail_dialog = false;
				}, 100)
			},
			submit_add() {
				this.detail_dialog = true;
				//				this.add_attr_dialog = false;
			},
			submit() {
				this.edit_attr_dialog = false;
			},
			add_attr() {
				if (!this.value) {
					return
				}
				this.attr_arr.push(this.value);
				this.value = '';
			},
			add_add_attr() {
				if (!this.value) {
					return
				}
				this.add_attr_arr.push(this.value);
				this.value = '';
				this.name = '';
			},
			del_attr(index) {
				this.attr_arr.splice(index, 1)
			},
			add_del_attr(index) {
				this.add_attr_arr.splice(index, 1);
			},
			update() {
				this.edit_attr_dialog = true;
			}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.has-no-data {
		text-align: center;
		padding: 40px 0;
		font-size: 20px;
		.blue {
			text-decoration: underline;
			color: #00C1DE;
			cursor: pointer;
		}
	}

	.arrtbute-span {
		color: #FF0000;
		margin-left: 20px;
		font-size: 16px;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}

	.attrbute-box {
		/*		margin: 20px 0;*/
		margin-bottom: 30px;
		h3 {
			color: #666;
			font-size: 20px;
			font-weight: normal;
			margin-bottom: 12px;
		}
		.attr-box {
			overflow: hidden;
			li {
				width: 130px;
				background-color: #f5f5f6;
				color: #666;
				height: 40px;
				line-height: 40px;
				font-size: 16px;
				text-align: center;
				float: left;
				margin: 10px 12px;
				font-weight: bold;
				&:hover {
					background-color: #eaedf3;
					cursor: pointer
				}
			}
		}
	}

	.attr-tittle {
		float: right;
		/*		font-size: px;*/
		.text {
			vertical-align: middle;
			margin-right: 8px;
		}
	}

	.cores-dialog {
		div.el-dialog {
			width: 760px;
		}
		.cores-dialog-list {
			li {
				height: 60px;
				color: #666;
				line-height: 60px;
				padding-left: 20px;
				font-size: 18rem;
				position: relative;
				&:nth-of-type(even) {
					background-color: #f5f5f6
				}
				&:nth-of-type(odd) {}
				i {
					font-size: 24px;
					position: absolute;
					top: 50%;
					margin-top: -12px;
					right: 20px;
					cursor: pointer;
				}
			}
		}
	}

</style>
