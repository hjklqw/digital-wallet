import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';

import { AppState } from '../../../reducers/app.state';
import { logoutUser } from '../../../actions/user.actions';
import { LoginPageStateProps } from '../../pages/login/login.view';

import MainLayout from './mainLayout.view';

const ConnectedMainLayout: React.SFC = (props) => {
  const isLoggedIn = useSelector((state: AppState) => (state.user.user != null));

  const dispatch = useDispatch();
  const history = useHistory<LoginPageStateProps>();
  
  const logout = () => {
    dispatch(logoutUser());
    history.push(LOGIN_ROUTE, { justLoggedOut: true });
  };

  return <MainLayout isLoggedIn={isLoggedIn} {...props} onLogout={logout} />;
};

export default ConnectedMainLayout;