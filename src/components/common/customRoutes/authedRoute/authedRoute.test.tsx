import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import AuthedRouteView from './authedRoute.view';
import { MemoryRouter } from 'react-router-dom';

describe('AuthedRoute', () => {
  
  const component = () => <div>I am a component</div>;
  function createWrapper(isLoggedIn: boolean) {
    return mount(
      <MemoryRouter initialEntries={['/']}>
        <AuthedRouteView component={component} isLoggedIn={isLoggedIn} />
      </MemoryRouter>
    );
  }

  it('should render props.component when logged in', () => {
    const wrapper = createWrapper(true);
    expect(wrapper.find(component)).toHaveLength(1);
  });
  
});