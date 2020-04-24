import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import InputWithError from './inputWithError.view';
import FieldError from '../fieldError';

describe('InputWithError', () => {

  let wrapper: ShallowWrapper;
  const type = 'input';
  const inputProps = { placeholder: 'placeholder' };

  beforeEach(() => {
    const meta = {
      touched: false,
      error: ''
    };
    wrapper = shallow(<InputWithError input={inputProps} type={type} meta={meta} />);
  });

  it('should render', () => {
    expect(wrapper.instance).not.toBeNull();
  });

  it('should render an input field with the right props', () => {
    const inputField = wrapper.find(`input[type='${type}']`);
    expect(inputField).toHaveLength(1);
    expect(inputField.props()).toHaveProperty('placeholder', inputProps.placeholder);
  });

  it('should render a FieldError component', () => {
    expect(wrapper.find(FieldError)).toHaveLength(1);
  });
});