// pages/brandDetail/brandDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuBottom: app.globalData.menuBottom,
    menuHeight: app.globalData.menuHeight,
    currentTab: 'allModel', //当前的分类tab
    selectPopular: true, //选择热门按钮
    selectNew: false, //选择最新按钮
    modelList: [
      {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      }, {
        img: 'https://img.yzcdn.cn/vant/cat.jpeg',
        score:'7.5',
        name:'霸王龙威尔逊',
        peopleNum:'xxx'
      },
    
  ]
  },
  changePopular() {
    this.setData({
      selectPopular: true,
      selectNew: false
    })
  },
  changeNew() {
    this.setData({
      selectPopular: false,
      selectNew: true
    })
  },
  changePage(){
    wx.navigateTo({
      url: '../detailsPage/detailsPage',
    })
  },
  clickMenu: function (e) {
    var current = e.currentTarget.dataset.id //获取当前tab的index
    this.setData({
      currentTab: current,
    })
  },
  backBtn() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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