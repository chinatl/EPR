<template>
    <el-dialog
      :title="$t(`layout['修改']`)+'|'+$t(`layout['免费使用版']`)"
      :visible.sync="$store.state.title"
    >
    <div class="ms-content">
      <div class="item" v-for='(item,index) in data'@mouseenter='mouseenter(index)' @mouseleave='mouseleave(index)'>
           <h3>{{item.title}}</h3>
           <div class="content">
               <h4>优势</h4>
			   <div style='height:280px;align-items:center;flex:column;justify-content:space-between;'>
			     	<p>{{item.label}}</p>
					<p>{{item.p2}}</p>
					<p>{{item.p3}}</p>
					<p>{{item.p4}}</p>
					<p>{{item.p5}}</p>
					<p>{{item.p6}}</p>
					<p>{{item.p7}}</p>
					<p>{{item.p8}}</p>
					<p>{{item.p9}}</p>
			   </div>
               <div class="number">
                   <span>R$</span>
                   <span>39</span>
                   <span class="small">00</span>
               </div>
               <div class="btn" >
				 <transition name='fade'>
					<el-button type='info' v-show='index == current'>CONTRATAR</el-button>
				 </transition>
               </div>
           </div>
       </div>
    </div>
	<p class="tips">{{$t(`layout["*合同将于2018年4月20日生效"]`)}}</p>
	<p class='tips'>
		<el-checkbox  @click='change' v-model='checkbox'>
		</el-checkbox>
		<label :style='{color : checkbox ? "#0aa1ed" : "#000"}'>
			{{$t(`layout["我希望这个计划现在生效。"]`)}}<br />
			<span style="margin-left:18px">{{$t(`layout["(在“今日”至2018年4月20日的价值差异上，将收取50美元的价值)"]`)}}</span>
		</label>
	</p>
    </el-dialog>
</template>


<script>
	export default {
		data() {
			return {
				checkbox:true,
				centerDialogVisible: false,
				current: 5,
				data:[
					{
						title:'免费试用版',
						label:'在Mercado Livre拥有3个管理账户',
						p1:'Mercado Livre定价。',
						p2:'分配一个关键字',
						p3:'一键快速复制广告',
						p4:'支持邮件',
								
					},{
						title:'中级套餐',
						label:'复制一个帐户信息的 mercado livre ',
						p2:'para a sua em massa (1 vez por mês)',
						p3:'在Mercado Livre拥有10个管理账户',
						p4:'b2w， Mercado Livre定价。',
						p5:'结合b2w，沃尔玛',
						p6:'自由新增子账户',
						p7:'市场（部分恢复）.',
						p8:'支持邮件'
					},	{
						title:'高级套餐',
						label:'Copiar anuncios de uma conta mercado livre ',
						label:'复制一个帐户信息的 mercado livre ',
						p2:'para a sua em massa (1 vez por mês)',
						p3:'在Mercado Livre拥有10个管理账户',
						p4:'b2w， Mercado Livre定价。',
						p5:'结合b2w，沃尔玛',
						p6:'自由新增子账户',
						p7:'市场（部分恢复）.',
						p8:'支持邮件'
					}
				]
			}
		},
		methods: {
			mouseenter(index) {
				this.current = index;
				
			},
			mouseleave(index) {
				this.current = 5;
			},
			change(){
				
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	.tips {
		padding-left:20px
	}
	.ms-content {
		border-top: 2px solid #ccc;
		padding: 20px 10px;
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
		div.item {
			border-radius: 30px;
			width: 30%;
			overflow: hidden;
			background-color: #f4f4f4;
			&:hover {
				h3 {
					background-color: #65AFAD;
				}
				.btn {
					.el-button--info {
						color: #fff;
						background-color: #1AA758;
						border-color: #1AA758;
						transition:opacity 0.5s linear;
					}
				}
			}
			h3 {
				background-color: #BABABA;
				text-align: center;
				padding: 20px
			}
			.content {
				text-align: center;
				padding-bottom: 20px;
				h4 {
					padding: 10px;
				}
				p {
					display:inline-block;
					width:80%;
					height:24px;
					margin-bottom: 3px;
					font-size: 5rem
				}
				div.number {
					span {
						font-size: 30px;
						margin-right: 12px;
						font-weight: bold;
					}
					.small {
						font-size: 14px;
						vertical-align: top
					}
				}
				.btn {
					height:40px;
					margin-top: 10px;	
				}
			}
		}	
	}

</style>
