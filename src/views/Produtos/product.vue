<template>
    <div v-loading='loading'>
       	<div class="erp-s"></div>
        <div class="erp-header">
            <h3>{{$t(`product["产品管理"]`)}}</h3>
            <div>
                <el-button size='small' round type='primary'   icon="el-icon-edit">{{$t(`product["开启快捷编辑"]`)}}</el-button>
                <el-button size='small' round type='info' @click='$store.commit("TOGGLE_ENTRDA")'>{{$t(`product["入库"]`)}}</el-button>
                <el-button size='small' round type='success'  icon="el-icon-star-on">{{$t(`product["复制店铺"]`)}}</el-button>
                <el-button size='small' round type='danger'>{{$t(`product["新增产品"]`)}}</el-button>
            </div>
        </div>
		<div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
		</div>
		<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li>{{$t(`relatorios["Imagem"]`)}}</li>
				<li>SKU</li>
				<li>{{$t(`relatorios["Nome"]`)}}</li>
				<li>{{$t(`relatorios["Vendas"]`)}}</li>
				<li>{{$t(`relatorios["Nota de Potencial"]`)}}</li>
				<li>
					{{$t(`table["Operação"]`)}}
				</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<div v-for='(item,index) in tableData' v-bind:key="index" class="product-item">
					<ul class="content" @click='check(index)'>
						<li><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
						<li>{{item.name}}</li>
						<li>{{item.address}}</li>
						<li>{{item.Marca}}</li>
						<li>
							{{item.Estoque}}
							<span style='margin-left:8px'>
								<svg-icon icon-class='sanseqiu' v-if='index%2'></svg-icon>
								<svg-icon icon-class='sanseqiu1' v-else></svg-icon>
							</span>
						</li>
						<li>
							<div class="table-icon">
								<span><i class='el-icon-document' @click.stop='$store.commit("TOGGLE_FORNECEDOR_MENU")'></i></span>
								<span><i class='el-icon-edit-outline' @click.stop='$store.commit("TOGGLE_DELETE")'></i></span>
								<span><i class='el-icon-delete' @click.stop='$store.commit("TOGGLE_DELETE")'></i></span>
							</div>
						</li>
					</ul>
					<div class="product-column" ref='ul'>
					  	<swiper :options="swiperOption" style="margin-bottom: 1rem;">
							<swiper-slide v-for="i in arr" :key='Math.random()'>
       							<my-item :name='i.name'></my-item>
       						</swiper-slide>
        					<div class="swiper-pagination" slot="pagination"></div>
      					</swiper>
					</div>
				</div>
			</transition-group>
		</div>      	
		<my-market></my-market>
		<my-ml></my-ml>
		<my-unbind></my-unbind>
		<my-del></my-del>
		<my-entrada></my-entrada>
		<my-edit></my-edit>
	</div>
</template>
<script>
	import myMarket from './Product/market'
	import myMl from './Product/ml'
	import myEntrada from './Product/entrada'
	import myEdit from './Product/edit.vue'
	import myItem from './Components/item.vue'
	import myUnbind from './Components/unbind.vue'
	import myDel from './Components/delete.vue'

	import 'swiper/dist/css/swiper.css'

	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'

	export default {
		components: {
			swiper,
			swiperSlide,
			myMarket,
			myMl,
			myEntrada,
			myItem,
			myUnbind,
			myDel,
			myEdit
		},
		data() {
			return {
				value: '',
				swiperOption: {
					slidesPerView: 5,
					spaceBetween: 50,
					// init: false,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					breakpoints: {
						1608: {
							slidesPerView: 4,
							spaceBetween: 40
						},
						1100: {
							slidesPerView: 3,
							spaceBetween: 30
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						320: {
							slidesPerView: 1,
							spaceBetween: 10
						}
					}
				},
				current: 0,
				loading: false,
				total: 10,
				v_switch: false,
				ml_show: false,
				market_show: false,
				form: {
					input: '',
					number: 20,
					numer1: ''
				},
				arr: [{
					name: 'mg'
				}, {
					name: 'b2w'
				}, {
					name: 'b2w'
				}, {
					name: 'b2w'
				}, {
					name: 'b2w'
				}, {
					name: 'wrm'
				}, {
					name: 'wrm'
				}, {
					name: 'wrm'
				}, {
					name: 'wrm'
				}, {
					name: 'wrm'
				}, {
					name: 'mg'
				}, ],
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
			init() {

			},
			check(index) {
				//				this.current = index;
				var ul = this.$refs.ul;
				for (var i = 0; i < ul.length; i++) {
					ul[i].style.height = '0px'
				}
				//				console.log(index)
				ul[index].style.height = '380px'

			},
			handleSelectionChange(e) {
				console.log(e)
			},
			change(e) {},
			ae() {
				this.ml_show = true;
			},
		},
		created() {
			//			setTimeout(res => {
			//				this.loading = false;
			//			}, 1000)
//			this.$get('login/language', {
//				cs: 'CN'
//			}).then(res => {
//			}).catch(res => {
//				this.$post('login/add', {
////					userInfo_phone: '21321',
//					userInfo_email: '21321',
//					userInfo_id: '21321',
//				}).then(res => {
//					console.log(res)
//				})
//			})


		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.procudt-btn {
		width: 32px;
		height: 32px;
		display: inline-block;
		outline: none;
		border: none;
		background-color: rgba(64, 180, 177, 1);
		cursor: pointer;
		&:hover {
			background-color: rgba(64, 180, 177, .8);
		}
	}

	.product-table {

		margin-top: 10px;
		.el-table--enable-row-transition .el-table__body td {
			padding: 0;
		}
		.has-gutter {
			tr,
			th {
				background-color: #e8e8e8;
				th>.cell {
					font-size: 18rem;
				}
			}
		}
		.carousel-item {
			padding: 20px;
		}
	}

	/*--------------product-select------------*/

	.product-select {
		margin: 20px 0;
		.product-select-item {
			display: flex;
			align-items: center;
			justify-content: space-between
		}
	}




	.carousel-item {
		border-radius: 8px;
		display: flex;
		align-items: center;
		.my-item {
			margin-right: 60px;
		}
	}

</style>
