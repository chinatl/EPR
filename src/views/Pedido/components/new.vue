<template>
   <el-dialog
    title="titleXXX"
    :visible.sync="$store.state.order.show_new"
    :before-close="handleClose">
        <div class='new_box'>
            <div class='input_box'>
                <span class='new_title'>{{$t('pedido["Duplicar Pedido"]')}}</span>
                <el-input type='text' size='small' style='width:250px;' placeholder='lnserir codigo de pedido'></el-input>
                <span class='el-icon-loading font'></span>
                <span class='el-icon-check font hand' style='color:green'></span>
                <span class='el-icon-close font hand' style='color:red'></span>
                <span class='search hand font'>ok</span>
            </div>
            <div class="entrada-h3">
                <div :class=" current ? 'item' : 'item current'" @click='current=1'><span class="span">1</span>{{$t('pedido["Cliente"]')}}</div>
                <div :class=" current ? 'item': 'item current'"  @click='current=1'><span class="span">2</span>{{$t('pedido["Itens"]')}}</div>
                <div :class=" !current ? 'item': 'item current'"  @click='current=0'><span class="span">3</span>{{$t('pedido["Transportador"]')}}</div>
            </div>
            <div class='new_detail'>
            </div>
           
        </div>
    </el-dialog> 
</template>
<script>
  export default {
    data() {
      return {
       
      };
    },
    methods: {
      
    }
  };
</script>
<style rel='stylesheet/scss' lang="scss">
    .new_box{
        padding:20px;
        .input_box{
            width:60%;
            position:absolute;
            left:260px;
            top:15px;
            .new_title{
                color:#808080;
                font-size:16rem;
            }
            .font{
                font-size:20rem;
                position:relative;
                right:76px;
                top:2px;
            }
            .hand{
                cursor:pointer;
            }
            .search{
                display:inline-block;
                width:32px;
                height:32px;
                color:#fff;
                background:#0aa1ed;
                line-height:32px;
                text-align:center;
                border-radius:2px;

            }

        }
        .entrada-h3 {
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 40px;
			line-height: 40px;
            border-top:1px solid #808080;
            padding-top:50px;
			.item {
				width: 33%;
				font-size: 18px;
				color: #000;
				cursor: pointer;
				span {
					border-radius: 50%;
					font-size: 14px;
					background-color: #ccc;
					padding: 4px;
					display: inline-block;
					width: 20px;
					height: 20px;
					line-height: 12px;
					margin-right: 4px;
					position: relative;
					top: -2px;
					color: #fff
				}
			}
			.current {
				background-color: #eee;
			}
		}
         .new_detail{
                height:500px;
            }
    }
</style>