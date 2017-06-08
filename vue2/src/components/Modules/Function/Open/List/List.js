module.exports = {
    name: 'list',
    data() {
        return {
            order_money_by: [],
            order_count_by:[],
            openData:{},
            time:'',
        }
    },
    methods: {
          /**
         * 获取用户信息列表方法
         */
        getList() {
            
            this.$$api_open_getBasic({time:this.time}, (data) => {
                this.openData = data.data;
                this.order_money_by = this.openData.order_money_by;
                this.order_count_by = this.openData.order_count_by;
            });
        },
        subtime(time) {
            this.time = time;
            this.getList();
        },
    },

    mounted() {
        this.getList();
    },
}