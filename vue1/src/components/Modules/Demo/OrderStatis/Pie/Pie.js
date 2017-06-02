import {
    Default as Statis
} from 'common/Echarts/Pie/';

module.exports = {
    name: 'order-statis-pie',
    components: {
        Statis
    },
    data() {
        return {
            echarts_data: {
                id: 'orderPieDefault',
                title: '饼状图初始化标题',
                subtext: '饼状图初始化描述信息',
                hover_title: '订单量',
                data_list: [{
                    name: '待支付1',
                    value: '100'
                }, {
                    name: '待配送1',
                    value: '100'
                }, {
                    name: '待收货1',
                    value: '100'
                }, {
                    name: '已完成1',
                    value: '100'
                }, {
                    name: '已取消1',
                    value: '100'
                }]
            }
        }
    },
    methods: {
        onUpdateTitle() {
            this.echarts_data.title = '饼状图动态标题';
        },
        onUpdateSubtext() {
            this.echarts_data.subtext = '饼状图动态描述信息';
        },
        onUpdateHoverTitle() {
            this.echarts_data.hover_title = '饼状图动态鼠标放上去标题';
        },
        onUpdateValueList() {
            this.getStatis();
        },
        onUpdateTextList() {
            for (var i = 0; i < this.echarts_data.data_list.length; i++) {
                var value = this.echarts_data.data_list[i];
                value.name += '!';

                this.$set(this.echarts_data.data_list, i, value);
            }
        },


        getStatis() {
            this.$$api_order_statisOrder({}, (data) => {
                for (var f in data.data) {
                    var value = this.echarts_data.data_list[f];
                    value.value = data.data[f];
                  console.log(this.echarts_data.data_list[f])
                  // return;
                    this.$set(this.echarts_data.data_list, f, value);
                     // this.$set(this.echarts_data.value_list, f-1, data.data[f]);
                }
            })
        }
    },
    mounted: function() {

    }
}