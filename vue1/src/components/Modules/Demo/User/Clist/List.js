module.exports = {
    name: 'list',
    data() {
        return {
            user_list: [], //用户列表数组
            currentPage: 1,
            page_size:10,
            page_sizes:[10, 100, 200, 300],
            loading2:0,
            //搜索表单信息
            search_data: {
                user_name: '',
            },
            //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 12,
                page_sizes: [3, 9, 12, 24],
                layout: "total, sizes, prev, pager, next, jumper"
            },
                  //列表过滤性别
            sex_filters: {
                list: [{
                    text: '未操作',
                    value: 0
                }, {
                    text: '成功',
                    value: 1
                },{
                    text: '失败',
                    value: 2
                }
                ],
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
          if (item.status == 0) 
          {
              return '未操作'
          }
          else if (item.status == 1) 
          {
            return '成功'
          }
          else
          { 
            return '失败('+item.msg+')'
          }
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
         * 修改用户
         * @param  {object} user 当前用户信息对象
         */
        onCash(user) {
            if (user && user.id) {
                this.$router.push('/tongji/cash/shenhe?id=' + user.id);
            } else {
                this.$message({
                    showClose: true,
                    message: 'ID跑哪去了？',
                    type: 'error'
                });
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

        /**
         * 点击搜索按钮事件
         */
        onSearch() {
            this.getList();
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

            for (var k in this.search_data) {
                if (this.search_data[k] !== undefined) {
                    this.search_data[k] = this.search_data[k];
                    data[k] = this.search_data[k];
                }
            }


            this.$$api_user_selectCash(data, (data) => {
                this.user_list = data.data.data;
                this.paginations.total = data.data.total;
            });


        }
    },

    mounted() {
        this.getList();
    },
    watch: {
        '$route' (to, from) {
            this.getList();
        }
    }
}