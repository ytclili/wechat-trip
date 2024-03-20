Page({
  data: {
    searchValue: "",
    classify: [{
      label: "酒店",
      icon: "../../images/home/hotel.svg"
    }, {
      label: "计划",
      icon: "../../images/home/trip.svg"
    }, {
      label: "搭子",
      icon: "../../images/home/friend.svg"
    }, {
      label: "问答",
      icon: "../../images/home/aq.svg"
    }],
    spots: [{
      address: "橘子洲",
      image: "../../images/home/spot1.png",
      tags: ["免费入园", "今日开放", "5A景区"],
      rate: 4.5
    }, {
      address: "岳麓山",
      image: "../../images/home/spot2.png",
      tags: ["免费入园", "今日开放", "5A景区"],
      rate: 4.5
    }]
  }
})