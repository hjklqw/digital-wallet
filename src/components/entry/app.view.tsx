import React from 'react';
import './app.scss';

import { Route, Switch } from 'react-router-dom';
import * as Routes from '../../assets/route.constants';
import AuthedRoute from '../common/customRoutes/authedRoute';
import NonAuthedOnlyRoute from '../common/customRoutes/nonAuthedOnlyRoute';

import MainLayout from '../layout/main';
import DashboardPage from '../pages/dashboard';
import AccountPage from '../pages/account';
import HomePage from '../pages/home';
import FakePage from '../pages/fake';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import TransactionHistoryPage from '../pages/transactionHistory';
import MakeTransactionPage from '../pages/makeTransaction';

const App = () => (
  <MainLayout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <NonAuthedOnlyRoute path={Routes.LOGIN} component={LoginPage} />
      <NonAuthedOnlyRoute path={Routes.REGISTER} component={RegisterPage} />
      <AuthedRoute exact path={Routes.DASHBOARD} component={DashboardPage} />
      <AuthedRoute path={Routes.ACCOUNT_SETTINGS} component={AccountPage} />
      <AuthedRoute path={Routes.TRANSACTION_HISTORY} component={TransactionHistoryPage} />
      <AuthedRoute path={Routes.MAKE_TRANSACTION} component={MakeTransactionPage} />
      <Route path={Routes.FAKE_PAGE} component={FakePage} />
    </Switch>
  </MainLayout>
);

export default App;
