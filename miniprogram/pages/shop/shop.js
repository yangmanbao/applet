// pages/shop/shop.js
import utils from '../../utils/config'
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
    currentTab: 'newModel',
    // listdata: [
    //   {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },
    //   {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },  
    //   {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },
    //     {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },  
    //   {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },  
    //   {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },  
    //   {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },  
    //   {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   }, 
    //    {
    //     "id": "1",
    //     "sign": 'https://img.yzcdn.cn/vant/cat.jpeg',
    //     "brand": "霸王龙威尔逊",
    //     "modelNum": "7.5"
    //   },
    // ],
    monthModels:[
      {
        month:"5月",
        year:"2023",
        brands:[
          {
            image:'https://img.yzcdn.cn/vant/cat.jpeg',
            modelName:'霸王龙',
            brandName:'PNSO恐龙大王',
            releaseTime:'2023.05.24',
            isLike:true
          },
          {
            image:'https://img.yzcdn.cn/vant/cat.jpeg',
            modelName:'霸王龙',
            brandName:'PNSO恐龙大王',
            releaseTime:'2023.05.24',
            isLike:false
          },  {
            image:'https://img.yzcdn.cn/vant/cat.jpeg',
            modelName:'霸王龙',
            brandName:'PNSO恐龙大王',
            releaseTime:'2023.05.24',
            isLike:true
          },  {
            image:'https://img.yzcdn.cn/vant/cat.jpeg',
            modelName:'霸王龙',
            brandName:'PNSO恐龙大王',
            releaseTime:'2023.05.24',
            isLike:true
          },
        ]
      },
      {
        month:"4月",
        year:"2023",
        image:'https://img.yzcdn.cn/vant/cat.jpeg',
        modelName:'霸王龙',
        brandName:'PNSO恐龙大王',
        releaseTime:'2023.05.24',
        brands:[
          {
            image:'https://img.yzcdn.cn/vant/cat.jpeg',
            modelName:'霸王龙',
            brandName:'PNSO恐龙大王',
            releaseTime:'2023.05.24',
            isLike:true
          },
          {
            image:'https://img.yzcdn.cn/vant/cat.jpeg',
            modelName:'霸王龙',
            brandName:'PNSO恐龙大王',
            releaseTime:'2023.05.24',
            isLike:true
          },  {
            image:'https://img.yzcdn.cn/vant/cat.jpeg',
            modelName:'霸王龙',
            brandName:'PNSO恐龙大王',
            releaseTime:'2023.05.24',
            isLike:false
          },  
        ],
      }
    ],
    listdata:[],
  },
  clickMenu: function (e) {
    var current = e.currentTarget.dataset.id //获取当前tab的index
    this.setData({
        currentTab: current,
    })
    // console.log(current);
}, 
brandDetailPage() {
  wx.navigateTo({
    url: '/pages/brandDetail/brandDetail'
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // console.log(utils);
    wx.request({
      url: utils.getAllBrand,
      data:{
        pageSize:10,
        pageNo:1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res) => {
        const listdatas = res.data.data.result //获取品牌列表
        console.log(listdatas);
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