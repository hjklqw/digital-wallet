import React from 'react';
import './radioGroupWithError.scss';

import FieldError, { FieldErrorProps } from '../fieldError';

export type RadioOptionProps = {
  label: string,
  value: string
};

type Props = FieldErrorProps & {
  input: any,
  options: RadioOptionProps[]
}

const RadioGroupWithError = (props: Props) => (
  <>
    <div className="radio-group">
      {props.options.map(o =>
        <label key={o.value}>
          <input {...props.input} type="radio" value={o.value} checked={o.value === props.input.value} />
          <span className="radio-label">{o.label}</span>
        </label>
      )}
    </div>
    <FieldError meta={props.meta} />
  </>
);

export default RadioGroupWithError;