import 'jsdom-global/register';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MainLayoutContainer from './mainLayout.redux';
import MainLayoutView, { HeaderLink } from './mainLayout.view';
import * as Routes from '../../../assets/route.constants';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe('MainLayout', () => {
  let wrapper: ShallowWrapper;

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