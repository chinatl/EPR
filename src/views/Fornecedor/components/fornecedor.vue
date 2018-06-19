<template>
	<el-dialog :visible.sync="$store.state.fornecedor.show_menu" v-loading='loading'>
		<div slot='title' class="erp-dialog_title">
			{{$t(`fornecedor["Editar Fornecedor"]`)}}
		</div>
 		<div class='erp-dialog-item'>
       		<div class="erp-dialog-head">{{$t('input["Identificação"]')}}</div>
       		<div>
       			<p>{{$t('input["Nome de Contato"]')}}</p>
       			<el-input size='small' v-model='$store.state.fornecedor.form.nome'></el-input>
       		</div>
       		<div>
       			<p>{{$t('input["CNPJ/CPF"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.cnpj' @change='checkCNPJ'></el-input>
       		</div>
       		<div>
       			<p>{{$t('input["Razão Social (Opcional)"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.social'></el-input>
       		</div>
       		<div>
       			<p>{{$t('input["Nome Fantasic"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.fantasic'></el-input>
       		</div>
        </div>
 		<div class='erp-dialog-item'>
       		<div class="erp-dialog-head">{{$t('input["Endereço"]')}}</div>
       		<div class="width30">
       			<p>{{$t('input["Logradouro"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.logradouro'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('input["Número"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.numero'></el-input>
       		</div>
       		<div  class="width30">
       			<p>{{$t('input["Complemento"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.complemento'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('input["Bairro"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.bairro'></el-input>
       		</div >
       		<div  class="width30">
       			<p>{{$t('input["Cidade"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.cidade'></el-input>
       		</div>
			<div class="width30">
				<p>{{$t('input["Estado"]')}}</p>
				<el-input  size='small' v-model='$store.state.fornecedor.form.estado'></el-input>
			</div>
        </div>
 		<div class='erp-dialog-item just-start'>
       		<div class="erp-dialog-head">{{$t('fornecedor["Contato"]')}}</div>
       		<div class="width30">
       			<p>{{$t('fornecedor["E-Mail"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.supplierMail'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('fornecedor["Celular"]')}}</p>
       			<el-input  size='small' v-model='$store.state.fornecedor.form.celular'></el-input>
       		</div>
        </div>
        <p class='erp-dialog-button'>
           	<button class="erp-btn" @click='submit'>{{$t('fornecedor["Salvar"]')}}</button>
        </p>
</el-dialog>
</template>

<script>
	import {
		objectMerge
	} from '@/utils'
	import {
		validataShehui
	} from '@/utils/validate'
	export default {
		data() {
			return {
				loading: false,
			}
		},
		props: ['id'],
		methods: {
			checkCNPJ(e) {
				if (!validataShehui(e)) {
					this.$message({
						message: 'cnpj is not right',
						type: 'error'
					});
					return
				}
			},
			submit() {
				var form = this.$store.state.fornecedor.form;
				for (var k in form) {
					if (!form[k]) {
						this.$message({
							message: 'place input your ' + k,
							type: 'error'
						});
						return
					}
				}
				if (!validataShehui(form.cnpj)) {
					this.$message({
						message: 'cnpj is not right',
						type: 'error'
					});
					return
				}
				this.loading = true;
				if (this.$store.state.fornecedor.type === 'add') {
					this.$post('supplier/save', form).then(res => {
						this.$store.commit("TOGGLE_FORNECEDOR_MENU");
						this.$parent.init(5, 1);
						this.$message({
							message: res.data,
							type: 'success'
						});
						this.loading = false;
					}).catch(res => {
						this.loading = false;
					})
				} else {
					this.$post('supplier/save', objectMerge({
						id: this.id
					}, form)).then(res => {
						this.$store.commit("TOGGLE_FORNECEDOR_MENU");
						this.$parent.init(5, 1);
						this.$message({
							message: res.data,
							type: 'success'
						});
						this.loading = false;
					}).catch(res => {
						this.loading = false;
					})
				}
			},
		}
	}

</script>
