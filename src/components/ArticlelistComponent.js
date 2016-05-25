'use strict';

import React from 'react';

require('styles//Articlelist.scss');

class ArticlelistComponent extends React.Component {
  render() {
    return (
      <div className="articlelist-component">
        <div className="item clearfix">
          <img className="item-link" src='../images/item-img.jpg' alt=""/>
          <div className="info-panel">
            <h3>我的前端入门之路</h3>
            <p>这里是描述</p>
            <p>2014-01-01</p>
          </div>
        </div>
        <div className="item clearfix">
          <img className="item-link" src='../images/item-img.jpg' alt=""/>
          <div className="info-panel">
            <h3>我的前端入门之路</h3>
            <p>这里是描述</p>
            <p>2014-01-01</p>
          </div>
        </div>
        <div className="item clearfix">
          <img className="item-link" src='../images/item-img.jpg' alt=""/>
          <div className="info-panel">
            <h3>我的前端入门之路</h3>
            <p>这里是描述</p>
            <p>2014-01-01</p>
          </div>
        </div>
        <div className="item clearfix">
          <img className="item-link" src='../images/item-img.jpg' alt=""/>
          <div className="info-panel">
            <h3>我的前端入门之路</h3>
            <p>这里是描述</p>
            <p>2014-01-01</p>
          </div>
        </div>
      </div>
    );
  }
}

ArticlelistComponent.displayName = 'ArticlelistComponent';

// Uncomment properties you need
// ArticlelistComponent.propTypes = {};
// ArticlelistComponent.defaultProps = {};

export default ArticlelistComponent;
