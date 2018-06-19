<template>
	<el-dialog
		:visible.sync="$store.state.product.show_fast_copy"
	>
	<div slot='title'  class="erp-dialog_title">
		{{$t('product["Clonar Produto em Massa"]')}}
		<span class="tips">{{$t('product["Você ainda possui 5 clonagens disponíveis"]')}}</span>
	</div>
	<div class="menu menu--prospero">
		<ul class="menu__list">
			<li 
				@click='change_nav(1)'
				:class="current === 1 ? 'menu__item menu__item--current' : 'menu__item'" >
				<a class="menu__link" >{{$t('product["Selecionar Loja"]')}}</a>
			</li>
			<li 
				@click='change_nav(2)'
				:class="current === 2 ? 'menu__item menu__item--current' : 'menu__item'" >
				<a class="menu__link">{{$t('button["Importar Anúncios"]')}}</a>
			</li>
		</ul>
	</div>
	<div v-show='current === 1'>
		<div class="fast-click-con">
			<span class="up"><svg-icon icon-class='up'></svg-icon></span>
			<div class="fast-click-form">
				<h3>Loja que deseja importar:</h3>
				<div class='erp-search-button'>
					<el-input type='text' size='small' placeholder='Nome da loja Mercado Livre' v-model='value'>
					   <i slot="suffix" class="el-input__icon el-icon-loading"></i>
					   <i slot="suffix" class="el-input__icon el-icon-close"
					   	style="color:#C63030"
					   ></i>
					   <i slot="suffix" class="el-input__icon el-icon-check"
					    style="color:#17B1AE;"></i>
					</el-input>
					<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
				</div>
				<div class="fast-copy-table">
					<div class="table-title">
						MEGAHARIBABA
						<span>1000 Anúncios</span>
					</div>
					<p class="table-tips">1 Ano vendendo no Mercado Livre</p>
					<p>Reputação</p>
					<p>987 vendas nos últimos 4 mesestação</p>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<p><el-checkbox v-model="checked">Estou ciente sobre a responsabilidade de uso desta ferramenta</el-checkbox></p>
				<p><el-checkbox v-model="checked">Duplicar os anúncios importados em produtos.</el-checkbox></p>
			</div>
			<div class="fast-click-form">
				<h3>Conta que receberá os anúncios:</h3>
				  <el-select v-model="shop" size='small' style='width:100%'>
					<el-option value='1' label='Mercado Livre | rafatech'></el-option>
					<el-option value='2' label='Mercado Livre | MegaHaribaba'></el-option>
				  </el-select>
			</div>
		</div>
		<p class='erp-dialog-button'>
			<el-button type='primary' round @click='submit'>{{$t('button["Iniciar importação"]')}}</el-button>
		</p>
	</div>
     <div v-show='current === 2'>
     	<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class="flex3">{{$t(`table["Imagem"]`)}}</li>
				<li>{{$t(`table["ID do Anúncio"]`)}}</li>
				<li>{{$t(`table["Título"]`)}}</li>
				<li>{{$t(`table["Vendas"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in tableData' v-bind:key="index">
					<li  class="flex3"><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
					<li>{{item.id}}</li>
					<li>{{item.awm}}</li>
					<li>{{item.m416}}</li>
				</ul>
		</transition-group>
		</div>
		<pagination :total='total' ></pagination>
		<p>*{{$t(`product["Selecione os anúncios que deseja"]`)}}.</p>
		<p class='erp-dialog-button' style="margin-top:18px">
		<el-button type='primary' round @click='submit'>{{$t('button["Iniciar importação"]')}}</el-button>
		</p>
     </div>
      
    
</el-dialog>
</template>

<script>
	//	import myInput from '@/components/common/input'
	export default {
		data() {
			return {
				total:10,
				checked:false,
				shop:'1',
				loading:false,
				current: 1,
				value:'',
				user: '',
				form: {
					a: '',
					Custo: 'R$ 22,00',
					Lucratividade: 'R$ 120,00',
				},
				email: 'cadodepaulasilva159@gmail.com',
				phone: '(xx) xxxxxxxxx',
				tableData: [{
					id: '1000103',
					awm:'Headphone Bluet...',
					m416:'Escova Alisadora'
				},{
					id: '1000103',
					awm:'Headphone Bluet...',
					m416:'Escova Alisadora'
				},{
					id: '1000103',
					awm:'Headphone Bluet...',
					m416:'Escova Alisadora'
				},{
					id: '1000103',
					awm:'Headphone Bluet...',
					m416:'Escova Alisadora'
				},{
					id: '1000103',
					awm:'Headphone Bluet...',
					m416:'Escova Alisadora'
				},{
					id: '1000103',
					awm:'Headphone Bluet...',
					m416:'Escova Alisadora'
				},{
					id: '1000103',
					awm:'Headphone Bluet...',
					m416:'Escova Alisadora'
				}, ]

			}
		},
		methods: {
			change_nav(index) {
				this.current = index;
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
			changeImg(e, i) {
				this.img_src = e.url;
				this.img_list = i;
			},
			del(index) {
				this.img_list.splice(index, 1);
				if (this.img_list.length === 0) {
					this.img_src = ''
				}
			}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.fast-click-con {
		overflow: hidden;
		position: relative;
		.up {
			position: absolute;
			top: 60px;
			left: 50%;
			font-size: 40px;
			transform: translate(-50%,0)
		}
		.fast-click-form {
			float: left;
			width: 50%;
			padding: 0 30px;
			> h3 {
				margin: 20px 0;
				font-size: 18px;
			}
			.fast-copy-table {
				margin: 20px 0;
				border: 1px solid #ccc;
				border-radius: 4px;
				padding: 12px 20px ;
				.table-title {
					font-size: 16px;
					display: flex;
					justify-content: space-between;
					padding-right: 20px;
					color: #666;
					font-weight: bold;
					span {
						font-size: 14px;
						color: #aaa;
					}
				}
				.table-tips {
					margin: 6px 0 20px;
				}
				ul {
					overflow: hidden;
					margin: 8px 0;
					li {
						float: left;
						margin-right: 6px;
						height: 10px;
						width:50px;
						&:nth-of-type(1){
							background-color: #F1D1D0;
						}
						&:nth-of-type(2){
							background-color: #FFB657;
						}
						&:nth-of-type(3){
							background-color: #F1EECC;
						}
						&:nth-of-type(4){
							background-color: #E1EEC3;
						}
						&:nth-of-type(5){
							background-color: #C8E3CA;
						}
							
					}
				
				}
			}
		}
	}
</style>
