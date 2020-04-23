import { TransactionType } from './transactionType.enum';

export enum FeeApplicationType {
  Percentage,
  CashValue
}

export interface FeeModel {
  transactionType: TransactionType,
  numTransactionsThreshold: number,
  applicationType: FeeApplicationType
  value: number,
  maximumCharge: number
}