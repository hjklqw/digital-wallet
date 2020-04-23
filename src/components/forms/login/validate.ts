import { LoginFormModel } from "./loginForm.model";

const REQUIRED_ERROR_TEXT = 'Must not be empty';

const validate = (model: LoginFormModel) => {
  const errors: any = {};

  if (!model.username) {
    errors.username = REQUIRED_ERROR_TEXT;
  }

  if (!model.password) {
    errors.password = REQUIRED_ERROR_TEXT;
  }
  
  return errors;
}

export default validate;