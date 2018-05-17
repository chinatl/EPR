<template>
	<el-dialog
		:visible.sync="$store.state.product.show_copy"
	>
	<div slot='title' class="edit-title">
		<div class="div1">{{$t('product["Clonar Produto em Massa"]')}}</div>
		<div class="div3">
			{{$t('product["Você ainda possui 5 clonagens disponíveis"]')}}</div>
		</div>
	</div>
	<div class="entrada-con">
		<div class="entrada-h3">
			<div :class=" !current ? 'item' : 'item current'" @click='current=1'><span class="span">1</span>{{$t('product["Selecionar Loja"]')}}</div>
			<div :class=" current ? 'item': 'item current'"  @click='current=0'><span class="span">2</span>{{$t('product["Importar Produtos"]')}}</div>
		</div>
		<div v-show='current'>
			<div class="edit-form">
				<p class="label">{{$t('Loja que deseja importar"]')}}:</p>
                <p class="label2">{{$t('product["Conta que receberá os anúncios"]')}}</p>
				<el-input placeholder='Nome da loja Mercado Livre' size='small' v-model='value' class="input"></el-input>
                <span class="el-icon-loading icons"></span>
                <span class="el-icon-check icons"></span>
                <span class="el-icon-close  icons"></span>
                <el-button type='primary'class='btn icons' @click=''><span>ok</span></el-button>
                 <el-select name="" size='small' class="input" placeholder="Selecionar">
                    <el-option value="">Mercado Livre | {{$t('product["rafatech"]')}}</el-option>
                    <el-option value="">Mercado Livre | {{$t('product["MegaHaribaba"]')}}</el-option>
                </el-select>
			</div>	
        </div>
        <div class="text_box">
            <div>{{$t('product["MEGAHARIBABA"]')}} <span class='small_text'>1000 {{$t('product["Anúncios"]')}}</span></div>
            <p>1 {{$t('product["Ano vendendo no"]')}} Mercado Livre</p>
            <p>{{$t('product["Reputação"]')}}</p>
            <p>{{$t('product["987 vendas nos últimos 4 mesestação"]')}}</p>
            <p class="mark_box">
                <span class="mark frist"></span>
                <span class="mark second"></span>
                <span class="mark third"></span>
                <span class="mark funth"></span>
                <span class="mark fifth"></span>
            </p>
        </div>
        <p><el-checkbox id='choose1'></el-checkbox> <label for='choose1' class="choose">{{$t('product["Estou ciente sobre a responsabilidade de uso desta ferramenta"]')}}</label></p>
        <p><el-checkbox id='choose2'></el-checkbox> <label for='choose2' class="choose">{{$t('product["Duplicar os anúncios importados em produtos"]')}}.</label></p>
        <p class="btn_box"><el-button type='primary' round size='small' class='btn'>{{$t('product["Iniciar importação"]')}}</el-button></p>
    </div>
    
</el-dialog>
</template>

<script>
	//	import myInput from '@/components/common/input'
	export default {
		data() {
			return {
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
<style rel="stylesheet/scss" lang="scss">
	$fs20:18rem;
	.el-dialog {
		margin-bottom: 20px
	}

	.edit-title {
		padding: 20px 0;
		margin: 0 30px;
		border-bottom: 2px solid #ccc;
		display: flex;
		align-items: center;
		.div1 {
			font-size: 25rem;
			margin-right: 100px;
		}
		.div2 {
			font-size: 15rem;
			margin-right: 30px;
		}

	}

	.entrada-con {
        padding-bottom:40%;
		.edit-form {
			margin-top: 20px;
			.label {
                display:inline-block;
                padding-left:3rem;
				font-size: 15rem;
                margin-top:3rem;
				.el-icon-star-on {
					color: #E2B04D;
					margin-left: 12px;
				}
            
			}
             .label2 {
                 display:inline-block;
                margin-left:260px;
				font-size: 15rem;
                }
            .input{
                width:40%;
               
                }
            .el-icon-check{
                color:green
                }
            .el-icon-close{
                color:red;
                }
            .icons{
                position:relative;
                right:60px;
            }
            .btn{
                width:30px;
                height:32px;
                line-height:32px;
                position:relative;
                top:14px;
                span{
                    position:relative;
                    top:-7px; 
                    right:4px;
                    color:#fff;
                }
            }
		}
        .text_box{
            width:44%;
            border:1px solid #e0e0e0;
            margin-top:10px;
            color:#b0b0b0;
            position:relative;
            padding:1%;
            padding-bottom:3%;
            .small_text{
                font-size:5rem;
                position:absolute;
                right:10%;
                top:10px;
                }
            p{
                font-size:5rem;
            }
            .mark_box{
                height:15px;
                .mark{
                    display:inline-block;
                    width:15%;
                    height:50%;
                   
                }
                .frist{
                     background:pink;
                }
                .second{
                    position:relative;
                    top:1px;
                     height:70%;
                    background:#ff6700;
                }
                .third{
                     background:#e5e5e5;
                }
                .funth{
                     background:#add8e6;
                }
                .third{
                     background:#87cefa;
                }
            }
           
        }
        .choose{
            font-size:5rem;
        }
        .btn_box{
            text-align:right;
            .btn{
                font-size:5rem;
            }
        }
	}
   
</style>
