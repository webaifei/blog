'use strict';
/**
 * 首页包含的模块
 * 1. 导航
 * 2. 文章列表
 * 3. 明日天气
 * 4. top 10
 * 5. 微信??
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import actions from '../actions/index'
import NavBar from './NavBarComponent'
import Slider from './SliderComponent'
import ArticleList from './ArticlelistComponent'

import Input from './common/inputComponent'
import Top10 from './Top10Component'
import Weather from './WeatherComponent'

require('styles//Index.scss')

class IndexComponent extends React.Component {
  constructor( props ){
    super(props);

  }
  componentDidMount(){
    const { getArticles, newArticles } = this.props;
  //  最新文章列表
    getArticles({
      sortType:'updateTime'
    })

  //  阅读排行列表

  }
  render() {
    console.log(this.props.newArticles, '====?');
    return (
      <div className="index-component">
        <NavBar/>
        <Slider/>
        <div className="container clearfix">
          <ArticleList list={this.props.newArticles}/>
          <aside className="aside fl">
            <Input/>
            <Top10 />
            <Weather/>
          </aside>
        </div>

      </div>
    );
  }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};
function mapStateToProps( state ){
  return {
    newArticles:state.newArticles,
    hotAriticles: state.hotAriticles
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);
