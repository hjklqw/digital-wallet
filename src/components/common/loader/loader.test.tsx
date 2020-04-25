import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Loader from './loader.view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('Loader', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it('should render', () => {
    expect(wrapper.instance).not.toBeNull();
  });

  it('should show the spinner icon with a spinning prop', () => {
    const iconComponent = wrapper.find(FontAwesomeIcon);
    expect(iconComponent).toHaveLength(1);
    expect(iconComponent.prop('spin')).toBeTruthy();
  });
});