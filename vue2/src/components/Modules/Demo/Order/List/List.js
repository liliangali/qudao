import {
    order
} from 'config/request.js';

module.exports = {
    name: 'order-list',
    data() {
        return {
            article_list: [],

            format_status_list: {
                11: '待支付',
                20: '已支付',
                30: '已发货',
                40: '已完成',
                0: '已取消',
            },
            options: [{
                value: '11',
                label: '待支付'
                }, {
                value: '20',
                label: '已支付'
                }, {
                value: '30',
                label: '已发货'
                }, {
                value: '40',
                label: '已完成'
                }, {
                value: '0',
                label: '已取消'
            }],
            value5: [],
              //搜索表单信息
            search_data: {
                username: '',
                status: [],
            },
            batch_id: '', //批量删除时这是多个用逗号隔开的id字符串
            batch_flag: true, //符合批量删除为true,否则为false

            //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 12,
                page_sizes: [3, 9, 12, 24],
                layout: "total, sizes, prev, pager, next, jumper"
            },

            fields: {
                status: {
                    info: {
                        prop: 'status',
                        label: '订单状态',
                        sortable: true
                    },
                    filter: {
                        list: [{
                            text: '待支付',
                            value: 11
                        }, {
                            text: '已支付',
                            value: 20
                        }, 
                        {
                            text: '已发货',
                            value: 30
                        },{
                            text: '已完成',
                            value: 40
                        }, {
                            text: '已取消',
                            value: 0
                        }],
                        multiple: true
                    },
                    style: {
                        width: '180',
                        align: 'center'
                    }
                },
                create_time: {
                    info: {
                        prop: 'add_time',
                        label: '日期',
                        sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '260',
                        align: 'center'
                    }
                },
                name: {
                    info: {
                        prop: 'user_name',
                        label: '用户名',
                        sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                 order_sn: {
                    info: {
                        prop: 'order_sn',
                        label: '订单编号',
                        sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                price: {
                    info: {
                        prop: 'final_amount',
                        label: '金额',
                        sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                }
            }
        }
    },
    methods: {

        /**
         * 格式化状态
         */
        formatterStatus(item) {
            return this.format_status_list[item.status];
        },
        filterStatus(value, item) {
            return this.format_status_list[value] == this.format_status_list[item.status];
        },
          /**
         * 点击搜索按钮事件
         */
        onSearch() {
            console.log(this.search_data);
            var sd = {};
            var query = this.$route.query;
            for (var p in query) {
                sd[p] = query[p];
            }
            for (var s in this.search_data) {
                if(s == 'status'){
                    sd[s+'[]'] = this.search_data[s];
                }
                else{
                    sd[s] = this.search_data[s];
                }   
                if (!sd[s]) {
                    delete sd[s];
                }  
            }
         this.getList({});
        },

        /**
         * 改变当前页事件
         * @param  {number} page 当前页码
         */
        onChangeCurrentPage(page) {
            this.paginations.current_page = page;
            this.getList({
                page,
                
            });
        },

        /**
         * 改变每页显示数量事件
         * @param  {number} size 当前每页显示数量
         */
        onChangePageSize(page_size) {
            this.paginations.page_size = page_size;

            this.getList({
                page_size,
               
            });
        },

        /**
         * 获取订单列表
         * @param  {number} options.page      当前页码，切换页码时用
         * @param  {number} options.page_size 每页显示数量，改变每页数量时用
         * @param  {function} options.fn                            } 获取列表后的回调函数
         */
        getList() {
            var data = {
                page: this.paginations.current_page,
                page_size: this.paginations.page_size
            };
            for (var k in this.search_data) {
                if (this.search_data[k] !== undefined) {
                    this.search_data[k] = this.search_data[k];
                    data[k] = this.search_data[k];
                }
            }

    

            this.$$api_order_selectOrder(data, (order_data) => {
                this.article_list = order_data.data;
                this.paginations.total = order_data.meta.pagination.total
                
            });


        },
    },
    mounted() {
        this.getList();
    },
    '$route' (to, from) {

    }
}