<template>
   <el-dialog
	  :visible.sync="$store.state.attr.show_cores"
	  class='cores-dialog'
	 >
		<div slot='title' class="erp-dialog_title">
			Variação | Cores
			<span class="attr-tittle">
				<span class="text">Variação Visual</span>
				<el-switch
				  v-model="value3">
				</el-switch>
			</span>
		</div>
		<div>
			<ul class="cores-dialog-list">
				<li>Azul</li>
				<li>Verde</li>
				<li>Vermelho</li>
				<li>Amarelo</li>
				<li>Preto</li>
				<li>Branco</li>
				<li>Roxo</li>
				<li>
					Laranja
				</li>
			</ul>
		</div>
		<p class='erp-dialog-button'>
			<button class="erp-btn info circle size16" @click='submit'>{{$t('button["ok"]')}}</button>
		</p>
	</el-dialog>
</template>

<script>
	export default {
		data() {
			return {
				flag: true,
				value3: false,
				list: [1, 2, 3, , 2, 2],
			};
		},

		created() {

		},
		methods: {
			submit() {
				
			}
		}

	};

</script>

<style rel="stylesheet/scss" lang="scss">


</style>
