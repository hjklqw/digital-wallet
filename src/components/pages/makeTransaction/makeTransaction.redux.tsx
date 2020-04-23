import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../../../reducers/app.state';
import { FeeState } from '../../../reducers/fee.state';

import Loader from '../../common/loader';
import ErrorCallout from '../../common/callout/error';
import MakeTransactionPage from './makeTransaction.view';
import { fetchFees } from '../../../services/fee.service';

const ConnectedMakeTransactionPage = () => {

  const dispatch = useDispatch();
  const feeState: FeeState = useSelector((state: AppState) => state.fee);

  useEffect(() => {
    if (!feeState.hasLoaded) {
      (async () => {
        (await fetchFees())(dispatch);
      })();
    }
  }, [dispatch, feeState.hasLoaded]);

  if (feeState.isLoading) {
    return <Loader />
  }
  if (feeState.error) {
    return <ErrorCallout error={feeState.error} />;
  }

  return <MakeTransactionPage fees={feeState.fees} />;
};

export default ConnectedMakeTransactionPage;