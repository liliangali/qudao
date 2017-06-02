<template>
    <div class="list">

<el-row :gutter="20">
  <el-col :span="5">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">今日报表</span>
  </div>
  <div class="text item">
    <span>注册用户数目:20</span><br>
    <span>待审查用户数目:20</span> 
  </div>
</el-card>

  </el-col>


<el-col :span="5">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">今日推广情况</span>
  </div>
  <div class="text item">
      <span>今日下单次数:20</span><br>
      <span>今日下单金额:20</span><br>
      <span>今日提现金额:20</span><br>
  </div>
</el-card>
  </el-col>



  <el-col :span="5">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">总报表</span>
  </div>
  <div class="text item">
 <span>用户数目:20</span><br>
     <span>下单用户数:20</span><br>
      <span>下单总金额:20</span><br>
      <span>提现总金额:20</span><br>
  </div>
</el-card>
  </el-col>


     


</el-row>

<span>下单金额前5名</span>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <span>下单次数前5名</span>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>



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
