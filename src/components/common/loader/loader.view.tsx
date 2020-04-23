import React from 'react';
import './loader.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
  <div className="loader">
    <FontAwesomeIcon icon={faSpinner} spin />
    Loading...
  </div>
);

export default Loader;