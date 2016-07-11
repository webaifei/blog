/**
 * 首页的actions
 */
import fetch from './fetch'
import consts from '../constants/index'
//
function getArticles(params) {
  console.log(arguments, '-===>')
  return function (dispatch){
    return fetch('api/getArticles', 'POST', {
      sortType: params.sortType || 'updateTime',
      page: params.page || 0,
      len: params.len || 10
    }).then(function (res){
      dispatch(setNewArticles(res.data))
    })
  }
}
/**
 * 设置最新文章列表
 */
function setNewArticles( state ){
  return {
    type: consts.GET_ARTICLES_BY_DATE,
    state
  }
}
module.exports = {
  getArticles: getArticles
}
