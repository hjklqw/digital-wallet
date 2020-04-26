import React from 'react';
import { match as routeMatch } from 'react-router';
import { createLocation, createMemoryHistory } from 'history';
import { shallow, ShallowWrapper } from 'enzyme';
import LoginPage, { LoginPageStateProps } from './login.view';
import Callout from '../../common/callout';
import { CalloutType } from '../../common/callout/callout.view';
import NormalPageLayout from '../../layout/normalPage';

const location = createLocation<LoginPageStateProps>('');
const history = createMemoryHistory<LoginPageStateProps>();
const match: routeMatch = {
  params: '',
  isExact: false,
  path: '',
  url: ''
};

describe('LoginPage', () => {

  let wrapper: ShallowWrapper;

  function createWrapper(state: LoginPageStateProps) {
    location.state = state;
    wrapper = shallow(<LoginPage location={location} history={history} match={match} />);
  }

  it('should use the NormalPageLayout', () => {
    createWrapper({ justRegistered: false, justLoggedOut: false });
    expect(wrapper.find(NormalPageLayout)).toHaveLength(1);
  });

  it('should render no callouts when neither just registered nor logged out', () => {
    createWrapper({ justRegistered: false, justLoggedOut: false });
    expect(wrapper.find(Callout)).toHaveLength(0);
  });

  it('should show an info callout when registration is successful', () => {
    createWrapper({ justRegistered: true, justLoggedOut: false });
    const callout = wrapper.find(Callout);
    expect(callout).toHaveLength(1);
    expect(callout.prop('type')).toBe(CalloutType.Info);
    expect(callout.prop('message').toLowerCase()).toContain('regist');
  });

  it('should show an info callout when logout is successful', () => {
    createWrapper({ justRegistered: false, justLoggedOut: true });
    const callout = wrapper.find(Callout);
    expect(callout).toHaveLength(1);
    expect(callout.prop('type')).toBe(CalloutType.Info);
    const message = callout.prop('message').toLowerCase();
    expect(message).toContain('log');
    expect(message).toContain('out');
  });
});