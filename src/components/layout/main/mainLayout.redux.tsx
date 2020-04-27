import React from 'react'
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';

import { LoginPageStateProps } from '../../pages/login/login.view';
import { logoutUser } from '../../../services/user.service';

import MainLayout from './mainLayout.view';
import { useUserState } from '../../common/hooks';

const ConnectedMainLayout: React.SFC = (props) => {
  const isLoggedIn = useUserState();

  const dispatch = useDispatch();
  const history = useHistory<LoginPageStateProps>();
  
  const logout = () => {
    logoutUser()(dispatch);
    history.push(LOGIN_ROUTE, { justLoggedOut: true });
  };

  return <MainLayout isLoggedIn={isLoggedIn} {...props} onLogout={logout} />;
};

export default ConnectedMainLayout;