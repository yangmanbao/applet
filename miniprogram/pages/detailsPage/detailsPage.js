// pages/detailsPage/detailsPage.js
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
        "manufacturer":'post恐龙大王',
        "brand":"品牌",
        "product":"产品",
        "size":"尺寸",
        "weight":"重量",
        "createTime":"时间",
    },

    backBtn(){
        wx.navigateBack({
            delta:1
        })
    },

    onClick(event){
        wx.showToast({
            title: `点击标签 ${event.detail.title}`,
            // icon: 'none',
          });
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