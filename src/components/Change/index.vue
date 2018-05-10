<template>
    <el-dialog
      :title="$t(`layout['修改']`)+'|'+$t(`layout['免费使用版']`)"
      :visible.sync="$store.state.title"
      width="70%"
    >
    <div class="ms-content">
      <div class="item" v-for='(item,index) in data' @mouseenter='mouseenter(index)' @mouseleave='mouseleave(index)'>
           <h3>{{item.title}}</h3>
           <div class="content">
               <h4>Vantagens</h4>
			   <div style='height:280px;align-items:center;flex:column;justify-content:space-between;'>
			     	<p>{{item.label}}</p>
					<p>{{item.p1}}</p>
					<p>{{item.p2}}{{}}</p>
					<p>{{item.p3}}</p>
					<p>{{item.p4}}</p>
					<p>{{item.p5}}</p>
					<p>{{item.p6}}</p>
					<p>{{item.p7}}</p>
					<p>{{item.p8}}</p>
					<p>{{item.p9}}</p>
			   </div>
               <div class="number">
                   <span>R$</span>
                   <span>39</span>
                   <span class="small">00</span>
               </div>
               <div class="btn" v-show='index == current'>
                   <el-button type='info'>CONTRATAR</el-button>
               </div>
           </div>
       </div>
    </div>
	<p class="tips">{{$t(`layout["*合同将于2018年4月20日生效"]`)}}</p>
	<p class='tips'>
		<el-checkbox id='checkbox'>
		
		</el-checkbox>
		<el-label for="checkbox">
			{{$t(`layout["我希望这个计划现在生效。"]`)}}<br />
			<span style="margin-left:18px">{{$t(`layout["(在“今日”至2018年4月20日的价值差异上，将收取50美元的价值)"]`)}}</span>
		</el-label>
	</p>
    </el-dialog>
</template>


<script>
	export default {
		data() {
			return {
				centerDialogVisible: false,
				current: 5,
				data:[
					{
						title:'PLANO GRATUITO',
						label:'Gerencie até 3 contas do Mercado Livre',
						p1:'Precificação Automatica Mercado Livre',
						p2:'Ranqueamento por palavra chave.',
						p3:'Clonagem de Anuncio com um clique.',
						p4:'Suporte por E-mai',
								
					},{
						title:'PLANO STARTER',
						label:'Copiar anuncios de uma conta mercado livre ',
						p1:'Copiar anuncios de uma conta mercado livre ',
						p2:'para a sua em massa (1 vez por mês)',
						p3:'Gerencie até 10 contas Mercado Livre',
						p4:'Precificação Automatica B2W e Mercado Livre.',
						p5:'Integração com B2W e Walmart',
						p6:'Acessório para abertura de contas em',
						p7:'Marketplaces (cobrança a parte).',
						p8:'Suporte por chat e e-mail'
					},	{
						title:'PLANO PREMIUM',
						label:'Copiar anuncios de uma conta mercado livre ',
						p1:'Copiar anuncios de uma conta mercado livre ',
						p2:'para a sua em massa (1 vez por mês)',
						p3:'Gerencie até 10 contas Mercado Livre',
						p4:'Precificação Automatica B2W e Mercado Livre.',
						p5:'Integração com B2W e Walmart',
						p6:'Acessório para abertura de contas em',
						p7:'Marketplaces (cobrança a parte).',
						p8:'Suporte por chat e e-mail',
					}
				]
			}
		},
		methods: {
			mouseenter(index) {
				console.log(index)
				this.current = index;
			},
			mouseleave(index) {
				this.current = 5;
			}

		}
	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.tips {
		padding-left:20px
	}

	.ms-content {
		border-top: 2px solid #ccc;
		padding: 20px 10px;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		div.item {
			border-radius: 30px;
			width: 30%;
			overflow: hidden;
			background-color: #f4f4f4;
			&:hover {
				h3 {
					background-color: #65AFAD;
				}
				.btn {
					.el-button--info {
						color: #fff;
						background-color: #1AA758;
						border-color: #1AA758;
					}
				}
			}
			h3 {
				background-color: #BABABA;
				text-align: center;
				padding: 20px
			}
			.content {
				text-align: center;
				padding-bottom: 20px;
				h4 {
					padding: 10px;
				}
				p {
					display:inline-block;
					width:80%;
					height:24px;
					margin-bottom: 3px;
					font-size: 5rem
				}
				div.number {
					span {
						font-size: 30px;
						margin-right: 12px;
						font-weight: bold;
					}
					.small {
						font-size: 14px;
						vertical-align: top
					}
				}
				.btn {
					margin-top: 10px
				}
			}
			
		}
	}

</style>
