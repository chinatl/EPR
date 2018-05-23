<template>
    <div>
        <div class='erp-header'>
            <h3>Perfil</h3>
        </div>
        <div class='erp-dialog-item' style="margin-top:30px">
       		<div class="erp-dialog-head">{{$t('fornecedor["Identificação"]')}}</div>
       		<div>
       			<p>{{$t('fornecedor["Nome de Contato"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div>
       			<p>{{$t('fornecedor["CNPJ/CPF"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div>
       			<p>{{$t('fornecedor["Razão Social (Opcional)"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div>
       			<p>Loja</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
        </div>
 		<div class='erp-dialog-item'>
       		<div class="erp-dialog-head">{{$t('fornecedor["Endereço"]')}}</div>
       		<div class="width30">
       			<p>{{$t('fornecedor["Logradouro"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('fornecedor["Número"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div  class="width30">
       			<p>{{$t('fornecedor["Complemento"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('fornecedor["Bairro"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div >
       		<div  class="width30">
       			<p>{{$t('fornecedor["Cidade"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
			<div class="width30">
				<p>{{$t('fornecedor["Estado"]')}}</p>
				<el-input type='text' size='small'></el-input>
			</div>
        </div>
 		<div class='erp-dialog-item just-start'>
       		<div class="erp-dialog-head">{{$t('fornecedor["Contato"]')}}</div>
       		<div class="width30">
       			<p>{{$t('fornecedor["E-Mail"]')}}</p>
       			<el-input type='text' size='small' :disabled="true" value='cadodepaulasilva159@gmail.com'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('fornecedor["Celular"]')}}</p>
       			<el-input type='text' size='small' :disabled="true" value='(xx) xxxxxxxxx'></el-input>
       		</div>
        </div>
        <p class='erp-dialog-button'>
            <el-button type='success' round @click='submit'>{{$t('fornecedor["Salvar"]')}}</el-button>
        </p>
    </div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			submit() {

			}
		}
	}

</script>
