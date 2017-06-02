<template>
    <div class="list">

<el-row :gutter="20">
  <el-col :span="10">
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">推广情况统计</span>
    <el-button style="float: right;margin-left:10px" type="primary">本年</el-button>
     <el-button style="float: right;" type="primary">本月</el-button>
     <el-button style="float: right;" type="primary">本周</el-button>
     <el-button style="float: right;" type="primary">今日</el-button>
  </div>


  <div class="text item">
    <span>关注用户数:20 <el-tag type="success">明细</el-tag> </span> <br>
    <span>下单次数:20  </span> 
  </div>

    <div class="text item">
    <span>下单金额:20</span><br>
    <span>提成金额:20</span> 
  </div>

</el-card>

  </el-col>


<el-col :span="8">
     <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span style="line-height: 10px;">我的账户</span>
  </div>
  <div class="text item">
      <span>当前金额:1000 <el-tag type="success">提现</el-tag> </span></span><br>
      <span>已提现金额:200</span><br>
  </div>
</el-card>


  </el-col>

</el-row>

<span>下单金额前5名</span>

    <el-table
      :data="tableData"
      style="width: 100%">
     
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="下单金额">
      </el-table-column>
    </el-table>

    <span>下单次数前5名</span>

    <el-table
      :data="tableData"
      style="width: 100%">
      
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="下单次数">
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
