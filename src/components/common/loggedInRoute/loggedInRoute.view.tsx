import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';

type Props = {
  isLoggedIn: boolean,
  component: React.ComponentType<any>
};
const LoggedInRoute: React.SFC<Props> = ({ component: Component, isLoggedIn, ...rest }) => {
  const renderFunc = (props: any) => isLoggedIn ?
    <Component {...props} /> :
    <Redirect to={{
      pathname: LOGIN_ROUTE,
      state: { from: props.location }
    }} />;
  return (
    <Route {...rest} render={renderFunc} />
  );
}

export default LoggedInRoute;