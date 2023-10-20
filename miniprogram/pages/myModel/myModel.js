// pages/myModel/myModel.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

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
      foldText: '展开', //控制简介中展开和收起的出现与否
      textEtc: "...", //控制简介中省略号的出现与否
      isLike: false, //是否点赞
      showActionSheet: false, //是否显示动作面板
      actions: [{
        name: '编辑点评'
      },
      {
        name: '删除评价',
        color: '#ee0a24'
      },
    ],
    showEditRate: false, //是否显示编辑点评页面
    showDelRate: false, //是否显示删除评价页面
    buttonList: [
      {num:1},{num:2},{num:3},{num:4},{num:5},{num:6},{num:7},{num:8},{num:9},{num:10}
    ],
    isSelectScoreBtn: 0,//是否选中按钮
    noRecommend:false,//是否不推荐
    general:false,//一般
    highRecommend:false,//非常推荐
    modelReviewValue:'',//修改的模型点评
    modelImgFileList:[
      {
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        name: '图片1',
      },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      {
        url: 'http://iph.href.lu/60x60?text=default',
        name: '图片2',
        isImage: true,
        deletable: true,
      },
    ]
    },
    selectScore:function(e) {
      const id = e.currentTarget.id
      this.setData({
        isSelectScoreBtn:id
      })
    },
    backBtn() {
      wx.navigateBack({
        delta: 1
      })
    },
    openSelect() {
      this.setData({
        showActionSheet: true
      })
    },
    onActionSheetClose() {
      this.setData({
        showActionSheet: false
      })
    },
    onSelectActionSheet(e) {
      if (e.detail.name == "编辑点评") {
        this.setData({
          showEditRate: true
        })
      } else {
        this.setData({
          showDelRate: true
        })
      }
    },
    onDelRateCancel() {
      this.setData({
        showDelRate: false
      })
    },
    updateReview(){
      Notify({ type: 'success', message: '修改成功！' });
      console.log(11111111);
  
      this.setData({
        showEditRate:false
      })
    },
    cancelReview(){
      this.setData({
        showEditRate:false
      })
    },
    onEditRateClose() {
      this.setData({
        showEditRate: !this.data.showEditRate
      })
    },
    fold(e) {
      this.setData({
        introductFlag: !this.data.introductFlag,
      })
      this.setData({
        foldText: this.data.introductFlag == true ? '收起' : '展开',
        textEtc: this.data.introductFlag == true ? ' ' : '...'
      })
    },
    cancelLike() {
      this.setData({
        isLike: false
      })
    },
    onLike() {
      this.setData({
        isLike: true
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