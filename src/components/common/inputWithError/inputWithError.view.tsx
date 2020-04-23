import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

type Props = {
  input: any,
  placeholder: string,
  type: string
  meta: { touched: boolean, error: string }
}

const InputWithError = (props: Props) => (
  <>
    <input {...props.input} placeholder={props.placeholder} type={props.type} />
    {(props.meta.touched && props.meta.error) &&
      <span className="form-input-error">
        <FontAwesomeIcon icon={faExclamationCircle} />
        {props.meta.error}
      </span>}
  </>
);

export default InputWithError;