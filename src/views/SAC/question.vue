<template>
    <div class='q_box'>
        <div class='erp-header'>
            <h3>{{$t('sac["Perguntas"]')}}</h3>
        </div>
        
       <div class='msg'>
            <div class='input_box'>
                <el-input style='width:80%;'size='small' type='text' placeholder='Produto / Título'></el-input>
                <span class='el-icon-search'></span>
            </div>
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
       <div class='list_msg'>
            <div><img :src="require('@/assets/img/naozhong.png')" alt=""></div>
            <div>{{$t('sac["Escova Alisadora"]')}}</div>
            <div>250 | Peças</div>
            <div>{{$t('sac["Lorem ipsum dolor sit amet , consectetur adipiscing elit. te. Sed in eros"]')}} </div>
       </div>
       <div class='tb_title'>
            <div style='width:38px'>RPSILVA159</div>
            <div style='width:100px'>{{$t('sac["Escova Alisadora"]')}}</div>
            <div style='width:64px'>MLB12345678</div>
            <div style='width:407px'>R$ 25,00</div>
       </div>
       <div class='detail_box'>
            <div class='text'>
                {{$t('sac["Lorem ipsum dolor sit amet, consectetur adipiscing elit. te. Sed in eros  consectetur adipiscing elit. te. Sed in eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. te. Sed in eros  consectetur adipiscing elit. te. Sed in eros"]')}}  
            </div>
            <div class='btn'>
                <span>#</span>
                <span>@</span>
                <span class='el-icon-delete'></span>
            </div>
       </div>
       <div class='line_box'>
            <div class='write'>
            <el-input  type="textarea" :rows="5"></el-input>
            <span class='el-icon-circle-check-outline'></span>
            </div>
            <div class='select'>
                <div style='margin-bottom:20px;'>
                    <el-input type='text' size='small' placeholder='Inserir CEP' style='width:50%'></el-input>
                    <el-select size='small' style='width:30%;'>
                        <el-option>5</el-option>
                        <el-option>10</el-option>
                        <el-option>15</el-option>
                        <el-option>20</el-option>
                    </el-select>
                    <el-button size='small' type='primary'>ok</el-button>
                </div>
                <p># - {{$t('sac["Respostas rapidas referentes ao produto"]')}}.</p>
                <p>@ - {{$t('sac["Respostas universais"]')}}</p>
                <p>$ - {{$t('sac["Link para anúncios"]')}}</p>
            </div>
       </div>
       <ul style='margin-top:20px;'>
            <li v-for='item in list' class='li'>
                <div class='tb_title'>
                        <div style='width:38px'>RPSILVA159</div>
                        <div style='width:100px'>{{$t('sac["Escova Alisadora"]')}}</div>
                        <div style='width:64px'>MLB12345678</div>
                        <div style='width:407px'>R$ 25,00</div>
                </div>
                <div class='detail_box'>
                        <div class='text'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. te. Sed in eros  consectetur adipiscing elit. te. Sed in eros Lorem ipsum dolor sit amet, consectetur adipiscing elit. te. Sed in eros  consectetur adipiscing elit. te. Sed in eros 
                        </div>
                        <div class='btn'>
                            <span>#</span>
                            <span>@</span>
                            <span class='el-icon-delete'></span>
                        </div>
                </div>
            </li>
       </ul>
       <div class="product-pagination" style="text-align:right;margin-top:20px">
            <el-pagination background layout="prev, pager, next" :page-size='20' :total="total">
            </el-pagination>
        </div>
        <my-msg></my-msg>
    </div>
</template>
<script>
    import myMsg from './components/msg'
     export default{
         components:{
             myMsg
         },
        data(){
            return{
                value:true,
                list:[1,2,3,4,5],
                total:10
            }
        },
        methods:{

        }
    }
</script>
<style rel='stylesheet/scss'lang="scss">
    .q_box{
        padding:20px;
        .q_title{
            font-size:18rem;
            font-weight:bold;
            border-bottom:1px solid #808080;
            padding-bottom:20px;
        }
        .msg{
            padding-top:20px;
            font-weight:bold;
            color:#808080;
            display:flex;
            .input_box{
                width:200px;
                line-height:50px;
                .el-icon-search{
                    position:relative;
                    left:-5px;
                    top:2px;
                    display:inline-block;
                    width:32px;
                    height:32px;
                    text-align:center;
                    line-height:32px;
                    background:#0aa1ed;
                    font-size:20rem;
                    color:#fff;
                }
            }
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
        .list_msg{
            margin-top:20px;
            padding:0 50px;
            background:#e0e0e0;
            height:50px;
            line-height:50px;
            display:flex;
            justify-content:space-between;
            color:#808080;
            font-weight:bold;
            .img{
                display:inline-block;
                height:50px;
                line-height:50px;
            } 
        }
        .tb_title{
             padding:0 50px;
              height:50px;
            line-height:50px;
            font-weight:bold;
            color:#808080;
           display:flex;
            justify-content:space-between;
        }
        .detail_box{
            padding:0 50px;
            color:#808080;
            display:flex;
            justify-content:space-between;
            .text{
                width:70%;
                font-weight:bold;
            }
            .btn{
                color:#808080;
                span{
                    display:inline-block;
                    width:20px;
                    height:20px;
                    background:#e0e0e0;
                    font-size:16rem;
                    text-align:center;
                    line-height:20px;
                }
            }
        }
        .line_box{
            background:#e0e0e0;
            padding:20px;
            margin-top:20px;
            display:flex;
            .write{
                width:70%;
                padding-right:3%;
                position:relative;
                .el-icon-circle-check-outline{
                    display:inline-block;
                    font-size:25rem;
                    color:#808080;
                    cursor:pointer;
                    position:absolute;
                    right:50px;
                    top:50px;

                }
            }
            .select{
                width:30%;
                p{
                    height:20px;
                    color:#808080;
                }
            }
        }
        .li{
            padding:20px 0;
/*
			&:nth-child(even){
				background-color: red
			}
			&:nth-child(odd){
				background-color: yellow
			}
*/
        }
    }
</style>