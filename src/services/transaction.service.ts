import * as actions from '../actions/transaction.actions';
import database from '../assets/database';
import { load } from './utils';
import { TransactionModel } from '../models/transaction.model';
import { TransactionType } from '../models/transactionType.enum';

export async function fetchTransactions(customerId: number) {
  function res() {
    const transactions = database.transaction.filter(t => t.customerId === customerId);
    return transactions.reverse();
  }
  return await load<TransactionModel[]>(actions.fetchTransactions, actions.fetchTransactionsSuccess, actions.fetchTransactionsFailure, res);
}

export async function createTransaction(postData: TransactionModel) {
  function postDataIsValid() {
    return true; // This would come from the server, but we are faking it
  }
  function res() {
    if (postDataIsValid()) {
      postData.id = database.transaction.length + 1; // This should all come from the server
      const walletIndex = database.wallet.findIndex(w => w.customerId === postData.customerId);
      database.wallet[walletIndex].numTransactions++;
      const balanceChange = postData.value - postData.fee;
      postData.startingBalance = database.wallet[walletIndex].balance;
      if ((postData.type === TransactionType.AddFunds) || (postData.type === TransactionType.Sell)) {
        database.wallet[walletIndex].balance += balanceChange;
      }
      else {
        database.wallet[walletIndex].balance -= balanceChange;
      }
      postData.endingBalance = database.wallet[walletIndex].balance;
      database.transaction.push(postData);
      return postData;
    }
    return new Error('Invalid data. Transaction was not created.');
  }
  return await load<TransactionModel>(actions.createTransaction, actions.createTransactionSuccess, actions.createTransactionFailure, res);
}