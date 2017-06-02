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
                is_service: '0',
            },

            //详情弹框信息
            dialog: {
                show: false,
                user_info: {}
            },

            //列表过滤性别
            sex_filters: {
                list: [{
                    text: '个人',
                    value: 1
                }, {
                    text: '公司',
                    value: 2
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
             options: [
             {
              value: '0',
              label: '请选择'
            }, 
             {
              value: '1',
              label: '未审查'
            }, 
            {
              value: '2',
              label: '已审查'
            }],
            switcht:1,
            switchf:0,
         
            
     
        }
    },
  
    methods: {

        selchl(val,id,uid) {
   
            //审核会员
        },
      
        /**
         * 列表性别格式化事件
         * @param  {object} item 当前用户信息
         * @return {string}      根据定义的类型转换文本描述值
         */
        formatterSex(item) {
            return item.member_type == 1 ? '个人' : '公司';
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
            return item.member_type == value;
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
            this.getList({});
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
         * 改变页码和当前页时需要拼装的路径方法
         * @param {string} field 参数字段名
         * @param {string} value 参数字段值
         */
        setPath(field, value) {
            var path = this.$route.path,
                query = Object.assign({}, this.$route.query);

            query[field] = value;

            this.$router.push({
                path: path,
                query: query
            });
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
        onChangePageSize(size) {
             this.paginations.page_size = size;
            this.getList({
                size,
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
         * 修改用户
         * @param  {object} user 当前用户信息对象
         */
        onEditUser(user) {
            if (user && user.user_id) {
                this.$router.push('/demo/user/edit?id=' + user.user_id);
            } else {
                this.$message({
                    showClose: true,
                    message: 'ID跑哪去了？',
                    type: 'error'
                });
            }
        },


        /**
         * 查看用户信息事件
         * @param  {object} user 当前用户信息对象
         */
        onSelectUser(user) {
            if (user && user.user_name) {
                this.$router.push('/tongji/user/list?chname=' + user.user_name);
            } else {
                this.$message({
                    showClose: true,
                    message: 'ID跑哪去了？',
                    type: 'error'
                });
            }
        },
          /**
         * 查看用户信息事件
         * @param  {object} user 当前用户信息对象
         */
        onSelectOrder(user) {
            if (user && user.user_name) {
                this.$router.push('/demo/order/list?chname=' + user.user_name);
            } else {
                this.$message({
                    showClose: true,
                    message: 'ID跑哪去了？',
                    type: 'error'
                });
            }
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
            for (var k in this.search_data) {
                if (this.search_data[k] !== undefined) {
                    this.search_data[k] = this.search_data[k];
                    data[k] = this.search_data[k];
                }
            }


            for (var k in query) {
                if (this.search_data[k] !== undefined) {
                    this.search_data[k] = query[k];
                    data[k] = query[k];
                }
            }
            data['member_type'] = 0;
            this.$$api_user_selectUserList(data, (data) => {
                this.user_list = data.data.data;
                this.paginations.total = data.data.total;
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