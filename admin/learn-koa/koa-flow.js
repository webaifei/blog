/**
 * 这个例子反应了中间件的执行流程
 * 1. 所有的中间件都会被执行到 yield
 * 直到没有可以yield的时候
 * 2. yield 更像是把之后的需要执行的代码push到待处理数组中
 * 3. 直到没有yield的时候 再pop [后进先出 坐直升电梯]
 */
var koa = require('koa');
var app = new koa();


app.use(function *(next){
  console.log('>> one');
  yield next;
  console.log('<< one');
});

app.use(function *(next){
  console.log('>> two');
  this.body = 'two';
  yield next;
  console.log('<< two');
});

app.use(function *(next){
  console.log('>> three');

  yield next;
  console.log('<< three');
});
app.use(function* (){
  console.log('>>last')
})

app.listen(3000)
