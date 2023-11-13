// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const that = this;
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    that.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +  menuButtonInfo.height + systemInfo.statusBarHeight;
    that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    that.globalData.menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
    that.globalData.menuHeight = menuButtonInfo.height;
    const resdata = wx.getMenuButtonBoundingClientRect();
    // console.log(resdata, 'resdata')
    this.globalData.menuButtonTop = resdata.top;
    this.globalData.menuButtonHeight = resdata.height
    this.globalData.menuButtonBottom = resdata.bottom
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code){
          wx.request({
            url: 'https://koa-h1tf-69049-4-1316755004.sh.run.tcloudbase.com',
            data:{
              code:res.code
            }
          })
        }else{
          console.log('登录失败!'+ res.errMsg);
        }
      }
    })
    // init 云接口
    wx.cloud.init({
        
    })
  },
  globalData: {
    userInfo: null,
    navBarHeight: 0, // 导航栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuBottom: 0, // 胶囊距底部间距（保持底部间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）

    menuButtonTop: 0, //胶囊按钮的上边界坐标
    menuButtonHeight: 0, //胶囊按钮高度
    menuButtonBottom: 0, //胶囊按钮的下边界坐标
  }
})
