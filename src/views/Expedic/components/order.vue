<template>
    <el-dialog
    :title='$t(`expedic["Informações do Pedido"]`) +"|"+ "123456789123"'
    :visible.sync="$store.state.expedic.show_order"
    >
    <div class="section">
        <div class='section_header bottom'>
            <div class='section_text'>
                <p class="section_title">{{$t('expedic["Cliente"]')}}:</p>
                <p>75.161.435/0001-17</p>
            </div>
            <div class='section_text'>
                <p class="section_title">CEP</p>
                <p>xxxxxx-xxx</p>
            </div>
            <div class='section_text'>
                <p class="section_title">{{$t('expedic["Telefone"]')}}</p>
                <p>(xx) xxxx-xxxx</p>
            </div>
            <div class='section_text'>
                <p class="section_title">{{$t('expedic["Celular"]')}}</p>
                <p>(xx) xxxx-xxxx</p>
            </div>
             <div class='section_text'>
                <p class="section_title">{{$t('expedic["E-Mail"]')}}</p>
                <p>{{$t('expedic["contato@pmcell.com.br"]')}}</p>
            </div>
        </div>
        <div class='section_header'>
              <div class='section_text'>
                <p class="section_title">{{$t('expedic["CNPJ"]')}}</p>
                <p>75.161.435/0001-17</p>
            </div>
             <div class='section_text'>
                <p class="section_title">{{$t('expedic["Endereço"]')}}</p>
                <p>{{$t('expedic["Rua Comendador Abdo Schahim, 59 | São Paulo-SP, Centro | Próximo a Estação São Bento"]')}}</p>
            </div>
        </div>
        <el-table
        :data="tableData"
        stripe
		tooltip-effect="dark"
		style="width: 100%;margin-top:1%;"
        >
            <el-table-column :label='$t(`expedic["Imagem"]`)' align='center'>
                <template slot-scope="scope">
                    <span>
                        <img :src="require('@/assets/img/hand.png')" alt="">
                    </span>
                </template>
            </el-table-column>
            <el-table-column label='SKU' prop="name" align='center'>
            </el-table-column>
            <el-table-column :label='$t(`expedic["Nome"]`)' prop="name" align='center'>
            </el-table-column>
            <el-table-column :label='$t(`expedic["Variação"]`)' prop="name" align='center'>
            </el-table-column>
            <el-table-column :label='$t(`expedic["Atributo"]`)' prop="name" align='center'>
            </el-table-column>
            <el-table-column :label='$t(`expedic["Quantidade"]`)' prop="Estoque" align='center'>
            </el-table-column>
        </el-table>
        <p class='total_box'>
            <span class='total'>{{$t('expedic["Total Quantidade"]')}}: 3000</span>
            
        </p>
        <p class='total_box'>
            <el-button type='primary' round class='button'>ok</el-button>
        </p>
    </div>
    </el-dialog>
</template>
<script>
    
      export default{
          
        data(){
            return{
                value:'value',
                total:10,
                tableData: [{
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: ''
				},
                {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: ''
				},
                {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'Pmcell',
					Estoque: '200',
					sss: ''
				}]
            }
        },
        methods:{

        }
    }
</script>
<style rel='stylesheet/scss' lang='scss'>
    .section{
        border-top:1px solid #808080;
        padding:20px 0;
        .section_header{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            border-bottom:1px solid #808080;
            padding-right:60px;
            padding-bottom:20px;
            p{
                color:#808080;
            }
           .section_title{
               font-size:18rem;
               padding:10px 0px;
           }
           

        }
        .bottom{
            border:none;
           
        }
        .total_box{
            text-align:right;
            margin-top:15px;
            .total{
                color:#808080;
                margin-right:50px;
            }
            .button{
                margin:20px 50px 0 0;
            }
        }
        
    }
</style>