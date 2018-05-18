<template>
	<el-dialog
		:visible.sync="$store.state.fornecedor.show_menu"
        :title='$t(`fornecedor["Editar Fornecedor"]`)'
	>
 <div class='perfil_box'>
        
        <div class='main_box'>
            <span class='head_text'>{{$t('fornecedor["Identificação"]')}}</span>
            <div class='box sty'>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Nome de Contato"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["CNPJ/CPF"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Razão Social (Opcional)"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Nome Fantasic"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>  
            </div>
            
        </div>
        <div class='main_box'>
            <span class='head_text'>{{$t('fornecedor["Endereço"]')}}</span>
            <div class='box sty'>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Logradouro"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Número"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Complemento"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div> 
                
            </div>
            <div class='box mar sty'>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Bairro"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["Cidade"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor[""]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>  
            </div>
        </div>
        <div class='main_box'>
            <span class='head_text'>{{$t('fornecedor["Contato"]')}}</span>
            <div class='box'>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('fornecedor["E-Mail"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small' :disabled="true" value='cadodepaulasilva159@gmail.com'></el-input>
                    </p>
                </div>
                <div class='msg_box left'>
                    <p class='msg_name'>{{$t('fornecedor["Celular"]')}}</p>
                    <p class='msg'>
                       <el-input type='text' size='small' :disabled="true" value='(xx) xxxxxxxxx'></el-input>
                    </p>
                </div>
            </div>
            
        </div>
        <p class='btn_box'>
            <el-button type='primary' round>{{$t('fornecedor["Salvar"]')}}</el-button>
        </p>
    </div>
</el-dialog>
</template>

<script>
	
	export default {
		data() {
			return {
				value:"value",
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
			},
			changeImg(e, i) {
				this.img_src = e.url;
				this.img_list = i;
			},
			del(index){
				this.img_list.splice(index,1);
				if(this.img_list.length === 0){
					this.img_src = ''
				}
			}
		}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>
    .perfil_box{
        padding:20px;
        border-bottom:1px solid #808080;
        .main_box{
            border:2px solid #e0e0e0;
            border-radius:3px;
            padding:40px;
            color:#808080;
            position:relative;
            font-size:bold;
            margin-top:20px;
            font-size:15rem;
            .head_text{
                position:absolute;
                padding:0 20px;
                top:-10px;
                left:100px;
                background:#fff;
            }
            .box{
                display:flex;
                flex-wrap:wrap;
                .msg_box{
                    width:22%;
                    .msg{
                        margin-top:10px;
                    }
                }
                .left{
                    margin-left:20px;
                }
            }
           .mar{
                margin-top:20px;
            }
            .sty{
                justify-content:space-between;
            }   
        }
        .btn_box{
                text-align:right;
                margin-top:20px;
            } 
    }
</style>