import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import RadioGroupWithError, { RadioOptionProps } from './radioGroupWithError.view';
import FieldError from '../fieldError';

describe('RadioGroupWithError', () => {

  let wrapper: ShallowWrapper;

  const options: RadioOptionProps[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' }
  ];
  const inputProps = { name: 'name', value: options[0].value };

  beforeEach(() => {
    const meta = {
      touched: false,
      error: ''
    };
    wrapper = shallow(<RadioGroupWithError input={inputProps} options={options} meta={meta} />);
  });

  it('should render', () => {
    expect(wrapper.instance).not.toBeNull();
  });

  it('should render radio input fields with the right props', () => {
    const inputFields = wrapper.find(`input[type="radio"]`);
    inputFields.forEach(f => expect(f.props()).toHaveProperty('name', inputProps.name));
  });

  it('should render radios based on the option prop', () => {
    const inputFields = wrapper.find(`input[type="radio"]`);
    expect(inputFields).toHaveLength(options.length);
    inputFields.forEach((f, i) => expect(f.prop('value')).toBe(options[i].value));
  });

  it('should check a radio that matches the input\'s value', () => {
    const checkedField = wrapper.find(`input[type="radio"]`).filterWhere(r => r.prop('checked') === true).first();
    expect(checkedField).toHaveLength(1);
    expect(checkedField.prop('value')).toBe(inputProps.value);
  });

  it('should render a FieldError component', () => {
    expect(wrapper.find(FieldError)).toHaveLength(1);
  });
});