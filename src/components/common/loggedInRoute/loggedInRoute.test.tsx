import 'jsdom-global/register';
import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import LoggedInRouteContainer from './loggedInRoute.redux';
import LoggedInRouteView from './loggedInRoute.view';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';
import { Redirect, MemoryRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValueOnce(null).mockReturnValueOnce({})
}));

describe.only('LoggedInRoute', () => {

  describe('Container', () => {
  
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = shallow(<LoggedInRouteContainer />);
    });

    it('should determine that the user is not logged in if it\'s null', () => {
      expect(wrapper.find(LoggedInRouteView).prop('isLoggedIn')).toBeFalsy();
    });

    it('should determine that the user is logged in if it\'s not null', () => {
      expect(wrapper.find(LoggedInRouteView).prop('isLoggedIn')).toBeTruthy();
    });
  });

  describe('View', () => {
  
    const component = () => <div>I am a component</div>;
    function createWrapper(isLoggedIn: boolean) {
      return mount(
        <MemoryRouter initialEntries={['/']}>
          <LoggedInRouteView component={component} isLoggedIn={isLoggedIn} />
        </MemoryRouter>
      );
    }

    it('should render props.component when logged in', () => {
      const wrapper = createWrapper(true);
      expect(wrapper.find(component)).toHaveLength(1);
    });

    /*it('should redirect to the login page when not logged in', () => {
      const wrapper = createWrapper(false);
      const redirectComponent = wrapper.find(Redirect);
      expect(redirectComponent).toHaveLength(1);
      expect(redirectComponent.prop('to')).toHaveProperty('pathname', LOGIN_ROUTE);
    });*/
  });
});