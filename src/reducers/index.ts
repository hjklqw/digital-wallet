import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { AppState } from './app.state';
import userReducer from './user.reducer';
import transactionReducer from './transaction.reducer';
import feeReducer from './fee.reducer';

export default combineReducers<AppState>({
  user: userReducer,
  transaction: transactionReducer,
  fee: feeReducer,
  form: formReducer
});