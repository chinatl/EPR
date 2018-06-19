<template>
<!--封装公用分页-->
<div class="erp-page">
	<el-pagination background
	layout="total, sizes, prev, pager, next, jumper"
	:total="$props.total"
 	:page-sizes="[5, 10, 15, 20]"
	@size-change="handleSizeChange"
 	:page-size="pageSize"
  	:current-page="pageNo"
	@current-change="handleCurrentChange">
	</el-pagination>
</div>
</template>

<script>
	export default {
		data() {
			return {
				pageSize: 5,
				pageNo: 1,
			}
		},
		props: {
			total: {
				default: 1,
				required: true
			}
		},
		created() {

		},
		methods: {
			handleSizeChange(e) {
				this.$parent.init(e, this.pageNo);
				this.pageSize = e;
			},
			handleCurrentChange(e) {
				this.$parent.init(this.pageSize, e);
				this.pageNo = e;
			}
		}
	}

</script>
