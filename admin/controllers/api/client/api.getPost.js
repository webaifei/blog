var Post = require('../../../model/post')
var marked = require('marked')
module.exports = function *(){
  var body = this.postData;

  var ret = yield Post.find({hidden: false}, {title:1, updateTime:1}).sort({[body.sortType]:1}).skip(body.page*body.len).limit(body.len);
  
  return {
    code:0,
    msg: 'ok',
    data: ret
  }
}
