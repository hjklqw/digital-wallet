import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './app.view';
import MainLayout from '../layout/main';

describe('App', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render', () => {
    expect(wrapper.instance).not.toBeNull();
  });

  it('should render the main layout', () => {
    expect(wrapper.find(MainLayout)).toHaveLength(1);
  });
});