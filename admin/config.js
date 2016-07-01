/**
 * 项目常用的配置文件
 * @type {{}}
 */
var path = require('path');
var root = path.resolve(__dirname);
var config = {
  root: root,
  publicPath: path.join(root, 'public'),
  viewPath: path.join(root, 'views'),
  routePath: path.join(root, 'routes')
};
//数据库访问配置
config.db = {
  dbName:'admin',
  host:'127.0.0.1:27017',
  user:'root',
  pwd:'137853'
}
//导出模块
module.exports = config;




