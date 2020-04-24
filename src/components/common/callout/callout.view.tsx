import React from 'react';
import './callout.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export enum CalloutType {
  Info,
  Error,
  Warning
};

function getIconFromType(type: CalloutType) {
  if (type === CalloutType.Info) {
    return faInfoCircle;
  }
  else if (type === CalloutType.Error) {
    return faExclamationCircle;
  }
  return faExclamationTriangle;
};

function getClassNameFromType(type: CalloutType) {
  const classNameWithCaps = CalloutType[type];
  return classNameWithCaps.toLowerCase();
}

export type Props = {
  message: string,
  type: CalloutType
};

const Callout = ({ message, type }: Props) => (
  <div className={`callout ${getClassNameFromType(type)}`}>
    <FontAwesomeIcon icon={getIconFromType(type)} />
    {message}
  </div>
);

export default Callout;
