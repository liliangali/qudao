<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
       
            
            <el-form :inline="true" :model='search_data' class="demo-form-inline">
              <el-select v-model="search_data.is_service" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

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
        <el-table border style="width: 100%" align='center'  current-row-key
            :data="user_list"
           >

                    <el-table-column type="expand">
                      <template scope="scope">
                        <div v-if="scope.row.member_type == 2">

                          <el-form label-position="left" inline class="demo-table-expand">

                          <el-form-item label="商铺名称">
                            <span>{{ scope.row.channel_info.name }}</span>
                          </el-form-item>

                          <el-form-item label="组织机构">
                            <span>{{ scope.row.channel_info.jigou }}</span>
                          </el-form-item>

                           <el-form-item label="申请时间">
                            <span>{{ scope.row.channel_info.created_at }}</span>
                          </el-form-item>

                             <el-form-item label="商铺地址">
                            <span>{{ scope.row.channel_info.region_name }}</span>
                          </el-form-item>

                        <el-form-item label="营业执照">
                             <img :src="scope.row.channel_info.image_url" width=100 height=100/>
                        </el-form-item>

                        </el-form>

                        </div>
                      </template>
                    </el-table-column>

          <el-table-column
                prop="user_name"
                label="姓名"
                align="center"
                :sortable="true">
            </el-table-column>

            <el-table-column
                prop="member_type"
                label="类型"
                align="center"
                :sortable="true"
                :formatter="formatterSex"
                :filters="sex_filters.list"
                :filter-method="filterSex"
                :filter-multiple="sex_filters.multiple">
            </el-table-column>


       
            <el-table-column
                          prop="cstatus"
                          fixed="right"
                          label="操作"
                          width="150">
                          <template scope="scope">
                           <el-tooltip class="item" effect="dark" content="查看渠道订单" placement="bottom-end">
                               <el-button
                            type="info"
                            icon='view'
                            size="mini"
                            @click='onSelectOrder(scope.row)'></el-button>
                             </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="查看渠道下线" placement="bottom-end">
                             <el-button
                            type="info"
                            icon='view'
                            size="mini"
                            @click='onSelectUser(scope.row)'></el-button>
                              </el-tooltip>
                                <el-tooltip class="item" effect="dark" content="修改渠道信息" placement="bottom-end">
                           <el-button
                            type="info"
                            icon='edit'
                            size="mini"
                            @click='onEditUser(scope.row)'></el-button>
                             </el-tooltip>
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
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
