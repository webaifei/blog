# koa学习笔记

## 为什么有这个东西 ？ 解决什么问题 通过什么方式
1. 是什么?
> 下一代web开发框架

2. 解决痛点
> 回调金字塔的恶心！！

3. 主要的解决方案
> 使用了es6 generator 函数

## 如何使用

1. 简单的hello world 实例
```
  var koa = require('koa');
  var app = koa();

  app.use(function* (){
    this.body = 'hello koa!'
    })
```

  - use 中使用的函数就是generator函数 比我们普通的函数多了一个*
  - generator函数返回的是一个对象（包含了不同的状态， 所以generator函数又被称之为有限状态机）
  - koa中的中间件函数必须都是generator函数，否则会报错


## api 文档

1. 所有的属性和方法放到了this对象上
2. this.response // is a koa response
3. this.request // is a koa request
4. this.req // node's req
5. this.res // node's res
6. koa 中默认不允许直接使用this.res的如下方法进行响应处理
  > res.statusCode
  res.writeHead()
  res.write()
  res.end()
7. this.respond = false 就可以使用node的res来进行响应操作了
