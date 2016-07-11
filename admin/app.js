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
var fs = require('fs');
var koa = require('koa');
//var renderToString = require('react-dom/server').renderToString;
var marked = require('marked')
// 日志
var logger = require('koa-json-logger');
// session
var session = require('koa-session');

var route = require('koa-route');
var compress = require('koa-compress')
var views = require('co-views');
var parse = require('co-body');

var routes = require('./controllers/index')
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
	//var controllers = require('./controllers/index')

var app = new koa();
// 应该是使用这个给每一个key加密用的
app.keys = ['some secret hurr'];
// 压缩响应？？
app.use(compress())
app.use(function*(next){
  this.set('Access-Control-Allow-Origin', '*');
  this.set('Access-Control-Allow-Methods', '*');
  //this.set("Access-Control-Allow-Headers", "Content-Type")
  yield next;
})
app.use(logger({
  name: 'site',
  path: './logs'
}))
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
app.use(require('koa-static')('dist'))


// 前台首页入口
app.use(route.get('/', function *(){
  //var appHtml = renderToString(<App/>);

  var html = fs.readFileSync('./dist/index.html');
  console.log(html)
  this.set('Content-Type', 'text/html')
  this.body = html;
}));
// 首页
app.use(route.get('/admin', function*() {
		var list = yield routes.postList;
    tagsCol = yield routes.tagsCount;
		this.body = yield render('index', {
			title: '管理后台首页',
			users: list,
      tags:tagsCol

		})
  // this.body = tagsCol
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
})).use(route.post('/api/getPostByTag', function *(){
  this.body = yield routes.apiFindByTag
})).use(route.post('/api/getArticles', function *(){
  this.body = yield routes.getArticles;
}))
  .use(route.post('/api/getArticleDetail', function *(){
    this.body = yield routes.getArticleDetail;
  }))
// 新增 编辑页面
app.use(route.get('/post/:id', function *(id){
		var post = yield routes.post( id )
    //post.content = marked(post.content)
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
		this.body = yield routes.apiCreatePost;

	}))

app.listen(port);
console.log('server has started at port:' + port);
