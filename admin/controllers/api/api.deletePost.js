/**
 * 文章相关操作api 删除
 * @type {[type]}
 */
var Post = require('../../model/post');

module.exports = function *(){
  var params = this.postData;

  if(!params.id){
    return {
      code: 0,
      msg:'id为空',
      data:false
    }
  }else{
    var res = yield Post.remove({_id: params.id})

    if(res.result&&res.result.ok){
      return {
        code: 0,
        msg:'ok',
        data:true
      }
    }else{
      return {
        code: 0,
        msg:'faild',
        data:false
      }
    }
  }
}
