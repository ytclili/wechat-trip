Component({
    properties: {
        height: {
            type: String,
            value: '364rpx', // 默认高度
            observer: function (newVal, oldVal) {
                // 如果需要在参数变化时执行额外操作，可以在这里处理
                // 例如 更新组件的高度
                this.setData({
                    computedHeight: newVal
                });
            }
        }
    },
    lifetimes: {

    },
    data: {
        computedHeight: '364rpx' // 默认高度
    },
    methods: {}

})