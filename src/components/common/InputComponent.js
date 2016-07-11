'use strict';

import React from 'react';

require('styles/common/Input.scss');

class InputComponent extends React.Component {
  render() {
    return (
      <div className="input-component clearfix">
        <input type="text" className="fl" placeholder="输入文章标题"/>
        <a href="javascript:;" className="fr">搜索</a>
      </div>
    );
  }
}

InputComponent.displayName = 'CommonInputComponent';

// Uncomment properties you need
// InputComponent.propTypes = {};
// InputComponent.defaultProps = {};

export default InputComponent;
