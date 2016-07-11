import 'core-js/fn/object/assign';
import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, Link, hashHistory}  from 'react-router'
//import {createHashHistory} from 'history';

import App from './components/Main'
import Index from './components/IndexComponent'
import Detail from './components/DetailComponent'
import store from './stores/'


// Render the main component into the dom
ReactDOM.render(
  <Provider store={store()} >
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute  component={Index}/>
        <Route path="detail/:id" component={Detail}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
