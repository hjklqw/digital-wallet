import { UserModel } from '../models/user.model';
import { WalletModel } from '../models/wallet.model';
import { TransactionModel } from '../models/transaction.model';
import { TransactionType } from '../models/transactionType.enum';
import { FeeModel, FeeApplicationType } from '../models/fee.model';

interface Database {
  user: UserModel[],
  wallet: WalletModel[],
  transaction: TransactionModel[],
  fee: FeeModel[]
};

const user1: UserModel = {
  id: 1,
  name: 'User 1',
  email: 'user1@email.com',
  username: 'user1',
  password: '123456789'
};

const transaction1: TransactionModel = {
  id: 1,
  customerId: user1.id,
  type: TransactionType.AddFunds,
  value: 10,
  destinationName: 'Bank',
  timestamp: new Date('01/02/2020 3:04:29'),
  fee: 0.05, // Thesse fee numbers are not at all properly calculated in this file
  startingBalance: 0, // Ditto
  endingBalance: 10
};

const transaction2: TransactionModel = {
  id: 2,
  customerId: user1.id,
  type: TransactionType.Buy,
  value: 5,
  destinationName: 'Real Estate Company',
  timestamp: new Date('02/15/2020 5:36:11'),
  fee: 0.02,
  startingBalance: transaction1.endingBalance,
  endingBalance: 5
};

const transaction3: TransactionModel = {
  id: 3,
  customerId: user1.id,
  type: TransactionType.Sell,
  value: 20,
  destinationName: 'Some Other Company',
  timestamp: new Date('02/19/2020 10:21:18'),
  fee: 0.18,
  startingBalance: transaction2.endingBalance,
  endingBalance: 25
};

const transactions = [transaction1, transaction2, transaction3];

const wallet1: WalletModel = {
  customerId: user1.id,
  balance: transaction3.endingBalance, // Note that this is wholly inaccurate, but for the purposes of this demo it doesn't matter
  numTransactions: transactions.length
};

const fees: FeeModel[] = [
  {
    transactionType: TransactionType.AddFunds,
    numTransactionsThreshold: 0,
    applicationType: FeeApplicationType.CashValue,
    value: 0,
    maximumCharge: 0
  },
  {
    transactionType: TransactionType.WithdrawFunds,
    numTransactionsThreshold: 0,
    applicationType: FeeApplicationType.CashValue,
    value: 0,
    maximumCharge: 0
  },
  {
    transactionType: TransactionType.Buy,
    numTransactionsThreshold: 0,
    applicationType: FeeApplicationType.Percentage,
    value: 0.05,
    maximumCharge: 10
  },
  {
    transactionType: TransactionType.Sell,
    numTransactionsThreshold: 0,
    applicationType: FeeApplicationType.Percentage,
    value: 0.1,
    maximumCharge: 10
  },
  {
    transactionType: TransactionType.Buy,
    numTransactionsThreshold: 5,
    applicationType: FeeApplicationType.Percentage,
    value: 0.03,
    maximumCharge: 10
  },
  {
    transactionType: TransactionType.Sell,
    numTransactionsThreshold: 5,
    applicationType: FeeApplicationType.Percentage,
    value: 0.07,
    maximumCharge: 10
  },
  {
    transactionType: TransactionType.Buy,
    numTransactionsThreshold: 10,
    applicationType: FeeApplicationType.Percentage,
    value: 0.01,
    maximumCharge: 10
  },
  {
    transactionType: TransactionType.Sell,
    numTransactionsThreshold: 5,
    applicationType: FeeApplicationType.Percentage,
    value: 0.03,
    maximumCharge: 10
  }
];

const database: Database = Object.freeze({
  user: [user1],
  wallet: [wallet1],
  transaction: transactions,
  fee: fees
});

export default database;