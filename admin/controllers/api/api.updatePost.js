/**
 * 文章相关操作api 更新
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
  }else if(params.type == undefined){
    return {
      code: 0,
      msg:'type为空',
      data:false
    }
  }else{
    var res = yield Post.findOneAndUpdate({_id: params.id}, {$set:{ hidden: params.type }});

    if(res._id){
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
