import React from 'react';
import './makeTransaction.scss';

import RegisteredPageLayout from '../../layout/registeredPage';
import MakeTransactionForm from '../../forms/makeTransaction';
import { FeeModel, FeeApplicationType } from '../../../models/fee.model';
import { TransactionType } from '../../../models/transactionType.enum';

type Props = {
  fees: FeeModel[]
}

const FEE_DESCRIPTION_CLASSNAME = 'fee-description';

function getTransactionTypeVerb(type: TransactionType) {
  if (type === TransactionType.AddFunds) {
    return 'adding funds';
  }
  else if (type === TransactionType.WithdrawFunds) {
    return 'withdrawing funds';
  }
  else if (type === TransactionType.Buy) {
    return 'buying';
  }
  return 'selling';
}

const MakeTransactionPage = ({ fees }: Props) => {
  const pageDesc =
    <div>
      <p>Create a transaction. Fees are based off the current balance, as follows:</p>
      <details>
        {fees.map((f, i) => {
          const transactionTypeText = <span className="transaction-type-text">{getTransactionTypeVerb(f.transactionType)}</span>;
          if (f.value === 0) {
            return <span key={i} className={FEE_DESCRIPTION_CLASSNAME}>Free when {transactionTypeText}</span>
          }
          return (
            <span key={i} className={FEE_DESCRIPTION_CLASSNAME}>
              <span className="transaction-fee-value-text">
                {(f.applicationType === FeeApplicationType.Percentage) ? `${f.value}%` : `$${f.value}`}
              </span> when {transactionTypeText}
              {(f.numTransactionsThreshold > 0) && `, over ${f.numTransactionsThreshold} transactions`}
              {(f.maximumCharge > 0) && `, with a maximum charge of $${f.maximumCharge}`}
            </span>
          );
        })}
      </details>
    </div>;
  return (
    <RegisteredPageLayout headerText="Make Transaction" pageDescription={(fees.length > 0) && pageDesc}>
      <MakeTransactionForm fees={fees} />
    </RegisteredPageLayout>
  );
};

export default MakeTransactionPage;