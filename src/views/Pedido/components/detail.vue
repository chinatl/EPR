<template>
   <el-dialog
	  :visible.sync="$store.state.order.show_detail"
	 >
		<div slot='title' class="erp-dialog_title">
			{{$t('pedido["Rastreamento do Pedido"]')}} | 1234567891BR
		</div>
		<div class='transport-header'>
			<div >
				{{$t('pedido["Postagem"]')}}
			</div>
			 <div class="current">
			   {{$t('pedido["Em Trânsito"]')}}
			</div>
			 <div>
			   {{$t('pedido["Entregue"]')}} 
			</div>
		</div>
		
		<div class='transport-text'>
			<p>{{$t('pedido["Objeto aguardando retirada no endereço indicado"]')}}</p>
			<p>{{$t('pedido["02/12/2017 17:45 PORTO ALEGRE / RS"]')}}</p>
		</div>
		<div class="transport-list">
			<ul>
				<li v-for='item in list'>
					<div class="date">
						<p>02/12/2017</p>
						<p>14:00</p>
					</div>
					<div class="report">
						<p>{{$t('pedido["Objeto aguardando retirada no endereço indicado Para retirá-lo, é precisoinformar o código do objeto."]')}}</p>
					</div>
				</li>
				<li>
					<div class="date">
						<p>02/12/2017</p>
						<p>14:00</p>
					</div>
					<div class="report">
						<p>Objeto andereço iirá-lo, é precisoinformar o código do objeto.</p>
					</div>
				</li>
			</ul>
		</div>
		
	</el-dialog>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 2, 3, , 2, 2],
			};
		},

		created() {

		}

	};

</script>
</template>

<style rel="stylesheet/scss" lang="scss" scoped="true">
	$titleheight:60px;
	$cosWidth:10px;
	.transport-header {
		margin: 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		>div {
			height: $titleheight;
			width: 160px;
			text-align: center;
			background-color: #e8e8e8;
			color: #666;
			line-height: $titleheight;
			font-size: 20rem;
			position: relative;
			text-align: center;
			margin: 0 20px;
			&:before {
				content: '';
				height: $titleheight;
				position: absolute;
				left: -20px;
				top: 0;
				border-style: solid;
				border-width: 30px $cosWidth;
				border-color: transparent #e8e8e8 #e8e8e8 transparent;
				display: inline-block;
			}
			&:after {
				content: '';
				height: $titleheight;
				position: absolute;
				right: -20px;
				top: 0;
				border-style: solid;
				border-width: 30px $cosWidth;
				border-color: #e8e8e8  transparent transparent #e8e8e8;
				display: inline-block;
			}
			&.current {
				color: #fff;
				background-color: #00C1DE;
				&:before {
					border-color: transparent #00C1DE #00C1DE transparent;
				}
				&:after {
					border-color: #00C1DE  transparent transparent #00C1DE;
				}
			}
		}
	}
	.transport-text {
		text-align: center;
		>p {
			font-size: 16px;
			margin-bottom: 6px;
			font-weight: bold
		}
	}

	.transport-list {
		margin-top: 20px;
		ul {
			li {
				display: flex;
				margin: 0 100px;
				height: 80px;
				border-bottom: 2px solid #ccc;
				align-items: center;
				&:nth-last-child(1) {
					border-bottom: none;
				}
				>.date {
					color: #40B4B1;
					font-size: 16px;
					font-weight: bold;
					line-height: 24px;
					text-align: center;
					margin-right: 100px;
				}
				>.report {
					font-size: 14px;
				}
			}
		}
	}

</style>
