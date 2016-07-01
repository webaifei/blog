/**
 * generator 函数
 * 执行一个generator函数 返回是一个遍历器对象 可以通过next方式 遍历所有的状态
 * 想要执行内部的代码就需要调用next
 */

var g = function* (){
  console.log( '1');
  yield 1;
}

var g2 = g();
console.log(typeof g2)
g2.next();
console.log(g2.next())
