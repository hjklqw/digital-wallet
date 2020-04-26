import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../reducers/app.state';
import MainLayout from './mainLayout.view';
import { logoutUser } from '../../../actions/user.actions';
import { useHistory } from 'react-router-dom';
import { LoginPageStateProps } from '../../pages/login/login.view';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';

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