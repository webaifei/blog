# 深入理解generator函数

1. yield 会暂停函数的执行（yield 后面的表达式还是会继续执行）
2. next 会进入下一个yield的状态
3. next可以接受一个参数 作为上一个yield的返回值

## generator函数和异步操作怎么结合

读取文件的异步回调操作方式

```
fs.readFile('text1.txt', 'utf-8', function(err, text){
  if( err ){
    console.log(err);
    return;
  }

  fs.readFile(text, 'utf-8', function (err, content){
    console.log( content );
  })
})
```

使用generator函数来实现

```
var flow = function* (){
  var text = yield fs.readFile('text.txt', 'utf-8');//设想实现
  var content = yield fs.readFile(text, 'utf-8');//设想的实现
  console.log( content );

}

```
