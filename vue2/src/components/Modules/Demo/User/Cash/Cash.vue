<template>
    <div class="form">
        <el-form style="margin:20px;width:60%;min-width:600px;" 
            label-width="100px" 
            :model="user_data"
            :rules="user_rules"
            ref='user_data'>


    <el-form-item class='edit-form' 
                label="提现金额" 
                prop='discount'>
<span>可提现额度:{{limit_money}}</span>  <br>   <span>单次最大提现额度:{{dicsount.max_money}}</span>
<br><span>单次最小提现额度:{{dicsount.min_money}}</span>
            </el-form-item>

            <el-form-item class='edit-form' 
                label="提现金额" 
                prop='money'>
                <el-input
                 style="width:50%;"
                        v-model.number="user_data.money" placeholder='0.00'></el-input>
            </el-form-item>


            <el-form-item class='edit-form' 
                label="银行卡号" 
                prop='bank_card'>
                <el-input
                 :disabled=true
                        v-model="user_data.bank_card" placeholder='银行卡号'></el-input>
            </el-form-item>

                <el-form-item style="width:100%;" 
                      prop='bank'    
                      label="开户行" >
                        <el-select 
                         :disabled=true
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
                 :disabled=true
                prop='bank_address'>
                <el-input type='textarea' 
                   :disabled=true
                    v-model="user_data.bank_address"
                    placeholder='住址'></el-input>
            </el-form-item>

                 <el-form-item class='edit-form' 
                label="开户姓名" 
                prop='card_name'>
                <el-input
                        :disabled='true'
                        v-model="user_data.card_name" placeholder='开户姓名'></el-input>
               </el-form-item>

                       <el-form-item class='edit-form' 
                label="手机验证码" 
                prop='phonecode'>
                 <el-input  v-model="user_data.phonecode" placeholder="请输入手机验证码" style="width:50%;"></el-input>
                            <el-button :plain="true" v-on:click="plan" :disabled="paytime.disa">{{paytime.time}}</el-button>

               </el-form-item>


            <el-form-item>
                <el-button type="primary"  @click='save_user("user_data")'>提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import CashJs from './Cash.js';
    module.exports=CashJs;
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
