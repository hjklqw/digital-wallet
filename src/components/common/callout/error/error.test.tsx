import React from 'react';
import { shallow } from 'enzyme';
import ErrorCallout, { Props } from './error.view';
import Callout from '../';

describe('ErrorCallout', () => {

  function createWrapper(props: Props) {
    return shallow(<ErrorCallout {...props} />);
  };

  it('should render', () => {
    const wrapper = createWrapper({ error: new Error('') });
    expect(wrapper.instance).not.toBeNull();
  });

  it('should render the error\'s message', () => {
    const error = new Error('some message');
    const wrapper = createWrapper({ error: error });
    expect(wrapper.find(Callout).props().message).toBe(error.message);
  });

  it('should leave a space between the error message, and prefix + suffix text', () => {
    const error = new Error('some message');
    const prefixText = 'prefix';
    const suffixText = 'suffix';
    const expectedMessage = `${prefixText} ${error.message} ${suffixText}`;
    const wrapper = createWrapper({ error: error, prefixText: prefixText, suffixText: suffixText });
    expect(wrapper.find(Callout).props().message).toBe(expectedMessage);
  });
});