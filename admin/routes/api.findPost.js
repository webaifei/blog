var Post = require('../model/post')

module.exports = function *(){
	var data = this.postData;
	
	var query ={}
	if( data.val && data.type ){
		query[data.type] = new RegExp(data.val);
		
		var ret = yield Post.find(query)
		
		return {
			code:0,
			msg: 'ok',
			data: ret
		}
	}else{
		return{
			code:0,
			msg: '查询参数不正确',
			data:false
		}
	}

}