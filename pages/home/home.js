// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    menus:[
      {
        meunId:1,
        title:"政策解读",
        icon:"/assets/item_money.png",
      },
      {
        meunId:2,
        title:"热门活动",
        icon:"/assets/item_money.png",
      },
      {
        meunId:3,
        title:"海归联盟",
        icon:"/assets/item_money.png",
      },
      {
        meunId:4,
        title:"实用功能",
        icon:"/assets/item_money.png",
      },
    ],

    itemList:[
      {
        itemId:1,
        title:"宁夏海归协会2020夏季活动第一期",
        time:"2020年6月16 - 18日",
        people:"5/20人",
        zifei:"自费",
        address:"宁夏回族自治区中卫南岸民宿",
        image:"/assets/item_1.png"
      },
      {
        itemId:2,
        title:"沙鸣Talks | 宁夏海归分享专场",
        time:"2020年7月16日 18:30",
        people:"18/200人",
        zifei:"免费",
        address:"宁夏回族自治区银川大剧院",
        image:"/assets/item_2.png"
      },
      {
        itemId:3,
        title:"海归协会VS欧美同学会 5V5足球赛",
        time:"22020年7月18日 8:30",
        people:"12/16人",
        zifei:"免费",
        address:"宁夏回族自治区银川是亲水体育中心",
        image:"/assets/item_3.png"
      },
      {
        itemId:4, 
        title:"宁夏海归协会2020夏季活动第一期",
        time:"2020年6月16 - 18日",
        people:"5/20人",
        zifei:"自费",
        address:"宁夏回族自治区中卫南岸民宿",
        image:"/assets/item_1.png"
      },
    ]
  },

  /**
   *选中menu
   */
  selectMenu:function(e){
    var option = e.currentTarget.dataset['title'];
   
     wx.showModal({
       title: '提示',
       content: "确定要进入" + option,
       showCancel: true,
       cancelText: '取消',
       cancelColor: '#000000',
       confirmText: '确定',
       confirmColor: '#3CC51F',
       success: (result) => {
         if (result.confirm) {
          //跳转
          wx.navigateTo({
            url: '/pages/detaile/detaile?Title=' + option,
          });
         }
       },
     });
  },

  /**
   *加载数据 
   */
  loadMoreData:function(){

    wx.showLoading({                         
      title: "正在加载中...",
  })

  var array = this.data.itemList
    array.forEach(element => {
      array.push(element)
    });
     
    this.setData({
      itemList:array 
    });
     setTimeout(function () {
       wx.hideLoading() 
      }, 500) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})