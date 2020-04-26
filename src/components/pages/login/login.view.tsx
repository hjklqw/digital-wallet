import React from 'react';
import LoginForm from '../../forms/login';
import NormalPageLayout from '../../layout/normalPage';
import { RouteComponentProps } from 'react-router-dom';
import Callout from '../../common/callout';
import { CalloutType } from '../../common/callout/callout.view';

export type LoginPageStateProps = {
  justRegistered?: boolean,
  justLoggedOut?: boolean
};

const LoginPage = ({ location }: RouteComponentProps<{}, {}, LoginPageStateProps>) => {
  const justRegistered: boolean = location.state?.justRegistered || false;
  const justLoggedOut: boolean = location.state?.justLoggedOut || false;
  return (
    <NormalPageLayout>
      {justRegistered && <Callout message="Registration successful. Please log in." type={CalloutType.Info} />}
      {justLoggedOut && <Callout message="You have successfully logged out." type={CalloutType.Info} />}
      <LoginForm />
    </NormalPageLayout>
  );
};

export default LoginPage;
