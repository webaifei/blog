'use strict';

import React from 'react';
import moment from 'moment'
require('styles//Articlelist.scss');

class ArticlelistComponent extends React.Component {
  constructor(props){
    super(props)
  }
  linkDetail(id){
    location.hash = `detail/${id}`;
  }
  render() {
    var list = this.props.list||[];
    var that = this;
    console.log( list, 'inner ')
    return (
      <div className="articlelist-component fl">
        <div className="title">最新文章列表</div>
        {
          list.map(function (item, index){
            return (
              <div className="item clearfix" key={item._id}>

                <div className="info-panel" onClick={that.linkDetail.bind(that, item._id)}>
                  <h3>{item.title}</h3>
                  <p>{moment(item.updateTime).format('h:m YY-M-D')}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

ArticlelistComponent.displayName = 'ArticlelistComponent';

// Uncomment properties you need
// ArticlelistComponent.propTypes = {};
// ArticlelistComponent.defaultProps = {};

export default ArticlelistComponent;
