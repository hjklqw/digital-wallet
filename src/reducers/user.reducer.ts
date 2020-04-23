import * as Constants from '../actions/user.constants';
import { Action } from '../actions/base-action';
import { UserState } from './user.state';

const initialState: UserState = {
  user: null,
  wallet: null,
  isLoading: false,
  error: null
};

function userReducer(state: UserState = initialState, action: Action): UserState {
  switch(action.type) {
    case Constants.FETCH_USER:
    case Constants.CREATE_USER:
    case Constants.UPDATE_USER:
      return {
        ...state,
        isLoading: true
      };
    case Constants.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        wallet: action.payload.wallet,
        error: null
      };
    case Constants.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case Constants.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null
      };
    case Constants.FETCH_USER_FAILURE:
    case Constants.CREATE_USER_FAILURE:
    case Constants.UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case Constants.LOGOUT_USER:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}

export default userReducer;