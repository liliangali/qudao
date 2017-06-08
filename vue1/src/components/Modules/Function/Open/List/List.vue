<template>
    <div class="list">

<el-row :gutter="20">
  <el-col :span="5">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">今日报表</span>
  </div>
  <div class="text item">
    <span>注册用户数目:{{openData.user_num}}</span><br>
    <span>待审查用户数目:{{openData.check_user_num}}</span> 
  </div>
</el-card>
  </el-col>
<el-col :span="5">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">今日推广情况</span>
  </div>
  <div class="text item">
      <span>今日下单次数:{{openData.order_count}}</span><br>
      <span>今日下单金额:{{openData.order_num}}</span><br>
      <span>今日提现金额:{{openData.cash_num}}</span><br>
  </div>
</el-card>
  </el-col>
  <el-col :span="5">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">总报表</span>
  </div>
  <div class="text item">
 <span>用户数目:{{openData.total_user_num}}</span><br>
     <span>下单用户数:{{openData.order_user_num}}</span><br>
      <span>下单总金额:{{openData.total_order_num}}</span><br>
      <span>提现总金额:{{openData.total_cash_num}}</span><br>
  </div>
</el-card>
  </el-col>
</el-row>
     <bar></bar>
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
