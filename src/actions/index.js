/**
 * actions
 */

var getArticles = require('./index.action').getArticles
var getArticleDetail = require('./detail.action').getArticleDetail
module.exports = {
  getArticles: getArticles,
  getArticleDetail:getArticleDetail
}
