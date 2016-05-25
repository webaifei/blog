'use strict';

import React from 'react';

require('styles//NavBar.scss');

class NavBarComponent extends React.Component {
  render() {
    return (
      <div className="navbar-component">
        <a className="logo"><img src={require('../images/yeoman.png')} alt=""/></a>
        <nav>
          <a href="">javascript</a>
          <a href="">nodejs</a>
          <a href="">games</a>
          <a href="">工作</a>
          <a href="">生活笔记</a>
          <a href="">关于我</a>
        </nav>
        <div className="search-input">
          <input type="text"/>
        </div>
      </div>
    );
  }
}

NavBarComponent.displayName = 'NavBarComponent';

// Uncomment properties you need
// NavBarComponent.propTypes = {};
// NavBarComponent.defaultProps = {};

export default NavBarComponent;
