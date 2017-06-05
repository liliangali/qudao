<template>
    <div class="list">
      <el-col :span="24" class='actions-top'>
       
            
            <el-form :inline="true" :model='search_data' class="demo-form-inline">
       
                <el-form-item>
                    <el-input placeholder="姓名" 
                        v-model='search_data.user_name'
                        clear></el-input>
                </el-form-item>
        
                <el-form-item>
                    <el-button type="default" @click='onSearch'>查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table border style="width: 100%" align='center' 
            :data="user_list"
            @selection-change='onSelectionChange'>

              <el-table-column
                prop="uinfo.user_name"
                label="姓名"
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
                prop="created_at"
                label="提现时间"
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
                prop="status"
                label="状态"
                align="center"
                :sortable="true"
                :formatter="formatterSex"
                :filters="sex_filters.list"
                :filter-method="filterSex"
                :filter-multiple="sex_filters.multiple">
            </el-table-column>


            <el-table-column
                label="操作"
                align="center"
                >
               <template scope="scope">
                    <el-button
                            type="info"
                            icon='edit'
                            size="mini"
                            @click='onCash(scope.row)'>审核</el-button>
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
