var koa = require('koa');
var app = new koa();
var fs = require('fs');
var readFile = fs.readFile;

/**
 * 传说中的高阶函数
 * 1 接受函数作为参数
 * 2. 返回值是一个函数 (偏函数)
 *
 * @param fn
 * @returns {Function}
 */


var helper = function (fn) {
  return function () {
    var args = [].slice.call(arguments);
    console.log(args)
    var pass;
    args.push(function () { // 在回调函数中植入收集逻辑
      if (pass) {
        pass.apply(null, arguments);
      }
    });
    fn.apply(null, args);

    return function (fn) { // 传入一个收集函数
      pass = fn;
    };
  };
};


app.use(function *() {
  this.body = 'hello koa!'
})
app.listen(3000);

var readfile = helper(readFile);

console.log(readfile('ss', 'utf-8', function (){}))
