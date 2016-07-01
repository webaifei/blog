var koa = require('koa');
var route = require('koa-route');

var app = new koa();

app.use(route.get('/index', function* (){
  this.body = 'this is the index page.'
}))

app.use(route.get('/list', function* () {
  this.body = 'this is the list page.'
}))
//404 handler
app.use(function* (){
  const _path = this.path;
  console.log(_path)
  if( 'list' !== _path || 'index' !== _path ){
    this.status = 200;
    this.body = 'not found';
  }
})

app.listen(3000)

