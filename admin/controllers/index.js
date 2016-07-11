/**
 * 业务逻辑
 */
var clientApiGetArticles = require('./api/client/api.getPost')
var getArticleDetail = require('./api/client/api.getDetail')

var apiFind = require('./api/api.findAllPost')
var apiUpdatePost = require('./api/api.updatePost.js')
var apiDeletePost = require('./api/api.deletePost.js')
var apiLogin = require('./api/api.login.js')
var apiCreatePost = require('./api/api.createPost.js')
var apiFindByTag = require('./api/api.findByTag.js')
var post = require('./post.server.js')
var tagsCount = require('./tagsCount.server.js')

var postList = require('./postList.server.js')



module.exports = {
  tagsCount: tagsCount,
  post: post,
  postList: postList,
  //loginApi: loginApi,
  apiLogin: apiLogin,
  apiUpdatePost: apiUpdatePost,
  apiDeletePost: apiDeletePost,
  apiCreatePost: apiCreatePost,
  //apiPost:apiPost,
  apiFind: apiFind,
  apiFindByTag: apiFindByTag,
  getArticles: clientApiGetArticles,
  getArticleDetail: getArticleDetail
}
