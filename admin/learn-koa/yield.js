/**
 * yield的返回值
 * next generator array object 能够遍历的 貌似
 * @param  {[type]} 'koa' [description]
 * @return {[type]}       [description]
 */
var koa = require('koa');
var app = new koa();

//promise
function promise(){
  return function* (next){
    console.log('loading...')
    yield next;
  }
}

app.use(function* (){
  console.log('>>1')
  console.log(promise())
  yield promise();
  console.log('<<1 end')
})
app.use(function* (){
  console.log('>>2')
  yield [2,2,2];
  console.log('<<2 end')
})
app.use(function* (){
  console.log('end')
  this.body = 'end';
})

app.listen(3001)
