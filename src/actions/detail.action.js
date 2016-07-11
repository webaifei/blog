/**
 * 首页的actions
 */
import fetch from './fetch'
import consts from '../constants/index'
//
function getArticleDetail(id) {
  console.log(arguments, '-===>')
  return function (dispatch){
    return fetch('api/getArticleDetail', 'POST', {
      _id: id
    }).then(function (res){
      
      dispatch(setArticleDetail(res.data))
    })
  }
}
/**
 * 设置最新文章列表
 */
function setArticleDetail( state ){
  return {
    type: consts.SET_DETAIL,
    state
  }
}
module.exports = {
  getArticleDetail: getArticleDetail
}
