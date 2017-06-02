<template>
    <div class="form">
        <el-form style="margin:20px;width:60%;min-width:600px;" 
            label-width="100px" 
            :model="user_data"
            :rules="user_rules"
            ref='user_data'>
            <el-form-item class='edit-form' 
                label="邮箱" 
                prop='email'>
                <el-input
                        :disabled='user_data.id ? true : false'
                        v-model="user_data.email" placeholder='常用邮箱'></el-input>
            </el-form-item>

            <el-form-item class='edit-form' 
                label="用户名称" 
                prop='user_name'>
                <el-input 
                    :disabled='user_data.id ? true : false'
                    v-model="user_data.user_name" 
                    placeholder='用户名'></el-input>
            </el-form-item>
            <div v-if="user_data.member_type == 2">
            <el-form-item class='edit-form' 
                label="商铺名称" 
                prop='name'>
                <el-input
                       :disabled=true
                        v-model="user_data.name" placeholder='商铺名称'></el-input>
            </el-form-item>
        
        <el-form-item style="width:100%;" 
        prop='selectedOptions2'    
        label="商铺地址" >
  <el-cascader
    expand-trigger="hover"
    placeholder="请选择商铺地址"
    :options="options"
     :disabled=true
    v-model="user_data.region"
    @change="handleChange">
  </el-cascader>
  </el-form-item>
            <el-form-item class="edit-form" 
                label='详细地址'
                prop='address'>
                <el-input type='textarea' 
                 :disabled=true
                    v-model="user_data.address"
                    placeholder='住址'></el-input>
            </el-form-item>

            <el-form-item class='edit-form' 
                label="组织机构" 
                prop='jigou'>
                <el-input
                      :disabled=true
                        v-model="user_data.jigou" placeholder='组织机构'></el-input>
            </el-form-item>

            <el-form-item class='' 
                label="营业执照" 
                prop='image_url'>
                <el-row>
                  <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }">
                     <img :src="user_data.image_url" class="image">
                    </el-card>
                  </el-col>
                </el-row>
            </el-form-item>

</div>

<div v-if="user_data.member_type != 0" >
            <el-form-item label="审核状态">
                <el-switch 
                :disabled=true
                on-color="#13ce66"
                off-color="#ff4949"
                    on-text="启用" 
                    off-text="禁用"
                    v-model="cstatus"
                    @change='changeStatus($event)'
                    ></el-switch>
            </el-form-item>
 </div>           

             <el-form-item
             v-if="user_data.openid == '' " 
             label="留密码(空代表不修改)"
                prop='password'>
                <el-input type="password" auto-complete="off" placeholder="密码" 
                    v-model='user_data.password'
                  ></el-input>
             </el-form-item>


            <el-form-item>
                <el-button type="primary" @click='save_user("user_data")'>{{user_data.id ? '修改' : '添加'}}</el-button>
                <el-button type="default"
                           v-if="!user_data.id"
                           @click='reset_user("user_data")'>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import EditJs from './Edit.js';
    module.exports=EditJs;
</script>

<style scoped>
 .edit-form{
        width:500px;
    }



  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
