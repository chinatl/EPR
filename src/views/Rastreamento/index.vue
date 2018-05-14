<template>
    <div class="main_box">
        <div class='title'>Rastreamento</div>
        <div class='h_box'>
             <div class='select_input col'>
                <el-input  size='small' placeholder='ID do pedido / Nome / Rastreio' v-model='value'></el-input>
                <span class='el-icon-search'></span> 
            </div>
            <div class="col">
                <span class='tle'>Paginação </span>
                <el-select  size='small' v-model='value' placeholder=' ' style='width:80px'>
                    <el-option value='1'>5</el-option>
                    <el-option value='2'>10</el-option>
                    <el-option value='3'>15</el-option>
                </el-select>
           </div>
           <div class='nav_box'>
                <img :src="require('@/assets/img/Rastreamento_06.gif')" alt="">
                <div style='text-align:center;margin:5px 0 0 3px;'>
                    <p class="nav">Etiqueta Gerada</p>
                    <p>(<span>0</span>)</p>
                </div>
           </div>
           <div class='nav_box'>
                <img :src="require('@/assets/img/Rastreamento_03.gif')" alt="">
                <div style='text-align:center;margin:5px 0 0 3px;'>
                    <p class="nav">Postados</p>
                    <p>(<span>0</span>)</p>
                </div>
           </div>
           <div class='nav_box'>
                <img :src="require('@/assets/img/Rastreamento_18.gif')" alt="">
                <div style='text-align:center;margin:5px 0 0 3px;'>
                    <p class="nav">Em Trânsito</p>
                    <p>(<span>0</span>)</p>
                </div>
           </div>
           <div class='nav_box'>
                <img :src="require('@/assets/img/Rastreamento_15.gif')" alt="">
                <div style='text-align:center;margin:5px 0 0 3px;'>
                    <p class="nav">Retirada</p>
                    <p>(<span>0</span>)</p>
                </div>
           </div>
           <div class='nav_box'>
                <img :src="require('@/assets/img/Rastreamento_12.gif')" alt="">
                <div style='text-align:center;margin:5px 0 0 3px;'>
                    <p class="nav">Entregue</p>
                    <p>(<span>0</span>)</p>
                </div>
           </div>
           <div  class='nav_box' style='border:none'@click="$store.commit('TOGGLE_TRAN_ERROR')">
                <img :src="require('@/assets/img/Rastreamento_09.gif')" alt="">
                <div style='text-align:center;margin:5px 0 0 3px;'>
                    <p class="nav">Erro</p>
                    <p>(<span>0</span>)</p>
                </div>
           </div>
        </div>
        <el-table
        ref="multipleTable"
		:data="tableData"
        stripe
		tooltip-effect="dark"
		style="width:100%;margin-top:2%;"
		stripe
		@selection-change="handleSelectionChange">
            <el-table-column type="selection" align='center' width="55">
            </el-table-column>
            <el-table-column label='Loja' prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Id do Pedido' prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Data Pedido' prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Nome' prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Codigo de Rastreio' prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Estados' prop="address" align='center'>
            </el-table-column>
            <el-table-column label='Operação' prop="address" align='center'>
            <template slot-scope="scope">
                <span class="table_font"><img :src="require('@/assets/img/Rastreamento_12.gif')" alt=""></span>
            </template>
            </el-table-column>
        </el-table>
        <div class="product-pagination" style="text-align:right;margin-top:20px">
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
        <my-detail></my-detail>
        <my-error></my-error>
        <dropdown></dropdown>
    </div>
</template>
<script>
    import myDetail from './components/detail'
	import Dropdown from './components/dropdown'
    import myError from './components/error'
     export default{
         components:{
            myDetail,
            Dropdown,
            myError
         },
        data(){
            return{
                value:'value',
                total:10,
                isShow:false,
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
            sdsds(res){
                this.isShow = res;
            },
            show(){
                this.isShow = true;
            },
            handleSelectionChange(){
                
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .main_box{
        padding:20px;
        .title{
            color:#808080;
           font-size:20rem;
           padding-bottom:1%;
           border-bottom:1px solid #e0e0e0;
        }
        .h_box{
           margin-top:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .select_input {
                 width:22%;
                display:flex;
            }
            .el-icon-search{
                display:inline-block;
                width:32px;
                height:32px;
                font-size:20rem;
                color:#fff;
                background:#0aa1ed;
                text-align:center;
                line-height:32px;
                position:relative;
                left:-2px;
                margin:0;
                margin-right:4%;
            }
            .col{
                display:flex;
               .tle{
                   line-height:32px;
                   margin-right:5px;
                   font-size:13rem;
                   font-weight:bold;
                   color:#808080;
               }
           } 
           .nav_box{
               display:flex;
               padding-right:25px;
               border-right:1px solid #808080;
               color: #808080;
               .nav{
                border-bottom:1px solid #808080;
                color: #808080;
               }
           }
           
        }
        .has-gutter {
			tr,
			th {
				background-color: #e8e8e8;
				th>.cell {
					font-size: 15rem;
				}
			}
		}
    }
</style>