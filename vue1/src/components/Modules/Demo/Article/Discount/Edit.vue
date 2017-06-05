<template>
    <div class="form">
        <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;"
            :model="data"
            :rules="rules"

            ref='refArticle'>
            <el-form-item label="渠道折扣" prop='discount' style="width:600px;">
                <el-input v-model="data.discount"></el-input>
            </el-form-item>
            <el-form-item label="最小提现金额(单次)" prop='min_money' style="width:600px;">
                <el-input v-model="data.min_money"></el-input>
            </el-form-item>
                 <el-form-item label="最大提现金额(单次)" prop='max_money' style="width:600px;">
                <el-input v-model="data.max_money"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click='onSubmit("refArticle")'>提交</el-button>
            </el-form-item>
     
        </el-form>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    module.exports=EditJs;
</script>
<style scoped>
    
</style>
