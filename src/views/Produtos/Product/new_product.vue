<template>
	<el-dialog
		:visible.sync="$store.state.product.show_new_product"
	>
	<div slot='title' class="edit-title">
		<div class="div1">{{$t('product["Title"]')}}</div>
	</div>
	<div class="entrada-con">
		 <div class="menu menu--prospero">
			<ul class="menu__list">
				<li 
					@click='change_nav(1)'
					:class="current === 1 ? 'menu__item menu__item--current' : 'menu__item'" >
					<a class="menu__link" >{{$t('product["Dados Gerais"]')}}</a>
				</li>
				<li 
					@click='change_nav(3)'
					:class="current === 3 ? 'menu__item menu__item--current' : 'menu__item'" 
					>
					<a class="menu__link" >{{$t('input["Vinculação"]')}}</a>
				</li>
				<li 
					@click='change_nav(2)'
					:class="current === 2 ? 'menu__item menu__item--current' : 'menu__item'" >
					<a class="menu__link">{{$t('product["Video e Imagens"]')}}</a>
				</li>
			</ul>
		</div>
		<div v-show='current === 3'>
			<div class='erp-dialog-item  no-border '>
				<div>
					<div class='erp-search-button'>
						<el-select size='small' style='width:100%' v-model='select_model'>
							<el-option label='Cor' value='1'></el-option>
							<el-option label='Voltagem' value='2'></el-option>
							<el-option label='Aro' value='3'></el-option>
							<el-option label='Textura' value='4'></el-option>
						</el-select>
						<button class="erp-btn" @click='add_dialog=true'>
						{{$t('input["Adicionar Variação"]')}}</button>
					</div>
				</div>
			</div>
			<div>
				<span><svg-icon icon-class="eye" /></span>
				<span>{{$t('input["Cor"]')}}</span>
				<span>+</span>
				<span><svg-icon icon-class="eye" /></span>
				<span>{{$t('input["Voltagem"]')}}</span>
			</div>
			<div class="erp-list" v-loading='loading'>
				<ul class="title">
					<li>{{$t(`relatorios["Imagem"]`)}}</li>
					<li>{{$t(`table["Variação"]`)}}</li>
					<li>{{$t(`table["Atributo"]`)}}</li>
					<li>Estoque</li>
					<li>{{$t(`table["Operação"]`)}}</li>
				</ul>
				<div>
					<ul class="content" v-for='(item,index) in vin_list' v-bind:key="index">
						<li><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
						<li>{{item.vin}}</li>
						<li>{{item.attr}}</li>
						<li>
							<el-input value='250' size='small' style='width:100px' v-model='value'></el-input>
						</li>
						<li>
							<div class="table-icon">
								<span @click='del_item_by_id(item.id)'><i class='el-icon-delete'></i></span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<p class='erp-dialog-button'>
				<button class="erp-btn">{{$t('product["Concluir"]')}}</button>
			</p>
		</div>
		<div v-show='current === 1'>
			<div class='erp-dialog-item  no-border '>
				<div>
					<p>{{$t('input["Duplicar"]')}}<i class="el-icon-star-on" style="color:#E2B04D"></i></p>
					<el-input type='text' size='small' placeholder='URL do anúncio Mercado Livre / ID do anúncio Mercado Livre / SKU B2W ' v-model='value'></el-input>
				</div>
			</div>
			<div class='erp-dialog-item no-border'>
				<div>
					<p>
					{{$t('input["Nome"]')}}
					</p>
					<el-input type='texttext' size='small' placeholder='Escova Alisadora Magic Hair' v-model='value'></el-input>
				</div>
			</div>
			<div class='erp-dialog-item no-border'>
				<div>
					<p>
					{{$t('input["Descrição"]')}}
					</p>
					<el-input type='textarea' size='small' v-model='textarea3' :autosize='true'></el-input>
				</div>
			</div>
			<div class='erp-dialog-item no-border'>
				<div class="width20">
					<p>{{$t('input["Garantia"]')}}</p>
					<el-input  size='small'  v-model='Garantia' ></el-input>
				</div>
				<div class="width20">
					<p>{{$t('input["Estoque Inicial"]')}}</p>
					<el-input  size='small'  v-model='Garantia' ></el-input>
				</div>
				<div class="width20">
					<p>{{$t('input["Custo"]')}}</p>
					<el-input  size='small'  v-model='Garantia' value='R$'></el-input>
				</div>
				<div class="width30">
					<p>{{$t('input["Garantia"]')}}</p>
					<div class='erp-search-button'>
						<el-input type='text' size='small' placeholder='Nome / SKU' v-model='Categoria' disabled></el-input>
						<el-button size='mini' type='primary' @click='open_categorias'><i class="el-icon-search"></i></el-button>
					</div>
				</div>
			</div>
			<div class='erp-dialog-item'>
				<div class="erp-dialog-head">{{$t('input["Especificação"]')}}</div>
				<div>
					<p>{{$t('input["Marca"]')}}</p>
					<el-input size='small' v-model='value' ></el-input>
				</div>
				<div>
					<p>{{$t('input["EAN"]')}}</p>
					<el-input size='small' value='7894545698745' ></el-input>
				</div>
				<div>
					<p>{{$t('input["Modelo"]')}}</p>
					<el-input size='small' v-model='value'></el-input>
				</div>
			</div>
			<div class='erp-dialog-item'>
				<div class="erp-dialog-head">{{$t('input["Medidas"]')}}</div>
				<div>
					<p>{{$t('input["Peso"]')}}</p>
					<el-input size='small' v-model='value'>
						<span slot="suffix" class="el-input__icon" style="color:#666">Kg</span>
					</el-input>
				</div>
				<div>
					<p>{{$t('input["Comprimento"]')}}</p>
					<el-input size='small' value='value'>
						<span slot="suffix" class="el-input__icon" style="color:#666">Cm</span>
					</el-input>
				</div>
				<div>
					<p>{{$t('input["Largura"]')}}</p>
					<el-input size='small' v-model='value'>
						<span slot="suffix" class="el-input__icon" style="color:#666">Cm</span>
					</el-input>
				</div>
				<div>
					<p>{{$t('input["Altura"]')}}</p>
					<el-input size='small' v-model='value'>
						<span slot="suffix" class="el-input__icon" style="color:#666">Cm</span>
					</el-input>
				</div>
			</div>
			<div class='erp-dialog-item'>
				<div class="erp-dialog-head">{{$t('input["Fiscal"]')}}</div>
				<div>
					<p>NCM/NBM</p>
					<el-input size='small' v-model='value' ></el-input>
				</div>
				<div>
					<p>CFOP</p>
					<el-input size='small' v-model='value' ></el-input>
				</div>
				<div>
					<p>{{$t('input["Origem"]')}}</p>
					<el-input size='small' v-model='value'></el-input>
				</div>
			</div>
			
			<p class='erp-dialog-button'>
				<button class="erp-btn">{{$t('product["Concluir"]')}}</button>
			</p>
			<p class='erp-dialog-button'>
				<button @click='tishi1'>提示1</button>
				<button @click='tishi2'>提示2</button>
				<button @click='tishi3'>提示3</button>
				<button @click='tishi4'>提示4</button>
				<button @click='tishi5'>提示5</button>
			</p>
		</div>
		<div v-show='current === 2'>
			<div class='erp-dialog-item no-border' v-if='this.$route.path !== "/produtos/product"'>
				<div>
					<p>{{$t('product["Produtos"]')}}</p>
					<el-select v-model='select' style='width:400px' size='medium'>
						<el-option value='1' label='Originais do anúncio'></el-option>
						<el-option value='2' label='Minha imagens'></el-option>
					</el-select>
				</div>
			</div>
			<div class="edit-upload">
				<div class="img-src">
					<div class="edit-img-box"  v-show='img_src'>
						<img :src="img_src" alt="" class="edit-img">
					</div>
					<div class="text-edit" v-show='!img_src'>
						<svg-icon icon-class='xiangji' style='font-size:120px'></svg-icon>
						<p>{{$t('product["Adicionar Foto"]')}}</p>
						<p>{{$t('product["Principal"]')}}</p>
					</div>
				</div>
				<el-upload
				  class="upload-demo"
				  drag
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list='false'
				  :auto-upload='false'
				  :on-change='changeImg'
				  :file-list="fileList"
				  multiple>
				  <i class="el-icon-upload"></i>
				  <div class="el-upload__text">{{$t('product["Principal"]')}}Arraste e solte sua imagem aqui ou c lique nesta área</div>
				</el-upload>
			</div>
			<nav class="menu menu--ceres img_nav">
				<ul class="menu__list">
					<li :class="img_current === index ? 'menu__item menu__item--current' : 'menu__item' "
					@click='check_img_nav(index)'
					 v-for='(item,index) in nav_data'>
						<a class="menu__link">{{item.title}}</a>
					</li>
				</ul>
			</nav>
			<div class="edit-nav">
				<ul class="block-img">
					<li v-for='(item,index) in nav_data[img_current].list' @mouseenter='mouseenter(item.url)'>
						<img :src="item.url" alt="" class="item-img">
						<i class="el-icon-close" @click='del(index)'></i>
					</li>
				</ul>
			</div>
			<div class="erp-dialog-item">
				<div class="erp-dialog-head">{{$t('product["Descrição"]')}}</div>
				<div>
					<p>{{$t('product["Adicionar URL do Youtube"]')}}</p>
					<el-input  v-model='form.a'  size='small'></el-input>
				</div>
			</div>
			<p class='erp-dialog-button'>
				<button class="erp-btn">{{$t('product["Concluir"]')}}</button>
			</p>
		</div>
	</div>
	<el-dialog
		class='edit-Categorias'
		:visible.sync="innerVisible"
		append-to-body>
		<div slot='title' class="erp-dialog_title">
			Categorias
		</div>
		<div class="Categorias-content">
			<div v-loading='categories_loading1'>
				<p v-for='(item,index) in categories_arr1' @click='getCategoriesById(item.id,1,index)'
			 	:class='current_index1 === index ? "current" : ""'>
					{{item.name}}
				</p>
				<span v-if='!categories_arr1.length'>暂无数据!</span>
			</div>
			<div v-loading='categories_loading2'>
				<p v-for='(item,index) in categories_arr2' @click='getCategoriesById(item.id,2,index)'
				:class='current_index2 === index ? "current" : ""'>
					{{item.name}}
				</p>
				<span v-if='!categories_arr2.length'>暂无数据！</span>
			</div>
			<div v-loading='categories_loading3'>
				<p v-for='(item,index) in categories_arr3' @click='getCategoriesById(item.id,3,index)'
				:class='current_index3 === index ? "current" : ""'>
					{{item.name}}
				</p>
				<span v-if='!categories_arr3.length'>暂无数据！</span>
			</div>
			<div v-loading='categories_loading4'>
				<p v-for='(item,index) in categories_arr4' @click='getCategoriesById(item.id,4,index)'
				:class='current_index4 === index ? "current" : ""'>
					{{item.name}}
				</p>
				<span v-if='!categories_arr4.length'>暂无数据！</span>
			</div>
			<div v-loading='categories_loading5'>
				<p v-for='(item,index) in categories_arr5' @click='getCategoriesById(item.id,5,index)'
				:class='current_index5 === index ? "current" : ""'>
					{{item.name}}
				</p>
				<span v-if='!categories_arr5.length'>暂无数据！</span>
			</div>
		</div>
		<p class='erp-dialog-button'>
			<button class="erp-btn status" @click='close_categorias'>{{$t('fornecedor["Salvar"]')}}</button>
		</p>
	</el-dialog>
	<my-error
		:title='title'
		:message='message'
	></my-error>
<!--	<erp-del :message='[]' title='Voce deseja realizar a acao de exclusao ?' @ok='agree_item' @cancelar='cancae_item' :append='true'></erp-del>-->
	<el-dialog
		class='error-page'
		:visible.sync="$store.state.all.show_del"
		center
		:append-to-body = 'true'
		>
	<div slot='title' class="error-header">Voce deseja realizar a acao de exclusao</div>
	<div class="error-content">
		<p style="text-align:center">
			<button class="erp-btn" @click='agree_item'><span class="error-inner">{{$t('product["Sim"]')}}</span></button>
			<button class="erp-btn info" @click='cancae_item'><span class="error-inner">{{$t('product["Não"]')}}</span></button>
		</p>
	</div>
	</el-dialog>
	<el-dialog 
		class='error-page'
		:append-to-body = 'true'
		:visible.sync="add_dialog"
	>
		<div slot='title' class="error-header">Adicionar Variação | Cores</div>
		<div class="add-product-v">
			<ul>
				<li><el-checkbox v-model="checked"><span style="cla_product">Azul</span></el-checkbox></li>
				<li><el-checkbox v-model="checked1"><span style="cla_product">Vermelho</span></el-checkbox></li>
				<li><el-checkbox v-model="checked2"><span style="cla_product">Amarelo</span></el-checkbox></li>
				<li><el-checkbox v-model="checked3"><span style="cla_product">Preto</span></el-checkbox></li>
				<li><el-checkbox v-model="checked4"><span style="cla_product">Branco</span></el-checkbox></li>
				<li><el-checkbox v-model="checked5"><span style="cla_product">Roxo</span></el-checkbox></li>
				<li><el-checkbox v-model="checked6"><span style="cla_product">Verde</span></el-checkbox></li>
				<li><el-checkbox v-model="checked7"><span style="cla_product">Ciano</span></el-checkbox></li>
				<li><el-checkbox v-model="checked8"><span style="cla_product">Magenta</span></el-checkbox></li>
				<li><el-checkbox v-model="checked9"><span style="cla_product">Cinza</span></el-checkbox></li>
				<li><el-checkbox v-model="checked10"><span style="cla_product">Laranja</span></el-checkbox></li>
				<li><el-checkbox v-model="checked11"><span style="cla_product">Marrom</span></el-checkbox></li>
			</ul>
			<p class='erp-dialog-button'>
				<button class="erp-btn">{{$t('product["Concluir"]')}}</button>
			</p>
		</div>
	</el-dialog>
</el-dialog>
</template>

<script>
	//	import myInput from '@/components/common/input'
	import myError from '@/components/error'
	export default {
		components: {
			myError
		},
		data() {
			return {
				checked1: false,
				checked2: false,
				checked3: false,
				checked4: false,
				checked5: false,
				checked6: false,
				checked7: false,
				checked8: false,
				checked9: false,
				checked10: false,
				checked11: false,
				add_dialog: false,
				select_model: '1',
				form: {
					select_market: '1'
				},
				loading: false,
				vin_list: [{
					sku: '10001100-10',
					vin: 'Rosa',
					attr: '220V',
					status: '1',
				}, {
					sku: '10001100-10',
					vin: 'Preto',
					attr: '220V',
					status: '0',
				}, {
					sku: '10001100-10',
					vin: 'Dourado',
					attr: '220V',
					status: '1',
				}, {
					sku: '10001100-10',
					vin: 'Branco',
					attr: '220V',
					status: '1',
				}, {
					sku: '10001100-10',
					vin: 'Rosa',
					attr: '220V',
					status: '1',
				}], //属性列表
				categories_arr1: [], //根据id查询属性库
				categories_arr2: [], //根据id查询属性库
				categories_arr3: [], //根据id查询属性库
				categories_arr4: [], //根据id查询属性库
				categories_arr5: [], //根据id查询属性库
				categories_loading1: false,
				categories_loading2: false,
				categories_loading3: false,
				categories_loading4: false,
				categories_loading5: false,
				current_index1: 0,
				current_index2: 0,
				current_index3: 0,
				current_index4: 0,
				current_index5: 0,
				title: 'error',
				message: '',
				innerVisible: false,
				exposicao: '',
				custo: 'R$ 22,00',
				lucrat: 'R$ 120,00',
				img_current: 0,
				current: 3,
				nav_data: [{
					title: this.$t('product["Principal"]'),
					list: []
				}, {
					title: this.$t('product["Preto"]'),
					list: []
				}, {
					title: this.$t('product["Branco"]'),
					list: []
				}, {
					title: this.$t('product["Vermelho"]'),
					list: []
				}, {
					title: this.$t('product["Azul"]'),
					list: []
				}, ],
				fileList: [],
				img_list: [],
				img_src: '',
				select: '2',
				checked: false,
				checked1: false,
				Garantia: '',
				Categoria: 'Acessórios / GPS / Aparelhos / Outros',
				value: '',
				textarea3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui mi, gravida molestie convallis sed, sollicitudin in magna. Aliquam erat volutpat. Aliquam erat volutpat. Morbi porttitor, turpis vitae semper interdum, augue mi euismod mauris, a finibus ipsum nunc gravida lectus. Vestibulum sit amet lectus tristique, blandit tellus ac, tempus purus. Quisque suscipit dapibus ligula, nec rhoncus velit congue id. Nullam in tortor turpis. Donec nec convallis elit, id vulputate justo. Fusce eu tortor tristique, laoreet nisi quis, laoreet odio. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies augue felis, ac cursus neque faucibus bibendum. Integer quis nibh lobortis, tempor elit sit amet, faucibus neque. Vivamus tincidunt quam ante, sit amet iaculis massa molestie vel.",
				user: '',
				form: {
					a: '1',
					Custo: 'R$ 22,00',
					Lucratividade: 'R$ 120,00',
				},
				email: 'cadodepaulasilva159@gmail.com',
				phone: '(xx) xxxxxxxxx',
				tableData: [{
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}]

			}
		},
		methods: {
			agree_item(id) {

			},
			cancae_item() {

			},
			del_item_by_id(id) {
				this.$store.commit("TOGGLE_ALL_DEL", id)
				console.log(1)
			},
			tishi1() {
				this.title = 'Atenção!';
				this.message = 'Para anúncios já catalogados na B2W só será possível fazer alterações nos campos de preço e estoque  '
				this.$store.commit("TOGGLE_ALL_ARROR");
			},
			tishi2() {
				this.title = 'Erro de Integração Marketplace!';
				this.message = 'A ação não foi permitida pelo marketplace '
				this.$store.commit("TOGGLE_ALL_ARROR");
			},
			tishi3() {
				this.title = 'Error!';
				this.message = ['Ocorreu um erro!', 'Favor entrar em contato com a equipe Hariexpress.']
				this.$store.commit("TOGGLE_ALL_ARROR");
			},
			tishi4() {
				this.title = 'Informação!';
				this.message = 'Favor verificar se todos os campos foram preenchidos corretamente.'
				this.$store.commit("TOGGLE_ALL_ARROR");
			},
			tishi5() {
				this.title = 'Informação!';
				this.message = 'Ação realizada com sucesso!'
				this.$store.commit("TOGGLE_ALL_ARROR");
			},
			close_categorias() {
				this.innerVisible = false;
				var arr = [];
				for (var i = 0; i < 5; i++) {
					let temp = this["categories_arr" + (i - 0 + 1)][this["current_index" + i]];
					if (temp) arr.push(temp)
				}
				this.Categoria = arr.push('\n/\n');
				this.$message({
					message: 'Já a escolha' + this.Categoria,
					type: 'success'
				});
			},
			open_categorias() {
				this.innerVisible = true;
				this.getCategoriesById('', 0, 0);
			},
			/*通过id 来查询属性列表*/
			getCategoriesById(id, current_index, index) {
				this['current_index' + current_index] = index;
				if (current_index === 5) {
					return
				}
				if (current_index === 0) {
					this['categories_loading' + (current_index - 0 + 1)] = true;
					this.$get('mercadoLive/getCategoriesById').then(res => {
						this['categories_arr' + (current_index - 0 + 1)] = res.data;
						this['categories_loading' + (current_index - 0 + 1)] = false;
						if (res.data.length !== 0) {
							var item = res.data[0];
							this.getCategoriesById(item.id, current_index - 0 + 1, 0)
						}
					}).catch(res => {
						this['categories_loading' + (current_index - 0 + 1)] = false;
					})
					return
				}
				this['categories_loading' + (current_index - 0 + 1)] = true;
				this.$get('mercadoLive/getCategoriesById', {
					id: id
				}).then(res => {
					this['categories_arr' + (current_index - 0 + 1)] = res.data.children_categories;
					this['categories_loading' + (current_index - 0 + 1)] = false;
					if (res.data.children_categories.length !== 0) {
						var item = res.data.children_categories[0];
						this.getCategoriesById(item.id, current_index + 1, 0)
					} else {
						if (current_index === 1) {
							this.categories_arr2 = [];
							this.categories_arr3 = [];
							this.categories_arr4 = [];
							this.categories_arr5 = [];
						} else if (current_index === 2) {
							this.categories_arr3 = [];
							this.categories_arr4 = [];
							this.categories_arr5 = [];
						} else if (current_index === 3) {
							this.categories_arr4 = [];
							this.categories_arr5 = [];
						} else if (current_index === 4) {
							this.categories_arr5 = [];
						}
					}
				}).catch(res => {
					this['categories_loading' + (current_index - 0 + 1)] = false;
				})
			},
			change_nav(current) {
				//				this.current = 0;
				this.current = current;
			},
			mouseenter(src) {
				this.img_src = src;
			},
			submit() {
				this.$message({
					message: '恭喜你，操作成功',
					type: 'success'
				});
			},
			check_img_nav(index) {
				this.img_current = index;
				if (!this.nav_data[index].list.length) {
					this.img_src = ''
				} else {
					this.img_src = this.nav_data[this.img_current].list[0].url
				}
			},
			changeImg(e, i) {
				this.img_src = e.url;
				this.nav_data[this.img_current].list.push(e);
			},
			del(index) {
				this.nav_data[this.img_current].list.splice(index, 1);
				if (this.nav_data[this.img_current].list.length === 0) {
					this.img_src = ''
				}
			}
		},
		created() {
			this.current = this.$route.path === "/produtos/product" ? 1 : 3
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	$fs20:18rem;
	.el-dialog {
		margin-bottom: 20px
	}

	.add-product-v {
		ul li {
			padding: 6px 10px;
			&:nth-of-type(odd) {
				background-color: #f5f5f6
			}
			.cla_product {
				color: #000;
				font-size: 18rem;
				margin-right: 32px;
			}
		}
	}

	.edit-upload {
		height: 240px;
		position: relative;
		.img-src {
			height: 100%;
			width: 320px;
			float: left;
			background-color: #e8e8e8;
			display: flex;
			align-items: center;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			flex-flow: wrap;
			.edit-img-box {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fff
			}
			.edit-img {
				max-height: 100%;
				max-width: 100%;

			}
			.text-edit {
				p {
					text-align: center;
					margin: 0;
					padding: 0;
					height: 16px;
					font-weight: bold;
				}
			}
		}
		.upload-demo {
			width: 100%;
			padding-left: 370px;
			float: left;
			height: 100%;
			.el-upload {
				width: 100%;
				height: 100%;
				.el-upload-dragger {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.img_nav {}

	.edit-nav {
		margin-bottom: 40px;
		font-size: 18rem;
		.block-img {
			overflow: hidden;
			margin-top: 20px;
			width: 100%;
			li {
				width: 100px;
				height: 100px;
				float: left;
				margin-right: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				/*				border: 1px solid #ccc;*/
				position: relative;
				.item-img {
					max-width: 100%;
					max-height: 100%
				}
				.el-icon-close {
					position: absolute;
					right: 0;
					top: 0;
					cursor: pointer;
				}
			}
		}
	}

	.edit-title {
		padding: 15px 0;
		margin: 0 30px;
		border-bottom: 2px solid #ccc;
		display: flex;
		align-items: center;
		.div1 {
			font-size: 30rem;
			margin-right: 30px;
		}
		.div2 {
			font-size: 15rem;
			margin-right: 30px;
		}

	}

	.entrada-con {
		.edit-form {
			margin-top: 20px;
			.label {
				font-size: 20rem;
				margin-bottom: 8px;
				.el-icon-star-on {
					color: #E2B04D;
					margin-left: 12px;
				}
			}
		}
		.edit-abled {
			display: flex;
			justify-content: space-between;
		}
		.el-table--enable-row-transition .el-table__body td {
			padding: 0
		}
		.part2 {
			margin-top: 20px;
			.span {
				margin-right: 20px;
				font-size: 14px;
				font-weight: bold
			}
		}
		padding: 10px 30px;
		.entrada-h3 {
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 40px;
			line-height: 40px;
			.item {
				width: 50%;
				font-size: 18px;
				color: #000;
				cursor: pointer;
				span {
					border-radius: 50%;
					font-size: 14px;
					background-color: #ccc;
					padding: 4px;
					display: inline-block;
					width: 20px;
					height: 20px;
					line-height: 12px;
					margin-right: 4px;
					position: relative;
					top: -2px;
					color: #fff
				}
			}
			>.current {
				background-color: #eee;
			}
		}

		.edit-item {
			border: 2px solid #eee;
			border-radius: 5px;
			padding: 30px;
			position: relative;
			margin-top: 30px;
			display: flex;
			justify-content: space-between;
			flex-flow: wrap;
			.edit-input-item {
				width: 100%;
				margin-bottom: 20px;
				margin-right: 20px;
				.label {
					margin: 8px 0;
					font-size: $fs20;
					font-weight: normal;
					color: #666
				}
				.edit-textarea {
					width: 100%;
					margin-top: 20px;
				}
			}
			.entrada-item-title {
				position: absolute;
				top: -22px;
				left: 100px;
				padding: 10px 20px;
				height: 30px;
				background-color: #fff;
				font-size: 20rem;
			}
			.entrada-input-item1 {
				width: 20%;
				margin-bottom: 20px;
				margin-right: 20px;
				.label {
					margin: 8px 0;
					font-size: $fs20;
					font-weight: normal;
					color: #666
				}
			}
			.entrada-input-item {
				width: 22%;
				margin-bottom: 20px;
				.label {
					margin: 8px 0;
					font-size: $fs20;
					font-weight: normal;
					color: #666
				}
			}
		}
		.edit-item1 {
			border: 2px solid #eee;
			border-radius: 5px;
			padding: 30px;
			position: relative;
			margin-top: 30px;
			margin-bottom: 30px;
			display: flex;
			.entrada-item-title {
				position: absolute;
				top: -22px;
				left: 100px;
				padding: 10px 20px;
				height: 30px;
				background-color: #fff;
				font-size: 20rem;
			}
			.entrada-input-item1 {
				width: 28%;
				margin-right: 60px;
				.label {
					margin: 8px 0;
					font-size: $fs20;
					font-weight: normal;
					color: #666
				}

			}
		}
		.entrada-btn {
			text-align: right;
			.span {
				font-size: 16px;
				padding: 0 6px;

			}
		}

	}

	.el-dialog__body {
		padding: 10px 20px;
	}

	.edit-Categorias {
		.el-dialog {
			background-color: #f5f5f6;
		}
		.Categorias-content {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			>div {
				width: 160px;
				background-color: #fff;
				height: 400px;
				overflow: auto;
				padding: 8px;
				>p {
					color: #000;
					cursor: pointer;
					margin: 10px 0;
					&:hover {
						background-color: #f5f5f6;
					}
					&:visited {
						background-color: #f5f5f6;

					}
					&.current {
						font-weight: bold;
						color: #00C1DE;
						background-color: #f5f5f6;
					}
				}
			}
		}
	}

</style>
