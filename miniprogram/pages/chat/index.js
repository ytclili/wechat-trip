Page({
    data: {
        currentSelect: "chat",
        chatUser: [{
                avatar: "../../images/my/image1.png",
                online: true,
                username: "林园园",
                message: "在干嘛",
                time: "19:24",
                newMessageTotal: 2
            }, {
                avatar: "../../images/my/image2.png",
                online: true,
                username: "李夏",
                message: "嗯嗯",
                time: "19:25",
                newMessageTotal: 0
            }, {
                avatar: "../../images/my/image1.png",
                online: false,
                username: "小薇",
                message: "略略略",
                time: "19:24",
                newMessageTotal: 2
            },
            {
                avatar: "../../images/my/image2.png",
                online: true,
                username: "阿狸",
                message: "上号",
                time: "19:24",
                newMessageTotal: 2
            },
            {
                avatar: "../../images/my/image2.png",
                online: true,
                username: "阿狸",
                message: "上号",
                time: "19:24",
                newMessageTotal: 2
            }, {
                avatar: "../../images/my/image2.png",
                online: true,
                username: "阿狸",
                message: "上号",
                time: "19:24",
                newMessageTotal: 2
            }, {
                avatar: "../../images/my/image2.png",
                online: true,
                username: "阿狸",
                message: "上号",
                time: "19:24",
                newMessageTotal: 2
            }, {
                avatar: "../../images/my/image2.png",
                online: true,
                username: "阿狸",
                message: "上号",
                time: "19:24",
                newMessageTotal: 2
            }
        ]
    },
    handleClick: function (event) {
        let type = event.currentTarget.dataset.type
        this.setData({
            currentSelect: type
        })

    }
})