import 'jsdom-global/register';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MainLayoutContainer from './mainLayout.redux';
import MainLayoutView, { HeaderLink } from './mainLayout.view';
import { logoutUser } from '../../../actions/user.actions';
import * as Routes from '../../../assets/route.constants';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValueOnce(null).mockReturnValue({}),
  useDispatch: jest.fn(() => mockDispatch)
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe('MainLayout', () => {
  let wrapper: ShallowWrapper;

  describe('Container', () => {

    beforeEach(() => {
      wrapper = shallow(<MainLayoutContainer />);
    });

    it('should determine that the user is not logged in if it\'s null', () => {
      expect(wrapper.find(MainLayoutView).prop('isLoggedIn')).toBeFalsy();
    });

    it('should determine that the user is logged in if it\'s not null', () => {
      expect(wrapper.find(MainLayoutView).prop('isLoggedIn')).toBeTruthy();
    });

    it('should dispatch the logout action on logout', () => {
      const logoutFunc = wrapper.find(MainLayoutView).prop('onLogout');
      logoutFunc({});
      expect(mockDispatch).toHaveBeenCalledWith(logoutUser());
    });
  });

   describe('View', () => {

    const mockLogoutFunction = jest.fn();

    function createWrapper(isLoggedIn: boolean) {
      wrapper = shallow(<MainLayoutView isLoggedIn={isLoggedIn} onLogout={mockLogoutFunction} />);
    }

    it('should render header links to the account settings page and logout action when logged in', () => {
      createWrapper(true);
      const links = wrapper.find(HeaderLink);
      expect(
        links.findWhere(x => 
          (x.prop('href') === Routes.ACCOUNT_SETTINGS) ||
          (x.prop('action') === mockLogoutFunction)
      )).toHaveLength(2);
    });

    it('should render header links to the login and register pages when not logged in', () => {
      createWrapper(false);
      const links = wrapper.find(HeaderLink);
      expect(
        links.findWhere(x => 
          (x.prop('href') === Routes.LOGIN) ||
          (x.prop('href') === Routes.REGISTER)
      )).toHaveLength(2);
    });
  });
}); 