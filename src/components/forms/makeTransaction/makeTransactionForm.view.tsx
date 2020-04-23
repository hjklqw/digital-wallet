import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

import InputWithError from '../../common/inputWithError';
import RadioGroupWithError from '../../common/radioGroupWithError';
import { RadioOptionProps } from '../../common/radioGroupWithError/radioGroupWithError.view';
import { TransactionType } from '../../../models/transactionType.enum';
import { TransactionModel } from '../../../models/transaction.model';
import { FeeModel } from '../../../models/fee.model';
import calculateFee from './calculateFee';

export type Props = {
  numTransactions: number,
  currentBalance: number,
  fees: FeeModel[],
  currentTransactionType?: TransactionType
};

const MakeTransactionForm: React.SFC<Props & InjectedFormProps<TransactionModel, Props>> = (props) => {

  const currentTransactionType = props.currentTransactionType || (props.initialValues.type as TransactionType);

  const currentFee = calculateFee(
    props.numTransactions,
    props.currentBalance,
    props.fees,
    currentTransactionType);

  return (
    <form onSubmit={props.handleSubmit}>
      <section>
        <h1>Details</h1>
        <div>
          <label htmlFor="type">Type</label>
          <Field
            name="type"
            component={RadioGroupWithError}
            options={Object.values(TransactionType).map(
              t => ({ label: t, value: t })
            ) as RadioOptionProps[]} />
        </div>
        <div>
          <label htmlFor="value">Amount</label>
          <Field
            name="value"
            component={InputWithError}
            type="number"
            normalize={(value: number) => {
              if (value < 0) return 0;
              if (currentTransactionType === TransactionType.AddFunds) return value;
              const maximumBalanceMinusFee = props.currentBalance - currentFee;
              if (value > maximumBalanceMinusFee) return maximumBalanceMinusFee;
              return value;
            }} />
          <span className="fee-message">The fee for this transaction is ${currentFee.toFixed(2)}.</span>
        </div>
      </section>
      <section>
        <h1>{((currentTransactionType === TransactionType.WithdrawFunds) || (currentTransactionType === TransactionType.Buy)) ? 'Source' : 'Destination'}</h1>
        <div>
          <label htmlFor="destinationName">Name</label>
          <Field name="destinationName" component={InputWithError} type="text" />
        </div>
      </section>
      <button type="submit" disabled={props.pristine || props.submitting || props.invalid}>
        Create
      </button>
      <button type="button" onClick={props.reset}>Reset</button>
    </form>
  );
};

export default MakeTransactionForm;