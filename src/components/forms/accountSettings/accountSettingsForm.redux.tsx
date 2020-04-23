import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AccountSettingsForm from './accountSettingsForm.view';
import { UserModel } from '../../../models/user.model';
import { createUser, updateUser } from '../../../services/user.service';
import { LOGIN as LOGIN_ROUTE } from '../../../assets/route.constants';
import { LoginPageStateProps } from '../../pages/login/login.view';

type Props = {
  customer?: UserModel
};

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

  return <AccountSettingsForm initialValues={customer} onSubmit={onSubmit} />;
};

export default ConnectedAccountSettingsForm;