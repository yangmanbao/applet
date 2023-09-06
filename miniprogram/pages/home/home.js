// pages/home/home.js
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
    list:{// 表格标题
      th: ["排名", "头像","模型名称","恐模分"],// 表格内容  这里只能使用 数组套数组格式
      td: [
        ["1","10","霸王龙威尔逊","7.5"],
        ["2","9","霸王龙威尔逊","7.5"],
        ["3","8","霸王龙威尔逊","7.5"],
        ["4","7","霸王龙威尔逊","7.5"],
      ],}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onLoad: function (options) {
    
        this.setData({list})},
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