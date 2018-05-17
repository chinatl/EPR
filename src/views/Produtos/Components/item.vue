<template>
<div class="card-item" v-loading.fullscreen="fullscreenLoading">
	<div class="card-item-title" :style="{backgroundColor: getBgc($props.name) }">
		<img :src="require('@/assets/img/mg.png')" v-if='$props.name === "mg" '>
		<img :src="require('@/assets/img/b2w.png')" v-if='$props.name === "b2w" '>
		<img :src="require('@/assets/img/wrm.png')" v-if='$props.name === "wrm" '>
		<div class="line"></div>
		<div class="intr" :style='{color: getColor($props.name)}'>
			<p >
				{{$props.name ==='mg'? 'MegaHaribaba' : 'Pmcell'}}
			</p>
			<p>MLB12345678</p>
		</div>
	</div>
	<div class='card-item-body'>
		<p class="hair">{{$t('product["Escova Alisadora Magic Hair"]')}}</p>
		<div class="card-item-con">
			<div class="vendas">
				<p class="p1">{{$t('product["Vendas"]')}}</p>
				<p class="p2">1275</p>
			</div>
			<div class="line"></div>
			<div class="card-item-price">R$ 25,00</div>
		</div>
		<div class="card-item-sel">
			<el-switch v-model='v_switch'></el-switch>
			<el-input size='mini' placeholder='Preço Mínimo' style='margin:0 10px'></el-input>
			<el-input size='mini' placeholder='Faixa' style='margin:0 10px'></el-input>
		</div>
		<div class="card-item-ranking">
			<ul>
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
			<p class='ranking_more'><span @click='open_dialog($props.name)' class='ranking_more' v-if='$props.name !== "wrm"'>{{$t('product["Mais..."]')}}</span></p>
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
			<div @click='$store.commit("TOGGLE_DELETE")'>
				<svg-icon icon-class='del' ></svg-icon>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		data() {
			return {
				v_switch: false,
				fullscreenLoading: false
			}
		},
		props: ['name'],
		methods: {
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
			getColor(name) {
				if (name === 'b2w') {
					return '#000'
				} else if (name === 'mg') {
					return '#000'
				} else if (name === 'wrm') {
					return '#fff'
				}
			},
			getBgc(name) {
				if (name === 'b2w') {
					return '#52DDDA'
				} else if (name === 'mg') {
					return '#FBDE08'
				} else if (name === 'wrm') {
					return '#2B4EBF'
				}
			},
			open_dialog(name) {
				if (name === 'b2w') {
					this.$store.commit("TOGGLE_MARKET");
				} else if (name === 'mg') {
					this.$store.commit("TOGGLE_ML");
				}
			}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.card-item {
		border-radius: 14px;
		overflow: hidden;
		.card-item-title {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 15px 10px;
			img {}
			.line {
				height: 40px;
				width: 1px;
				background-color: #aaa
			}
			.intr p {
				margin-bottom: 4px;
				font-weight: bold;
				text-align: center;
				font-size: 12rem;
			}
		}
		.card-item-body {
			border: 1px solid #ccc;
			border-radius: 0 0 14px 14px;
			.hair {
				text-align: center;
				margin: 15px 0;
				font-size: 12rem;
				font-weight: bold
			}
			.card-item-con {
				margin: 10px 0;
				padding: 0 12px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.vendas {
					p {
						margin-bottom: 6px;
						font-size: 17rem;
						font-weight: bold;
						text-align: center;
					}
					.p1 {
						color: #40B4B1;
					}
					.p2 {}
				}
				.line {
					height: 50px;
					width: 2px;
					background-color: #ccc
				}
				.card-item-price {
					padding: 4px 6px;
					border: 1px solid #ccc;
					font-size: 16rem;
					font-weight: bold;
				}
			}
			.card-item-sel {
				padding: 0px 15px;
				display: flex;
				justify-content: space-around;
				align-items: center
			}
			.card-item-ranking {
				padding: 20px 20px 10px;
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
				ul li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 8px;
					font-size: 12rem;
					font-weight: bold
				}
			}
			.card-item-icon {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 0 10px 20px;
				div {
					width: 16%;
					color: #000;
					font-weight: bold;
					background-color: #eee;
					font-size: 24rem;
					height: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					&:hover {
						background-color: #DC044D;
						color: #fff;
					}
				}
			}

		}
	}

</style>
