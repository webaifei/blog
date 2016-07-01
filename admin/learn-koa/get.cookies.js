var koa = require('koa');
var app = new koa();

app.use( function*(){
  var cookies = this.cookies;
  var count = cookies.get('count')||0;
  var name = cookies.get('name')||'you';
  this.cookies.set('count',++count )
  this.body = `${name} visited ${cookies.get('count')||0+1}`;


})

app.listen(3000);
