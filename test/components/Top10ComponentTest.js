/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Top10Component from 'components//Top10Component.js';

describe('Top10Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Top10Component);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('top10-component');
  });
});
