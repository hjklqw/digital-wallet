import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';

import { AppState } from '../../../reducers/app.state';
import { LoginPageStateProps } from '../../pages/login/login.view';
import { logoutUser } from '../../../services/user.service';

import MainLayout from './mainLayout.view';

const ConnectedMainLayout: React.SFC = (props) => {
  const isLoggedIn = useSelector((state: AppState) => (state.user.user != null));

  const dispatch = useDispatch();
  const history = useHistory<LoginPageStateProps>();
  
  const logout = () => {
    logoutUser()(dispatch);
    history.push(LOGIN_ROUTE, { justLoggedOut: true });
  };

  return <MainLayout isLoggedIn={isLoggedIn} {...props} onLogout={logout} />;
};

export default ConnectedMainLayout;