import React from 'react';
import './fake.scss';
import NormalPageLayout from '../../layout/normalPage';

const FakePage = () => (
  <NormalPageLayout>
    <div className="fake-page-message">This page is fake, and so is everything else that's highlighted right now!</div>
  </NormalPageLayout>
);

export default FakePage;