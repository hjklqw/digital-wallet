import React from 'react';
import { shallow } from 'enzyme';
import Callout, { Props, CalloutType } from './callout.view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('Callout', () => {

  function createWrapper(props: Props) {
    return shallow(<Callout {...props} />);
  };

  it('should render', () => {
    const wrapper = createWrapper({ message: '', type: CalloutType.Info });
    expect(wrapper.instance).not.toBeNull();
  });

  it('should render the message prop', () => {
    const message = 'Some message';
    const wrapper = createWrapper({ message: message, type: CalloutType.Info });
    expect(wrapper.contains(message)).toBeTruthy();
  });

  it('should render an icon', () => {
    const wrapper = createWrapper({ message: '', type: CalloutType.Info });
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });
});