import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../reducers/app.state';
import MainLayout from './mainLayout.view';
import { logoutUser } from '../../../actions/user.actions';

const ConnectedMainLayout: React.SFC = (props) => {
  const isLoggedIn = useSelector((state: AppState) => (state.user.user != null));

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };

  return <MainLayout isLoggedIn={isLoggedIn} {...props} onLogout={logout} />;
};

export default ConnectedMainLayout;