<template>
	<el-dialog
		:visible.sync="$store.state.integral.show_jadlog"
        :title='$t(`integral["Configurações Transportadora"]`) +"|" +$t(`integral["Jadlog"]`)'
		
	>
 <div class='jad_box'> 
        <div class='main_box'>
            <span class='head_text'>{{$t('integral["Dados de Autenticação"]')}}</span>
            <div class='box sty'>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('integral["Contratoo"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('integral["Cartão de Postagem"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
            </div>
            <div class='box sty' style='margin-top:20px;'>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('integral["Usuário"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box'>
                    <p class='msg_name'>{{$t('integral["Senha"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
            </div>
            
        </div>
        <div class='main_box'>
            <span class='head_text'>{{$t('integral["Serviços de Entrega"]')}}</span>
            <div class='box sty'>
                <div class='msg_box' style='width:30%;'>
                    <p class='msg_name'>{{$t('integral["Serviços"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box' style='width:30%;'>
                    <p class='msg_name'>{{$t('integral["Códigos"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>
                <div class='msg_box' style='width:30%;'>
                    <p class='msg_name'>{{$t('integral["Tipo de Serviço"]')}}</p>
                    <p class='msg'>
                        <el-input type='text' size='small'></el-input>
                    </p>
                </div>    
            </div>  
        </div>
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
    .jad_box{
        padding:20px;
        border-top:1px solid #808080;
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
                    width:40%;
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
    }
</style>