import { UserModel } from '../../../models/user.model';

const REQUIRED_ERROR_TEXT = 'Required';

type FormModel = UserModel & {
  passwordConfirmation: string;
};

const validate = (model: FormModel) => {
  const errors: any = {};

  if (!model.username) {
    errors.username = REQUIRED_ERROR_TEXT;
  }
  else if (model.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!model.password) {
    errors.password = REQUIRED_ERROR_TEXT;
  }
  else if ((model.password.length < 8) || (model.password.length > 16)) {
    errors.password = 'Must be between 8 and 16 characters';
  }

  if (!model.passwordConfirmation) {
    errors.passwordConfirmation = 'Please confirm your password';
  }
  else if (model.passwordConfirmation !== model.password) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  if (!model.email) {
    errors.email = REQUIRED_ERROR_TEXT;
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(model.email)) {
    errors.email = 'Invalid format';
  }
  
  return errors;
}

export default validate;