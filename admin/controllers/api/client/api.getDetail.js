var Post = require('../../../model/post')
var moment = require('moment')
var marked = require('marked')
module.exports = function *(){
  var body = JSON.parse(this.postData);
  var ret = yield Post.findOne({_id: body._id})

  ret.content = marked(ret.content);
  ret.updateTime = moment(ret.updateTime).format('h:m YY-M-D')
  console.log(ret, '----', body)
  return {
    code:0,
    msg: 'ok',
    data: ret
  }
}
