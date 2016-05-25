'use strict';

import React from 'react';

require('styles//Slider.scss');

class SliderComponent extends React.Component {
  render() {
    return (
      <div className="slider-component">
        <img src={require('../images/slide.jpg')} alt=""/>
      </div>
    );
  }
}

SliderComponent.displayName = 'SliderComponent';

// Uncomment properties you need
// SliderComponent.propTypes = {};
// SliderComponent.defaultProps = {};

export default SliderComponent;
