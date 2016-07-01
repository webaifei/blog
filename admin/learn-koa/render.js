var koa = require('koa');
//koa的路由中间件
var route = require('koa-route');
//koa的试图模版中间件
var path = require('path'),
    resolve = path.resolve,
    join = path.join;
const root = resolve(__dirname);
const adminRoot = join(root, 'admin')
const viewRoot = join(__dirname, 'views');

var views = require('co-views');
var render = views(viewRoot, {
  map:{
    html:'jade'
  }
})
var app = new koa();

app.use(route.get('/', function*(){
  this.body = yield render('index', {
    title: '首页',
    msg: '这个是首页'
  })
}))


app.use(route.get('/list', function*(){
  this.body = yield render('list', {
    title: '列表页',
    msg: '列表页',
    list:[
      '桃子','桃子','桃子','桃子','桃子','桃子','桃子','桃子','桃子','桃子','桃子'
    ]
  })
}))


app.listen(3000)

