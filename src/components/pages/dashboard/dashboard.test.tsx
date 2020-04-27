import React from 'react';
import { useSelector } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import DashboardPageContainer from './dashboard.redux';
import DashboardPageView, { ActionLink } from './dashboard.view';
import RegisteredPageLayout from '../../layout/registeredPage';
import { UserModel } from '../../../models/user.model';
import { UserState } from '../../../reducers/user.state';
import Loader from '../../common/loader';
import ErrorCallout from '../../common/callout/error';
import { WalletModel } from '../../../models/wallet.model';
import { TRANSACTION_HISTORY, MAKE_TRANSACTION } from '../../../assets/route.constants';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));
const mockSelector = useSelector as jest.Mock;

describe('DashboardPage', () => {

  let wrapper: ShallowWrapper;
  const customer: UserModel = {
    id: 1,
    name: 'customer',
    email: 'a@a.com',
    username: 'user1',
    password: 'password'
  };
  const wallet: WalletModel = {
    customerId: customer.id,
    balance: 10,
    numTransactions: 1
  };

  describe('Container', () => {

    function createWrapper() {
      wrapper = shallow(<DashboardPageContainer />);
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
      expect(wrapper.find(DashboardPageView)).toHaveLength(0);
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
      expect(wrapper.find(DashboardPageView)).toHaveLength(0);
    });

    it('should otherwise render the page with the customer prop as the state\'s user', () => {
      const state: UserState = {
        user: customer,
        wallet: wallet,
        isLoading: false,
        hasLoaded: true,
        error: null
      };
      mockSelector.mockReturnValueOnce(state);
      createWrapper();
      const page = wrapper.find(DashboardPageView);
      expect(page).toHaveLength(1);
      expect(page.prop('customerName')).toBe(state.user?.name);
      expect(page.prop('walletBalance')).toBe(state.wallet?.balance);
    });
  });

  describe('View', () => {

    beforeEach(() => {
      wrapper = shallow(<DashboardPageView customerName={customer.name} walletBalance={wallet.balance} />);
    });
  
    it('should render', () => {
      expect(wrapper.instance).not.toBeNull();
    });
  
    it('should render the Registered Page layout', () => {
      expect(wrapper.find(RegisteredPageLayout)).toHaveLength(1);
    });
  
    it('should render links to the transition history and creation pages', () => {
      const links = wrapper.find(ActionLink);
      expect(links).toHaveLength(2);
      expect(links.findWhere(link =>
        (link.prop('route') === TRANSACTION_HISTORY) ||
        (link.prop('route') === MAKE_TRANSACTION)
      )).toHaveLength(2);
    });
  });
});