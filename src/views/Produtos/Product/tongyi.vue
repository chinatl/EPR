<template>
<div class='product-tongyi'>
	<el-dialog
		:visible.sync="$store.state.product.show_tong_yi"
	>
		<div slot='title' class="erp-dialog_title">
				Editar Estoque
		</div>
		<div>
			<div class="tongyi-title">
				<span>Escova Alisadora Magic</span>
				<span v-if='auth'>Edição Habilitada</span>
			</div>
			<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li>{{$t(`rastreamento["Loja"]`)}}</li>
				<li>{{$t(`rastreamento["Id do Pedido"]`)}}</li>
				<li>{{$t(`rastreamento["Data Pedido"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in tableData' :key="index">
					<li>{{item.name}}</li>
					<li>{{item.attrbute}}</li>
					<li>
						<el-input v-model='item.quantidade' style='width:80px'
						 v-if='auth'
						 size='small'></el-input>
						<span v-else>{{item.quantidade}}</span>
					</li>
				</ul>
			</transition-group>
			</div>
			<p class='erp-dialog-button'>
				<button class="erp-btn info">{{$t('button["Concluir"]')}}</button>
			</p>
		</div>
	</el-dialog>
</div>
</template>

<script>
	//	import myInput from '@/components/common/input'
	export default {
		data() {
			return {
				ok: true,
				loading: false,
				auth: false,
				tableData: [{
					name: 'Branco',
					attrbute: '110V',
					quantidade: '20'
				}, {
					name: 'Vermelho',
					attrbute: '110V',
					quantidade: '20'
				}, {
					name: 'Azul',
					attrbute: '110V',
					quantidade: '20'
				}, {
					name: 'Amarelo',
					attrbute: '110V',
					quantidade: '20'
				}, ]
			}
		}
	}

</script>
<style rel="stylesheet/scss" lang="scss">
	.product-tongyi {
		div.el-dialog {
			width: 600px;
		}
		.tongyi-title {
			display: flex;
			justify-content: space-between;
			margin: 12px 0;
			span {
				&:nth-of-type(1) {
					font-size: 18px;
				}
				&:nth-of-type(2) {
					font-size: #666;
					font-weight: bold;
					font-size: 16px;
					text-decoration: underline;
				}
			}
		}
	}

</style>
