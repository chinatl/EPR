<template>
	<div class="error-page">
		<el-dialog
			:visible.sync="$store.state.all.show_error"
			  center
			>
			<div slot='title' class="error-header">{{error_title}}</div>
			<div class="error-content">
				<p class="error-message">{{error_message}}</p>
				<p class="error-button">
					<el-button size='small' round type="success" @click='agree'>
						<span class="error-inner">{{$t('button["ok"]')}}</span>
					</el-button>
				</p>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				error_title:'',
				error_message:'',
			}
		},
		props:['title','message'],
		methods: {
			agree() {
				this.$store.commit("TOGGLE_ALL_ARROR");
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},
			cancel() {
				this.$store.commit("TOGGLE_DELETE");
				this.$message({
					message: '恭喜你，操作失败',
					type: 'warning'
				});
			}
		},
		created(){
			this.error_title = this.title;
			this.error_message = this.message;
		}
	}

</script>
