<template>
  <div class='edit-password'>
   <el-dialog
    :visible.sync="$store.state.dashboard.show_edit_pwd"
    >
        <div slot='title' class="erp-dialog_title">
            Alterar Senha de Autorização
        </div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
					{{$t('input["Senha Atual"]')}}
				</p>
				<el-input type='text' size='small' placeholder='Escova Alisadora Magic Hair'></el-input>
			</div>
		</div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
					{{$t('input["Nova Senha"]')}}
				</p>
				<el-input type='text' size='small' placeholder='Escova Alisadora Magic Hair'></el-input>
			</div>
		</div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
					{{$t('input["Confirmar Nova Senha"]')}}
				</p>
				<el-input type='text' size='small' placeholder='Escova Alisadora Magic Hair'></el-input>
			</div>
		</div>
       	<div class='erp-dialog-item no-border'>
			<div>
				<p>
					{{$t('input["Código de Verificação"]')}}
				</p>
				<div class='erp-search-button'>
					<el-input type='text' size='small' placeholder='SKU / Nome / Marca/ ID do Anúncio' v-model='value'></el-input>
					<el-button size='small' type='primary'>
					Enviar SMS
					</el-button>
				</div>
			</div>
		</div>
   		<p class='erp-dialog-button'>
			<el-button type='success'  @click='submit'>{{$t('button["Concluir"]')}}</el-button>
		</p>
    </el-dialog> 
  </div>
</template>
<script>
	export default {
		data() {
			return {
				current: 1,
				checked: false,
				loading: false,
				value:'',
				list: [{
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Vermelho',
						value5: '220V',
						value6: '1',
						value7: 'R$ 25,00',
					},
					{
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Branco',
						value5: '220V',
						value6: '2',
						value7: 'R$ 25,00',
					}, {
						value1: '1000103-00',
						value2: '10001100-10',
						value3: 'Headphone Bluetooth',
						value4: 'Branco',
						value5: '220V',
						value6: '2',
						value7: 'R$ 25,00',
					},

				]
			};
		},
		methods: {
			change_nav(current) {
//				this.current = 0;
				this.current = current;
			},
			submit(){
				
			}
		}
	};

</script>
<style rel='stylesheet/scss' lang="scss">
	.edit-password {
		div.el-dialog {
			width: 600px;
		}	
	}

</style>
