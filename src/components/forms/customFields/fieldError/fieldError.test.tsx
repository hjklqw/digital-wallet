import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FieldError from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('FieldError', () => {

  let wrapper: ShallowWrapper;

  function createWrapper(touched: boolean, error: string) {
    wrapper = shallow(<FieldError meta={{
      touched: touched,
      error: error
    }} />);
  }

  describe(('if both touch is true and there is an error message'), () => {

    it('should render', () => {
      createWrapper(true, 'some error message');
      expect(wrapper.getElement()).not.toBeNull();
    });
  
    it('should render both the error message and an icon', () => {
      const errorMessage = 'some error message';
      createWrapper(true, errorMessage);
      expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
      expect(wrapper.html()).toContain(errorMessage);
    });
  });

  it('should return null if either touched is false or there is no error', () => {
    createWrapper(false, 'some error message');
    expect(wrapper.getElement()).toBeNull();
    wrapper.unmount();
    createWrapper(true, '');
    expect(wrapper.getElement()).toBeNull();
  });
});