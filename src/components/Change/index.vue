<template>
    <el-dialog
      title="Alterar Plano | Plano Gratuito"
      :visible.sync="$store.state.title"
      width="70%"
    >
    <div class="ms-content">
      <div class="item" v-for='(item,index) in [1,3,4]' @mouseenter='mouseenter(index)' @mouseleave='mouseleave(index)'>
           <h3>PLANO GRATUITO</h3>
           <div class="content">
               <h4>Vantagens</h4>
               <p>Gerencie até 3 contas do Mercado Livre</p>
               <p>Gerencie até 3 contas do Mercado Livre</p>
               <p>Gerencie até 3 contas do Mercado Livre</p>
               <p>Gerencie até 3 contas do Mercado Livre</p>
               <p>Gerencie até 3 contas do Mercado Livre</p>
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
    <p class="tips">*O plano contratado entrará em vigor dia 20/04/2018</p>
    <p  class="tips" style='color:#1AA758'>Desejo que o plano entre em vigor agora.(Será cobrado o valor de R$ 50,00 sobre a diferença de valor no periodo de “hoje” à 20/04/2018)</p>

    </el-dialog>
</template>


<script>
	export default {
		data() {
			return {
				centerDialogVisible: false,
				current: 5
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
		text-indent: 2em
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
					margin-bottom: 10px;
					font-size: 12px
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
