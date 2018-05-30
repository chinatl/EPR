<template>
    <el-dialog
    :visible.sync="$store.state.sac.show_msg"
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('sac["Resposta Rápida"]')}} | {{$store.state.sac.type}}
		</div>
		<div class='erp-bar' v-if='$store.state.sac.type === "@"'>
			<div class='erp-search-button'>
				<el-input type='text' size='small' placeholder='Nome / SKU' v-model='value'></el-input>
				<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
			</div>
		</div>
		<div class="sac-list-title" v-else>
			<span><img :src="require('@/assets/img/yashua.png')" class='table-img' style='margin-top:4px;'></span>
			<span>10000001-02</span>
			<span>Escova Alisadora</span>
		</div>
		<div class="sac-msg-box">
			<div class='sac-msg-select'>
				<ul>
					<li>{{$t('sac["Acompanhamento"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Voltagem"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Estoque"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Tamanho"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Descrição da Mensagem"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Descrição da Mensagem"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Saudações"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Disponível de Entrega"]')}} <i class='el-icon-close'></i></li>
					<li>{{$t('sac["Garantia"]')}} <i class='el-icon-close'></i></li>
				</ul>
			</div>  
			<div class="sac-msg-input">
				<h3>Título</h3>
				<div>
					<el-input size='small' style='width:300px'></el-input>
				</div>
				<h3>Palavra-Chave</h3>
				<div>
					<el-input size='small' disabled style='width:300px'></el-input>
					<i class="el-icon-question" style="margin-left:10px;color:#409EFF;font-size:20px"></i>
				</div>
				<h3>Resposta</h3>
				<div>
					<el-input size='small'
	  	type="textarea"
  		:autosize="{ minRows: 6, maxRows: 8}"></el-input>
				</div>
				<p class='erp-dialog-button'>
					<el-button type='primary' round @click='submit' >{{$t('button["Adicionar"]')}}</el-button>
				</p>
			</div> 	   	
		</div>
    </el-dialog>
</template>
<script>
	export default {
		data() {
			return {
				value: ''
			};
		},
		methods: {
			submit() {

			}
		}
	};

</script>
<style rel='stylesheet/scss' lang="scss">
	$height:48px;
	.sac-list-title {
		display: flex;
		align-items: center;
		color: #000;
		font-size: 18rem;
		margin: 0 30px;
		font-weight: bold;
		span{
			margin-right: 40px;
		}
	}

	.sac-msg-box {
		display: flex;
		.sac-msg-select {
			width: 340px;
			border-right: 1px solid #ccc;
			padding-right: 40px;
			ul {
				width: 100%;
				li {
					width: 100%;
					color: #000;
					height: $height;
					line-height: $height;
					position: relative;
					padding-left: 10px;
					font-size: 15px;
					transition: backgroundColor 1s;
					&:nth-of-type(odd) {}
					;
					&:nth-of-type(even) {
						background-color: #ddd
					}
					&:hover {
						background-color: #efefef;
					}
					.el-icon-close {
						position: absolute;
						top: 0;
						right: 8px;
						height: $height;
						line-height: $height;
						font-size: 18px;
						cursor: pointer;
					}
				}
			}
		}
		.sac-msg-input {
			width: 540px;
			padding-left: 40px;
			h3 {
				margin-bottom: 12px;
				margin-top: 20px;
				font-size: 20;
				font-weight: normal;
				color: #000;
			}
			.erp-dialog-button {
				margin-top: 20px;
			}
		}
	}

</style>
