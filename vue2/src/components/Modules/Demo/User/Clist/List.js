module.exports = {
    name: 'list',
    data() {
        return {
            user_list: [], //用户列表数组
            currentPage: 1,
            page_size:10,
            page_sizes:[10, 100, 200, 300],
            loading2:0,
                 //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 12,
                page_sizes: [3, 9, 12, 24],
                layout: "total, sizes, prev, pager, next, jumper"
            },
            batch_id: '', //批量删除时这是多个用逗号隔开的id字符串
            batch_flag: true, //符合批量删除为true,否则为false

            //搜索表单信息
            search_data: {
                user_name: '',
                email: '',
            },

            //详情弹框信息
            dialog: {
                show: false,
                user_info: {}
            },

            //列表过滤性别
            sex_filters: {
                list: [{
                    text: '男',
                    value: 1
                }, {
                    text: '女',
                    value: 2
                }, {
                    text: '保密',
                    value: 3
                }],
                multiple: false
            },

            //列表过滤状态
            status_filters: {
                list: [{
                    text: '启用',
                    value: 1
                }, {
                    text: '禁用',
                    value: 2
                }],
                multiple: false
            },
     
        }
    },
    methods: {
        /**
         * 列表性别格式化事件
         * @param  {object} item 当前用户信息
         * @return {string}      根据定义的类型转换文本描述值
         */
        formatterSex(item) {
            return item.sex == 1 ? '男' : (item.sex == 2 ? '女' : '保密');
        },


        /**
         * 列表状态格式化事件
         * @param  {object} item 当前用户信息
         * @return {string}      根据定义的类型转换文本描述值
         */
        formatterStatus(item) {
            return item.status == 1 ? '启用' : '禁用';
        },


        /**
         * 列表过滤性别事件
         * @param  {number} value 状态码
         * @param  {object} item  当前用户信息
         * @return {boolean}       匹配成功为true,否则为false
         */
        filterSex(value, item) {
            return item.sex == value;
        },


        /**
         * 列表过滤状态事件
         * @param  {number} value 状态码
         * @param  {object} item  当前用户信息
         * @return {boolean}       匹配成功为true,否则为false
         */
        filterStatus(value, item) {
            return item.status == value;
        },


        /**
         * 点击搜索按钮事件
         */
        onSearch() {
            // console.log(this.search_data);

            var sd = {};

            var query = this.$route.query;
            for (var p in query) {
                sd[p] = query[p];
            }

            for (var s in this.search_data) {
                sd[s] = this.search_data[s];

                if (!sd[s]) {
                    delete sd[s];
                }
            }


            this.$router.push({
                path: this.$route.path,
                query: sd
            });
        },


        /**
         * 表格列表触发CheckBox的事件
         * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
         */
        onSelectionChange(val) {
            // console.log(val);
            if (val.length) {
                this.batch_flag = false;
                var ids = [];
                for (var i = 0; i < val.length; i++) {
                    ids.push(val[i].id);
                }
                this.batch_id = ids.join(',');
            } else {
                this.batch_flag = true;
                this.batch_id = '';
            }
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


        onAccessUser(user, index, list) {
            this.$$accessUser({
                id: user.id
            }, (data) => {
                user.status = user.status == 1 ? 2 : 1;
            });
        },


        /**
         * 获取用户信息列表方法
         */
        getList() {
            var data = {
                page: this.paginations.current_page,
                page_size: this.paginations.page_size
            };
            var query = this.$route.query;
    
            for (var k in query) {
                if (this.search_data[k] !== undefined) {
                    this.search_data[k] = query[k];
                    data[k] = query[k];
                }
            }

            this.$$api_user_selectCash(data, (data) => {
                this.user_list = data.data;
                this.paginations.total = data.meta.pagination.total;
            });


        }
    },

    mounted() {
        this.getList();

        //test dialog

        /* setTimeout(() => {
             this.onSelectUser(this.user_list[0]);
         }, 600);*/
    },
    watch: {
        '$route' (to, from) {
            this.getList();
        }
    }
}