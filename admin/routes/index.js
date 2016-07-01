/**
 * 路由文件
 * @type {IndexRoute}
 */
var index = require('./index.route')
var post = require('./post.route.js')
var apiFind = require('./api.findPost')
var loginApi = require('./login.route')
var postApi = require('./post.api.route')
var postList = require('./postList.route')
var postAction = require('./api.postAction')


module.exports = {
  index: index,
  post: post,
  postList: postList,
  loginApi: loginApi,
  postApi: postApi,
  postAction:postAction,
  apiFind: apiFind
}
