import React from 'react';
import { Field, InjectedFormProps, reduxForm, formValueSelector } from 'redux-form';

import validate from './validate';
import InputWithError from '../../common/inputWithError';
import RadioGroupWithError from '../../common/radioGroupWithError';
import { RadioOptionProps } from '../../common/radioGroupWithError/radioGroupWithError.view';
import { TransactionType } from '../../../models/transactionType.enum';
import { TransactionModel } from '../../../models/transaction.model';
import { FeeModel } from '../../../models/fee.model';
import { connect } from 'react-redux';
import calculateFee from './calculateFee';

type Props = {
  numTransactions: number,
  currentBalance: number,
  fees: FeeModel[],
  currentTransactionType?: TransactionType
};

const MakeTransactionForm: React.FC<Props & InjectedFormProps<TransactionModel, Props>> = (props) => {

  const currentFee = calculateFee(
    props.numTransactions,
    props.currentBalance,
    props.fees,
    props.currentTransactionType || (props.initialValues.type as TransactionType));

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
              const maximumBalanceMinusFee = props.currentBalance - currentFee;
              if (value > maximumBalanceMinusFee) return maximumBalanceMinusFee;
              return value;
            }} />
          <span className="fee-message">The fee for this transaction is ${currentFee.toFixed(2)}.</span>
        </div>
      </section>
      <section>
        <h1>Destination</h1>
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

const FORM_NAME = 'makeTransaction';

const ReduxForm = reduxForm<TransactionModel, Props>({
  form: FORM_NAME,
  validate: validate
})(MakeTransactionForm);

const selector = formValueSelector(FORM_NAME);
const ConnectedForm = connect(
  state => ({ currentTransactionType: selector(state, 'type') })
)(ReduxForm);

export default ConnectedForm;