<template>
    <div class='main_box'>
       	<div class="erp-header">
       		<h3>{{$t('pedido["Pedidos"]')}} <span class="else-con ">*{{$t('pedido["Mantemos as mensagens arquivados por 3 meses"]')}}.</span></h3>
       		<div>
		  		<el-button style='background:#128AC6; color:#fff; float:right;' size='small' round>{{$t('pedido["Exportar Tiny"]')}}</el-button>
            	<el-button style='background:#DC044D; color:#fff; float:right;margin-right:10px' size='small' round>{{$t('pedido["Novo Pedido"]')}}</el-button>
       		</div>
       	</div>
		<div class="erp_select"></div>
        <div class='th_box'>
            <div class='select-input col'>
                <el-input  size='small' placeholder='Pedido / Rastreio / Cliente' v-model='value'></el-input>
                <span class='el-icon-search'></span> 
            </div>
           <div class="col">
                <span class='tle'>{{$t('pedido["Paginação"]')}} </span>
                <el-select  size='small' v-model='value' placeholder=' ' style='width:80px'>
                    <el-option value='1'>5</el-option>
                    <el-option value='2'>10</el-option>
                    <el-option value='3'>15</el-option>
                </el-select>
           </div>
           <div class="col">
                <span class='tle'>Status</span>
                <el-select class='select Selecionar' size='small' v-model='value' placeholder='Todos' style='width:120px;'>
                    <el-option value='1'>{{$t('pedido["Todos"]')}}</el-option>
                    <el-option value='2'>{{$t('pedido["Incluído"]')}} (20)</el-option>
                    <el-option value='3'>{{$t('pedido["Aprovado"]')}} (30)</el-option>
                    <el-option value='4'>{{$t('pedido["Expedido"]')}} (18)</el-option>
                    <el-option value='5'>{{$t('pedido["Postado"]')}} (18)</el-option>
                    <el-option value='6'>{{$t('pedido["Concluido"]')}} (12)</el-option>
                     <el-option value='7'>{{$t('pedido["Cancelados"]')}} (2)</el-option>
                     <el-option value='8'>{{$t('pedido["Não vinculados"]')}} (5)</el-option>
                     <el-option value='9'>{{$t('pedido["Reclamações"]')}} (5)</el-option>
                     <el-option value='10'>{{$t('pedido["Erro"]')}} (0)</el-option>
                </el-select>
           </div>
           <div class="col">
                <span class='tle'>Loja</span>
                <el-select class='select Selecionar' size='small' v-model='value' placeholder='Todos' style='width:120px;'>
                    <el-option value='1'>{{$t('pedido["Todos"]')}}</el-option>
                    <el-option value='2'>{{$t('pedido["MegaHaribaba"]')}} | Mercado Livre</el-option>
                    <el-option value='3'>B2W</el-option>
                    <el-option value='3'>{{$t('pedido["Walmart"]')}}</el-option>
                    <el-option value='3'>{{$t('pedido["Netshoes"]')}}</el-option>
                </el-select>
           </div>
           <div style='width:300px'  class="col">
            <span class='tle'>{{$t('pedido["Data"]')}}</span>
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
        <div class="table-bgc">
			<el-table
				:data="tableData"
				stripe
				tooltip-effect="dark"
				@row-click='row_click'
				style="width: 100%"
			>
			 <el-table-column type="selection" align='center' width="55">
			 </el-table-column>
			 <el-table-column prop="name" :label='$t(`pedido["Loja"]`)' align='center'>
			 </el-table-column>
			 <el-table-column label='$t(`pedido["Cód. do Pedido"]`)'prop="address" align='center'>
			 
			 </el-table-column>	 
			 <el-table-column label='$t(`pedido["Rastreio"]`)'prop="name" align='center'>

			 </el-table-column>	 
			 <el-table-column label='$t(`pedido["Cliente (Apelido)"]`)' prop="name" align='center'>

			 </el-table-column>
			  <el-table-column label='$t(`pedido["Data Pag."]`)'prop="name" align='center'>

			 </el-table-column>
			 <el-table-column label='$t(`pedido["Status"]`)'prop="name" align='center'>

			 </el-table-column>

			</el-table>
        </div>
        <div class="product-pagination" style="text-align:right;margin-top:20px">
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
<!--         <my-detail></my-detail> -->
         <my-order></my-order>
<!--         <new-order></new-order>-->
    </div>
</template>
<script>
	import myDetail from './components/detail'
	import myOrder from './components/order'
	import newOrder from './components/new'
	export default {
		components: {
			myDetail,
			myOrder,
			newOrder
		},
		data() {

			return {
				value: '',
				value7: '',
				total: 10,
				show: false,
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
					}
				]
			}
		},
		methods: {
			row_click() {
				this.$store.commit('TOGGLE_ORDER_ORDER');
			},
			pickerOptions2(e) {
				console.log(e)
			}
		}
	}

</script>
<style rel='stylesheet/scss' lang='scss'>
	.main_box{
		.h_input {
			height: 33px;
			position: relative;
			padding: 0;
			.input {
				width: 250px;
				position: absolute;
				right: 0px;
				text-align: right;
				display: inline-block;

			}
		}
		.th_box {
			.select-input {
				display: flex;
			}
			.el-icon-search {
				display: inline-block;
				width: 32px;
				height: 32px;
				font-size: 20rem;
				color: #fff;
				background: #0aa1ed;
				text-align: center;
				line-height: 32px;
				position: relative;
				left: -6px;
				margin: 0;
				margin-right: 4%;
			}
			.select {
				font-size: 5rem;
			}
			.Selecionar {
				width: 12%;
			}
			.col {
				display: flex;
				.tle {
					line-height: 32px;
					margin-right: 5px;
					font-size: 13rem;
					font-weight: bold;
					color: #808080;
				}
			}

		}
	
	}

</style>
