import React from 'react';
import './app.scss';

import { Route, Switch } from 'react-router-dom';
import * as Routes from '../../assets/route.constants';

import MainLayout from '../layout/main';
import LandingPage from '../pages/landing';
import AccountPage from '../pages/account';
import HomePage from '../pages/home';
import FakePage from '../pages/fake';
import LoggedInRoute from '../common/loggedInRoute';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import TransactionHistoryPage from '../pages/transactionHistory';
import MakeTransactionPage from '../pages/makeTransaction';

const App = () => (
  <MainLayout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path={Routes.LOGIN} component={LoginPage} />
      <Route path={Routes.REGISTER} component={RegisterPage} />
      <LoggedInRoute exact path={Routes.DASHBOARD} component={LandingPage} />
      <LoggedInRoute path={Routes.ACCOUNT_SETTINGS} component={AccountPage} />
      <LoggedInRoute path={Routes.TRANSACTION_HISTORY} component={TransactionHistoryPage} />
      <LoggedInRoute path={Routes.MAKE_TRANSACTION} component={MakeTransactionPage} />
      <Route path={Routes.FAKE_PAGE} component={FakePage} />
    </Switch>
  </MainLayout>
);

export default App;
