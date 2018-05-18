<template>
    <div class='main_box'>
       <div class="erp-header">
       		<h3>{{$t('expedic["Saida"]')}}</h3>
       		<div>
			 	<el-button size='small' type="success" round>{{$t('expedic["Expedir Pedidos"]')}}</el-button>  
       		</div>
       	</div>
        <div class='th_box'>
            <div class='select'>
                <el-input size='small' type='text' placeholder='CNPJ / CPF / Nome Fantasia'style='width:75%'></el-input>
                <span class='el-icon-search'></span>
            </div>
            <div class='h_box'>
                <div class='page'>
                    <span class='page_text'>{{$t('expedic["Data"]')}}</span>
                    <el-select size='small' style='width:100px'>
                        <el-option value='20'>20</el-option>
                        <el-option value=''>50</el-option>
                        <el-option value=''>100</el-option>
                        <el-option value=''>500</el-option>
                    </el-select>
                </div>
                <div style='width:300px'  class="col">
                    <span class='tle'>{{$t('expedic["Período"]')}} </span>
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
            </div>   
        </div>
        <div class="table-bgc">
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
				<el-table-column :label='$t(`expedic["Loja"]`)' prop="address" align='center'>
				</el-table-column>
				<el-table-column :label='$t(`expedic["Cód. do Pedido"]`)' prop="address" align='center'>
				</el-table-column>
				<el-table-column :label='$t(`expedic["Cliente (Apelido)"]`)' prop="address" align='center'>
				</el-table-column>
				<el-table-column :label='$t(`expedic["Rastreio"]`)' prop="address" align='center'>
				</el-table-column>
				<el-table-column :label='$t(`expedic["Data de Empa."]`)' prop="address" align='center'>
				</el-table-column>
				<el-table-column :label='$t(`expedic["Status"]`)' prop="address" align='center'>
				</el-table-column>
			</el-table>
        </div>
        <div class="product-pagination" style="text-align:right;margin-top:20px">
            <div class='num'>
                <span class='pro_title'>*{{$t('expedic["Total de pedidos expedidos"]')}}:</span>
                <span>20</span>
            </div>
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
    </div>
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
<style rel='stylesheet/scss' lang="scss">
    .main_box{
        position:relative;
        .th_box{
            .select{
                width:30%;
                height:32px;
                .el-icon-search{
                    display:inline-block;
                    width:32px;
                    height:33px;
                    background:#0aa1ed;
                    line-height:32px;
                    text-align:center;
                    position:relative;
                    left:-5px;
                    font-size:18rem;
                    color:#fff;
                    cursor:pointer;
                }
            }
            .h_box{
               width:50%;
               display:flex;
               justify-content:space-between;
                .page{
                    .page_text{
                        font-weight:bold;
                        color:#808080;
                        margin-right:30px;
                    }
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
            

        } 
        .num{
            width:30%;
            height:30px;
            line-height:30px;
            font-weight:bold;
            text-align:left;
            color:#808080;
            padding-left:45px;
            position:absolute;
            left:0;
            .pro_title{
                margin-right:50px;

            }
        }  
    }
</style>