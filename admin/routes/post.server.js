/**
 * 编辑文章逻辑
 */
var Post = require('../model/post')
var toMk = require('to-markdown')
module.exports = function *(id){

	var post = yield Post.findById(id)
	if(post.length){
		post = post[0];
		post.content = toMk(post.content)
	}
	return post;


}
