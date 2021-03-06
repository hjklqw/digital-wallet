import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';

import { Redirect } from 'react-router-dom';
import * as Routes from '../../../assets/route.constants';

import { loginUser } from '../../../services/user.service';
import { LoginFormModel } from './loginForm.model';
import { UserState } from '../../../reducers/user.state';
import { AppState } from '../../../reducers/app.state';
import ErrorCallout from '../../common/callout/error';

import LoginForm, { Props as LoginFormProps } from './loginForm.view';
import validate from './validate';

const ReduxForm = reduxForm<LoginFormModel, LoginFormProps>({
  form: 'login',
  validate: validate
})(LoginForm);

const ConnectedLoginForm = () => {

  const dispatch = useDispatch();
  const onSubmit = async (model: LoginFormModel) => {
    const res = await loginUser(model);
    res(dispatch);
  }

  const userState: UserState = useSelector((state: AppState) => state.user);
  if (userState.user != null) {
    return <Redirect to={Routes.DASHBOARD} />
  }

  return (
    <>
      {(userState.error) && <ErrorCallout error={userState.error} suffixText="Please try again." />}
      <ReduxForm onSubmit={onSubmit} isLoading={userState.isLoading} />
    </>
  );
};

export default ConnectedLoginForm;