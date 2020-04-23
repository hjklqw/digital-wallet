import React from 'react';
import './transactionHistory.scss';

import RegisteredPageLayout from '../../layout/registeredPage';
import { TransactionModel } from '../../../models/transaction.model';
import { TransactionType } from '../../../models/transactionType.enum';

type TransactionHistoryItemProps = {
  model: TransactionModel
};

const getDestinationPrefixFromTransactionType = (type: TransactionType) => {
  if (type === TransactionType.Sell) {
    return 'To';
  }
  return 'From';
}

const TransactionHistoryItem = ({ model }: TransactionHistoryItemProps) => (
  <article className="transaction">
    <div className="transaction-row">
      <div>
        <span className="transaction-type"><span className="prefix">Type:</span> {model.type}</span><br />
        <span className="transaction-destination"><span className="prefix">{getDestinationPrefixFromTransactionType(model.type)}:</span> {model.destinationName}</span>
      </div>
      <span className="transaction-date">{model.timestamp.toLocaleDateString()} {model.timestamp.toLocaleTimeString()}</span>
    </div>
    <div className="transaction-row">
      <span className="transaction-value">${model.value}</span>
      <div>
        <span className="prefix">Starting Balance:</span> ${model.startingBalance.toFixed(2)}<br />
        <span className="prefix">Ending Balance:</span> ${model.endingBalance.toFixed(2)}
      </div>
    </div>
  </article>
);

type Props = {
  transactions: TransactionModel[]
}

const TransactionHistoryPage = ({ transactions }: Props) => (
  <RegisteredPageLayout headerText="Transaction History" pageDescription="View your previous transactions.">
    {transactions.map((t, i) => <TransactionHistoryItem model={t} key={i} />)}
  </RegisteredPageLayout>
);

export default TransactionHistoryPage;