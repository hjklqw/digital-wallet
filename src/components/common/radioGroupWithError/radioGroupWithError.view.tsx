import React from 'react';
import './radioGroupWithError.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export type RadioOptionProps = {
  label: string,
  value: string
};

type Props = {
  input: any,
  options: RadioOptionProps[],
  meta: { touched: boolean, error: string }
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
    {(props.meta.touched && props.meta.error) &&
      <span className="form-input-error">
        <FontAwesomeIcon icon={faExclamationCircle} />
        {props.meta.error}
      </span>}
  </>
);

export default RadioGroupWithError;