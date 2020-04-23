import React from 'react';

import { UserModel } from '../../../models/user.model';
import RegisteredPageLayout from '../../layout/registeredPage';
import AccountSettingsForm from '../../forms/accountSettings';

type Props = {
  customer: UserModel
};

const AccountPage = ({ customer }: Props) => (
  <RegisteredPageLayout headerText="Account Settings" pageDescription="Change your profile or your login details.">
    <AccountSettingsForm customer={customer} />
  </RegisteredPageLayout>
);

export default AccountPage;