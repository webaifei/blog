/**
 * 获取文章列表
 * @constructor
 */
var Post = require('../model/post')

module.exports = function *(){
	var params = this.postData||{};
	var limit = params.limit||10;
	var type = params.type;
	if(!this.session.name&&!this.session.pwd){
		this.redirect('/login')
	}
	return Post.find().limit(limit).sort({updateTime:-1});
}

