<template>
    <div class="list">

<el-row :gutter="20">
  <el-col :span="10">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">推广情况统计</span>
     <el-button @click="subtime('year')" style="float: right;margin-left:10px" type="primary">本年</el-button>
     <el-button @click="subtime('month')" style="float: right;" type="primary">本月</el-button>
     <el-button @click="subtime('week')" style="float: right;" type="primary">本周</el-button>
     <el-button @click="subtime('today')" style="float: right;" type="primary">今日</el-button>
  </div>


  <div class="text item">
    <span>关注用户数:{{openData.user_num}} <router-link to="/demo/user/list"> <el-tag type="success">明细</el-tag></router-link> </span> <br>
    <span>下单次数:{{openData.order_count_sum}}  </span> 
  </div>

    <div class="text item">
    <span>下单金额:{{openData.order_money_sum}}</span><br>
    <span>提成金额:{{openData.discount_money_sum}}</span> 
  </div>

</el-card>

  </el-col>


<el-col :span="8">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">我的账户</span>
  </div>
  <div class="text item">
      <span>当前金额:{{openData.total_money}} <router-link to="/adv/bank/tixian"><el-tag type="success">提现</el-tag> </router-link></span></span><br>
      <span>已提现金额:{{openData.tixian_money}}</span><br>
  </div>
</el-card>


  </el-col>

</el-row>

<br><br><br>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">下单金额前5名</span>
   
  </div>
    <el-table
      :data="order_money_by"
      style="width: 100%">
     
      <el-table-column
        prop="user_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="final_amount_num"
        label="下单金额">
      </el-table-column>
    </el-table>
</el-card>



<br><br><br>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">下单次数前5名</span>
  </div>
    <el-table
      :data="order_count_by"
      style="width: 100%">
     
      <el-table-column
        prop="user_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="order_num"
        label="下单次数">
      </el-table-column>
    </el-table>
</el-card>

     </div>
</template>

<script>
    import ListJs from './List.js';
    module.exports=ListJs;
</script>
<style scoped>
    
</style>
<style>

</style>
