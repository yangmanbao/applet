const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const nextTick = cb => {
  if (wx.canIUse('nextTick')) {
    wx.nextTick(cb);
  } else {
    setTimeout(() => {
      cb();
    }, 1000 / 30);
  }
}
const getRect = (context, selector) => {
  return new Promise((resolve) => {
    wx.createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}

const getAllRect = (context, selector) => {
  return new Promise((resolve) => {
    wx.createSelectorQuery()
      .in(context)
      .selectAll(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}
// const request = ({
//   path,
//   method,
//   data
// }) => {
//   const res = wx.request({
//     url: `https://koa-h1tf-69049-4-1316755004.sh.run.tcloudbase.com${path}`,
//     method,
//     data
//   })
//   return res
// }
module.exports = {
  formatTime,
  nextTick,
  getRect,
  getAllRect
  // request
}