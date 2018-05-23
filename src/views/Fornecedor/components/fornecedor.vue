<template>
	<el-dialog :visible.sync="$store.state.fornecedor.show_menu">
		<div slot='title' class="erp-dialog_title">
			{{$t(`fornecedor["Editar Fornecedor"]`)}}
		</div>
 		<div class='erp-dialog-item'>
       		<div class="erp-dialog-head">{{$t('input["Identificação"]')}}</div>
       		<div>
       			<p>{{$t('input["Nome de Contato"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div>
       			<p>{{$t('input["CNPJ/CPF"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div>
       			<p>{{$t('input["Razão Social (Opcional)"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div>
       			<p>{{$t('input["Nome Fantasic"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
        </div>
 		<div class='erp-dialog-item'>
       		<div class="erp-dialog-head">{{$t('input["Endereço"]')}}</div>
       		<div class="width30">
       			<p>{{$t('input["Logradouro"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('input["Número"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div  class="width30">
       			<p>{{$t('input["Complemento"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
       		<div class="width30">
       			<p>{{$t('input["Bairro"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div >
       		<div  class="width30">
       			<p>{{$t('input["Cidade"]')}}</p>
       			<el-input type='text' size='small'></el-input>
       		</div>
			<div class="width30">
				<p>{{$t('input["Estado"]')}}</p>
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
    
</el-dialog>
</template>

<script>
	export default {
		data() {
			return {
				value: "value",
				fileList: [],
				img_list: [],
				img_src: '',
				select: '2',
				checked: true,
				checked1: false,
				Garantia: '3 Meses',
				Categoria: 'Acessórios / GPS / Aparelhos / Outros',
				value: '',
				textarea3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui mi, gravida molestie convallis sed, sollicitudin in magna. Aliquam erat volutpat. Aliquam erat volutpat. Morbi porttitor, turpis vitae semper interdum, augue mi euismod mauris, a finibus ipsum nunc gravida lectus. Vestibulum sit amet lectus tristique, blandit tellus ac, tempus purus. Quisque suscipit dapibus ligula, nec rhoncus velit congue id. Nullam in tortor turpis. Donec nec convallis elit, id vulputate justo. Fusce eu tortor tristique, laoreet nisi quis, laoreet odio. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultricies augue felis, ac cursus neque faucibus bibendum. Integer quis nibh lobortis, tempor elit sit amet, faucibus neque. Vivamus tincidunt quam ante, sit amet iaculis massa molestie vel.",
				current: 1,
				user: '',
				form: {
					a: '',
					Custo: 'R$ 22,00',
					Lucratividade: 'R$ 120,00',
				},
				email: 'cadodepaulasilva159@gmail.com',
				phone: '(xx) xxxxxxxxx',
				tableData: [{
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: '',
				}, ]

			}
		},
		methods: {
			mouseenter(src) {
				this.img_src = src;
			},
			submit() {
				this.$message({
					message: '恭喜你，操作成功',
					type: 'success'
				});
				this.$store.commit("TOGGLE_FORNECEDOR_MENU");
			},
			changeImg(e, i) {
				this.img_src = e.url;
				this.img_list = i;
			},
			del(index) {
				this.img_list.splice(index, 1);
				if (this.img_list.length === 0) {
					this.img_src = ''
				}
			}
		}
	}
</script>