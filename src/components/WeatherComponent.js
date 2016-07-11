'use strict';

import React from 'react';

require('styles//Weather.scss');

class WeatherComponent extends React.Component {
  render() {
    return (
      <div className="weather-component">
        今日天气:  下时代sdf   明日天气: 随时随地的
        
      </div>
    );
  }
}

WeatherComponent.displayName = 'WeatherComponent';

// Uncomment properties you need
// WeatherComponent.propTypes = {};
// WeatherComponent.defaultProps = {};

export default WeatherComponent;
