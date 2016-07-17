var Post = require('../../model/post')
//var mk = require('markdown').markdown;
/**
 * 新增文章操作
 * 需要验证字段
 * @yield {[type]} [description]
 */
module.exports = function *(){
	var body = this.postData;
	var _ret = {};

	if( body.title=='' ){
		_ret = {
			code: 0,
			msg: '标题不能为空',
			data: false
		}
	}else if( body.content =='' ){
		_ret = {
			code: 0,
			msg: '标题不能为空',
			data: false
		}
	}else if(!body.tags.length){
		_ret = {
			code: 0,
			msg: '标题不能为空',
			data: false
		}
	}else{
		//body.content = mk.toHTML(body.content);
		//更新数据
		
		if(body._id){
			var _id = body._id;
			body.updateTime = Date.now();
			delete body._id;
			var post = yield Post.findOneAndUpdate({_id: _id},{$set:body});
			//console.log( post, 'ii')
			if(post._id){
				_ret = {
					code: 0,
					msg: 'ok',
					data: true
				}
			}else{
				_ret = {
					code: 0,
					msg: '更新文章失败',
					data: false
				}
			}
		}else{
			// 插入数据库中
			var post = new Post(body);
			var res = yield post.save();

			if(res.title){
				_ret = {
					code: 0,
					msg: 'ok',
					data: true
				}
			}else{
				_ret = {
					code: 0,
					msg: '新增文章失败',
					data: false
				}
			}
		}




	}
	return _ret;
}
