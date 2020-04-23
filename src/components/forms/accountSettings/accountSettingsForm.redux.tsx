import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import AccountSettingsForm from './accountSettingsForm.view';
import { UserModel } from '../../../models/user.model';
import { createUser, updateUser } from '../../../services/user.service';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';
import { LoginPageStateProps } from '../../pages/login/login.view';
import validate from './validate';

type Props = {
  customer?: UserModel
};

const ReduxForm = reduxForm<UserModel>({
  form: 'accountSettings',
  validate: validate
})(AccountSettingsForm);

const ConnectedAccountSettingsForm = ({ customer }: Props) => {

  const dispatch = useDispatch();
  const history = useHistory<LoginPageStateProps>();

  const onSubmit = async (model: UserModel) => {
    let serverAction;
    if (customer == null) {
      serverAction = await createUser(model);
      history.push(LOGIN_ROUTE, { justRegistered: true });
    }
    else {
      serverAction = await updateUser(model);
    }
    serverAction(dispatch);
  }

  return <ReduxForm initialValues={customer} onSubmit={onSubmit} />;
};

export default ConnectedAccountSettingsForm;