/**
 * koa web服务
 */

var koa = require('koa');
var route = require('koa-route');

var app = koa();

var database = [
  {
    title:"this is the tile",
    desc:" this is the desc",
    text:" this is the text,this is the text,this is the text"
  },
  {
    title:"this is the tile",
    desc:" this is the desc",
    text:" this is the text,this is the text,this is the text"
  }
]
var post = {
  getList: function* (type){

    //this.body = database;
    switch (type){
      case 'all':
            this.body = database;
            break;
      case 'javascript':
            this.body = database;
            break;
      default:
            this.throw('not found', 404);
            break;

    }

  }
}
app.use(route.get('/api/getList/:type', post.getList))

app.listen(8080)
