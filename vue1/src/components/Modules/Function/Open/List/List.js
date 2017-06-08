import {
    Bar as Bar
} from 'modules/Demo/OrderStatis';
module.exports = {
    name: 'list',
     components: {
        Bar
    },
    data() {
        return {
            tableData: [{
                date: '1992-01-26',
                name: '赛冷思',
                sex: 1,
                status: 1,
                address: '北京苏州街',
            }, {
                date: '1996-05-02',
                name: '赛',
                sex: 1,
                status: 1,
                address: '西直河',
            }, {
                date: '1990-05-04',
                name: '冷',
                sex: 2,
                status: 2,
                address: '朝阳区',
            }, {
                date: '1998-05-01',
                name: '思',
                sex: 1,
                status: 1,
                address: '上海滩',
            }],
            openData:{

            },
        }
    },
    methods: {
          /**
         * 获取用户信息列表方法
         */
        getList() {
            
            this.$$api_open_getBasic({}, (data) => {
                this.openData = data.data;
            });
        }
    },

    mounted() {
        this.getList();
    },
}