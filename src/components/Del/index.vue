<template>
	<el-dialog
	class='error-page'
		:visible.sync="$store.state.all.show_del"
		  center
		:append-to-body = 'true'
		>
	<div slot='title' class="error-header">{{error_title}}</div>
	<div class="error-content">
		<p class="error-message" v-for='item in error_message'>{{item}}</p>
		<p style="text-align:center">
			<button class="erp-btn" @click='agree'><span class="error-inner">{{$t('product["Sim"]')}}</span></button>
			<button class="erp-btn info" @click='cancel'><span class="error-inner">{{$t('product["Não"]')}}</span></button>
		</p>
	</div>
	</el-dialog>
</template>
<script>
	export default {
		name: 'erp_del',
		data() {
			return {
				error_title: '',
				error_message: '',
			}
		},
		props: ['message', 'title'],
		methods: {
			agree() {
				this.$parent.agree_item(this.$store.getters.del_id);
			},
			cancel() {
				this.$parent.cancae_item();
			}
		},
		created() {
			this.error_title = this.title || 'Atenção'
			if (typeof this.message === 'string') {
				this.error_message = [this.message]
			} else {
				this.error_message = this.message
			}

		}
	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.del-title-large {
		font-size: 22px;
		font-weight: bold;
		margin: 10px 20px 0px 20px;
		padding-bottom: 20px;
		border-bottom: 2px solid #ccc
	}

	.bind-img {
		text-align: center;
		margin-bottom: 30px;
	}

	.del-title {
		text-align: center;
		margin-bottom: 0px;
		font-size: 18px;
		color: #000
	}

	.del-h3 {
		margin-top: -20px;
	}

	.del-button {
		text-align: center;
		margin-top: 12px;
		span {
			margin: 0 10px;
			font-size: 14px
		}
	}

</style>
