<template>
    <div class='main-box'> 
        <div class='erp-header'>
            <h3>{{$t('sac["Auto Pós-Compra"]')}}<span class="else-con">*{{$t('sac["Mantemos as mensagens arquivados por 3 meses."]')}}</span></h3>
            <div>
                <el-button size='small'type='primary' round style='float:right' @click='$store.commit("TOGGLE_TRAN_PLANE")'>
					{{$t('button["Auto Pós-Compra"]')}}
                </el-button>
            </div>        
        </div>
        <div class='msg'>
            <div style='margin-right:40px;line-height:50px;'>
                <span style='margin-right:10px'>{{$t('sac["Unificar"]')}}</span>
                <el-switch
                v-model="value"
               >
                </el-switch>
            </div>
            <span class='el-icon-arrow-left'></span>
            <div class='svg_box'>
                <div class='title_block'>
                    <img :src="require('@/assets/img/naozhong.png')" alt="">
                    <div class='text_box'>
                        <span class='underline'>{{$t('sac["MegaHaribaba1"]')}}</span><br />
                        <span class='underline'>(20)</span>
                    </div>
                </div>
                <div class='title_block'>
                    <img :src="require('@/assets/img/naozhong.png')" alt="">
                    <div class='text_box'>
                        <span class='underline'>{{$t('sac["MegaHaribaba1"]')}}</span><br />
                        <span class='underline'>(20)</span>
                    </div>
                </div>
                <div class='title_block border'>
                    <img :src="require('@/assets/img/naozhong.png')" alt="">
                    <div class='text_box'>
                        <span class='underline'>{{$t('sac["MegaHaribaba1"]')}}</span><br />
                        <span class='underline'>(20)</span>
                    </div>
                </div>
            </div>
            <span class='el-icon-arrow-right'></span>

        </div>
        <div class='product_box'>
            <div class='p_img height'>
                <img :src="require('@/assets/img/naozhong.png')" alt="">
            </div>
            <div class='p_title height'>
               {{$t('sac["Headphone Exbom com Fio"]')}}
            </div>
            <div class='p_num height'>
                123456
            </div>
            <div class='p_detail'>
                <p>
                {{$t('sac["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at venenatis nulla. Nulla porttitor lacus quis neque molestie congue quis sed lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse varius scelerisque auctor. Nunc sollicitudin sem eget tortor egestas cursus id id ligula."]')}}
                </p>
            </div>
            <div class='p_icon height'>
                <span class='icon '>@</span>
            </div>
        </div>
        <div class='chat_box'>
            <div class='nav'>
                <p class='nav_item'>
                    <el-input size='small' style='width:80%;'></el-input>
                    <span class='el-icon-search'></span>
                </p>
                <p class='nav_item'>
                    <span class='new'></span>
                    <span> {{$t('sac["RPSilva159"]')}}</span>
                    <span class='el-icon-delete'></span>
                    <span class='el-icon-delete'></span>
                </p>
                <p class='nav_item'>
                    <span class='new'></span>
                    <span>{{$t('sac["RLuanTech"]')}}</span>
                    <span class='el-icon-delete'></span>
                    <span class='el-icon-delete'></span>
                </p>
                <p class='nav_item'>
                    <span class='new'></span>
                    <span>{{$t('sac["RafaTech"]')}}</span>
                </p>
                <p class='nav_item'>
                    <span class='new'></span>
                    <span>{{$t('sac["AmandaTec..."]')}}</span>
                </p>
                <p class='nav_item'>
                    <span class='new'></span>
                    <span>{{$t('sac["HenriqueTech"]')}}</span>
                </p>
            </div>
        </div>
        <resevice></resevice>
    </div>
</template>
<script>
    import Resevice from './components/resevice'
    export default{
        components:{
            Resevice
        },
        data(){
            return{
                 value:true,
            }
           
        },
        methods:{

        }
    }
</script>
<style rel='stylesheet/scss'lang="scss">
    .main-box{
        .msg{
            padding-top:20px;
            font-weight:bold;
            color:#808080;
            display:flex;
            
            .el-icon-arrow-left,
            .el-icon-arrow-right{ 
                line-height:50px;
                font-size:28rem;
            }
            .svg_box{
                .title_block{
                    width:170px;
                    display:inline-block;
                     border-right:1px solid #808080;
                      margin:0 20px;
                    img{
                        width:30px;
                        height:30px;
                        margin-top:10px;
                    }
                    .text_box{
                        display:inline-block;
                        width:100px;
                        height:50px;
                        margin-left:10px;
                         text-align:center;
                        
                         padding-top:10px;
                        .underline{
                           
                            border-bottom:1px solid #808080;
                           
                        }
                        

                    }
                }
                .border{
                    border:none;
                }
            }
        }
        .product_box{
            height:120px;
            display:flex;
            margin-top:30px;
            justify-content:space-between;
            text-align:center;
            font-weight:bold;
            color:#808080;
            border-bottom:1px solid #808080;
            .height{
                line-height:120px;
            }
            .p_img{
                width:150px;
            }
            .p_title{
                width:200px;
            }
            .p_num{
                width:150px;
            }
            .p_detail{
                width:300px;
                text-align:left;
            }
            .p_icon{
                width:50px;
                .icon{
                    display:inline-block;
                    width:30px;
                    height:30px;
                    background:#e0e0e0;
                    font-size:20rem;
                    text-align:center;
                    line-height:30px;
                }
                
            }
        }
        .chat_box{
            height:700px;
            display:flex;
            .nav{
                width:20%;
                height:100%;
                padding-top:20px;
                border-right:1px solid #808080;
                .nav_item{
                    height:50px;
                    line-height:50px;
                    font-weight:bold;
                    color:#808080;
                    position:relative;
                     font-size:13rem;
                    .el-icon-search{
                        font-size:16rem;
                        position:relative;
                        left:-26px;
                        cursor:pointer;
                    }
                    .new{
                        display:inline-block;
                        width:5px;
                        height:5px;
                        border-radius:50%;
                        background:red;
                        position:absolute;
                        top:17px;
                        left:-1px;
                       
                    }
                    .el-icon-delete{
                        font-size:18rem;
                        float:right;
                        margin-right:10px;
                        line-height:50px;
                    }
                }
            }
           
        }
    }
</style>