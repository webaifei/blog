var fs = require('fs');

/**
 * 简单的co实现
 * @param fn 一个generator函数 内部是一些列的异步操作
 * @returns {Function}
 */
function co(fn) {
  //返回一个匿名函数
  return function(done) {
    var ctx = this;
    //fn 是传入的gnerator函数 执行之后返回的迭代器对象 通过调用yield来达到各种状态
    var gen = fn.call(ctx);
    var it = null;
    // 貌似是重写了next方法
    function _next(err, res) {
      if(err) res = err;
      it = gen.next(res);
      //{value:function(){},done:false}
      //{value: function (fn){ fs.readFile(file,'utf-8', fn)}, done:false}
      if(!it.done){
        it.value(_next);
      }
    }
    _next();
  }
}


// TODO 添加了一个todo
//一个 thunk 函数
//这个函数的返回值 接受的那个参数 是重写过的next方法
//在异步操作完成之后 去触发next方法 这样 就会让程序继续往下走了
function read(file) {
  return function(fn){
    fs.readFile(file, 'utf8', fn);
  }
}
co(function * hello(){
  var c = 2;
  console.log(c);
  var b = yield read('package.json');
  console.log(b.length);
  var a = yield read('error.js');
  console.log(a.length);



})();

/**
 * 代码分析
 * 1. 执行co(function *(){})
 * var res = function(done) {
    var ctx = this;
    var gen = fn.call(ctx);
    var it = null;
    function _next(err, res) {
      if(err) res = err;
      it = gen.next(res);
      //{value:function(){},done:false}
      if(!it.done){
        it.value(_next);
      }
    }
    _next();
  }
 *
 */
