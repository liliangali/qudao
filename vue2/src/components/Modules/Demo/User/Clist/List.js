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
     
        }
    },
    methods: {



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