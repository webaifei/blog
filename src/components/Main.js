require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import Index from './IndexComponent.js'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Index/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
