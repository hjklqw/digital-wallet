import React from 'react'
import { RouteProps } from 'react-router-dom';
import NonAuthedOnlyRoute from './nonAuthedOnlyRoute.view';
import { useUserState } from '../utils';

const ConnectedNonAuthedOnlyRoute: React.SFC<RouteProps> = (props: any) => {
  const isLoggedIn = useUserState();
  return <NonAuthedOnlyRoute isLoggedIn={isLoggedIn} {...props} />;
};

export default ConnectedNonAuthedOnlyRoute;