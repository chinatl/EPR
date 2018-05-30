<template>
	<el-dialog
	:visible.sync="$store.state.expedic.show_detail"
	>
		<div slot='title' class="erp-dialog_title">
			{{$t('pedido["Informações do Pedido"]')}} | 123456789123
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
		<pagination :total='total'></pagination>
	</el-dialog>
</template>
<script>
	export default {
		data() {
			return {
				value: 'value',
				loading: false,
				pageSize:'5',
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

			},
			init(){
				console.log(1)
			}
		}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>


</style>
