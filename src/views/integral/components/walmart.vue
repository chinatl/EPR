<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_walmart"
     v-loading='loading'
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('integral["Configurações Walmart"]')}}
		</div>
		<div class='erp-dialog-item  no-border'>
			<div class='width20'>
				<p>{{$t('integral["Login"]')}}</p>
				<el-input type='text' size='small' v-model='userName' :min='3'></el-input>
			</div>
			<div class='width20'>
				<p>{{$t('integral["Senha"]')}}</p>
				<el-input type='text' size='small' v-model='password'></el-input>
			</div>
			<div class='width20'>
				<p>{{$t('integral["Prazo de Entrega"]')}}</p>
				<el-input type='text' size='small' v-model='arrivalDays'></el-input>
			</div>
			<div class='width20'>
				<p>shop id</p>
				<el-input type='text' size='small' v-model='sellerId'></el-input>
			</div>
		</div>
	   <div class='erp-dialog-item just-start no-border '>
			<div class='width40'>
				<p>{{$t('integral["Envio do Produto"]')}}</p>
				<el-select size='small' v-model='courierWay' style='width:100%'>
					<el-option value='1' :label='$t(`integral["Oferecer envios pelo Mercado Envios"]`)'></el-option>
					<el-option value='2' :label='$t(`integral["Oferecer envios pelo Correios"]`)'></el-option>
				</el-select>
			</div>
			<div style="margin-left:40px">
				<p>&nbsp;&nbsp;</p>
				<el-checkbox v-model="cashDelivery">{{$t('integral["Retirada em mãos"]')}}</el-checkbox>
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
				loading: false,
				userName: '',
				password: '',
				sellerId: '',
				arrivalDays: '', //到货天数
				courierWay: '1', //快递方式
				cashDelivery: false, //货到付款
			}
		},
		methods: {
			submit() {
				if (!this.userName) {
					return
				}
				if (!this.password) {
					return
				}
				if (!this.sellerId) {
					return
				}
				this.loading = true;
				this.$post('user/bindUser', {
					userName: this.userName,
					password: this.$crypto(this.password),
					sellerId: this.sellerId,
					arrivalDays: this.arrivalDays,
					courierWay: this.courierWay,
					cashDelivery: this.cashDelivery,
					userId: this.$store.state.user.userId
				}).then(res => {
					this.loading = false;
					this.$store.commit("TOOGLE_INTEGRAL_WALMART");
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
