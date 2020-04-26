import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import RegisterPage from './register.view';
import NormalPageLayout from '../../layout/normalPage';
import AccountSettingsForm from '../../forms/accountSettings';

jest.mock('../../forms/accountSettings', () => () => <div></div>);

describe('RegisterPage', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<RegisterPage />);
  });

  it('should render', () => {
    expect(wrapper.instance).not.toBeNull();
  });

  it('should use the NormalPageLayout', () => {
    expect(wrapper.find(NormalPageLayout)).toHaveLength(1);
  });

  it('should render the AccountSettingsForm with no customer prop', () => {
    const form = wrapper.find(AccountSettingsForm);
    expect(form).toHaveLength(1);
    expect(form.prop('customer')).toBeUndefined();
  });
});