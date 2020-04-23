import React from 'react';
import './normalPageLayout.scss';

const NormalPageLayout: React.SFC = ({ children }) => (
  <div className="normal-page">
    {children}
  </div>
);

export default NormalPageLayout;