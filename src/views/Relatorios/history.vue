<template>
    <div class='main_box'>
        <p class='title'>{{$t(`relatorios["历史报表"]`)}}</p>
        <div class='th_box'>
            <div class='select-input col'>
                <el-input   type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
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
                <span class='tle'>Ordernar por </span>
                <el-select class='select Selecionar' size='small' v-model='value' placeholder='Selecionar' style='width:120px;'>
                    <el-option value='1'>1</el-option>
                    <el-option value='2'>2</el-option>
                    <el-option value='3'>3</el-option>
                </el-select>
           </div>
           <div style='width:300px'  class="col">
            <span class='tle'>Período </span>
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
                <el-button type="success" size='small' round  class="btn"><span class="text"><i class='el-icon-share'></i> Exportar CSV</span></el-button>
           </div>
        </div>
        <el-table
			ref="multipleTable"
			:data="tableData"
            stripe
			tooltip-effect="dark"
			style="width: 100%;margin-top:1%;"
		 	stripe
			@selection-change="handleSelectionChange">
	     <el-table-column label='Imagem' clasa="col" align='center'>
            <template slot-scope="scope">
                <img :src="require('@/assets/img/yashua.png')" alt="" style='width:80px;height:80px;'>
            </template>
         </el-table-column>
         <el-table-column label='SKU' clasa="col" prop="name" align='center'>

         </el-table-column>	 
         <el-table-column label='Nome' clasa="col" prop="address" align='center'>

         </el-table-column>	 
         <el-table-column label='Vendas' clasa="col" prop="Estoque" align='center'>

         </el-table-column>
          <el-table-column label='Nota de Potencial' clasa="col" prop="sss" align='center'>

         </el-table-column>
         <el-table-column  clasa="col" prop="Marca" :render-header='render_icon' align='center'>

         </el-table-column>
        </el-table>
        <div class="product-pagination" style="text-align:right;margin-top:20px">
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                value:"value",
                total:10,
                tableData: [{
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'R$ 700,00',
					Estoque: '200',
					sss: 'R$ 440,00',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'R$ 700,00',
					Estoque: '200',
					sss: 'R$ 440,00',
				}, {
					name: '1000103-00',
					address: 'Escova Alisadora',
					Marca: 'R$ 700,00',
					Estoque: '200',
					sss: 'R$ 440,00',
				}, ]
            }
        },
        methods:{
            render_icon(){
                return <i class='el-icon-question'style='color:#0aa1ed'></i>
            },
            pickerOptions2(){

            },
            handleSelectionChange(){}
            
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
        .th_box{
            margin-top:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .select-input {
                display:flex;
                 width:15%;
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