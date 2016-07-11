/**
 * 编辑文章逻辑
 */
var Post = require('../model/post');
var Tags = require('../model/tags')
module.exports = function *(id){
  var _ret = [];
  var tags = yield Tags.find();
  for(var i=0; i<tags.length;i++){
    var item = tags[i];
    //var count = yield Post.find({tags: { $elemMatch:{$eq: item.tag}}}).count()
    var count = yield Post.find({tags: item.tag}).count()
    item.count = count;
    _ret.push(item);
  }

  return _ret;


}
