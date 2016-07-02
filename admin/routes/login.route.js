/**
 * 登录api逻辑
 */
var parse = require('co-body');
var User = require('../model/user');

module.exports = function *(next){
	var body = this.postData;
	var _ret = {};
	var session = this.session;
	if( body.name=='' ){
		_ret = {
			code: 1,
			msg:'用户名不能为空',
			data:{}
		}

	}else if( body.pwd == '' ){
		_ret = {
			code: 1,
			msg:'密码不能为空',
			data:{}
		}
	}else{
		yield User.find(body, function (err, user){
			if( err ){
				_ret = {
					code: 1,
					msg:'用户',
					data:{}
				}
			}else{
				if( user.length ){
					session.name = body.name;
					session.pwd = body.pwd;
					session.maxAge = 1000*60*30;

					_ret = {
						code:0,
						msg: 'ok',
						data:{
							login: true
						}
					}
				}else{
					_ret = {
						code:1,
						msg: '用户名或者密码错误！',
						data:{}
					}
				}
			}
		})
	}


	return _ret;
}
