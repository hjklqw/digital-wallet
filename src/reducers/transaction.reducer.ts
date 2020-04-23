import * as Constants from '../actions/transaction.constants';
import { Action } from '../actions/base-action';
import { TransactionState } from './transaction.state';

const initialState: TransactionState = {
  transactions: [],
  isLoading: false,
  error: null
};

function transactionReducer(state: TransactionState = initialState, action: Action): TransactionState {
  switch(action.type) {
    case Constants.FETCH_TRANSACTIONS:
    case Constants.CREATE_TRANSACTION:
      return {
        ...state,
        isLoading: true
      };
    case Constants.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: action.payload,
        error: null
      };
    case Constants.CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case Constants.FETCH_TRANSACTIONS_FAILURE:
    case Constants.CREATE_TRANSACTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default transactionReducer;