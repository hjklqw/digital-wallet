import { UserState } from './user.state';
import { FormStateMap } from 'redux-form';
import { TransactionState } from './transaction.state';
import { FeeState } from './fee.state';

export interface AppState {
  user: UserState,
  transaction: TransactionState,
  fee: FeeState,
  form: FormStateMap
};