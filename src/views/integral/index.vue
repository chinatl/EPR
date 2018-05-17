<template>
<div class='main_box'>
    <div class='erp-header'>
        <h3>Marketplaces</h3>
    </div>
    <div class='section_box'>
        <div class='section_item'>
            <p>Mercado Livre</p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p>MegaHaribaba</p>
            <div class='btn_box'>
                <span class='el-icon-check'></span>
                <span>Ativo</span>
                <span class='el-icon-delete'></span>
            </div>
        </div>
        <div class='section_item'>
            <p>Mercado Livre</p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p>MegaHaribaba</p>
            <div class='btn_box'>
                <span class='el-icon-check'></span>
                <span>Ativo</span>
                <span class='el-icon-delete'></span>
            </div>
        </div>
        <div class='section_item'>
            <p>Mercado Livre</p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p>MegaHaribaba</p>
            <div class='btn_box'>
                <span class='el-icon-check'></span>
                <span>Ativo</span>
                <span class='el-icon-delete'></span>
            </div>
        </div>
        <div class='section_item'>
            <p>B2W</p>
            <div class='img'>
                B2W
            </div>
            <p></p>
            <div class='btn_box'>
                <span class='el-icon-check'></span>
                <span>Ativo</span>
                <span class='el-icon-delete'></span>
            </div>
        </div>
        <div class='section_item'>
            <p>Walmart</p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p>MegaHaribaba</p>
            <div class='btn_box dis'>
                <span></span>
               <span>Desativo</span>
                <span></span> 
            </div>
        </div>
        <div class='section_item'>
            <p>CNOVA</p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p>MegaHaribaba</p>
            <div class='btn_box'>
                <span class='el-icon-check'></span>
                <span>Ativo</span>
                <span class='el-icon-delete'></span>
            </div>
        </div>
    </div>
   <p class='title'>Tiny</p>
   <div class='section_box'>
        <div class='section_item'>
            <p></p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p></p>
            <div class='btn_box dis'>
                <span>Desativo</span>
            </div>
        </div>
        <div class='section_item'>
            <p></p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p></p>
            <div class='btn_box dis'>
                <span></span>
               <span>Desativo</span>
                <span></span> 
            </div>
        </div>
   </div>
   <p class='title'>Marketplaces</p>
    <div class='section_box'>
        <div class='section_item'>
            <p>Correios</p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p></p>
            <div class='btn_box'>
                <span class='el-icon-check'></span>
                <span>Ativo</span>
                <span class='el-icon-delete'></span>
            </div>
        </div>
        <div class='section_item'>
            <p>Jadlog</p>
            <div class='img'>
               <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p></p>
            <div class='btn_box dis'>
                <span></span>
                <span>Desativo</span>
                <span></span>
            </div>
        </div>
        <div class='section_item'>
            <p>Braspress</p>
            <div class='img'>
                <img :src="require('@/assets/img/img1.png')" alt="">
            </div>
            <p></p>
            <div class='btn_box dis'>
                <span></span>
               <span>Desativo</span>
                <span></span> 
            </div>
        </div>
    </div> 
    <my-conva></my-conva>
    <my-walmart></my-walmart>
    <my-bw></my-bw>
    <my-loga></my-loga>
    <my-tiny></my-tiny>
    <my-tran></my-tran>
    <my-jadlog></my-jadlog>
    <my-bra></my-bra>
</div>
</template>
<script>
    import myConva from './components/conva'
    import myWalmart from './components/walmart'
    import myBw from './components/bw'
    import myLoga from './components/loga'
    import myTiny from './components/tiny'
    import myTran from './components/transport'
    import myJadlog from './components/jadlog'
    import myBra from './components/braspress'
    export default{
        components:{
            myConva,
            myWalmart,
            myBw,
            myLoga,
            myTiny,
            myTran,
            myJadlog,
            myBra
        },
        data(){
            return{

            }
        }
    }
</script>
<style rel='stylesheet/scss' lang="scss">
    .main_box{
        .title{
            font-size:18rem;
            font-weight:bold;
        }
        .section_box{
            padding:20px;
            display:flex;
            flex-wrap:wrap;
            margin-bottom:50px;
           .section_item{
               width:15%;
               margin-right:5%;
               margin-top:20px;
               text-align:center;
               color:#808080;
               font-weight:bold;
               font-size:12rem;
               border:1px solid #808080;
               border-radius:15px;
               padding-top:10px;
               p{
                   height:34px;
                   padding:10px 0;
               }
               .img{
                   height:102px;
                   font-size:50rem;
                   color:#0aa1ed;
                   line-height:102px;
                   text-align:center;
               }
               .btn_box{
                   width:100%;
                   height:35px;
                   line-height:35px;
                   background:#0aa1ed;
                   border-bottom-left-radius:14px;
                    border-bottom-right-radius:14px;
                    color:#fff;
                    position:relative;
                    top:1px;
                    
                    span{
                        margin-right:15px;
                    }
                .el-icon-delete{
                    background:#0aa1ed;
                    float:right;
                    margin-top:11px;
                    
                }
                .el-icon-delete,
                .el-icon-check{
                    cursor:pointer;
                }
               }
               .dis{
                   background:#808080;
               }
           }
        }
    }
</style>