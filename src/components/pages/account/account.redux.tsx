import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import { AppState } from '../../../reducers/app.state';
import { UserState } from '../../../reducers/user.state';

import AccountPage from './account.view';
import Loader from '../../common/loader';
import ErrorCallout from '../../common/callout/error';
import { UserModel } from '../../../models/user.model';

const ConnectedAccountPage = () => {
  const userState: UserState = useSelector((state: AppState) => state.user, shallowEqual);
  if (userState.isLoading) {
    return <Loader />
  }
  if (userState.error) {
    return <ErrorCallout error={userState.error} />
  }
  return <AccountPage customer={userState.user as UserModel} />;
};

export default ConnectedAccountPage;