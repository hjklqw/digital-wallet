import React from 'react';
import FieldError, { FieldErrorProps } from '../fieldError';

type Props = FieldErrorProps & {
  input: any,
  type: string
}

const InputWithError = (props: Props) => (
  <>
    <input {...props.input} type={props.type} />
    <FieldError meta={props.meta} />
  </>
);

export default InputWithError;