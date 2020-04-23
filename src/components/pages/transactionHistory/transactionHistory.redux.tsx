import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { AppState } from '../../../reducers/app.state';
import { TransactionState } from '../../../reducers/transaction.state';

import Loader from '../../common/loader';
import ErrorCallout from '../../common/callout/error';
import TransactionHistoryPage from './transactionHistory.view';
import { fetchTransactions } from '../../../services/transaction.service';

const ConnectedTransactionHistoryPage = () => {

  const currentUserId: number = useSelector((state: AppState) => state.user.user?.id || -1);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (currentUserId !== -1) {
        (await fetchTransactions(currentUserId))(dispatch);
      }
    })();
  }, [dispatch, currentUserId]);

  const transactionState: TransactionState = useSelector((state: AppState) => state.transaction, shallowEqual);
  if (transactionState.isLoading) {
    return <Loader />
  }
  if (transactionState.error) {
    return <ErrorCallout error={transactionState.error} />
  }

  return <TransactionHistoryPage transactions={transactionState.transactions} />;
};

export default ConnectedTransactionHistoryPage;