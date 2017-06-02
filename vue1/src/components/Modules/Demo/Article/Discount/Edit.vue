<template>
    <div class="form">
        <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;"
            :model="data"
            :rules="rules"

            ref='refArticle'>
            <el-form-item label="渠道折扣" prop='discount' style="width:600px;">
                <el-input v-model="data.discount"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click='onSubmit("refArticle")'>立即{{data.id ? '修改' : '修改'}}</el-button>
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
