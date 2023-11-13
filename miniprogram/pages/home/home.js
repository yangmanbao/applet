// pages/home/home.js
const app = getApp()
import utils from '../../utils/config'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuBottom: app.globalData.menuBottom,
    menuHeight: app.globalData.menuHeight,
    // listdata: [
    //   {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   },
    //   {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   }, {
    //     "ranking": "1",
    //     "arter": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brandName": "霸王龙威尔逊",
    //     "score": "7.5"
    //   },
    // ],
    showColor:false,
    listdata:[],
    id:'',
  },
  //点击模型跳转到对应页面
  detailPage(e) {
    // const nowUrl = utils.getModelDetail + '?id=' +`${e.currentTarget.dataset.url.id}`
    const nowUrl = `${e.currentTarget.dataset.url.id}`
    console.log(e.currentTarget.dataset.url);
    this.setData ({
      id:nowUrl
    })
    // wx.navigateTo({
    //   // url: '/pages/detailsPage/detailsPage'
    //   url: nowUrl
    // })
    console.log(nowUrl);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.request({
      url: utils.getModelRank,
      data:{
        pageSize:10,
        pageNo:1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res) => {
        const listdatas = res.data.data.result //获取模型列表
        console.log(res.data);
        this.setData ({
          listdata: listdatas
        })
      }
    },
    )
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