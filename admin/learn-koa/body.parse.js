var koa = require('koa');
var bodyParse = require('co-body');
var route = require('koa-route');
var render = require('co-views')('admin/views', {
  map:{
    html:'jade'
  }
});



var app = new koa();
//if the req's mothed is post use the co-body middleware parse the body
app.use(function* (){
  if( this.method !='POST' ){
    this.body = 'the required method is wrong!'
  }
  var body = yield bodyParse(this, { limit: '1kb' });
  console.log( body )
  //如果没有提供name 返回json 错误提示
  if(!body.name){
    this.body = {
      code: 200,
      msg:'name is required!',
      data:null
    }
  }else{
    this.body = {
      code: 200,
      msg:'ok',
      data:`${body.name}, you are good!`
    }
  }

})

app.listen(3000)
