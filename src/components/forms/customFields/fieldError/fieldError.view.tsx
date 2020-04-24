import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  meta: { touched: boolean, error: string }
}

const FieldError = (props: Props) => 
  (props.meta.touched && props.meta.error) ?
    <span className="form-input-error">
      <FontAwesomeIcon icon={faExclamationCircle} />
      {props.meta.error}
    </span> :
    null;

export default FieldError;