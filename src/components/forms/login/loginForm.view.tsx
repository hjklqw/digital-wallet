import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import InputWithError from '../../common/inputWithError';
import { LoginFormModel } from './loginForm.model';
import validate from './validate';

type Props = {
  isLoading: boolean
}

const LoginForm: React.FC<Props & InjectedFormProps<LoginFormModel, Props>> = (props) => (
  <form onSubmit={props.handleSubmit}>
    <section>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component={InputWithError} type="text" disabled={props.isLoading} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component={InputWithError} type="password" disabled={props.isLoading} />
      </div>
    </section>
    <button type="submit" disabled={props.pristine || props.submitting || props.invalid || props.isLoading}>
      {props.isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
      Login
    </button>
  </form>
);

export default reduxForm<LoginFormModel, Props>({
  form: 'login',
  validate: validate
})(LoginForm);