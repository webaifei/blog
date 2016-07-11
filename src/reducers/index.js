import {combineReducers} from 'redux'
import consts from '../constants/index'
var reducers = {};
//最新文章
reducers.newArticles = function (state = [], action) {
  switch (action.type) {
    case consts.GET_ARTICLES_BY_DATE:
      return state.concat(action.state);
      break;
    default:
      return state;
      break;
  }
}
//最热文章
reducers.hotAriticles = function (state = [], action) {
  switch (action.type) {
    case consts.GET_ARTICLES_BY_READING:
      return state.concat(action.state);
      break;
    default:
      return state;
      break;
  }
}

//文章详情
reducers.article = function (state = {}, action) {
  switch (action.type) {
    case consts.SET_DETAIL:
      return action.state;
      break;
    default:
      return state;
      break;
  }
}
export default combineReducers(reducers)
