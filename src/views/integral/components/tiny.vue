<template>
    <el-dialog
    :visible.sync="$store.state.integral.show_tiny"
    >
		<div slot='title' class="erp-dialog_title">
			{{$t('integral["Configurações Tiny"]')}}
		</div>
    	<div class='erp-dialog-item just-start' style="padding:0px 0 10px 0;border:none;margin:0px;margin-bottm:10px">
			<div>
				<p>{{$t('integral["Token de Acesso"]')}}</p>
				<el-input type='text' size='small'  ></el-input>
			</div>
		</div>
    </el-dialog>
</template>
<script>
    
</script>
