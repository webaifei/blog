'use strict';

import React from 'react';
import NavBar from './NavBarComponent'
import Slider from './SliderComponent'
import ArticleList from './ArticlelistComponent'
require('styles//Index.scss');

class IndexComponent extends React.Component {
  render() {
    return (
      <div className="index-component">
        <NavBar/>
        <Slider/>
        <ArticleList/>
        
      </div>
    );
  }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
