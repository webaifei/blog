import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleWares = process.env.NODE_ENV =='production'?
    [ thunk ]:
    [ thunk, logger() ];
var finalCreateStore = compose(
 // applyMiddleware(thunk)
  applyMiddleware(...middleWares)
)
(createStore);

var configureStore = function (initialState=window.__INIT_STORE__) {
  return finalCreateStore(reducer, initialState);
};

module.exports = configureStore;

