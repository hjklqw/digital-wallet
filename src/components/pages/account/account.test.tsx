import React from 'react';
import { useSelector } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import AccountPageContainer from './account.redux';
import AccountPageView from './account.view';
import RegisteredPageLayout from '../../layout/registeredPage';
import AccountSettingsForm from '../../forms/accountSettings';
import { UserModel } from '../../../models/user.model';
import { UserState } from '../../../reducers/user.state';
import Loader from '../../common/loader';
import ErrorCallout from '../../common/callout/error';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));
const mockSelector = useSelector as jest.Mock;

jest.mock('../../forms/accountSettings', () => (_: UserModel) => <div></div>);

describe('AccountPage', () => {

  let wrapper: ShallowWrapper;
  const customer: UserModel = {
    id: 1,
    name: 'customer',
    email: 'a@a.com',
    username: 'user1',
    password: 'password'
  };

  describe('Container', () => {

    function createWrapper() {
      wrapper = shallow(<AccountPageContainer />);
    }

    it('should render a loader and not the page view if the state is loading', () => {
      const state: UserState = {
        user: null,
        wallet: null,
        isLoading: true,
        hasLoaded: false,
        error: null
      };
      mockSelector.mockReturnValueOnce(state);
      createWrapper();
      expect(wrapper.find(Loader)).toHaveLength(1);
      expect(wrapper.find(AccountPageView)).toHaveLength(0);
    });

    it('should render an error and not the page view if the state has an error', () => {
      const state: UserState = {
        user: null,
        wallet: null,
        isLoading: false,
        hasLoaded: true,
        error: new Error()
      };
      mockSelector.mockReturnValueOnce(state);
      createWrapper();
      expect(wrapper.find(ErrorCallout)).toHaveLength(1);
      expect(wrapper.find(AccountPageView)).toHaveLength(0);
    });

    it('should otherwise render the page with the customer prop as the state\'s user', () => {
      const state: UserState = {
        user: customer,
        wallet: null,
        isLoading: false,
        hasLoaded: true,
        error: null
      };
      mockSelector.mockReturnValueOnce(state);
      createWrapper();
      const page = wrapper.find(AccountPageView);
      expect(page).toHaveLength(1);
      expect(page.prop('customer')).toBe(state.user);
    });
  });

  describe('View', () => {

    beforeEach(() => {
      wrapper = shallow(<AccountPageView customer={customer} />);
    });
  
    it('should render', () => {
      expect(wrapper.instance).not.toBeNull();
    });
  
    it('should render the Registered Page layout', () => {
      expect(wrapper.find(RegisteredPageLayout)).toHaveLength(1);
    });
  
    it('should render the AccountSettingsForm with the customer prop', () => {
      const form = wrapper.find(AccountSettingsForm);
      expect(form).toHaveLength(1);
      expect(form.prop('customer')).toBe(customer);
    });
  });
});