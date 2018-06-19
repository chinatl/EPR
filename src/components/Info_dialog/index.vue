<template>
	<el-dialog
		class="error-page"
		:visible.sync="$store.state.all.show_info"
		  center
		  :append-to-body = 'true'
		>
		<div slot='title' class="error-header">{{error_title}}</div>
		<div class="error-content">
			<p class="error-message" v-for='item in error_message'>{{item}}</p>
			<p class="error-button">
				<button class="erp-btn"  @click='agree'>{{$t('button["ok"]')}}</button>
			</p>
		</div>
	</el-dialog>
</template>
<script>
	export default {
		data() {
			return {
				error_title: '',
				error_message: '',
			}
		},
		props: ['title', 'message'],
		watch: {
			message(e) {
				if (typeof e === 'string') {
					this.error_message = [e]
				} else {
					this.error_message = e
				}
			},
			title(e) {
				this.error_title = e
			}
		},
		created() {
			if (typeof this.message === 'string') {
				this.error_message = [this.message]
			} else {
				this.error_message = this.message
			}
			this.error_title = this.title;
		},
		methods: {
			agree() {
				this.$store.commit("TOGGLE_ALL_INFO");
			},

		}
	}

</script>

<style rel="stylesheet/scss" lang="scss">
	.error-page {
		div.el-dialog {
			width: 760px;
		}

	}

</style>
