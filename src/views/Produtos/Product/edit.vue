<template>
	<el-dialog
		:visible.sync="$store.state.product.show_edit"
	>
	<div slot='title' class="edit-title">
		<div class="div1">Title</div>
		<div class="div2">Selecione o marketplace:</div>
		<div class="div3">
			<el-select size='small' placeholder='Mercado Livre | MegaHariba...' style='width:240px'v-model="value">
				<el-option value='1' label='Mercado Livre | MegaHariba...'></el-option>
			</el-select>
		</div>
	</div>
	<div class="entrada-con">
		<div class="entrada-h3">
			<div :class=" current ? 'item' : 'item current'" @click='current=1'><span class="span">1</span>Dados Gerais</div>
			<div :class=" !current ? 'item': 'item current'"  @click='current=0'><span class="span">2</span>Video e Imagens</div>
		</div>
		<div v-show='current'>
			<div class="edit-form">
				<p class="label">Clonar <i class="el-icon-star-on"></i></p>
				<el-input placeholder='URL do anúncio Mercado Livre / ID do anúncio Mercado Livre / SKU B2W ' size='small' v-model='value'></el-input>
			</div>
			<div class="edit-form">
				<p class="label">Titulo</p>
				<el-input placeholder='Escova Alisadora Magic Hair' size='small' v-model='value'></el-input>
			</div>
			<div class="edit-item">
				<div class="entrada-item-title">Descrição</div>
				<div class="edit-input-item">
					<div class="label"><label for="">Marketplace</label></div>
					<div>
						<el-select size='small' :model='form.a'>
							<el-option value='1' label='Texto'></el-option>
						</el-select>
					</div>
					<div class="edit-textarea">
						<el-input
						  type="textarea"
						  :autosize='true'
						  v-model="textarea3">
						</el-input>
					</div>
				</div>
			</div>
			<div class="edit-abled">
				<div class="edit-form">
					<p class="label">Garantia</p>
					<el-input  v-model='Garantia' disabled size='small'></el-input>
				</div>
				<div class="edit-form">
					<p class="label">Categoria</p>
					<el-input  v-model='Categoria' disabled size='small' style='width:300px'></el-input>
				</div>
			</div>	
			<div class="edit-item">
				<div class="entrada-item-title">Precificação</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">Exposição</label></div>
					<div>
						<el-input size='small' v-model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">Custo</label></div>
					<div>
						<el-input size='small'v-model='form.Custo' palceholader='R$ 22,00' disabled></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">Lucratividade</label></div>
					<div>
						<el-input size='small' v-model='form.Lucratividade' disabled></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">Preço de Venda</label></div>
					<div>
						<el-input size='small' v-model='form.a' placeholder='R$ 22,00'></el-input>
					</div>
				</div>
			</div>	
			<div class="edit-item1">
				<div class="entrada-item-title">Frete</div>
				<div class="edit-checkbox">
					<p><el-checkbox v-model="checked1"><span style='margin-left:20px'>Frete Grátis</span></el-checkbox></p>
					<p><el-checkbox v-model="checked"><span style='margin-left:20px'>Por conta do Cliente</span></el-checkbox></p>
				</div>
			</div>
			<div class="entrada-btn">
				<el-button type='primary' round @click='submit'><span class="span">Concluir</span></el-button>
			</div>
		</div>
		<div v-show='!current'>
			<div class="entrada-select">
				<h3>Produtos</h3>
				<div class="entrada-t">
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
						<p>Adicionar Foto</p>
						<p>Principal</p>
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
				  <div class="el-upload__text">Arraste e solte sua imagem aqui ou c lique nesta área</div>
				</el-upload>
			</div>
			<div class="edit-nav">
				<ul class="nav-item">
					<li>Principal</li>
					<li>Preto</li>
					<li>Branco</li>
					<li>Vermelho</li>
					<li>Azul</li>
				</ul>
				<ul class="block-img">
					<li v-for='(item,index) in img_list' @mouseenter='mouseenter(item.url)'>
						<img :src="item.url" alt="" class="item-img">
						<i class="el-icon-close" @click='del(index)'></i>
					</li>
				</ul>
			</div>
			<div class="edit-item">
				<div class="entrada-item-title">Descrição</div>
				<div class="edit-input-item">
				<div class="edit-form">
					<p class="label">Adicionar URL do Youtube</p>
					<el-input  v-model='form.a'  size='small'></el-input>
				</div>
				
				</div>
			</div>
			<div class="entrada-btn part2">
				<el-button type='primary' round @click='submit'><span class="span">Concluir</span></el-button>
			</div>
</div>
</div>
</el-dialog>
</template>

<script>
	//	import myInput from '@/components/common/input'
	export default {
		data() {
			return {
				value:"value",
				fileList: [],
				img_list: [],
				img_src: '',
				select: '2',
				checked: true,
				checked1: false,
				Garantia: '3 Meses',
				Categoria: 'Acessórios / GPS / Aparelhos / Outros',
				value: '',
				textarea3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui mi, gravida molestie convallis sed, sollicitudin in magna. Aliquam erat volutpat. Aliquam erat volutpat. Morbi porttitor, turpis vitae semper interdum, augue mi euismod mauris, a finibus ipsum nunc gravida lectus. Vestibulum sit amet lectus tristique, blandit tellus ac, tempus purus. Quisque suscipit dapibus ligula, nec rhoncus velit congue id. Nullam in tortor turpis. Donec nec convallis elit, id vulputate justo. Fusce eu tortor tristique, laoreet nisi quis, laoreet odio. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies augue felis, ac cursus neque faucibus bibendum. Integer quis nibh lobortis, tempor elit sit amet, faucibus neque. Vivamus tincidunt quam ante, sit amet iaculis massa molestie vel.",
				current: 1,
				user: '',
				form: {
					a: '',
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
				}, ]

			}
		},
		methods: {
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
			del(index){
				this.img_list.splice(index,1);
				if(this.img_list.length === 0){
					this.img_src = ''
				}
			}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	$fs20:18rem;
	.el-dialog {
		margin-bottom: 20px
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

	.edit-nav {
		margin-top: 20px;
		font-size: 20rem;
		ul.nav-item {
			overflow: hidden;
			li {
				float: left;
				margin-right: 40px
			}
		}
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

</style>
