<template>
    <div class="form">
        <el-form style="margin:20px;width:60%;min-width:600px;" 
            label-width="100px" 
            :model="user_data"
            ref='user_data'>


           <el-form-item class='edit-form' 
                label="会员名称" 
                prop='user_name'>
                <el-input
                 :disabled=true
                 style="width:50%;"
                        v-model="user_data.users.user_name" placeholder='0.00'></el-input>
            </el-form-item>

            <el-form-item class='edit-form' 
                label="提现金额" 
                prop='cash_money'>
                <el-input
                 :disabled=true
                 style="width:50%;"
                        v-model="user_data.cash_money" placeholder='0.00'></el-input>
            </el-form-item>


            <el-form-item class='edit-form' 
                label="银行卡号" 
                prop='bank_card'>
                <el-input
                 :disabled=true
                        v-model="user_data.bank_card" placeholder='银行卡号'></el-input>
            </el-form-item>
           <el-form-item class='edit-form' 
                label="开户行" 
                prop='bank_card'>
                <el-input
                 :disabled=true
                        v-model="user_data.bank_name" placeholder='银行卡号'></el-input>
            </el-form-item>

            <el-form-item class="edit-form" 
                label='开户行地址'
                 :disabled=true
                prop='bank_address'>
                <el-input type='textarea' 
                   :disabled=true
                    v-model="user_data.bank_address"
                    placeholder='开户行地址'></el-input>
            </el-form-item>

            <el-form-item class='edit-form' 
                label="开户姓名" 
                prop='card_name'>
                <el-input
                        :disabled='true'
                        v-model="user_data.card_name" placeholder='开户姓名'></el-input>
               </el-form-item>
            </el-form-item>
      
           <el-form-item class='edit-form' 
                  label="审核状态" 
                  prop='card_name'>
                 <el-radio-group 
               
                 v-model="radio2" 
                 @change="changeStatus"
                 >
                <el-radio :label="0"   :disabled="cash_status" >未审核</el-radio>
                <el-radio :label="1"   :disabled="cash_status" >成功</el-radio>
                <el-radio :label="2"   :disabled="cash_status" >失败</el-radio>
                <el-radio :label="3"   :disabled="money_status" >已打款</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item class='edit-form' 
                label="审核失败原因" 
                prop='card_name'>
                <el-input
                        :disabled="msg_status"
                        type="textarea"
                        v-model="user_data.msg" placeholder='审核失败原因'></el-input>
               </el-form-item>
            </el-form-item>



            <el-form-item>
                <el-button  :disabled="sub_status"  type="primary" @click='save_user("user_data")'>提交</el-button>
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
