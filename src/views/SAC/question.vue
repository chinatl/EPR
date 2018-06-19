<template>
    <div>
        <div class='erp-header'>
            <h3>{{$t('sac["Perguntas"]')}}</h3>
        </div>
        <div class='erp-bar'>
			<div>
				<div class='erp-search-button'>
					<el-input type='text' size='small' placeholder='Produto / Título' v-model='value'></el-input>
					<el-button size='mini' type='primary'><i class="el-icon-search"></i></el-button>
				</div>
				<div style="margin-left:20px">
					<span style="font-weight:bold">{{$t('sac["Unificar"]')}}</span>
					<el-switch v-model='checked'></el-switch>
				</div>
			</div>
			<div>
        		<div class="sac-icon">
        			<img :src="require('@/assets/img/Rastreamento_06.gif')"  alt="">
        			<div>
						<p class="border-line">MegaHaribaba1</p>
						<p>(20)</p>
        			</div>
        		</div>
        		<div class="sac-icon">
        			<img :src="require('@/assets/img/Rastreamento_06.gif')"  alt="">
        			<div>
						<p class="border-line">MegaHaribaba2</p>
						<p>(20)</p>
        			</div>
        		</div>
        		<div class="sac-icon">
        			<img :src="require('@/assets/img/Rastreamento_06.gif')"  alt="">
        			<div>
						<p class="border-line">MegaHaribaba3</p>
						<p>(20)</p>
        			</div>
        		</div>
        	</div>
		</div>
		<div class="erp-list" v-loading='loading'>
			<ul class="title">
				<li><img :src="require('@/assets/img/yashua.png')" class='table-img' style='margin-top:4px;'></li>
				<li>Escova Alisadora</li>
				<li>250 | Peças</li>
				<li>price</li>
				<li>{{$t(`table["Operação"]`)}}</li>
			</ul>
			<transition-group name="fade" tag='div'>
				<ul class="content" v-for='(item,index) in list' v-bind:key="index">
					<li>RPSILVA159</li>
					<li>Escova Alisadora</li>
					<li>MLB12345678</li>
					<li>R$ 25,00</li>
					<li>
						<div class="table-icon">
							<span @click='$store.commit("TOGGLE_SAC_MSG","#")'><b>#</b></span>
							<span @click='$store.commit("TOGGLE_SAC_MSG","@")'><b>@</b></span>
							<span @click='$store.commit("TOGGLE_ALL_DEL",item.id)'><i class='el-icon-delete'></i></span>
						</div>
					</li>
				</ul>
			</transition-group>
		</div>      
		<pagination :total='total'></pagination>
        <my-msg></my-msg>
        <erp-del message='Confirmar a remoção ?' @ok='agree_item' @cancelar='cancae_item'></erp-del>
    </div>
</template>
<script>
	import myMsg from './components/msg'
	export default {
		components: {
			myMsg,
		},
		data() {
			return {
				loading: false,
				value: '',
				checked: true,
				list: [1, 2, 3],
				total: 10
			}
		},
		methods: {
			agree_item() {

			},
			cancae_item() {

			}
		}
	}

</script>
<style rel='stylesheet/scss' lang="scss">
	.sac-icon {
		display: flex;
		align-items: center;
		border-right: 1px solid #ccc;
		padding: 0px 20px;
		>img {
			margin-right: 10px;
		}
		>div {
			>p {
				white-space: nowrap;
				text-align: center;
				line-height: 1.5
			}
			>.border-line {
				border-bottom: 1px solid #000;
				/*				margin: 0 20px;*/
			}
		}

	}

</style>
