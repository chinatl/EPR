<template>
	<div class="attribute-layout">
		<div class="main_box">
			<div class='erp-header'>
				<h3>{{$t(`product["属性库"]`)}}</h3>
			</div>
			<div style='margin: 20px 0'>
				<el-input type="text" placeholder='Pesquisar...'size='small'style='width:15%;'></el-input>
				<span class="el-icon-search"></span>
			</div>
			<div class='module_box'>
				<p>
					<span class='module'>{{$t('product["Cores"]')}}</span>
					<span class='module'>{{$t('product["Voltagem"]')}}</span>
					<span class='module'>{{$t('product["Tamanho"]')}}</span>
					<span class='module'>{{$t('product["Textura"]')}}</span>
					<span class='module'>{{$t('product["Material"]')}}</span>
					<span class='module'>{{$t('product["Aro"]')}}</span>
				</p>
				<p>
					<span class='module'>{{$t('product["Cores"]')}}</span>
					<span class='module'>{{$t('product["Voltagem"]')}}</span>
					<span class='module'>{{$t('product["Tamanho"]')}}</span>
					<span class='module'>{{$t('product["Textura"]')}}</span>
					<span class='module'>{{$t('product["Material"]')}}</span>
					<span class='module'>{{$t('product["Aro"]')}}</span>
				</p>
				<p>
					<span class='module'>{{$t('product["Cores"]')}}</span>
					<span class='module'>{{$t('product["Voltagem"]')}}</span>
					<span class='module'>{{$t('product["Tamanho"]')}}</span>
					<span class='module'>{{$t('product["Textura"]')}}</span>
					<span class='module'>{{$t('product["Material"]')}}</span>
					<span class='module'>{{$t('product["Aro"]')}}</span>
				</p>
				<p>
					<span class='module'>{{$t('product["Cores"]')}}</span>
					<span class='module'>{{$t('product["Voltagem"]')}}</span>
					<span class='module'>{{$t('product["Tamanho"]')}}</span>
					<span class='module'>{{$t('product["Textura"]')}}</span>
					<span class='module'>{{$t('product["Material"]')}}</span>
					<span class='module'>{{$t('product["Aro"]')}}</span>
				</p>
				<p>
					<span class='module'>{{$t('product["Cores"]')}}</span>
					<span class='module'>{{$t('product["Voltagem"]')}}</span>
					<span class='module'>{{$t('product["Tamanho"]')}}</span>
					<span class='module'>{{$t('product["Textura"]')}}</span>
					<span class='module'>{{$t('product["Material"]')}}</span>
					<span class='module'>{{$t('product["Aro"]')}}</span>
				</p>
				<p>
					<span class='module'>{{$t('product["Cores"]')}}</span>
					<span class='module'>{{$t('product["Voltagem"]')}}</span>
					<span class='module'>{{$t('product["Tamanho"]')}}</span>
					<span class='module'>{{$t('product["Textura"]')}}</span>
					<span class='module'>{{$t('product["Material"]')}}</span>
					<span class='module'>{{$t('product["Aro"]')}}</span>
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
	.attribute-layout {
		.main_box {
		
			.el-icon-search {
				display: inline-block;
				width: 30px;
				height: 32px;
				background: #0aa1ed;
				color: #fff;
				font-size: 20rem;
				text-align: center;
				line-height: 32px;
				position: relative;
				top: 2px;
				left: -10px;
			}
			.module_box {
				margin-top: 3%;
				height: 100%;
				p {
					display: block;
					width: 100%;
					height: 50px;
					margin-top: 1%;
					.module {
						display: inline-block;
						width: 10%;
						height: 80%;
						background: #e0e0e0;
						padding: 1% 3%;
						text-align: center;
						line-height: 20px;
						color: #808080;
						margin-right: 6%;
						position: relative;
						.ds {
							display: block;
							width: 8px;
							height: 8px;
							background: red;
							position: absolute;
							top: 6%;
							left: 4%;
							border-radius: 50%;
						}
					}
				}

			}
			.page_box {
				width: 5%;
				height: 30px;
				margin: 5% 43%;
				text-align: center;
				.page {
					display: inline-block;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: #e0e0e0;
					margin-right: 10%;
				}
				.hover {
					background: red;
				}
			}
		}


	}

</style>
