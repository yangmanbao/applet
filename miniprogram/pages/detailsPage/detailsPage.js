// pages/detailsPage/detailsPage.js
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
    "manufacturer": 'post恐龙大王',
    "brand": "品牌",
    "product": "产品",
    "size": "尺寸",
    "weight": "重量",
    "createTime": "时间",
    currentTab: 'modelPages', //当前的分类tab
    storeDetail: 'modelPages', //当前的分类的id
    indexMaodian: 'modelPage',
    isWant: true,
    isWanted: true,
    selectPopular: true, //选择热门按钮
    selectNew: false, //选择最新按钮
    introductFlag: false, //设置点击时，是否出现全文还是出现省略号和展开按钮
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
    // buttonList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
  onModelReviewChange(e){
    console.log(e.detail);
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
  selectScore:function(e) {
    const id = e.currentTarget.id
    this.setData({
      isSelectScoreBtn:id
    })
  },
  onLike() {
    this.setData({
      isLike: true
    })
  },
  onActionSheetClose() {
    this.setData({
      showActionSheet: false
    })
  },
  cancelLike() {
    this.setData({
      isLike: false
    })
  },
  openSelect() {
    this.setData({
      showActionSheet: true
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
  onEditRateClose() {
    this.setData({
      showEditRate: !this.data.showEditRate
    })
  },

  delRate() {
    console.log("删除成功");
  },
  backBtn() {
    wx.navigateBack({
      delta: 1
    })
  },
  clickMenu: function (e) {
    var current = e.currentTarget.dataset //获取当前tab的index
    // var tabWidth = this.data.windowWidth / 3;
    let id = e.target.dataset.id //获取当前的类型id
    this.setData({
      currentTab: current.id,
      storeDetail: id
    })
  },
  // 监听页面滑动距离
  onPageScroll: function (e) {
    //   console.log(e.scrollTop,1111);
    // 通过滑动的距离判断页面滑动那个区域让后让顶部的标签栏切换到对应位置
    var height = Number(e.detail.scrollTop)
    if (height > 10 && height <= 175) {
      // 滑到1区域
      this.setData({
        indexMaodian: 'modelPage',
        currentTab: 'modelPages'
      });
    } else if (height > 175 && height <= 373) {
      // 滑到2区域
      this.setData({
        indexMaodian: 'message',
        currentTab: 'messages'

      });
    } else if (height > 373) {
      //  滑到3区域
      this.setData({
        indexMaodian: 'evaluate',
        currentTab: 'evaluates'

      });
    }
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var systemInfo = wx.getSystemInfoSync();
    var windowHeight = systemInfo.windowHeight;
    // 拿到导航栏以下可视区域的高度
    this.setData({
      height: windowHeight
    });
  },
  addWant() {
    this.setData({
      isWant: false
    })
  },
  cancelWant() {
    this.setData({
      isWant: true
    })
  },
  addWanted() {
    this.setData({
      isWanted: false
    })
  },
  cancelWanted() {
    this.setData({
      isWanted: true
    })
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