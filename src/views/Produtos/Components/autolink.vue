<template>
   <el-dialog
    :visible.sync="$store.state.product.show_auto_link"
    >
        <div slot='title' class="erp-dialog_title">
            Vincular Anúncio com Produto
        </div>
        <div class='erp-dialog-item no-border'>
			<div>
				<p>{{$t('product["Produtos"]')}}</p>
				<div class='erp-search-button'  style='width:500px'>
					<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
					<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
				</div>
			</div>
		</div>
		<div class="auto-upload">
			<div class="img-src">
				<div class="text-edit" v-show='!img_src'>
					<svg-icon icon-class='xiangji' style='font-size:120px'></svg-icon>
					<p>{{$t('product["Adicionar Foto"]')}}</p>
					<p>{{$t('product["Principal"]')}}</p>
				</div>
			</div>
			<div class="upload-demo">
				 <div class='erp-dialog-item no-border'>
					<div >
						<p>{{$t('input["SKU"]')}}</p>
						<div class='erp-search-button'  style='width:200px'>
							<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
							<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
						</div>
					</div>
				</div>
				 <div class='erp-dialog-item no-border'>
					<div>
						<p>{{$t('input["nome"]')}}</p>
						<div class='erp-search-button'  style='width:400px'>
							<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
							<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li>{{$t(`table["Imagem"]`)}}</li>
				<li>SKU (B2W)</li>
				<li>{{$t(`table["Variação"]`)}} (B2W)</li>
				<li>{{$t(`table["Atributo"]`)}} (B2W)</li>
				<li class='flex6'>SKU Hariexpress</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in list' v-bind:key="index">
					<li><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
					<li>{{item.sku}}</li>
					<li>{{item.varme}}</li>
					<li>{{item.Marca}}<svg-icon icon-class='link'></svg-icon></li>
					<li class='flex6'>
						<el-select v-model="item.value" size='small' style='width:200px'>
							<el-option
							  v-for="i in item.select"
							  :key="item.value"
							  :label="i.label"
							  :value="i.value">
							<div style="display:flex;justify-content: space-between;font-size:12px;width:200px">
								<span>{{ i.label }}</span>
								<span>{{ i.con1 }}</span>
								<span>{{ i.con2 }}</span>
							</div>
							</el-option>
					  	</el-select>
					</li>
				</ul>
			</transition-group>
		</div>
		<p class='erp-dialog-button'>
			<el-button type='primary' round @click='submit'>{{$t('product["Concluir"]')}}</el-button>
		</p>
	</el-dialog>
</template>


<script>
	export default {
		data() {
			return {
				loading: false,
				img_src: '',
				sss: true,
				value: '',
				value6: '',
				list: [{
					sku: '1000103-00',
					value: '1000103-00',
					varme: 'Vermelho',
					Marca: '220V',
					select: [{
						label: '10000001-01',
						value: '10000001-01',
						con1: 'Vermelho',
						con2: '110V',
					}, {
						label: '10000001-02',
						value: '10000001-02',
						con1: 'Azul',
						con2: '110V',
					}, {
						label: '10000001-03',
						value: '10000001-03',
						con1: 'Verde',
						con2: '110V',
					}, ]
				}, {
					sku: '1000103-00',
					value: '1000103-00',
					varme: 'Branco',
					Marca: '220V',
					select: [{
						label: '10000001-01',
						value: '10000001-01',
						con1: 'Vermelho',
						con2: '110V',
					}, {
						label: '10000001-02',
						value: '10000001-02',
						con1: 'Azul',
						con2: '110V',
					}, {
						label: '10000001-03',
						value: '10000001-03',
						con1: 'Verde',
						con2: '110V',
					}, ]
				}, {
					sku: '1000103-00',
					value: '1000103-00',
					varme: 'Dourado',
					Marca: '220V',
					select: [{
						label: '10000001-01',
						value: '10000001-01',
						con1: 'Vermelho',
						con2: '110V',
					}, {
						label: '10000001-02',
						value: '10000001-02',
						con1: 'Azul',
						con2: '110V',
					}, {
						label: '10000001-03',
						value: '10000001-03',
						con1: 'Verde',
						con2: '110V',
					}, ]
				}, ]
			}
		},
		methods: {
			submit() {

			}
		}
	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.auto-upload {
		height: 240px;
		position: relative;
		width: 100%;
		margin-bottom: 20px;
		.img-src {
			height: 100%;
			width: 320px;
			float: left;
			background-color: #e8e8e8;
			display: flex;
			align-items: center;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			flex-flow: wrap;
			.edit-img-box {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fff
			}
			.edit-img {
				max-height: 100%;
				max-width: 100%;

			}
			.text-edit {
				p {
					text-align: center;
					margin: 0;
					padding: 0;
					height: 16px;
					font-weight: bold;
				}
			}
		}
		.upload-demo {
			width: 100%;
			padding-left: 370px;
			float: left;
			height: 100%;
			.el-upload {
				width: 100%;
				height: 100%;
				.el-upload-dragger {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

</style>
