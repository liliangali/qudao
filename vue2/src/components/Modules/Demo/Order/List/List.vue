<template>
    <div class="list">

           <el-col :span="24" class='actions-top'>
       
            
            <el-form :inline="true" :model='search_data' class="demo-form-inline">
                <el-form-item>
                    <el-input placeholder="姓名" 
                        v-model='search_data.username'
                        clear></el-input>
                </el-form-item>
                 <el-form-item>
                 <el-select v-model="search_data.status" multiple placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
         </el-form-item>
                <el-form-item>
                    <el-button type="default" @click='onSearch'>查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table border style="width: 100%" align='center'
            :data="article_list">

               <el-table-column
                :prop="fields.order_sn.info.prop"
                :label="fields.order_sn.info.label"
                :align="fields.order_sn.style.align"
                :width="fields.order_sn.style.width"
                :sortable="fields.order_sn.info.sortable">
            </el-table-column>

            <el-table-column
                :prop="fields.create_time.info.prop"
                :label="fields.create_time.info.label"
                :align="fields.create_time.style.align"
                :width="fields.create_time.style.width"
                :sortable="fields.create_time.info.sortable">
            </el-table-column>
            <el-table-column
                :prop="fields.name.info.prop"
                :label="fields.name.info.label"
                :align="fields.name.style.align"
                :sortable="fields.name.info.sortable">
            </el-table-column>
           <el-table-column
                :prop="fields.price.info.prop"
                :label="fields.price.info.label"
                :align="fields.price.style.align"
                :sortable="fields.price.info.sortable">
            </el-table-column>
            <el-table-column
                :prop="fields.status.info.prop"
                :label="fields.status.info.label"
                :align="fields.status.style.align"
                :width="fields.status.style.width"
                :sortable="fields.status.info.sortable"
                :formatter="formatterStatus"
                :filters="fields.status.filter.list"
                :filter-method="filterStatus"
                :filter-multiple="fields.status.filter.multiple">
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
    module.exports=ListJs;
</script>
<style scoped lang='less'>
    .demo-form-inline{
        display: inline-block;
        float: right;
    }
    .btm-action{
        margin-top: 20px;
        text-align: center;
    }
    .actions-top{
        height: 46px;
    }
    .pagination{
        display: inline-block;
    }
</style>
