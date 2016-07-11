/**
 * 编辑文章逻辑
 */
var Post = require('../model/post')
//var toMk = require('to-markdown')
module.exports = function *(id){

	var post = yield Post.findById(id);
  
  //post.content = toMk(post.content)
  //console.log(post)
	return post;

}
