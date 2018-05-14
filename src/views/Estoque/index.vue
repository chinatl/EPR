<template>
    <div class='main_box'>
        <div class='h_input'>
            <p class='input' v-show='show'>
                <el-input type='text'size='small' style='width:200px' placeholder='lnsira a senha'></el-input>
                <el-button size='small'style='background:#DC044D;color:#fff;position:relative;right:6px;top:-1px;height:33px'>ok</el-button>
            </p>
        </div>
         
        <p class='header_box'>
            <span class='header_title'>Pedidos</span>
            <span  class='header_title' style='border:none'>*Mantemos as mensagens arquivados por 3 meses.</span>
            <el-button style='background:#128AC6; color:#fff; float:right;' size='small' round>Exportar Tiny</el-button>
            <el-button style='background:#DC044D; color:#fff; float:right;margin-right:10px' size='small' round>Novo Pedido</el-button>
        </p>
        <div class='th_box'>
            <div class='select-input col'>
                <el-input  size='small' placeholder='Pedido / Rastreio / Cliente' v-model='value'></el-input>
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
           <div class="col">
                <span class='tle'>Status</span>
                <el-select class='select Selecionar' size='small' v-model='value' placeholder='Todos' style='width:120px;'>
                    <el-option value='1'>Todos</el-option>
                    <el-option value='2'>Incluído (20)</el-option>
                    <el-option value='3'>Aprovado (30)</el-option>
                    <el-option value='4'>Expedido (18)</el-option>
                    <el-option value='5'>Postado (18)</el-option>
                    <el-option value='6'>Concluido (12)</el-option>
                     <el-option value='7'>Cancelados (2)</el-option>
                     <el-option value='8'>Não vinculados (5)</el-option>
                     <el-option value='9'>Reclamações (5)</el-option>
                     <el-option value='10'>Erro (0)</el-option>
                </el-select>
           </div>
           <div class="col">
                <span class='tle'>Loja</span>
                <el-select class='select Selecionar' size='small' v-model='value' placeholder='Todos' style='width:120px;'>
                    <el-option value='1'>Todos</el-option>
                    <el-option value='2'>MegaHaribaba | Mercado Livre</el-option>
                    <el-option value='3'>B2W</el-option>
                    <el-option value='3'>Walmart</el-option>
                    <el-option value='3'>Netshoes</el-option>
                </el-select>
           </div>
           <div style='width:300px'  class="col">
            <span class='tle'>Data</span>
            <el-date-picker
            class="date"
            size='small'
                v-model="value7"
                type="daterange"
                align="right"
                unlink-panels
                range-separator=" "
                start-placeholder="1/12/2017"
                end-placeholder="30/12/2017"
                :picker-options="pickerOptions2">
                </el-date-picker>
           </div>
           <div>
           </div>
        </div>
        <el-table
			ref="multipleTable"
			:data="tableData"
            stripe
			tooltip-effect="dark"
			style="width: 100%;margin-top:1%;"
			@selection-change="handleSelectionChange">
         <el-table-column type="selection" align='center' width="55">
         </el-table-column>
	     <el-table-column prop="name" label='Loja' align='center'>
         </el-table-column>
         <el-table-column label='Cód. do Pedido'prop="address" align='center'>

         </el-table-column>	 
         <el-table-column label='Rastreio'prop="name" align='center'>

         </el-table-column>	 
         <el-table-column label='Cliente (Apelido)' prop="name" align='center'>

         </el-table-column>
          <el-table-column label='Data Pag.'prop="name" align='center'>

         </el-table-column>
         <el-table-column label='Status'prop="name" align='center'>

         </el-table-column>
          
        </el-table>
        <div class="product-pagination" style="text-align:right;margin-top:20px">
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
         <my-detail></my-detail> 
         <my-order></my-order>
         <new-order></new-order>
    </div>
</template>
<script>
    import myDetail from './components/detail'
    console.log(myDetail,myOrder,newOrder)
	import myOrder from './components/order'
    import newOrder from './components/new'
     export default{
        components:{
            myDetail,
            myOrder,
            newOrder
        },
        data(){
           
            return{
                value:'value',
                total:10,
                show:false,
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
    .main_box{
        padding:20px;
        .h_input{
            height:33px;
            position:relative;
            padding:0;
             .input{
                  width:250px;
                 position:absolute;
                 right:0px;
                 text-align:right;
                display:inline-block;
                
            }
        }
       
       .header_box{
        margin-top:10px;
        padding-bottom:20px;
        border-bottom:1px solid #808080;
        }
        .header_title{
            display:inlne-block;
            border-right:1px solid #808080;
            padding-right:10px;
            margin-right:20px;
             font-size:20rem;
             color:#808080;
        }
         .th_box{
            margin-top:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .select-input {
                display:flex;
            }
            .input{
                width:15%;
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
                
                left:-6px;
                margin:0;
                margin-right:4%;
            }
            .select{
                font-size:5rem;
            }
            .Selecionar{
                width:12%;
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
           
        }
        .row{
            width:100%;
            text-align:center;
            border:none;
        }
        .has-gutter {
			tr,
			th {
				background-color: #e8e8e8;
				th>.cell {
					font-size: 18rem;
				}
			}
		}
    }
</style>