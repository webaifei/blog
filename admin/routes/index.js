/**
 * 业务逻辑
 */
var apiFind = require('./api/api.findAllPost')
var apiUpdatePost = require('./api/api.updatePost.js')
var apiDeletePost = require('./api/api.deletePost.js')
var apiLogin = require('./login.route')

var post = require('./post.server.js')


var postApi = require('./post.api.route')
var postList = require('./postList.server.js')



module.exports = {
  post: post,
  postList: postList,
  //loginApi: loginApi,
  apiLogin: apiLogin,
  apiUpdatePost: apiUpdatePost,
  apiDeletePost: apiDeletePost,
  postApi: postApi,
  //apiPost:apiPost,
  apiFind: apiFind
}
