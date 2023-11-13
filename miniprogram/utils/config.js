//接口请求域名
const baseUrl = 'https://koa-h1tf-69049-4-1316755004.sh.run.tcloudbase.com'
export default {
  //查询所有品牌接口
  getAllBrand:`${baseUrl}/api/brand`,
  //查询所有模型接口
  getAllModel:`${baseUrl}/api/model`,
  //模型排行接口
  getModelRank:`${baseUrl}/api/model/score`,
  //跳转到模型详情接口
  getModelDetail:`${baseUrl}/api/model/detail`
}