import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { DASHBOARD as DASHBOARD_ROUTE } from '../../../../assets/route.constants';

type Props = {
  isLoggedIn: boolean,
  component: React.ComponentType<any>
};

const NonAuthedOnlyRoute: React.SFC<Props> = ({ component: Component, isLoggedIn, ...rest }) => {
  const renderFunc = (props: any) => !isLoggedIn ?
    <Component {...props} /> :
    <Redirect to={{
      pathname: DASHBOARD_ROUTE,
      state: { from: props.location }
    }} />;
  return (
    <Route {...rest} render={renderFunc} />
  );
}

export default NonAuthedOnlyRoute;