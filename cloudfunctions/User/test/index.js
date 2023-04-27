const cloud = require('wx-server-sdk');

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
});

// 获取openId云函数入口函数
exports.main = async (event, context) => {
    console.log("user login..",event.userinfo.nickName);
    // 获取基础信息
    const db = cloud.database();
    const wxContext = cloud.getWXContext();
    // 写数据库
    db.collection('userTb').where({
            // 判断是不是第一次登陆
            _openid: wxContext.OPENID
        })
        .get({
            success: function (res) {
                console.log("user login update..",event.userinfo.nickName);
                _id: res.data[0]._id;
                db.collection('userTb').doc(_id).update({
                    data: {
                        openid: wxContext.OPENID,
                        admin: false,
                        loginTime: serverDate(),
                        userInfo: event.userinfo
                    }
                })
            },
            error: function (res) {
                console.log("user first login..",event.userinfo.nickName);
                db.collection('userTb').add({
                    data: {
                        openid: wxContext.OPENID,
                        admin: false,
                        firstTimeLogin: db.serverDate(),
                        userInfo: event.userinfo,
                        loginTime: db.serverDate()
                    }
                })
            }
        })
    return {
        
    };
};