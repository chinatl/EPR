<template>
   <el-dialog
    :visible.sync="$store.state.order.show_new"
    >
        <div slot='title' class="erp-dialog_title">
            TitleXXX
        </div>
        <div class="menu menu--prospero">
			<ul class="menu__list">
				<li 
					@click='change_nav(1)'
					:class="current === 1 ? 'menu__item menu__item--current' : 'menu__item'" >
					<a class="menu__link" >Cliente</a>
				</li>
				<li 
					@click='change_nav(2)'
					:class="current === 2 ? 'menu__item menu__item--current' : 'menu__item'" >
					<a class="menu__link">Itens</a>
				</li>
				<li 
					@click='change_nav(3)'
					:class="current === 3 ? 'menu__item menu__item--current' : 'menu__item'" >
					<a class="menu__link">Transportador</a>
				</li>
			</ul>
		</div>
<!--        <transition-group  tag='div'>-->
        	<div class="new-order-con" v-show='current == 1' v-bind:key="1">
				<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div class="width30">
						<p>Origem de Venda</p>
						 <el-select v-model="value" placeholder="请选择" size='small' style='width:100%'>
							<el-option label='1' value='1'></el-option>
						  </el-select>
					</div>
					<div class="width30">
						<p>&nbsp;&nbsp;</p>
						<el-checkbox v-model="checked">Tornar padrão</el-checkbox>
					</div>
				</div>
				<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div class="width30">
						<p>Cliente</p>
						<div class='erp-search-button'>
							<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value' ></el-input>
							<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
						</div>
					</div>
				</div>
				<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div>
						<p>Tipo de Pessoa</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div>
						<p>CNPJ</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div>
						<p>Inscrição Estadual</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div>
						<p>Inscrição Municípal</p>
						<el-input type='text' size='small'></el-input>
					</div>
				</div>
				<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div class="width30">
						<p>CEP</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div class="width40">
						<p>Cidade</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div class="width20">
						<p>UF</p>
						  <el-select v-model="value" placeholder="请选择" size='small'>
							<el-option label='1' value='1'></el-option>
						  </el-select>
					</div >
				</div>
				<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div>
						<p>Endereço</p>
						<el-input type='text' size='small'></el-input>
					</div>
				</div>
				<div class='erp-dialog-item' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div class="width30">
						<p>Bairro</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div class="width20">
						<p>Numero</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div class="width40">
						<p>Complemento</p>
						 <el-input type='text' size='small'></el-input>
					</div>
				</div>
				<div class='erp-dialog-item' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div>
						<p>Telefone</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div>
						<p>Celular</p>
						<el-input type='text' size='small'></el-input>
					</div>
					<div>
						<p>E-Mail</p>
						 <el-input type='text' size='small'></el-input>
					</div>
				</div>
			   	<p class='erp-dialog-button'>
					<el-button type='primary' round @click='submit'>{{$t('fornecedor["Salvar"]')}}</el-button>
				</p>
			</div>
			<div class="new-order-con" v-show='current == 2' v-bind:key="2">
				<div class='erp-bar'>
					<div class='erp-search-button'>
						<el-input type='text' size='small' placeholder='Nome /  Variação / Atributo / SKU' v-model='value' style='width:300px'></el-input>
						<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
					</div>
				</div>
				<div class="erp-list" v-loading='loading'>
					<ul class="title">
						<li class="flex3">{{$t('table["Imagem"]')}}</li>
						<li class="flex3">SKU</li>
						<li class='flex5'>{{$t('table["Nome"]')}}</li>
						<li class="flex3">{{$t('table["Variação"]')}}</li>
						<li class="flex2">{{$t('table["Atributo"]')}}</li>
						<li class="flex3">{{$t('table["Quantidade"]')}}</li>
						<li class="flex2">{{$t('table["Valor"]')}}</li>
						<li class="flex2">{{$t('table["Operação"]')}}</li>
					</ul>
					<transition-group name="fade" tag='div'>
						<ul class="content" v-for='(item,index) in list' v-bind:key="index">
							<li class="flex3"><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
							<li class="flex3">{{item.value2}}</li>
							<li class='flex5'>{{item.value3}}</li>
							<li class="flex3">{{item.value4}}</li>
							<li class="flex2">{{item.value5}}</li>
							<li class="flex3">{{item.value6}}</li>
							<li class="flex2">{{item.value7}}</li>
							<li class="flex2">
								<div class="table-icon">
									<span>
										<i class="el-icon-delete"></i>
									</span>
								</div>
							</li>
						</ul>
					</transition-group>
				</div>
				<p class="erp-table-tip">
					<span>Total Quantidade: 3000</span>
					<span>Total Valor: R$ 9,00</span>
				</p>
			 	<p class='erp-dialog-button'>
					<el-button type='primary' round @click='submit'>{{$t('fornecedor["Salvar"]')}}</el-button>
				</p>
			</div>
			<div class="new-order-con" v-show='current == 3' v-bind:key="3">
				<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
					<div>
						<p>Peso</p>
						<el-input size='small'>
							<span slot='suffix'>
								<span style="color:#000;margin-top:3px;float:right">Kg</span>	
							</span>
						</el-input>
					</div>
					<div class="width20">
						<p>Centímetro Cúbico</p>
						<el-input size='small'>
							<span slot='suffix'>
								<span style="color:#000;margin-top:3px;float:right">cm3</span>	
							</span>
						</el-input>
					</div>
					<div class='width4'>
						<p>&nbsp;</p>
						<p style='text-align:center;font-size:20px;font-weight:bold'><i class="el-icon-d-arrow-right"></i></p>
					</div><div>
						<p>Comprimento</p>
						<el-input size='small'>
							<span slot='suffix'>
								<span style="color:#000;margin-top:3px;float:right">Cm</span>	
							</span>
						</el-input>
					</div><div>
						<p>Largura</p>
						<el-input size='small'>
							<span slot='suffix'>
								<span style="color:#000;margin-top:3px;float:right">Cm</span>	
							</span>
						</el-input>
					</div><div>
						<p>Altura</p>
						<el-input size='small'>
							<span slot='suffix'>
								<span style="color:#000;margin-top:3px;float:right">Cm</span>	
							</span>
						</el-input>
					</div>
				</div>
				<div class="new-order-item">
					<h3>Selecione o tipo de serviço:</h3>
					<div class="order-item-correios">
						<div class="correios-list">
							<h4>Correios</h4>
							<div class="correios-logo">
								<img :src="require('@/assets/img/Correios.png')" alt="">
							</div>
							<p class="correios-message">
								<span>Normal</span>
								<span>R$ 12,50</span>
								<span>5 Dias</span>
							</p>
							<p class="correios-message">
								<span>Normal</span>
								<span>R$ 12,50</span>
								<span>5 Dias</span>
							</p>
						</div>
						<div class="correios-list">
							<h4>jadlog</h4>
							<div class="correios-logo">
								<img :src="require('@/assets/img/jadlog.png')" alt="">
							</div>
							<p class="correios-message">
								<span>Normal</span>
								<span>R$ 12,50</span>
								<span>5 Dias</span>
							</p>
							<p class="correios-message">
								<span>Normal</span>
								<span>R$ 12,50</span>
								<span>5 Dias</span>
							</p>
						</div>
						<div class="correios-list">
							<h4>Braspress</h4>
							<div class="correios-logo">
								<img :src="require('@/assets/img/bra.png')" alt="">
							</div>
							<p class="correios-message">
								<span>Normal</span>
								<span>R$ 12,50</span>
								<span>5 Dias</span>
							</p>
							<p class="correios-message">
								<span>Normal</span>
								<span>R$ 12,50</span>
								<span>5 Dias</span>
							</p>
						</div>
					</div>
					<p class='erp-dialog-button'>
						<el-button type='primary' round @click='submit'>{{$t('fornecedor["Salvar"]')}}</el-button>
					</p>
				</div>
			</div>
<!--		</transition-group>-->
    </el-dialog> 
</template>
<script>
	export default {
		data() {
			return {
				current: 1,
				checked: false,
				loading: false,
				value:'',
				list: [{
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Vermelho',
						value5: '220V',
						value6: '1',
						value7: 'R$ 25,00',
					},
					{
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Branco',
						value5: '220V',
						value6: '2',
						value7: 'R$ 25,00',
					}, {
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Branco',
						value5: '220V',
						value6: '2',
						value7: 'R$ 25,00',
					},

				]
			};
		},
		methods: {
			change_nav(current) {
//				this.current = 0;
				this.current = current;
			},
			submit(){
				
			}
		}
	};

</script>
<style rel='stylesheet/scss' lang="scss">
	.new-order-item {
		padding: 10px;
		h3 {}
		.order-item-correios {
			display: flex;
			margin-top: 20px;
			margin-bottom: 20px;
			overflow: hidden;
			.correios-list {
				padding: 20px;
				border-radius: 8px;
				border: 2px solid #aaa;
				border: 2px solid #aaa;
				margin-right: 20px;
				h4 {
					text-align: center;
					color: #000;
					font-size: 20px;
					margin-bottom: 10px;
					margin-top: 10px;
				}
				.correios-logo {
					width: 200px;
					height: 80px;
					margin-bottom: 20px;
					display: flex;
					align-items: center;
					text-align: center;
					img {
						width: 100%;
					}
				}
				.correios-message {
					display: flex;
					justify-content: space-between;
					font-size: 13px;
					font-weight: bold;
					padding-bottom: 8px;
					margin-top: 8px;
					&:nth-of-type(1) {
						border-bottom: 2px solid #ccc;
					}
				}
			}
		}
	}

</style>
