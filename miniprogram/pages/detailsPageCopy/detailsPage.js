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
        "manufacturer": 'post恐龙大王',
        "brand": "品牌",
        "product": "产品",
        "size": "尺寸",
        "weight": "重量",
        "createTime": "时间",
        storeDetail: 'a1', //当前的分类的id
        currentTab: 'a1',//当前的分类tab
        indexMaodian:'',
        top:0,
        tabScroll:0
        // top:0
    },
    //单击导航栏
    clickMenu: function (e) {
        var current = e.currentTarget.dataset //获取当前tab的index
        var typeid = e.currentTarget.dataset;
        // var tabWidth = this.data.windowWidth / 3;
        let id = e.target.dataset.id //获取当前的类型id
        console.log(current,11);
        this.setData({
            currentTypeid: typeid,
            // tabScroll: (current - 2) * tabWidth,
            currentTab: current.id,
            storeDetail:id
        })
    },

    backBtn() {
        wx.navigateBack({
            delta: 1
        })
    },
     // 监听页面滑动距离
  onPageScroll:function(e) {
    // 通过滑动的距离判断页面滑动那个区域让后让顶部的标签栏切换到对应位置
    var height =  Number(e.detail.scrollTop)
    console.log(height);
    // console.log(e,111);
    this.setData({
      top:e.detail.scrollTop
    })
    console.log(this.data.top);
    if(height<264){
      this.setData({
        indexMaodian:''
      })
    }
    else if (height>264&&height<= 408) {
      // 滑到1区域
      this.setData({
        indexMaodian: 'a',
        currentTab:'a1'
      });
    } else if (height > 408 && height<=625) {
      // 滑到2区域
      this.setData({
        indexMaodian: 'b',
        currentTab:'b1'

      });
    } else{
    //  滑到3区域
      this.setData({
        indexMaodian: 'c',
        currentTab:'c1'

      });
    } 
  },
 
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var systemInfo = wx.getSystemInfoSync();
        var windowHeight = systemInfo.windowHeight;
        // 拿到导航栏以下可视区域的高度
        this.setData({
          height: windowHeight
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // // 计算滚动区域的高度
        // wx.createSelectorQuery().select('.scroll').boundingClientRect(rect => {
        //     this.setData({
        //         scrollHeight: rect.height,
        //     })
        // }).exec();
        // let tabs = this.data.tabs;
        // let tabHeight = 0;
        // let extraHeight = 0;
        // // 获取每个tab对应的锚点元素，计算元素的top和bottom高度
        // for (let i = 0; i < tabs.length; i++) {
        //     let view = wx.createSelectorQuery().select("#L" + tabs[i].id);
        //     view.fields({ size: true }, data => {
        //         tabs[i].top = tabHeight;
        //         tabHeight = tabHeight + data.height;
        //         tabs[i].bottom = tabHeight;
        //         if (i == tabs.length - 1) {
        //             // 计算最后一个元素的额外高度
        //             extraHeight = this.data.scrollHeight - data.height;
        //             this.setData({
        //                 extraHeight,
        //                 tabs: tabs
        //             })
        //         }
        //     }).exec();
        // }
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