<template>
    <div class="form">
        <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;"
            :model="article_data"
            :rules="rules"
            ref='refArticle'>
            <el-form-item label="文章标题" prop='title' style="width:600px;">
                <el-input v-model="article_data.title"></el-input>
            </el-form-item>
            <el-form-item label="文章内容" style="width:986px;" prop='content'>
                <div id="article" style="height:260px;"></div>
            </el-form-item>
      
      <!--
            <el-form-item label="状态">
                <el-switch on-text="启用" off-text="禁用" v-model="article_data.status" style="width:100%"></el-switch>
            </el-form-item>
             -->


            <el-form-item>
                <el-button type="primary" @click='onSubmit("refArticle")'>立即{{article_data.id ? '修改' : '添加'}}</el-button>
                
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
