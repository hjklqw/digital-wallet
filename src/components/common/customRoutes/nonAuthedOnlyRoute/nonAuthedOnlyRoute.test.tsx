import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import AuthedRouteView from './nonAuthedOnlyRoute.view';
import { MemoryRouter } from 'react-router-dom';


describe('NonAuthedOnlyRoute', () => {
  
  const component = () => <div>I am a component</div>;
  function createWrapper(isLoggedIn: boolean) {
    return mount(
      <MemoryRouter initialEntries={['/']}>
        <AuthedRouteView component={component} isLoggedIn={isLoggedIn} />
      </MemoryRouter>
    );
  }

  it('should render props.component when not logged in', () => {
    const wrapper = createWrapper(false);
    expect(wrapper.find(component)).toHaveLength(1);
  });
  
});