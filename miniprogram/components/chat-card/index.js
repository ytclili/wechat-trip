Component({
    properties: {
        chatUser: {
            type: Object,
            value: {

            },
            observer: function (newVal, oldVal) {
                console.log(newVal, "newVal")
                // 当 chatUser 属性发生变化时，将其设置为组件的 data 值
                this.setData({
                    chatUser: newVal
                });
            }
        }
    },
    lifetimes: {

    },

    methods: {

    },
    data: {
        chatUser: {}
    }

})