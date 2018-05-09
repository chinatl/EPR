<template>
	<div class="attribute-layout">
		<div class="main_box">
			<div class='title'>Variações Marketplaces-</div>
			<div class="subTitle">Buscar</div>
			<el-input type="text" placeholder='Pesquisar...'size='small' class='input'></el-input>
			<span class="el-icon-search"></span>
			<div class='module_box'>
				<p>
					<span class='module'>Cores</span>
					<span class='module'>Voltagem</span>
					<span class='module'>Tamanho</span>
					<span class='module'>Textura</span>
					<span class='module'>Material</span>
					<span class='module'>Aro</span>
				</p>
				<p>
					<span class='module'>Cores</span>
					<span class='module'>Voltagem</span>
					<span class='module'>Tamanho</span>
					<span class='module'>Textura</span>
					<span class='module'>Material</span>
					<span class='module'>Aro</span>
				</p>
				<p>
					<span class='module'>Cores</span>
					<span class='module'>Voltagem</span>
					<span class='module'>Tamanho</span>
					<span class='module'>Textura</span>
					<span class='module'>Material</span>
					<span class='module'>Aro</span>
				</p>
				<p>
					<span class='module'>Cores</span>
					<span class='module'>Voltagem</span>
					<span class='module'>Tamanho</span>
					<span class='module'>Textura</span>
					<span class='module'>Material</span>
					<span class='module'>Aro</span>
				</p>
				<p>
					<span class='module'>Cores</span>
					<span class='module'>Voltagem</span>
					<span class='module'>Tamanho</span>
					<span class='module'>Textura</span>
					<span class='module'>Material</span>
					<span class='module'>Aro</span>
				</p>
				<p>
					<span class='module'>Cores</span>
					<span class='module'>Voltagem</span>
					<span class='module'>Tamanho</span>
					<span class='module'>Textura <i class='ds'></i></span>
					<span class='module'>Material <i class='ds'></i></span>
					<span class='module'>Aro <i class='ds'></i></span>
				</p>
			</div>
			<div class="page_box">
				<span class="page hover"></span>
				<span class="page"></span>
			</div>
		</div>
	</div>
</template>

<style rel="stylesheet/scss" lang="scss">
.attribute-layout{
	.main_box{
		width:80%;
		height:100%;
		margin: 0 auto;
		padding-bottom:30%;
		.title{
			color:#808080;
			font-size:22rem;
			padding:2% 0;
			border-bottom:2px solid #e0e0e0;
		}
		.subTitle{
			color:#808080;
			font-size:15rem;
			margin-top:2%;
			margin-bottom:1%;
		}
		.input{
			width:30%;
			
		}
		.el-icon-search{
			display:inline-block;
			width:30px;
			height:33px;
			background:#0aa1ed;
			color:#fff;
			font-size:20rem;
			text-align:center;
			line-height:32px;
			position:relative;
			top:2px;
			left:-10px;
		}
		.module_box{
			margin-top:3%;
			height:100%;
			p{
				display:block;
				width:100%;
				height:50px;
				margin-top:1%;
				.module{
					display:inline-block;
					width:10%;
					height:80%;
					background:#e0e0e0;
					padding:1% 3%;
					text-align:center;
					line-height:20px;
					color:#808080;
					margin-right:6%;
					position:relative;
					.ds{
						display:block;
						width:8px;
						height:8px;
						background:red;
						position:absolute;
						top:6%;
						left:4%;
						border-radius:50%;
					}
				}
			}
			
		}
		.page_box{
			width:5%;
			height:30px;
			margin:5% 43%;
			text-align:center;
			.page{
				display:inline-block;
				width:10px;
				height:10px;
				border-radius:50%;
				background:#e0e0e0;
				margin-right:10%;
			}
			.hover{
				background:red;
			}
		}
	}

	
}

</style>