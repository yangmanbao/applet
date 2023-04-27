// 云函数入口文件
const cloud = require('wx-server-sdk')
const login = require('./login/index');
const test = require('./test/index');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    switch (event.type) {
      case 'login':
        console.log('login...')
        return await login.main(event, context);
      case 'test':
          console.log ('test')
          return await test.main(event, context);
    }
  };