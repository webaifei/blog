/**
 * 项目的入口程序
 * @type {*|number}
 */
var port = process.env.PORT || 3000;
var config = require('./config');

//加载依赖
var path = require('path'),
	resolve = path.resolve,
	join = path.join;
var koa = require('koa');
// 日志
var logger = require('koa-logger');
// session
var session = require('koa-session');

var route = require('koa-route');
var compress = require('koa-compress')
var views = require('co-views');
var parse = require('co-body');

var routes = require('./routes/index')
var connection = require('./db/index')

// 分类
var tagsCol = {
	'z7z8':{
		count:0,
		name:'杂七杂八'
	},
	'diary':{
		count: 0,
		name:'心得'
	},
	'html':{
		count: 0,
		name:'html'
	},
	'css':{
		count:0,
		name:'css'
	},
	'javascript':{
		count: 0,
		name:'javascript'
	},
	'nodejs':{
		count:0,
		name: 'nodejs'
	}
}

var render = views(config.viewPath, {
		map: {
			html: 'swig'
		}
	})
	//var routes = require('./routes/index')

var app = new koa();
// 应该是使用这个给每一个key加密用的
app.keys = ['some secret hurr'];
// 压缩响应？？
app.use(compress())
app.use(logger())
app.use(session(app))
// post请求的都使用 body-parse 放到postData对象上
app.use(function*(next){
	if( this.method.toLowerCase() == 'post' ){
		this.postData = yield parse(this, {limit: '4mb'});
	}
	yield next;
})
//静态资源
app.use(require('koa-static')(config.publicPath))

// 首页
app.use(route.get('/admin', function*() {
		var list = yield routes.postList;
		this.body = yield render('index', {
			title: '管理后台首页',
			users: list
		})
	}))
// 登录页
app.use(route.get('/login', function*(){
    var session = this.session||{};
    if( session.name && session.pwd ){
      this.redirect('/admin');
    }else{
      this.body = yield render('login', {
        title:"管理员登录页"
      })
    }
  }))
  // 登录api
  .use(route.post('/login', function*(){
    this.body = yield routes.apiLogin;
  }))
//发布和隐藏
app.use(route.post('/api/publish', function *(){
	this.body = yield routes.apiUpdatePost;
}))
app.use(route.post('/api/delete', function *(){
	this.body = yield routes.apiDeletePost;
}))

app.use(route.post('/api/getPost', function *(){
	this.body = yield routes.apiFind
}))
// 新增 编辑页面
app.use(route.get('/post/:id', function *(id){
		var post = yield routes.post( id )

		this.body = yield render('post',{
			title:'编辑文章',
			post: post,
			tagsCol: tagsCol
		})
	}))
	.use(route.get('/post', function *(){
		this.body = yield render('post', {
			title:'新增文章',
      tagsCol: tagsCol
		})
	}))
	.use(route.post('/api/post', function *(){
		this.body = yield routes.postApi;

	}))

app.listen(port);
console.log('server has started at port:' + port);
