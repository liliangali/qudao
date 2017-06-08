<template>
    <div class="form">
        <el-form style="margin:20px;width:60%;min-width:600px;" 
            label-width="100px" 
            :model="user_data"
            :rules="user_rules"
            ref='user_data'>


            <el-form-item class='edit-form' 
                label="银行卡号" 
                prop='bank_card'>
                <el-input
                        v-model="user_data.bank_card" placeholder='银行卡号'></el-input>
            </el-form-item>

                <el-form-item style="width:100%;" 
                      prop='bank'    
                      label="开户行" >
                        <el-select 
                        v-model="user_data.bank"
                        @change='selectbank'
                         placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                </el-form-item>


            <el-form-item class="edit-form" 
                label='开户行地址'
                prop='bank_address'>
                <el-input type='textarea' 
                    v-model="user_data.bank_address"
                    placeholder='住址'></el-input>
            </el-form-item>

                 <el-form-item class='edit-form' 
                label="开户姓名" 
                prop='card_name'>
                <el-input
                        :disabled='false'
                        v-model="user_data.card_name" placeholder='开户姓名'></el-input>
               </el-form-item>

                       <el-form-item class='edit-form' 
                label="绑定手机验证码" 
                prop='phone_code'>
                <el-input
                        :disabled='false'
                        style="width:50%;"
                        v-model="user_data.phone_code" placeholder='手机验证码'></el-input>
                         <el-button :plain="true" v-on:click="plan" :disabled="paytime.disa">{{paytime.time}}</el-button>
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
