import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import { AppState } from '../../../reducers/app.state';
import { UserState } from '../../../reducers/user.state';
import { WalletModel } from '../../../models/wallet.model';

import Loader from '../../common/loader';
import ErrorCallout from '../../common/callout/error';
import LandingPage from './landing.view';

const ConnectedLandingPage = () => {
  const userState: UserState = useSelector((state: AppState) => state.user, shallowEqual);
  if (userState.isLoading) {
    return <Loader />
  }
  if (userState.error) {
    return <ErrorCallout error={userState.error} />
  }
  if (userState.user == null) {
    return <ErrorCallout error={new Error("Something went wrong. Please refresh the page.")} />
  }
  return <LandingPage
    customerName={userState.user.name}
    walletBalance={(userState.wallet as WalletModel).balance} />;
};

export default ConnectedLandingPage;