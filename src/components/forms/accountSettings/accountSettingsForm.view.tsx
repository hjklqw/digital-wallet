import React from 'react';
import './accountSettingsForm.scss';
import { Field, InjectedFormProps } from 'redux-form';

import InputWithError from '../customFields/inputWithError';
import { UserModel } from '../../../models/user.model';

const AccountSettingsForm: React.SFC<InjectedFormProps<UserModel>> = (props) => (
  <form onSubmit={props.handleSubmit}>
    <section>
      <h1>Profile</h1>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component={InputWithError} type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component={InputWithError} type="email" />
      </div>
    </section>
    <section>
      <h1>Account</h1>
      {props.initialValues && <span className="credentials-message">Please re-enter your credentials to save changes.</span>}
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component={InputWithError} type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component={InputWithError} type="password" />
      </div>
      <div>
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <Field name="passwordConfirmation" component={InputWithError} type="password" />
      </div>
    </section>
    <button type="submit" disabled={props.pristine || props.submitting || props.invalid}>
      {props.initialValues ? 'Save Changes' : 'Register'}
    </button>
    <button type="button" onClick={props.reset}>Reset</button>
  </form>
);

export default AccountSettingsForm;