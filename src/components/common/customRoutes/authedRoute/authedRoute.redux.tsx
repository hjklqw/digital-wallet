import React from 'react'
import { RouteProps } from 'react-router-dom';
import AuthedRoute from './authedRoute.view';
import { useUserState } from '../utils';

const ConnectedAuthedRoute: React.SFC<RouteProps> = (props: any) => {
  const isLoggedIn = useUserState();
  return <AuthedRoute isLoggedIn={isLoggedIn} {...props} />;
};

export default ConnectedAuthedRoute;