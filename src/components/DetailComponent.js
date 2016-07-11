'use strict';

import React from 'react';
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
require('styles//Detail.scss');
import actions from '../actions/index'

class DetailComponent extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    const { getArticleDetail, params } = this.props;
    var id = params.id;
    getArticleDetail(id);
  }
  showCode(){
    var str = `
      var name = 10; 
      
      function (){
      }
    `;
    return str;
  }
  render() {
    var post = this.props.article;
    return (
      <div className="detail-component">
        <header className=" clearfix">
          <a className="logo"><img src={require('../images/logo.png')} alt=""/></a>
          <small>张爱飞个人博客</small>
        </header>

        <section className="content">
          <div className="relative clearfix">
            <a href="javascript:;">上一篇: 事实上是地方 </a>
            <a href="javascript:;">上一篇: 事实上是地方 </a>
          </div>
          <h2 className="title">{post.title}</h2>
          <p>作者: {post.author} / 日期: {post.updateTime} </p>
          <article className="editor-style" dangerouslySetInnerHTML={{__html: post.content}}>

          </article>
        </section>
      </div>
    );
  }
}

DetailComponent.displayName = 'DetailComponent';

// Uncomment properties you need
// DetailComponent.propTypes = {};
// DetailComponent.defaultProps = {};
function mapStateToProps(state){
  return {
    article: state.article
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
