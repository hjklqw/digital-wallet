import { TransactionModel } from '../../../models/transaction.model';

const REQUIRED_ERROR_TEXT = 'Required';

const validate = (model: TransactionModel) => {
  const errors: any = {};

  if (!model.type) {
    errors.type = REQUIRED_ERROR_TEXT;
  }

  if (!model.destinationName) {
    errors.destinationName = REQUIRED_ERROR_TEXT;
  }

  if (!model.value) {
    errors.value = REQUIRED_ERROR_TEXT;
  }
  
  return errors;
}

export default validate;