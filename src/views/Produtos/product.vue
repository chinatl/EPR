<template>
    <div class="layout product" v-loading='loading'>
        <div class="product-header">
            <div class="h3">{{$t(`product["产品管理"]`)}}</div>
            <div class="header-button">
                <el-button size='small' round type='primary'   icon="el-icon-edit">{{$t(`product["开启快捷编辑"]`)}}</el-button>
                <el-button size='small' round type='info' @click='$store.commit("TOGGLE_ENTRDA")'>{{$t(`product["入库"]`)}}</el-button>
                <el-button size='small' round type='success'  icon="el-icon-star-on">{{$t(`product["复制店铺"]`)}}</el-button>
                <el-button size='small' round type='danger'>{{$t(`product["新增产品"]`)}}</el-button>
            </div>
        </div>
        <div class="product-select">
            <div class="product-select-item">
            	<div style='display:flex;align-items:center'>
                    	<el-input v-model="form.user" size='small' placeholder='SKU / Nome / Marca/ ID do Anúncio' style='width:240px'></el-input>
						<button class="procudt-btn"><i class="el-icon-search" style="color:#fff;font-size:14px"></i></button>
			   </div>
				<div  style='display:flex;align-items:center'>
					<label for="" style="margin-right:20px;font-size:16rem">Paginação</label>	
					<el-select v-model="form.number" style='width:80px' size='small'>
						<el-option label="20" value="20"></el-option>
						<el-option label="50" value="50"></el-option>
						<el-option label="100" value="100"></el-option>
						<el-option label="500" value="500"></el-option>
					</el-select>
				</div>
            </div>
        </div>
        <div class="product-table">
          <el-table
			ref="multipleTable"
			:data="tableData"
			tooltip-effect="dark"
			style="width: 100%"
		 	stripe
			@selection-change="handleSelectionChange">
			 <el-table-column type="expand">
			  <template slot-scope="props">
				<el-carousel :interval="4000" :autoplay='false' @change='change($event)' trigger='click' height='404px'>
					<el-carousel-item v-for="(item_list,i) in [1,2,3]">
						<div class="carousel-item">
							<div  v-for='(item,index) in [1,2,3,4,5]' class="my-item">
								<my-item :name='["b2w","mg","wrm","b2w","wrm"][index]'></my-item>
							</div>
						</div>
					</el-carousel-item>
				</el-carousel>
			  </template>
</el-table-column>
<el-table-column type="selection" align='center' width="55">
</el-table-column>
<el-table-column align='center' :label='$t(`product["图片"]`)'>
	<template slot-scope="prop">
		<img :src="require('@/assets/img/yashua.png')" alt="" style='height:50px;display:block;margin:0 auto;text-align:center' />
  </template>
</el-table-column>
<el-table-column prop='name' align='center' label="SKU">
	<template slot-scope="scope">
		<span class="table_font">{{scope.row.name}}</span>
		</template>
</el-table-column>
<el-table-column prop='address' align='center' :label='$t(`product["名字"]`)'>
	<template slot-scope="scope">
		<span class="table_font">{{scope.row.address}}</span>
		</template>
</el-table-column>
<el-table-column prop='Marca' align='center' :label='$t(`product["品牌"]`)'>
	<template slot-scope="scope">
		<span class="table_font">{{scope.row.Marca}}</span>
		</template>
</el-table-column>
<el-table-column prop='Estoque' align='center' label="Estoqu ">
	<template slot-scope="scope">
		<span class="table_font">{{scope.row.Estoque}}</span>
		</template>
</el-table-column>
<el-table-column label="Operação" align='center'>
	<template slot-scope="scope">
		<div class="scope-div">
			<span class="scope-btn">
				<svg-icon icon-class='doc' ></svg-icon>
			</span>
			<span class="scope-btn" @click='$store.commit("TOGGLE_EDIT")'>
				<svg-icon icon-class='edit' ></svg-icon>
			</span>
			<span class="scope-btn">
				<svg-icon icon-class='del' ></svg-icon>
			</span>
		</div>
  	</template>
</el-table-column>

</el-table>
<div class="product-pagination" style="text-align:right;margin-top:20px">
	<el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
	</el-pagination>
</div>

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
	
	export default {
		components: {
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
				loading: true,
				total: 10,
				v_switch: false,
				ml_show: false,
				market_show: false,
				form: {
					input: '',
					number: 20,
					numer1: ''
				},
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
			handleSelectionChange(e) {
				console.log(e)
			},
			change(e) {},
			ae() {
				this.ml_show = true;
			},
		},
		created() {
			setTimeout(res => {
				this.loading = false;
			}, 1000)
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.product {
		padding: 20px;
	}

	.product-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
		.h3 {
			 color:#808080;
           font-size:20rem;   
		}
		.header-button {
			.el-button {
				font-size: 12rem;
			}
		}
	}

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
		.scope-div {
			display: flex;
			justify-content: center;
			.scope-btn {
				width: 24px;
				color: #000;
				font-weight: bold;
				background-color: #eee;
				font-size: 18rem;
				height: 32px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				margin: 0 10px;
				&:hover {
					background-color: #DC044D;
					color: #fff;
				}
			}
		}
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

	.table_font {
		font-size: 16rem
	}

	/*
		div.el-table--enable-row-transition .el-table__body td {
			padding: 0
		}
*/

	/*--------------product-select------------*/

	.product-select {
		margin:20px 0;
		.product-select-item {
			display: flex;
			align-items: center;
			justify-content: space-between
		}
	}

	.el-form--inline {
		display: flex;
		justify-content: space-between;
	}


	.carousel-item {
		border-radius: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center
	}

	.my-item {
		width: 18%;
	}

	.el-table--enable-row-transition .el-table__body td {
		padding: 20px 10px;
	}

</style>
