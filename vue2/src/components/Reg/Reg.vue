<template>
    <div class="login" :style="winSize">
 
        <el-row>
            <el-col :span='24'>
                <div class="content">
                    <el-form label-position="left" label-width="0px" class="demo-ruleForm card-box loginform"
                        v-loading="login_actions.disabled"
                        element-loading-text="正在注册..."
                        :style="formOffset"
                        :model='data'
                        :rules="rule_data"
                        ref='data'>
                        <h3 class="title">系统注册</h3>
                          <el-form-item  prop='email'>
                            <el-input  v-model="data.email" placeholder="请输入邮箱"></el-input>
                         </el-form-item>

                        <el-form-item
                            prop='pass'>
                            <el-input type="password" auto-complete="off" placeholder="密码" 
                                v-model='data.pass'
                              ></el-input>
                        </el-form-item>

                             <el-form-item
                            prop='checkPass'>
                            <el-input type="password" auto-complete="off" placeholder="确认密码" 
                                v-model='data.checkPass'
                               ></el-input>
                           </el-form-item>

                               <el-form-item  prop='user_name' style="width:100%;" :inline="true">
                            <el-input  v-model="data.user_name" placeholder="请输入手机号" style="width:100%;"></el-input>
                         </el-form-item>
                             <el-form-item  prop='phonecode' style="width:100%;" :inline="true">
                            <el-input  v-model="data.phonecode" placeholder="请输入手机验证码" style="width:50%;"></el-input>
                            <el-button :plain="true" v-on:click="plan" :disabled="paytime.disa">{{paytime.time}}</el-button>
                         </el-form-item>

                                <el-form-item  prop='zuzhi'>
                            <el-input  v-model="data.zuzhi" placeholder="请输入组织机构代码"></el-input>
                         </el-form-item>


                                <el-form-item  prop='shangpu'>
                            <el-input  v-model="data.shangpu" placeholder="请输入商铺名称"></el-input>
                         </el-form-item>

 <el-form-item style="width:100%;" prop='selectedOptions2'>
  <el-cascader
    expand-trigger="hover"
    placeholder="请选择商铺地址"
    :options="options"
    v-model="data.option"
    @change="handleChange">
  </el-cascader>
  </el-form-item>

 <el-form-item style="width:100%;" prop='address'>
   <el-input  v-model="data.address" placeholder="请输入详细地址"></el-input>
 </el-form-item>
 
<el-form-item style="width:100%;" prop='imageUrl'>
上传营业执照
<el-upload
  class="avatar-uploader"
  :action="uploadUrl"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
 </el-form-item>
                        <el-form-item style="width:100%;">
                            <el-button type="primary" @click='login("data")'>注册</el-button>
                            <el-button @click='resetForm("data")'>重置</el-button>
                             <el-button @click='reg()'>登陆</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import RegJs from './Reg.js';
    module.exports=RegJs;
</script>


<style scoped lang='less'>
    .login{
        background: #1F2D3D;
       
        .card-box {
            box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
            -webkit-border-radius: 5px;
            border-radius: 5px;
            -moz-border-radius: 5px;
            background-clip: padding-box;
            margin-bottom: 20px;
            background-color: #F9FAFC;
            border: 2px solid #8492A6;
        }

        .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }

         .loginform {
            width: 350px;
            padding: 35px 35px 15px 35px;
        } 
        
        

}


</style>

<style>
  .login{
       height:3740px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

