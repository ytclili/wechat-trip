Component({
    properties: {
        sourceData: {
            type: "array",
            value: [{
                month: 3,
                day: 28,
                tags: [{
                    text: "日常",
                    icon: "../../images/my/daily.svg"
                }],
                desc: "你总顾及别人，那谁来顾及你",
                imageArray: ["../../images/my/avatar.png", "../../images/my/image1.png", "../../images/my/image2.png"]
            }, {
                month: 3,
                day: 28,
                tags: [{
                    text: "日常",
                    icon: "../../images/my/daily.svg"
                }],
                desc: "你总顾及别人，那谁来顾及你",
                imageArray: ["../../images/my/avatar.png", "../../images/my/image1.png", "../../images/my/image2.png"]
            }],
            observer: function (newVal, oldVal) {
                console.log(newVal)
                // 对每组数据分别设置布局类
                newVal.forEach(item => {
                    this.setLayoutClass(item.imageArray.length, item);
                });
            }
        }
    },
    lifetimes: {
        ready: function () {
            let sourceData = this.data.sourceData
            sourceData.forEach(item => {
                console.log(item, "yyy")
                this.setLayoutClass(item.imageArray.length, item);
            });
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {},
        layoutClasses: [] // 用于设置布局类的数据
    },
    methods: {
        // 这里是一个自定义方法
        customMethod: function () {},
        setLayoutClass: function (numImages) {
            console.log(numImages, "==")
            let layoutClass = '';

            if (numImages === 1) {
                layoutClass = 'one-image';
            } else if (numImages === 2) {
                layoutClass = 'two-images';
            } else if (numImages === 3) {
                layoutClass = 'three-images';
            } else if (numImages === 4) {
                layoutClass = 'four-images';
            }

            const layoutClasses = this.data.layoutClasses;
            layoutClasses.push(layoutClass);
            this.setData({
                layoutClasses: layoutClasses
            });
        }
    },

})