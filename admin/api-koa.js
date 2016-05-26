var koa = require('koa');
var app = koa();

app.use(function* (){

  // this.body = (this.originalUrl==this.url);
  // this.body = this.path;
  // this.body = this.querystring;
  // this.body = this.search;
  // this.body = this.host;
  // this.body = this.type;
  // this.body = this.charset;
  //this.body = this.query;//这样的话 不需要自己去解析参数
  //this.body = this.ip;
  //this.body = this.subdomains;
  this.body = 'hello koa'
})
app.listen(8080);
console.log( 'server is started at port 8080')


// var ss =
// {
//   request: {
//     method: 'GET',
//     url: '/',
//     header: {
//       host: 'localhost:3000',
//       connection: 'keep-alive',
//       pragma: 'no-cache',
//       'cache-control': 'no-cache',
//       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//       'upgrade-insecure-requests': '1',
//       'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
//       'accept-encoding': 'gzip, deflate, sdch',
//       'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6',
//       cookie: '_ga=GA1.1.2108617874.1463238510'
//     }
//   }
//   ,
//   response: {
//     status: 404, message: 'Not Found', header: {}
//   }
//   ,
//   app: {
//     subdomainOffset: 2, proxy: false, env: 'development'
//   }
//   ,
//   originalUrl: '/',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>'
// }
// }
