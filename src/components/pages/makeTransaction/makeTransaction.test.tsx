import React from 'react';
import { useSelector } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import MakeTransactionPageContainer from './makeTransaction.redux';
import MakeTransactionPageView from './makeTransaction.view';
import Loader from '../../common/loader';
import ErrorCallout from '../../common/callout/error';
import { FeeModel } from '../../../models/fee.model';
import { FeeState } from '../../../reducers/fee.state';
import database from '../../../assets/database';
import RegisteredPageLayout from '../../layout/registeredPage';
import MakeTransactionForm from '../../forms/makeTransaction/makeTransactionForm.view';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));
const mockSelector = useSelector as jest.Mock;

jest.mock('../../forms/makeTransaction', () => (_: FeeModel[]) => <div></div>);

describe('MakeTransactionPage', () => {

  let wrapper: ShallowWrapper;

  describe('Container', () => {

    function createWrapper() {
      wrapper = shallow(<MakeTransactionPageContainer />);
    }

    it('should render a loader and not the page view if the state is loading', () => {
      const state: FeeState = {
        fees: [],
        isLoading: true,
        hasLoaded: false,
        error: null
      }
      mockSelector.mockReturnValueOnce(state);
      createWrapper();
      expect(wrapper.find(Loader)).toHaveLength(1);
      expect(wrapper.find(MakeTransactionPageView)).toHaveLength(0);
    });

    it('should render an error and not the page view if the state has an error', () => {
      const state: FeeState = {
        fees: [],
        isLoading: false,
        hasLoaded: true,
        error: new Error()
      }
      mockSelector.mockReturnValueOnce(state);
      createWrapper();
      expect(wrapper.find(ErrorCallout)).toHaveLength(1);
      expect(wrapper.find(MakeTransactionPageView)).toHaveLength(0);
    });

    it('should otherwise render the page with the fees prop as the state\'s fees', () => {
      const state: FeeState = {
        fees: database.fee,
        isLoading: false,
        hasLoaded: true,
        error: null
      };
      mockSelector.mockReturnValueOnce(state);
      createWrapper();
      const page = wrapper.find(MakeTransactionPageView);
      expect(page).toHaveLength(1);
      expect(page.prop('fees')).toBe(state.fees);
    });
  });

  describe('View', () => {

    beforeEach(() => {
      wrapper = shallow(<MakeTransactionPageView fees={database.fee} />);
    });
  
    it('should render', () => {
      expect(wrapper.instance).not.toBeNull();
    });
  
    it('should render the Registered Page layout', () => {
      expect(wrapper.find(RegisteredPageLayout)).toHaveLength(1);
    });
  
    it('should render the MakeTransactionForm with the fees prop', () => {
      const form = wrapper.find(MakeTransactionForm);
      expect(form).toHaveLength(1);
      expect(form.prop('fees')).toBe(database.fee);
    });
  });
});