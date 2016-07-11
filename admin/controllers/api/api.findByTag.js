/**
 * 查找含有某个tag的记录
 * @return { Array }
 */
var Post = require('../../model/post')


module.exports = function *(){
  var data = this.postData;
  if( !data.tag ){
    return {
      code: 1,
      msg:"没有传如参数",
      data:null
    }
  }
  var res = yield Post.find({ tags: { $elemMatch: { $eq: data.tag}}})

  return {
    code: 0,
    msg:'ok',
    data: res
  }
}
