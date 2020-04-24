import React from 'react';
import { shallow } from 'enzyme';
import App from './app.view';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
  });
});