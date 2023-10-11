// pages/user/user.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isLogin: 0,
    active:1,
    isAdmini:true,
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuBottom: app.globalData.menuBottom,
    menuHeight: app.globalData.menuHeight,
    currentTab: 'wanted',
    modelLikeList:[
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true
      },
    ],
    modelPurchasedList:[
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true,
        isPurchased:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true,
        isPurchased:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true,
        isPurchased:true,
        isPurchased:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true,
        isPurchased:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true,
        isPurchased:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true,
        isPurchased:true
      },
      {
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙威尔逊',
        score:'5',
        purchasingDate:'2023-05-16 10:23',
        myRate:"用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价",
        isLike:true,
        isPurchased:true
      },
    ]
  },
  changePage(){
    wx.navigateTo({
      url: '/pages/detailsPage/detailsPage',
    })
  },
  changeMyModelPage(){
    wx.navigateTo({
      url: '/pages/myModel/myModel',
    })
  },
  clickMenu: function (e) {
    var current = e.currentTarget.dataset.id //获取当前tab的index
    this.setData({
        currentTab: current,
    })
    console.log(current);
}, 
  bindGetUserInfo:function(e){
   console.log("get user info btn clicked")
   let headimg = e.detail.avatarUrl
   console.log("get user ret:", e)
   this.setData({
    userInfo: e.detail.userInfo,
    isLogin: 1
   })
   wx.cloud.callFunction({
    name: 'User',
    data:{
        type: 'login',
        userinfo: this.data.userInfo,
    },
    complete: res => {
      console.log('callFunction User result: ', res)
    }
  })
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.title}`,
      icon: 'none',
    });
  },
  //点击导航栏设置按钮，进入新页面
  changePersonPage(){
    wx.navigateTo({ 
        url: '/pages/webmasterCentral/webmasterCentral'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
 onLoad () {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})