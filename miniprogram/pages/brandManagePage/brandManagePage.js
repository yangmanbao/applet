// pages/brandManagePage/brandManagePage.js
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
        showDel:false,
    },
    backBtn(){
        wx.navigateBack({
            delta:1
        })
    },
    addBrand(){
        wx.navigateTo({
            url: '/pages/addBrandPage/addBrandPage',
          })
    },
    editBrand(){
       
        wx.navigateTo({
          url: '/pages/editBrandPage/editBrandPage',
        })
        // console.log(111);
    },
    manageModel(){
        wx.navigateTo({
            url: '/pages/manageModelPage/manageModelPage',
          })
        // console.log(222);
    },
    delBrand(){
        this.setData({
            showDel:true
        })
        // console.log(333);
    },
    // getUserInfo(event) {
    //     console.log(event.detail);
    //   },
      onClose() {
        this.setData({ show: false });
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