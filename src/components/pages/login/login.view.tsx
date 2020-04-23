import React from 'react';
import LoginForm from '../../forms/login';
import NormalPageLayout from '../../layout/normalPage';
import { RouteComponentProps } from 'react-router-dom';
import Callout from '../../common/callout';
import { CalloutType } from '../../common/callout/callout.view';

export type LoginPageStateProps = {
  justRegistered: boolean
};

const LoginPage = ({ location }: RouteComponentProps<{}, {}, LoginPageStateProps>) => {
  const justRegistered: boolean = location.state?.justRegistered;
  return (
    <NormalPageLayout>
      {justRegistered && <Callout message="Registration successful. Please log in." type={CalloutType.Info} />}
      <LoginForm />
    </NormalPageLayout>
  );
};

export default LoginPage;
