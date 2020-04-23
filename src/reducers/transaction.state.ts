import { TransactionModel } from '../models/transaction.model';

export interface TransactionState {
  transactions: TransactionModel[],
  isLoading: boolean,
  error: Error | null
};