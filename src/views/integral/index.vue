<template>
<div>
    <div class='erp-header'>
        <h3>{{$t('integral["Marketplaces"]')}}</h3>
    </div>
    <div class="integral-item">
    	<div v-for='item in mercado_livre_number' :class="item.isBind ? '' : 'filter-gray'">
    		<h6>Mercado Livre</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/market/market-liver.png')" alt="">
    		</div>
    		<p class="integral-item-tip">{{$t('integral["MegaHaribaba"]')}}</p>
    		<div class="integral-item-footer" v-if='item.isBind'>
    			<i class='el-icon-check'></i>
                <span>
                	{{$t('integral["Ativo"]')}}
				</span>
                <i class='el-icon-delete' @click='$store.commit("TOGGLE_ALL_DEL")'></i>
    		</div>
    		<div class="integral-item-footer" v-else>
    			 <a :href='`https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${appId}`'>
                	{{$t('integral["Desativo"]')}}
				</a>
    		</div>
    	</div>   
    	<div v-for='item in b2w_number' :class="item.isBind ? '' : 'filter-gray'">
    		<h6>B2W</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/market/market-b2w.png')" alt="">
    		</div>
    		<p class="integral-item-tip">{{$t('integral["MegaHaribaba"]')}}</p>
    		<div class="integral-item-footer"  v-if='item.isBind'>
    			<i class='el-icon-check'></i>
                <span>{{$t('integral["Ativo"]')}}</span>
                <i class='el-icon-delete' @click.stop='$store.commit("TOGGLE_ALL_DEL")'></i>
    		</div>
    		<div class="integral-item-footer" @click='$store.commit("TOOGLE_INTEGRAL_B2W")' v-else>
    			<span>{{$t('integral["Desativo"]')}}</span>
    		</div>
    	</div>   
		<div v-for='item in walmart_number' :class="item.isBind ? '' : 'filter-gray'">
    		<h6>Walmart</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/market/wmarket-woerma.png')" alt="">
    		</div>
    		<p class="integral-item-tip">{{$t('integral["MegaHaribaba"]')}}</p>
    		<div class="integral-item-footer" v-if='item.isBind'>
                <i class='el-icon-check'></i>
                <span >{{$t('integral["Desativo"]')}}</span>
                <i class='el-icon-delete' @click.stop='$store.commit("TOGGLE_ALL_DEL")'></i>
    		</div>
    		<div class="integral-item-footer" @click='$store.commit("TOOGLE_INTEGRAL_WALMART")' v-else>
                <span >{{$t('integral["Desativo"]')}}</span>
    		</div>
    	</div> 
		<div class="filter-gray">
    		<h6>CNOVA</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/market/market-m.png')" alt="">
    		</div>
    		<p class="integral-item-tip">{{$t('integral["MegaHaribaba"]')}}</p>
    		<div class="integral-item-footer"  @click='$store.commit("TOGGLE_ALL_INFO")'>
<!--    			<i class='el-icon-check' @click='$store.commit("TOOGLE_INTEGRAL_CONVA")'></i>-->
                <span>{{$t('integral["Desativo"]')}}</span>
<!--                <i class='el-icon-delete' @click='$store.commit("TOGGLE_ALL_DEL")'></i>-->
    		</div>
    	</div>
    </div>
    <div class='erp-header'>
        <h3>{{$t('integral["Tiny"]')}}</h3>
    </div>
    <div class="integral-item">
    	<div class="filter-gray">
    		<h6>Tiny</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/market/tiny.png')" alt="">
    		</div>
    		<p class="integral-item-tip"> </p>
    		<div class="integral-item-footer">
                <span  @click='$store.commit("TOOGLE_INTEGRAL_TINY")'>{{$t('integral["Desativo"]')}}</span>
    		</div>
    	</div>
    	<div>
    		<h6>Loja Virtual</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/market/market-liver.png')" alt="">
    		</div>
    		<p class="integral-item-tip"> </p>
    		<div class="integral-item-footer">
    			<i class='el-icon-check' @click='$store.commit("TOOGLE_INTEGRAL_LOGA")'></i>
                <span>{{$t('integral["Ativo"]')}}</span>
                <i class='el-icon-delete' @click='$store.commit("TOGGLE_ALL_DEL")'></i>
    		</div>
    	</div>
    </div>
	<div class='erp-header'>
		<h3>Transportadoras</h3>
	</div>
	<div class="integral-item">
    	<div class="filter-gray">
    		<h6>Correios</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/img/Correios.png')" alt="">
    		</div>
    		<p class="integral-item-tip"> </p>
    		<div class="integral-item-footer">
                <i class='el-icon-check' @click='$store.commit("TOOGLE_INTEGRAL_TRAN")'></i>
                <span>{{$t('integral["Ativo"]')}}</span>
                <i class='el-icon-delete' @click='$store.commit("TOGGLE_ALL_DEL")'></i>
    		</div>
    	</div>
    	<div class="filter-gray">
    		<h6>Braspress</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/img/bra.png')" alt="">
    		</div>
    		<p class="integral-item-tip"> </p>
    		<div class="integral-item-footer">
                <span  @click='$store.commit("TOOGLE_INTEGRAL_BAR")'>{{$t('integral["Desativo"]')}}</span>
    		</div>
    	</div>
    	<div class="filter-gray">
    		<h6>Jadlog</h6>
    		<div class="integral-item-img">
				<img :src="require('@/assets/img/jadlog.png')" alt="">
    		</div>
    		<p class="integral-item-tip"> </p>
    		<div class="integral-item-footer">
                <span @click='$store.commit("TOOGLE_INTEGRAL_JADLOG")'>{{$t('integral["Desativo"]')}}</span>
    		</div>
    	</div>
	</div>
    <my-conva></my-conva>
    <my-walmart></my-walmart>
    <my-bw></my-bw>
    <my-loga></my-loga>
    <my-tiny></my-tiny>
    <my-tran></my-tran>
    <my-jadlog></my-jadlog>
    <my-bra></my-bra>
    <erp-del message='Confirmar a remoção ?'></erp-del>
    <erp-info message='Ainda EM aberto, por favor, Veja!' title='Info'></erp-info>
</div>
</template>
<script>
	import myConva from './components/conva'
	import myWalmart from './components/walmart'
	import myBw from './components/bw'
	import myLoga from './components/loga'
	import myTiny from './components/tiny'
	import myTran from './components/transport'
	import myJadlog from './components/jadlog'
	import myBra from './components/braspress'
	export default {
		components: {
			myConva,
			myWalmart,
			myBw,
			myLoga,
			myTiny,
			myTran,
			myJadlog,
			myBra,
		},
		data() {
			return {
				appId: '',
				mercado_livre_number: [],
				b2w_number: [],
				walmart_number: [],
			}
		},
		methods: {
			submit() {}
		},
		created() {
			this.$post('mercadoLive/getCodeAndAppid').then(res => {
				this.appId = res.data.appId;
			}).catch(res => {

			})
			this.$get('sys/user/userPackage').then(res => {
				var mercado_livre_number = Array.from(new Array(res.data.mercadoLivreNumber), (v, i) => {
					return {
						isBind: false
					}
				});
				var b2w_number = Array.from(new Array(res.data.b2wNumber), (v, i) => {
					return {
						isBind: false
					}
				});
				var walmart_number = Array.from(new Array(res.data.walmartNumber), (v, i) => {
					return {
						isBind: false
					}
				});

				this.mercado_livre_number = mercado_livre_number;
				this.b2w_number = b2w_number;
				this.walmart_number = walmart_number;
			})
		}

	}

</script>
<style rel='stylesheet/scss' lang="scss">
	.integral-item {
		padding: 20px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
		>div {
			width: 200px;
			border: 1px solid #ccc;
			border-radius: 16px;
			overflow: hidden;
			margin-right: 40px;
			margin-top: 20px;
			h6 {
				text-align: center;
				font-size: 18px;
				height: 80px;
				line-height: 80px
			}
			.integral-item-img {
				height: 100px;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					/*					width: 100px;*/
				}
			}
			.integral-item-tip {
				text-align: center;
				height: 50px;
				line-height: 40px;
				font-size: 14px;
				color: #000;
			}
			.integral-item-footer {
				width: 100%;
				background-color: #13AFAD;
				cursor: pointer;
				display: flex;
				padding: 16px 20px;
				align-items: center;
				justify-content: space-around;
				font-size: 16px;
				color: #fff;
				text-align: center;
				border-radius: 0 0 16px 16px;
				.el-icon-check,
				.el-icon-delete {
					font-size: 18px;
					cursor: pointer;
					&:hover {
						/*						color: blue*/
					}
				}

			}
		}
	}

</style>
