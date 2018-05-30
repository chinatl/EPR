<template>
    <div style="overflow:hidden">
		<div class="setting-header">
			{{$t(`setting['Senha']`)}}
		</div>
		<div class="setting-content">
			<div class="setting-content-input">
				<span class='name '>{{$t(`setting['Senha de Login']`)}}:</span>
				<el-input size='small' type='password' style='width:50%'></el-input>
				<i class='el-icon-edit-outline'></i>
				<i class='el-icon-refresh'></i>
			</div>
			<div class="setting-content-input">
				<span class='name'>{{$t(`setting['Telefone']`)}}:</span>
				<el-input size='small' value='xxxxxxxx' style='width:50%'></el-input>
				<i class='el-icon-edit-outline'></i>
				<i class='empty'></i>
			</div>
			<div class="setting-content-input">
				<span class='name'>{{$t(`setting['Senha de Administração']`)}}:</span>
				<el-input size='small' type='password' style='width:50%'></el-input>
				<i class='el-icon-edit-outline'></i>
				<i class='el-icon-refresh'></i>
			</div>
		</div>
		<div class="setting-list">
			<div class="setting-list-item">
				<div class="setting-header">
					{{$t(`setting['Lista de Operadores']`)}}
				</div>
				<div class="erp-list" v-loading='loading'>
					<ul class="title">
						
						<li>{{$t(`table['Lista de Operadores']`)}}</li>
						<li>{{$t(`table['Grupo']`)}}</li>
						<li>{{$t(`table['Acessos']`)}}</li>
						<li>{{$t(`table['Operação']`)}}</li>
					</ul>
					<transition-group name="fade" tag='div'>
						<ul class="content no-bgc" v-for='(item,index) in list' v-bind:key="index">
							<li>{{item.item1}}</li>
							<li>{{item.item2}}</li>
							<li>{{item.item3}}</li>
							<li>
								<div class="table-icon">
									<span><i class='el-icon-edit-outline' @click='$store.commit("TOGGLE_FORNECEDOR_MENU")'></i></span>
									<span><i class='el-icon-delete' @click='$store.commit("TOGGLE_DELETE")'></i></span>
								</div>
							</li>
						</ul>
					</transition-group>
				</div>
				 <p class='erp-dialog-button'>
            		<el-button type='primary' round @click='add' size='small'>{{$t(`button['Adicionar operador']`)}}</el-button>
        		</p>
			</div>
			<div class="setting-list-item">
				<div class="setting-header">
					{{$t(`table['Grupo']`)}}
				</div>
				<div class="erp-list" v-loading='loading'>
					<ul class="title">
						<li>{{$t(`table['Grupo']`)}} </li>
						<li>{{$t(`table['Acessos']`)}}</li>
						<li>{{$t(`table['Operação']`)}}</li>
					</ul>
					<transition-group name="fade" tag='div'>
						<ul class="content no-bgc" v-for='(item,index) in list1' v-bind:key="index">
							<li>{{item.item1}}</li>
							<li>{{item.item2}}</li>
							<li>
								<div class="table-icon">
									<span><i class='el-icon-edit-outline' @click='$store.commit("TOGGLE_FORNECEDOR_MENU")'></i></span>
									<span><i class='el-icon-delete' @click='$store.commit("TOGGLE_DELETE")'></i></span>
								</div>
							</li>
						</ul>
					</transition-group>
					 <p class='erp-dialog-button'>
            			<el-button type='primary' round @click='add' size='small'><li>{{$t(`button['Criar Grupo']`)}}</li></el-button>
        			</p>
				</div>
			</div>
		</div>
		<div class="setting-header">
			{{$t(`setting['Taxa de Comissão']`)}}
		</div>
		<div class="setting-item">
			<div><!-- class="filter-gray"-->
				<h6>Mercado Livre</h6>
				<div class="setting-item-img">
					<img :src="require('@/assets/market/market-liver.png')" alt="">
				</div>
				<p class="setting-item-tip">
					<span>{{$t(`setting['Clássico']`)}}</span>
					<span>{{$t(`setting['Premium']`)}}</span>
				</p>
				<div class="setting-item-footer">
					<div class='setting-search-button'>
						<el-input type='text' size='small' v-model='value'></el-input>
						<el-input type='text' size='small' v-model='value1'></el-input>
						<el-button size='mini' type='primary'><i class="el-icon-check"></i></el-button>
					</div>
				</div>
			</div>
			<div><!-- class="filter-gray"-->
				<h6>B2W</h6>
				<div class="setting-item-img">
					<img :src="require('@/assets/market/market-b2w.png')" alt="">
				</div>
				<p class="setting-item-tip">
					<span>{{$t(`setting['Comissão Mkt']`)}}.</span>
				</p>
				<div class="setting-item-footer">
					<div class='erp-search-button'>
						<el-input type='text' size='small' placeholder='Nome / SKU' v-model='b2w'></el-input>
						<el-button size='small' type='primary'>ok</el-button>
					</div>
				</div>
			</div>
			<div><!-- class="filter-gray"-->
				<h6>{{$t(`setting['Comissão Mkt']`)}}..</h6>
				<div class="setting-item-img">
					<img :src="require('@/assets/market/wmarket-woerma.png')" alt="">
				</div>
				<p class="setting-item-tip">
					<span>{{$t(`setting['Comissão Mkt']`)}}..</span>
				</p>
				<div class="setting-item-footer">
					<div class='erp-search-button'>
						<el-input type='text' size='small' placeholder='Nome / SKU' v-model='walmart'></el-input>
						<el-button size='small' type='primary'>ok</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				loading:false,
				value: '11%',
				value1: '16%',
				b2w: '16%',
				walmart: '16%',
				list: [{
					item1: 'Ricardo',
					item2: 'Vendas',
					item3: 'Ver Acessos',
				}, {
					item1: 'Rodrigo',
					item2: 'Estoquista',
					item3: 'Ver Acessos',
				}, {
					item1: 'Pedro',
					item2: 'Expedição',
					item3: 'Ver Acessos',
				}],
				list1: [{
					item1: 'Vendas',
					item2: 'Ver Acessos',
				}, {
					item1: 'Estoquista',
					item2: 'Ver Acessos',
				}, {
					item1: 'Expedição',
					item2: 'Ver Acessos',
				}, ]
			}
		},
		methods: {
			add() {

			}
		}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>
	.setting-header {
		color: #999;
		font-weight: bold;
		font-size: 20rem;
		margin: 0px 0 20px 0;
	}

	.setting-content {
		border-bottom: 2px solid #ccc;
		padding-bottom: 15px;
		padding-left: 40px;
		margin-bottom: 25px;
		.setting-content-input {
			display: flex;
			margin: 10px 0;
			align-items: center;
			.name {
				width: 300px;
				font-size: 18rem;
				display: inline-block;
				color: #999;
				font-weight: 700;
				margin-right: 20px;
			}
			i {
				font-size: 20px;
				margin-left: 12px;
			}
		}
	}

	.setting-list {
		display: flex;
		justify-content: space-between;
		border-bottom: 2px solid #ccc;
		padding-bottom: 25px;
		margin-bottom: 25px;
		.setting-list-item {
			width: 48%
		}
	}

	.setting-item {
		padding: 0 40px 40px 40px;
		display: flex;
		>div {
			width: 240px;
			min-width: 240px;
			border: 1px solid #ccc;
			border-radius: 16px;
			overflow: hidden;
			margin-right: 40px;
			margin-top: 10px;
			padding: 20px;
			h6 {
				text-align: center;
				font-size: 18px;
				height: 40px;
				line-height: 40px
			}
			.setting-item-img {
				height: 100px;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					/*					width: 100px;*/
				}
			}
			.setting-item-tip {
				text-align: left;
				margin-bottom: 6px;
				height: 40px;
				line-height: 40px;
				font-size: 16rem;
				color: #000;
				span {
					padding-left: 6px;
					border-left: 2px solid #999;
					margin-right: 12px;
				}
			}
			.setting-item-footer {
				.el-input__inner {
					padding: 0 6px;
				}
				.setting-search-button {
					display: flex;
					justify-content: center;
					align-items: center;
					.el-button--mini {
						padding: 7px;
						border-radius: 0 4px 4px 0;
					}
					.el-input__inner {
						border-radius: 4px 0 0 4px;
					}
					i {
						font-size: 16px;
					}
					.el-button--small {
						padding: 8px;
						border-radius: 0 4px 4px 0;
						span {
							font-size: 14px;
						}
					}
				}
			}

		}
	}

</style>
