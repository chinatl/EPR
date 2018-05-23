<template>
    <el-dialog
    :visible.sync="$store.state.expedic.show_alist"
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('pedido["Informações do Pedido"]')}} | 123456789123
		</div>
		<div class='erp-dialog-item' style="padding:0px 0 10px 0;border:none;margin-top:10px;border-bottom:2px solid #999">
			<div class="width20">
				<p>{{$t('input["Cliente"]')}}:</p>
				<p class="word">75.161.435/0001-17</p>
			</div>
			<div class="width15">
				<p>CEP</p>
				<p class="word">xxxxxx-xxx</p>
			</div>
			<div class="width15">
				<p>{{$t('input["Telefone"]')}}</p>
				<p class='word'>(xx) xxxx-xxxx</p>
			</div>
			<div class="width15">
				<p>{{$t('input["Celular"]')}}</p>
				<p class="word">(xx) xxxx-xxxx</p>
			</div>
			<div class="width20">
				<p>{{$t('input["E-Mail"]')}}</p>
				<p class="word">contato@pmcell.com.br</p>
			</div>
			<div class="width20">
				<p>{{$t('input["CNPJ"]')}}</p>
				<p class="word">75.161.435/0001-17</p>
			</div>
			<div >
				<p>{{$t('input["Endereço"]')}}</p>
				<p class="word">{{$t('pedido["Rua Comendador Abdo Schahim, 59 | São Paulo-SP, Centro | Próximo a Estação São Bento"]')}}</p>
			</div>
		</div>
		<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class="flex3">{{$t(`table["Imagem"]`)}}</li>
				<li class="flex3">SKU</li>
				<li class='flex5'>{{$t(`table["Nome"]`)}}</li>
				<li class="flex3">{{$t(`table["Variação"]`)}}</li>
				<li class="flex3">{{$t(`table["Atributo"]`)}}</li>
				<li class="flex3">{{$t(`table["Quantidade"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in list' v-bind:key="index">
					<li class="flex3"><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
					<li class="flex3">{{item.value2}}</li>
					<li class='flex5'>{{item.value3}}</li>
					<li class="flex3">{{item.value4}}</li>
					<li class="flex3">{{item.value5}}</li>
					<li class="flex3">{{item.value6}}</li>
				</ul>
			</transition-group>
		</div>
   		<p class="erp-table-tip">
			<span>Total Quantidade: 3000</span>
		</p>
		<p class='erp-dialog-button'>
			<el-button type='success' round @click='submit'>{{$t('button["ok"]')}}</el-button>
		</p>
    </el-dialog>
</template>
<script>
	export default {
		data() {
			return {
				value: 'value',
				loading: false,
				total: 10,
				list: [{
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Vermelho',
						value5: '220V',
						value6: '1',
					},
					{
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Branco',
						value5: '220V',
						value6: '2',
					}, {
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Branco',
						value5: '220V',
						value6: '2',
					},
				]
			}
		},
		methods: {
			submit() {

			}
		}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>


</style>
