<template>
    <div>
		<div class="erp-header">
            <h3>{{$t(`relatorios["退货报表"]`)}}</h3>
        </div>
        <div class='erp-bar'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
			<div>
				<span>{{$t(`relatorios["Ordernar por"]`)}}</span>
				<el-select class='select Selecionar' size='small' v-model='value' placeholder='Selecionar' style='width:80px;'>
					<el-option value='5' label='5'></el-option>
					<el-option value='10' label='10'></el-option>
					<el-option value='15' label='15'></el-option>
				</el-select>
			</div>
			<div >
				<span>{{$t(`relatorios["Período"]`)}} </span>
				<el-date-picker size='small' v-model="value7" type="daterange" align="right" unlink-panels range-separator=" " start-placeholder="1/12/2017" end-placeholder="30/12/2017" :picker-options="pickerOptions2" style='width:220px'>
				</el-date-picker>
			</div>
			<div>
				<el-button type="success" size='small' round class="btn"><span class="text"><i class='el-icon-share'></i> {{$t(`relatorios["Exportar CSV"]`)}}</span></el-button>
			</div>
		</div>
		<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li class='flex2'><el-checkbox v-model='checkAll' @change='all'></el-checkbox></li>
				<li>{{$t(`relatorios["Imagem"]`)}}</li>
				<li>SKU</li>
				<li>{{$t(`relatorios["Nome"]`)}}</li>
				<li>{{$t(`relatorios["Vendas"]`)}}</li>
				<li>{{$t(`relatorios["Nota de Potencial"]`)}}</li>
				<li></li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in list' v-bind:key="index">
					<li class='flex2'><el-checkbox v-model='item.checked' @change='choose($event,index)'></el-checkbox></li>
					<li><img :src="require('@/assets/img/yashua.png')" class='table-img'></li>
					<li>{{item.address}}</li>
					<li>{{item.Marca}}</li>
					<li>{{item.Estoque}}</li>
					<li>{{item.sss}}</li>
					<li>{{item.Marca}}</li>
				</ul>
			</transition-group>
		</div>
		<pagination :total='total'></pagination>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				loading: true,
				pageSize: 5,
				value: "",
				value7: '',
				total: 10,
				list: [],
				checkAll:false
			}
		},
		methods: {
			render_icon() {
				return <i class = 'el-icon-question'
				style = 'color:#0aa1ed' > </i>
			},
			all(e){
				console.log(e);
				this.list.forEach(res=>res.checked = e )
			},
			choose(e,i){
				if(e){
					var flag = false;
					this.list.forEach(res=>{
						if(!res.checked){
							flag = true;
						}
					});
					this.checkAll = !flag;
				}else {
					var flag = true;
					this.list.forEach(res=>{
						if(!res.checked){
							flag =false;
						}
					});
					this.checkAll = flag;
				}
			},
			pickerOptions2() {

			},
			handleSelectionChange() {}
		},
		created() {
			setTimeout(res => {
				this.loading = false;
				this.list = [{
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
				}]
			}, 1000)
		}
	}

</script>
