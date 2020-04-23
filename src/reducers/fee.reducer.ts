import * as Constants from '../actions/fee.constants';
import { Action } from '../actions/base-action';
import { FeeState } from './fee.state';

const initialState: FeeState = {
  fees: [],
  isLoading: false,
  hasLoaded: false,
  error: null
};

function feeReducer(state: FeeState = initialState, action: Action): FeeState {
  switch(action.type) {
    case Constants.FETCH_FEES:
      return {
        ...state,
        isLoading: true,
        hasLoaded: false
      };
    case Constants.FFETCH_FEES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fees: action.payload,
        hasLoaded: true,
        error: null
      };
    case Constants.FETCH_FEES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        error: action.payload
      };
    default:
      return state;
  }
}

export default feeReducer;