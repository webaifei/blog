'use strict';

import React from 'react';

require('styles//Top10.scss');

class Top10Component extends React.Component {
  render() {
    return (
      <div className="top10-component">
        <h2>阅读排行</h2>
        <ul>
          <li>
            <span>1</span> <span className="ellipsis">怎么搭建自己的博客 </span><span>阅读量: 20</span>
          </li>
          <li>
            <span>1</span> <span className="ellipsis">怎么搭建自己的博客 </span><span>阅读量: 20</span>
          </li>
          <li>
            <span>1</span> <span className="ellipsis">怎么搭建自己的博客 </span><span>阅读量: 20</span>
          </li>
          <li>
            <span>1</span> <span className="ellipsis">怎么搭建自己的博客 </span><span>阅读量: 20</span>
          </li>
        </ul>
      </div>
    );
  }
}

Top10Component.displayName = 'Top10Component';

// Uncomment properties you need
// Top10Component.propTypes = {};
// Top10Component.defaultProps = {};

export default Top10Component;
