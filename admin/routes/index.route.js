/**
 * 首页的路由
 * @constructor
 */
function* IndexRoute (next){
  this.body = 'this is the index page!'
  yield next;
}

module.exports = IndexRoute;
