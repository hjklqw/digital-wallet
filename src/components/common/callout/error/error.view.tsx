import React from 'react';
import Callout, { CalloutType } from '../callout.view';

type Props = {
  error: Error,
  prefixText?: string,
  suffixText?: string
};

const ErrorCallout = ({ error, prefixText, suffixText }: Props) => {
  let message = error.message;
  if (prefixText) message = prefixText + ' ' + message;
  if (suffixText) message += ' ' + suffixText;
  return <Callout type={CalloutType.Error} message={message} />;
};

export default ErrorCallout;