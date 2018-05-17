<template>
	<div class="main-box">
		<div class="erp-header">
			<h3>{{$t('Dashboard["Dashboard"]')}} | {{$t('Dashboard["Novidades"]')}}</h3>
			<div class="date">25/04/2018</div>
		</div>
		<div class="card">
			<div class="item card1">
				<img :src="require('@/assets/img/car.png')" alt="" class="img">
				<div class="title">{{$t('Dashboard["Novos Pedidos"]')}}</div>
				<div class="price">
					<span class="bignumber">30</span>
					<span class='line'></span>
					<span class="rt">R$ 125,00</span>
				</div>
				<div class="action">
					<span class="Detalhes">{{$t('Dashboard["Detalhes"]')}}</span>
					<img :src="require('@/assets/img/arrow.png')" alt="">
				</div>
			</div>
			<div class="item card1">
				<img :src="require('@/assets/img/wx.png')" alt="" class="xinxi">
				<div class="title">{{$t('Dashboard["Novos Pedidos"]')}}</div>
				<div class="price">
					<span class="bignumber">30</span>
				</div>
				<div class="action">
					<span class="Detalhes">{{$t('Dashboard["Detalhes"]')}}</span>
					<img :src="require('@/assets/img/arrow.png')" alt="">
				</div>
			</div>
			<div class="item card1">
				<img :src="require('@/assets/img/xinxi.png')" alt="" class="xinxi">
				<div class="title">{{$t('Dashboard["Novos Pedidos"]')}}</div>
				<div class="price">
					<span class="bignumber">30</span>
				</div>
				<div class="action">
					<span class="Detalhes">{{$t('Dashboard["Detalhes"]')}}</span>
					<img :src="require('@/assets/img/arrow.png')" alt="">
				</div>
			</div>
		</div>
		<div class="erp-header">
			<h3>{{$t('Dashboard["Estatísticas"]')}}</h3>
		</div>
		<div class="card">
			<div class="item card2">
				<div class="card2-content">
					<p>{{$t('Dashboard["PRODUTOS"]')}}</p>
					<p>{{$t('Dashboard["CADASTRADOS"]')}}</p>
					<span class='num30'>30</span>
					<img :src="require('@/assets/img/zhengfangxin.png')" alt="" class="showimg">
				</div>
				<div class="action">
					<span class="Detalhes">{{$t('Dashboard["Detalhes"]')}}</span>
					<img :src="require('@/assets/img/arrow.png')" alt="">
				</div>
			</div>
			<div class="item card2">
				<div class="card2-content">
					<p>{{$t('Dashboard["PRODUTOS"]')}}</p>
					<p>{{$t('Dashboard["CADASTRADOS"]')}}</p>
					<span class='num30'>30</span>
					<img :src="require('@/assets/img/laba.png')" alt="" class="showimg">
				</div>
				<div class="action">
					<span class="Detalhes">{{$t('Dashboard["Detalhes"]')}}</span>
					<img :src="require('@/assets/img/arrow.png')" alt="">
				</div>
			</div>
			<div class="item card2">
				<div class="card2-content">
					<p>{{$t('Dashboard["anúncios"]')}}</p>
					<p>{{$t('Dashboard["publicados"]')}}</p>
					<span class='num30'>30</span>
					<img :src="require('@/assets/img/qianbao.png')" alt="" class="showimg">
				</div>
				<div class="action">
					<span class="Detalhes">{{$t('Dashboard["Detalhes"]')}}</span>
					<img :src="require('@/assets/img/arrow.png')" alt="">
				</div>
			</div>
			<div class="item card2">
				<div class="card2-content">
					<p>{{$t('Dashboard["pedidos"]')}}</p>
					<p>{{$t('Dashboard["em trânsito"]')}}</p>
					<span class='num30'>30</span>
					<img :src="require('@/assets/img/che.png')" alt="" class="showimg">
				</div>
				<div class="action">
					<span class="Detalhes">{{$t('Dashboard["Detalhes"]')}}</span>
					<img :src="require('@/assets/img/arrow.png')" alt="">
				</div>
			</div>
		</div>
		<pie-chart class='pie'></pie-chart>
		<div class="erp-header">
			<h3>{{$t('Dashboard["Ranking"]')}}</h3>
		</div>
		<div class="card">
			<div class="card3"  @mouseenter='mouseenter(index)' @mouseleave='mouseleave(index)' v-for='(item,index) in [1,2,3,4]'>
				<div class="card3-title">
					{{$t('Dashboard["Faturamento"]')}}
				</div>
				<div class="card3-con">
					<ul>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
						<li v-show='index != current'>
							<img :src="require('@/assets/img/shouyinji.png')" alt="" class="card3-img">
							<span class="address">{{$t('Dashboard["Mini Caixinha de Som"]')}}</span>
							<span class="blues">R$ 225,00</span>
						</li>
					</ul>
					<div class="card3-btn"  v-show='index == current'>
						<el-button type="primary">
							<span class="span">{{$t('Dashboard["Ver mais"]')}}</span><img :src="require('@/assets/img/arrow.png')" alt="" class="span-img">
						</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import pieChart from './components/pie'
	export default {
		data() {
			return {
				current:5,
			}
		},
		components: {
			pieChart
		},
		methods: {
			mouseenter(index) {
				this.current = index;

			},
			mouseleave(index) {
				this.current = 5;
			}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	$link-size: 30px;
	$bgc:#0F6E93;
	.main-box {
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 2px solid #ccc;
			padding-bottom: 20px;
			padding-right: 20px;
			.date {
				font-size: 14px
			}
		}
		.card {
			display: flex;
			justify-content: space-between;
			padding: 40px 0;
			margin-bottom: 40px;

			.item {
				background-color: #eee;
				padding-top: 30px;
				position: relative;
				overflow: hidden;
				.img {
					position: absolute;
					top: 0;
					right: -20px;
				}
				.xinxi {
					position: absolute;
					top: -20px;
					right: -30px;
				}
				>.title {
					padding-left: 20px;
					color: #999;
					font-size: 20px
				}
				>.price {
					margin: 20px 0;
					padding-left: 20px;
					display: flex;
					align-items: center;
					>.bignumber {
						font-size: 40px;
						color: #999
					}
					>.line {
						display: inline-block;
						width: 2px;
						height: 30px;
						background-color: #999;
						margin: 0 20px
					}
					>.rt {
						color: $bgc;
						font-weight: bold;
						font-size: 20px;
					}
				}
				>.action {
					display: flex;
					align-content: center;
					justify-content: space-between;
					padding: 10px 20px;
					.Detalhes {
						color: #fff
					}
					img {
						cursor: pointer
					}
				}
			}
		}
		.card1 {
			width: 31%;
			.action {
				background-color: $bgc;
			}
		}
		.card2 {
			width: 20%;
			&:hover {
				background-color: rgb(192, 69, 104);
				.card2-content {
					p,
					.num30 {
						color: #fff
					}
				}
			}
			.card2-content {
				position: relative;
				width: 100%;
				height: 240px;

				.showimg {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%)
				}
				p {
					padding: 0 20px;
					font-weight: bold;
					margin-bottom: 10px;
					color: #999
				}
				.num30 {
					font-size: 40px;
					color: #999;
					position: absolute;
					bottom: 20px;
					left: 20px;
				}
			}
			.action {
				background-color: #00A952
			}
		}
		.card3 {
			position: relative;
			overflow: hidden;
			width: 23%;
			padding: 0 0 40px 0;
			.card3-title {
				text-align: center;
				height: 60px;
				line-height: 60px;
				background-color: #2D2D2D;
				color: #fff;
				font-size: 18px;
			}
			.card3-con {
				height:700px;
				border: 2px solid #ccc;
				border-top: none;
				padding: 20px 15px 40px 15px;
				ul {
					li {
						display: flex;
						justify-content: space-between;
						font-size: 14px;
						align-items: center;
						height: 60px;
						.blues {
							color: #40b4b1;
							width: 70px;
						}
						.card3-img {
							width: 50px;
						}
						.address {}
					}
				}
				.card3-btn {
					text-align: center;
					margin-top: 20px;
					.span {
						margin: 0 15px;
						vertical-align: middle
					}
					.span-img {
						margin: 0 15px;
						vertical-align: middle
					}

				}
			}
		}
		.pie {
			margin-bottom: 40px
		}
	}

</style>
