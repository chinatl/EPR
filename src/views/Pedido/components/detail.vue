<template>
   <el-dialog
  :visible.sync="$store.state.order.show_detail"
 >
    <div slot='title' class="erp-dialog_title">
        {{$t('pedido["Rastreamento do Pedido"]')}} | 1234567891BR
    </div>
    <div class="detail_main">
        <div class='header'>
            <div class='subtitle'style='z-index:2'>
                {{$t('pedido["Postagem"]')}}
            </div>
             <div class='subtitle right mid'>
               {{$t('pedido["Em Trânsito"]')}}
            </div>
             <div class='subtitle right' style="left:560px;">
               {{$t('pedido["Entregue"]')}} 
            </div>
        </div>
        <div style="margin-top:30px;">
            <p class='text'>{{$t('pedido["Objeto aguardando retirada no endereço indicado"]')}}</p>
            <p class='text'>{{$t('pedido["02/12/2017 17:45 PORTO ALEGRE / RS"]')}}</p>
        </div>
        <div class="border" v-for='item in list'>
            <div class="time">
                <p class='text'>02/12/2017</p>
                <p class='text'>14:00</p>
            </div>
            <div class='report'>
                <p>{{$t('pedido["Objeto aguardando retirada no endereço indicado Para retirá-lo, é precisoinformar o código do objeto."]')}} </p>
            </div>
        </div>
    </div>
</el-dialog>
</template>

<script>
  export default {
    data() {
      return {
          list:[1,2,3,4,5,],
      };
    },
   
    created(){
      
    }

  };
</script>
</template>

<style rel="stylesheet/scss" lang="scss">
     .detail_main{
        padding:0 20px;
       .header{
           margin:50px auto 0;
           display:flex;
           width:700px;
           padding-left:10px;
            text-align:center;
             position:realtive; 
           .subtitle{
               display:inline-block;
               width:250px;
               height:60px;
              font-size:20rem;
              color:#808080;
              text-align:center;
              line-height:60px;
              border-radius:50px;
              background:#e0e0e0;
             position:realtive; 
           }
            .right{
                position:absolute;
                left:350px;
            }
            .mid{
                 background:#0aa1ed;
                 z-index:1;
                 color:#fff;
            }
       }
       .text{
           text-align:center;
           color:#808080;
       }
       .border{
           border-bottom:1px solid #808080;
           padding:30px 20px;
           display:flex;
           
           .time{
               width:100px;
               margin-right:10%;
           }
           .report{
               width:80%;
               font-size:13rem;
           }
       }
     }
</style>