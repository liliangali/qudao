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
                label="头像"
                align="center"
                >
              <template scope="scope">
                 <img :src="scope.row.avatar" width=100 height=100/><br>
                 <span>{{scope.row.user_name}}</span>
             </template>
            </el-table-column>
    
            <el-table-column
                prop="reg_time"
                label="注册时间"
                align="center"
                width="150"
                :sortable="true">
            </el-table-column>

               <el-table-column
                prop="last_login"
                label="最后登陆时间"
                align="center"
                width="150"
                :sortable="true">
            </el-table-column>

                <el-table-column
                prop="order_num"
                label="订单总数"
                align="center"
                width="150"
                :sortable="true">
            </el-table-column>

                <el-table-column
                prop="final_amount_num"
                label="订单总金额"
                align="center"
                width="150"
                :sortable="true">
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
