import * as Constants from './transaction.constants';
import { Action } from './base-action';
import { TransactionModel } from '../models/transaction.model';

export function fetchTransactions(): Action {
  return { type: Constants.FETCH_TRANSACTIONS };
};

export function fetchTransactionsSuccess(transactions: TransactionModel[]): Action {
  return { type: Constants.FETCH_TRANSACTIONS_SUCCESS, payload: transactions };
};

export function fetchTransactionsFailure(error: Error): Action {
  return { type: Constants.FETCH_TRANSACTIONS_FAILURE, payload: error };
};

export function createTransaction(transaction: TransactionModel): Action {
  return { type: Constants.CREATE_TRANSACTION, payload: transaction };
};

export function createTransactionSuccess(transaction: TransactionModel): Action {
  return { type: Constants.CREATE_TRANSACTION_SUCCESS, payload: transaction };
};

export function createTransactionFailure(error: Error): Action {
  return { type: Constants.CREATE_TRANSACTION_FAILURE, payload: error };
};