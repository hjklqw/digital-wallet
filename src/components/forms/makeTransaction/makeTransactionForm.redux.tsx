import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { TRANSACTION_HISTORY as TRANSACTION_HISTORY_ROUTE } from '../../../assets/route.constants';

import { AppState } from '../../../reducers/app.state';
import ErrorCallout from '../../common/callout/error';

import MakeTransactionForm from './makeTransactionForm.view';
import { TransactionModel } from '../../../models/transaction.model';
import { createTransaction } from '../../../services/transaction.service';
import { createTransactionFailure } from '../../../actions/transaction.actions';
import { TransactionType } from '../../../models/transactionType.enum';
import { FeeModel } from '../../../models/fee.model';
import { WalletModel } from '../../../models/wallet.model';

import calculateFee from './calculateFee';

type Props = {
  fees: FeeModel[]
}

const ConnectedMakeTransactionForm = ({ fees }: Props) => {

  const customerId: number = useSelector((state: AppState) => state.user.user?.id || -1);
  const customerWallet: WalletModel | null = useSelector((state: AppState) => state.user.wallet);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (model: TransactionModel) => {
    if ((customerId === -1) || (customerWallet == null)) {
      dispatch(createTransactionFailure(new Error('Something went wrong. Please try logging out and then in again.')));
      return;
    }
    model.customerId = customerId;
    model.timestamp = new Date();
    model.fee = calculateFee(customerWallet.numTransactions, customerWallet.balance, fees, model.type); // This should be calculated in the server
    const res = await createTransaction(model);
    res(dispatch);
    history.push(TRANSACTION_HISTORY_ROUTE);
  }

  let transactionError: Error | null = useSelector((state: AppState) => state.transaction.error);
  if (customerWallet == null) {
    transactionError = new Error("Failed to retrieve user wallet.");
  }

  return (
    <>
      {transactionError && <ErrorCallout error={transactionError} suffixText="Please try again." />}
      <MakeTransactionForm
        onSubmit={onSubmit}
        currentBalance={customerWallet?.balance || 0}
        numTransactions={customerWallet?.numTransactions || 0}
        fees={fees}
        initialValues={{ type: TransactionType.Buy }} />
    </>
  );
};

export default ConnectedMakeTransactionForm;