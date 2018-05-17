<template>
	<el-dialog
		:visible.sync="$store.state.product.show_entrda"
	>
	<div slot='title' class="entrada-title">{{$t('product["Entrada de Produtos"]')}} </div>
	<div class="entrada-con">
		<div class="entrada-h3">
			<div :class=" !current ? 'item' : 'item current'" @click='current=0'><span class="span">1</span>{{$t('product["Fornecedor"]')}}</div>
			<div :class=" current ? 'item': 'item current'"  @click='current=1'><span class="span">2</span>{{$t('product["Produtos"]')}}</div>
		</div>
		<div v-show='!current'>
			<div class="entrada-select">
				<h3>{{$t('product["Fornecedor"]')}}</h3>
				<div class="entrada-t">
					<el-input v-model="user" size='small' placeholder='SKU / Nome / Marca/ ID do Anúncio'></el-input>
					<el-button type="primary" size='mini'><i class="el-icon-search ic" style="font-weight:bold"></i></el-button> 
				</div>
			</div>
			<div class="entrada-item">
				<div class="entrada-item-title">{{$t('product["Identificação"]')}}</div>
				<div class="entrada-input-item">
					<div class="label"><label for="">{{$t('product["Azul"]')}}</label></div>
					<div>
						<el-input size='small' :model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item">
					<div class="label"><label for="">{{$t('product["CNPJ/CPF"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item">
					<div class="label"><label for="">{{$t('product["Razão Social (Opcional)"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item">
					<div class="label"><label for="">{{$t('product["Nome Fantasia"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
			</div>	
			<div class="entrada-item">
				<div class="entrada-item-title">{{$t('product["Endereço"]')}}</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["Logradouro"]')}}</label></div>
					<div>
						<el-input size='small' :model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["Número"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["Complemento"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["Bairro"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["Cidade"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["Estado"]')}}</label></div>
					<div>
						<el-input size='small':model='form.a'></el-input>
					</div>
				</div>
			</div>	
			<div class="entrada-item1">
				<div class="entrada-item-title">{{$t('product["Contato"]')}}</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["E-Mail"]')}}</label></div>
					<div>
						<el-input size='small' v-model='email' disabled autosize></el-input>
					</div>
				</div>
				<div class="entrada-input-item1">
					<div class="label"><label for="">{{$t('product["Celular"]')}}</label></div>
					<div>
						<el-input size='small'v-model='phone' disabled></el-input>
					</div>
				</div>
			</div>
			<div class="entrada-btn">
				<el-button type='primary' round @click='submit'><span class="span">{{$t('product["Concluir"]')}}</span></el-button>
			</div>
		</div>
		<div v-show='current'>
			<div class="entrada-select">
				<h3>{{$t('product["Produtos"]')}}</h3>
				<div class="entrada-t">
					<el-input v-model="user" size='small' placeholder='Nome / SKU'></el-input>
					<el-button type="danger"  size='mini'><i class="el-icon-plus ic" style="font-weight:bold"></i></el-button> 
				</div>
			</div>
			 <el-table
			:data="tableData"
			tooltip-effect="dark"
			style="width: 100%"
		 	stripe
			>
				<el-table-column align='center' :label='$t(`product["Imagem"]`)'>
					<template slot-scope="prop">
								<img :src="require('@/assets/img/yashua.png')" alt="" style='height:60px'>
					  </template>
				</el-table-column>
				<el-table-column prop='name' align='center' label="SKU">
					<template slot-scope="scope">
						<span class="table_font">{{scope.row.name}}</span>
						</template>
				</el-table-column>
				<el-table-column prop='address' align='center' :label='$t(`product["Nome"]`)'>
					<template slot-scope="scope">
						<span class="table_font">{{scope.row.address}}</span>
						</template>
				</el-table-column>
				<el-table-column prop='Marca' align='center' :label='$t(`product["Quantidade"]`)'>
					<template slot-scope="scope">
						<el-input style='width:100px' size='small'></el-input>
					</template>
				</el-table-column>
				<el-table-column prop='Marca' align='center' :label='$t(`product["Preço de Venda"]`)'>
					<template slot-scope="scope">
						<el-input style='width:100px' size='small'></el-input>
					</template>
				</el-table-column>
				<el-table-column  align='center' :label='$t(`product["Estoqu"]`)'>
					<template slot-scope="scope">
						<i class="el-icon-delete" style="font-size:20px"></i>
					</template>
				</el-table-column>
			</el-table>
			<div class="entrada-btn part2">
				<span class="span">{{$t('product["Total Quantidade"]')}}: 3000</span>
				<span class="span">{{$t('product["Total Valor"]')}}: R$ 9,00</span>
				<el-button type='primary' round @click='submit'><span class="span">{{$t('product["Concluir"]')}}</span></el-button>
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
				current: 0,
				user: '',
				form: {
					a: ''
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
			submit() {
				this.$message({
					message: '恭喜你，操作成功',
					type: 'success'
				});
			}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	$fs20:18rem;
	.el-dialog {
		margin-bottom: 20px
	}

	.entrada-title {
		font-size: 20px;
		font-weight: bold;
		padding: 15px 0;
		margin: 0 30px;
		border-bottom: 2px solid #ccc;
		.span {
			padding-left: 20px;
			.el-tabs__item {
				width: 100%;
			}
		}
	}

	.entrada-con {
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
		.entrada-select {
			margin: 20px 0;
			font-size: 18px;
			h3 {
				font-weight: normal
			}
			.entrada-t {
				margin: 15px 0;
				display: flex;
				align-items: center;
				.el-input--small {
					width: 40%;
				}
				.ic {
					font-size: 16px;
				}
			}
		}
		.entrada-item {
			border: 2px solid #eee;
			border-radius: 5px;
			padding: 30px;
			position: relative;
			margin-top: 30px;
			margin-bottom: 40px;
			display: flex;
			justify-content: space-between;
			flex-flow: wrap;
			.entrada-item-title {
				position: absolute;
				top: -22px;
				left: 100px;
				padding: 10px 20px;
				height: 30px;
				background-color: #fff;
				font-size: 16px;
			}
			.entrada-input-item1 {
				width: 28%;
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
					font-size: 16px;
					font-weight: normal;
					color: #666
				}
			}
		}
		.entrada-item1 {
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
				font-size: 16px;
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
