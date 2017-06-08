<template>
    <div class="list">
        <el-table border style="width: 100%" align='center' 
            :data="user_list"
            @selection-change='onSelectionChange'>
         
            <el-table-column
                prop="created_at"
                label="提现时间"
                align="center"
                :sortable="true">
            </el-table-column>

            <el-table-column
                prop="cash_money"
                label="提现金额"
                align="center"
                :sortable="true">
            </el-table-column>

            <el-table-column
                prop="bank_card"
                label="银行卡号"
                align="center"
                :sortable="true">
            </el-table-column>


             <el-table-column
                prop="bank_name"
                label="卡种类"
                align="center"
                :sortable="true">
            </el-table-column>


            <el-table-column
                label="提现状态"
                align="center"
                >
              <template scope="scope">
                 <el-steps v-if="scope.row.status == 0" :space="70" :active="1" finish-status="success">
                  <el-step title="申请"></el-step>
                  <el-step title="通过"></el-step>
                   <el-step title="打款"></el-step>
                </el-steps>
                 <el-steps v-else-if="scope.row.status == 1" :space="70" :active="2" finish-status="success">
                  <el-step title="申请"></el-step>
                  <el-step title="通过"></el-step>
                  <el-step title="打款"></el-step>
                </el-steps>
                 <el-steps v-else-if="scope.row.status == 2" :space="70" :active="2" finish-status="success">
                  <el-step title="申请"></el-step>
                  <el-step title="拒绝" :description="scope.row.msg"></el-step>
                </el-steps>
                  <el-steps v-else-if="scope.row.status == 3" :space="70" :active="3" finish-status="success">
                  <el-step title="申请"></el-step>
                  <el-step title="拒绝"></el-step>
                  <el-step title="打款"></el-step>
                </el-steps>
             </template>
            </el-table-column>

    
        </el-table>

         <el-col :span="24" class='btm-action'>
            <el-pagination
                v-if='paginations.total>0'
                class='pagination'
                :page-sizes="paginations.page_sizes"
                :page-size="paginations.page_size"
                :layout="paginations.layout"
                :total="paginations.total"
                :current-page='paginations.current_page'
                @current-change='onChangeCurrentPage'
                @size-change='onChangePageSize'>
            </el-pagination>
        </el-col>

    </div>
</template>

<script>
	import ListJs from './List.js';
	module.exports = ListJs;
</script>
<style scoped lang='less'>
    .demo-form-inline {
        display: inline-block;
        float: right;
    }

    .btm-action {
        margin-top: 20px;
        text-align: center;
    }

    .actions-top {
        height: 46px;
    }

    .pagination {
        display: inline-block;
    }
</style>
