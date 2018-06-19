<template>
<div class="card-item" v-loading.fullscreen="fullscreenLoading">
	<div class="card-item-title">{{card_data.nickname}}<!--Escova Alisadora Magic...--></div>
	<div class="card-item-con">
		<div class="vendas">
			<p class="p1">{{card_data.advertId}}</p>
			<p class="p2">Vendas: <span class="big1275">{{card_data.sold_quantity}}</span></p>
		</div>
		<div class="line"></div>
		<div class="card-item-price">R$ {{card_data.price}}</div>
	</div>
	<div class="card-item-ranking">
			<swiper :options="swiperOption">
				<swiper-slide >
					<div class="card-item-sel" >
						<el-switch v-model='v_switch' size='small' :width='36'></el-switch>
						<el-input size='mini' placeholder='Preço Mínimo' style='margin-right:4px;margin-left:10px'></el-input>
						<el-input size='mini' placeholder='Faixa' style='width:100px'></el-input>
					</div>
					<ul class="product-item">
						<li>
							<span>1º</span>
							<span>{{$t('product["Pmcell"]')}}</span>
							<span>R$ 26,00</span>
						</li>
						<li>
							<span>2º</span>
							<span>{{$t('product["Pmcell"]')}}</span>
							<span>R$ 26,00</span>
						</li>
						<li>
							<span>3º</span>
							<span>{{$t('product["Pmcell"]')}}</span>
							<span>R$ 26,00</span>
						</li>
					</ul>
				</swiper-slide>
				<swiper-slide v-if='name === "mg" '>
					<div class="card-item-sel">
						<div class='erp-search-button'>
							<el-input  size='small' placeholder='Nome / SKU' v-model='value'></el-input>
							<button class="erp-btn"><i class="el-icon-plus"></i></button>
						</div>
					</div>
					<ul class="add-product-item" >
						<li>
							<span>Escova</span>
							<span>11º</span>
							<span><i class="el-icon-close"></i></span>
						</li>
						<li>
							<span>Escova</span>
							<span>11º</span>
							<span><i class="el-icon-close"></i></span>
						</li>
						<li>
							<span>Escova</span>
							<span>11º</span>
							<span><i class="el-icon-close"></i></span>
						</li>
					</ul>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<p class='ranking_more'><span @click='open_dialog($props.name)' class='ranking_more' v-if='name !== "walmart"'>{{$t('product["Mais..."]')}}</span></p>
	</div>
	<div class="card-item-icon">
			<div @click='pause'>
				<svg-icon icon-class='pause' @click></svg-icon>
			</div>
			<div @click='$store.commit("TOGGLE_EDIT")'>
				<svg-icon icon-class='edit'></svg-icon>
			</div>
			<div>
				<svg-icon icon-class='doc'></svg-icon>
			</div>
			<div @click='$store.commit("TOGGLE_UNBIND")'>
				<svg-icon icon-class='link'></svg-icon>
			</div>
			<div @click='$store.commit("TOGGLE_ALL_DEL")'>
				<svg-icon icon-class='del' ></svg-icon>
			</div>
			<div @click='$store.commit("TOGGLE_ALL_DEL")' v-show='name==="mg"'>
				<svg-icon icon-class='del' ></svg-icon>
			</div>
		</div>
	<div class="card-mask" v-if='(name === "b2w" || name === "walmart") && (index%2-1)'>
		<svg-icon icon-class='timer' v-if='name === "walmart"'></svg-icon>
		<svg-icon icon-class='chacha' v-else></svg-icon>
		<div>
			<p>{{name === "walmart" ? "Aguardando":"Catalogação"}} </p>
			<p>{{name === "b2w" ? "Negada":"Catalogação"}}  </p>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		data() {
			return {
				show: false,
				v_switch: false,
				fullscreenLoading: false,
				value: '',
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
				},
				card_data:{}
			}
		},
		props: ['name', "index","data"],
		methods: {
			agree_item(id) {
				console.log(id)
			},
			cancae_item() {

			},
			pause() {
				this.$confirm('此操作将永久停用该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消'
					});
				});
			},
			open_dialog(name) {
				if (name === 'b2w') {
					this.$store.commit("TOGGLE_MARKET");
				} else if (name === 'mg') {
					this.$store.commit("TOGGLE_ML");
				}
			}
		},
		created() {
			this.show = this.name === 'b2w';
			this.card_data = this.data || {};
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.swiper-pagination-bullet-active {
		background-color: #00C1DE
	}

	.card-item {
		width: 240px;
		border-radius: 14px;
		float: left;
		overflow: hidden;
		border: 1px solid #ccc;
		border-radius: 14px;
		position: relative;
		.card-item-title {
			text-align: center;
			color: #666;
			font-size: 16px;
			margin: 20px 0 10px 0;
			text-decoration: underline
		}
		.card-item-con {
			margin: 10px 0;
			padding: 0 16px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			color: #666;
			.vendas {
				p {
					margin: 3px 0 6px 0;
					text-align: center;
				}
				.p1 {
					text-decoration: underline;
				}
				.p2 {
					color: #999;
					.big1275 {
						font-size: 16px;
					}
				}
			}
			.line {
				height: 36px;
				width: 1px;
				background-color: #666
			}
			.card-item-price {
				padding: 4px 8px;
				border: 1px solid #999;
				font-size: 16rem;
				font-weight: bold;
				color: #666
			}
		}
		.card-item-sel {
			padding: 0px 0px;
			margin-bottom: 8px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.el-input__inner {
				padding-left: 6px;
				padding-right: 6px;
			}
			.erp-search-button {
				.erp-btn {
					padding: 0px 0px 0px 7px;
					border-radius: 0 4px 4px 0;
					text-align: center;
				}
			}
		}
		.card-item-ranking {
			padding: 0px 20px 10px;
			ul {
				padding-bottom: 20px;
			}
			.ranking_more {
				font-size: 14rem;
				height: 16px;
				text-align: right;
				cursor: pointer;
				&:hover {
					color: #40B4B1;
					text-decoration: underline;
				}
			}
			.product-item {
				display: block;
				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 8px;
					font-size: 12rem;
					color: #999;
					padding: 6px 20px;
					&:nth-of-type(1) {
						color: #FF9A23
					}
					&:nth-of-type(even) {
						background-color: #f5f5f6;
					}
				}
			}
			.add-product-item {
				display: block;
				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 8px;
					font-size: 12rem;
					color: #666;
					padding: 6px 12px;
					&:nth-of-type(even) {
						background-color: #f5f5f6;
						color: #999;
					}
				}
			}
		}
		.card-item-icon {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 0 10px 20px;
			div {
				width: 16%;
				color: #666;
				font-weight: bold;
				background-color: #eee;
				font-size: 24rem;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				&:hover {
					background-color: #00C1DE;
					color: #fff;
				}
			}
		}
		.card-mask {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background-color: rgba(0, 0, 0, .5);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			z-index: 99;
			.svg-icon {
				font-size: 40px;
				margin: 10px 0;
			}
			div {
				font-size: 24px;
				text-align: center;
				color: #fff;
			}
		}
	}

</style>
