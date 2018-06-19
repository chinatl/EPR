<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_bw"
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('integral["Configurações"]')}}B2W
		</div>
		<div class='erp-dialog-item  no-border'>
			<div>
				<p>{{$t('integral["Chave de API"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
		</div>
		<div class='erp-dialog-item no-border'>
			<div class="width40">
				<p>{{$t('integral["E-Mail"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
			<div class="width40">
				<p>{{$t('integral["Accountmanager Key"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
		</div>
	   <div class="erp-header">
		   <h3>
				{{$t('integral["Login SkyHub"]')}}
		   </h3>
		</div>
		<div class='erp-dialog-item  no-border'>
			<div class="width40">
				<p>{{$t('integral["E-Mail"]')}}</p>
				<el-input v-model='form.skyHubEmail' size='small'></el-input>
			</div>
			<div class="width40">
				<p>{{$t('integral["Senha"]')}}</p>
				<el-input v-model='form.skyHubPassword' size='small'></el-input>
			</div>
		</div>
		<div class="erp-header">
			<h3>
				{{$t('integral["Login Portal B2W"]')}}
			</h3>
		</div>
		<div class='erp-dialog-item  no-border'>
			<div class="width40">
				<p>{{$t('integral["Usuário"]')}}</p>
				<el-input v-model='form.b2WUsername' size='small'></el-input>
			</div>
			<div class="width40">
				<p>{{$t('integral["Senha"]')}}</p>
				<el-input v-model='form.b2WPassword' size='small'></el-input>
			</div>
		</div>
		<div class='erp-dialog-item just-start no-border '>
			<div class='width40'>
				<p>{{$t('integral["Envio do Produto"]')}}</p>
				<el-select size='small' v-model='shop' style='width:100%'>
					<el-option value='1' :label='$t(`integral["Oferecer envios pelo Mercado Envios"]`)'></el-option>
					<el-option value='2' :label='$t(`integral["Oferecer envios pelo Correios"]`)'></el-option>
				</el-select>
			</div>
			<div style="margin-left:40px">
				<p>&nbsp;&nbsp;</p>
				<el-checkbox v-model="checked1">{{$t('integral["Retirada em mãos"]')}}</el-checkbox>
			</div>
		</div>
		<div class='erp-dialog-item  no-border '>
			<div class='width40'>
				<p>{{$t('integral["Prazo de Expedição"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
		</div>
   		<p class='erp-dialog-button'>
			<button class="erp-btn" @click='submit'>{{$t('fornecedor["Salvar"]')}}</button>
		</p>
    </el-dialog>
</template>
<script>
	export default {
		data() {
			return {
				shop: '1',
				checked: false,
				checked1: false,
				form: {
					skyHubPassword: '',
					skyHubEmail: '',
					b2WUsername: '',
					b2WPassword: '',
				}
			}
		},
		methods: {
			submit() {
				this.$post('user/bindUser', {
					skyHubEmail: this.form.skyHubEmail,
					skyHubPassword: this.$crypto(this.form.skyHubPassword),
					b2WUsername: this.form.b2WUsername,
					b2WPassword: this.$crypto(this.form.b2WPassword),
					password: this.$crypto(this.password),
					userId: this.$store.state.user.userId
				}).then(res => {
					this.loading = false;
					this.$store.commit("TOOGLE_INTEGRAL_B2W");
					this.$message({
						message: res.msg,
						type: 'success',
						duration: 4000
					});
				}).catch(res => {
					this.loading = false;
				})
			}
		}
	}

</script>
