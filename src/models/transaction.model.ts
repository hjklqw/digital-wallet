import { TransactionType } from './transactionType.enum';

export interface TransactionModel {
  id: number,
  customerId: number,
  type: TransactionType,
  value: number,
  destinationName: string,
  timestamp: Date,
  fee: number,
  startingBalance: number,
  endingBalance: number
};