import React from 'react'
import { RouteProps } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from '../../../reducers/app.state';
import LoggedInRoute from './loggedInRoute.view';

const ConnectedLoggedInRoute: React.FC<RouteProps> = (props: any) => {
  const currentUser = useSelector((state: AppState) => state.user.user, shallowEqual);
  return <LoggedInRoute isLoggedIn={currentUser != null} {...props} />;
};

export default ConnectedLoggedInRoute;