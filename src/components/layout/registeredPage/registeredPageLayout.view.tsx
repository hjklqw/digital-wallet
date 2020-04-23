import React, { ReactNode } from 'react';
import './registeredPageLayout.scss';

type Props = {
  headerText: string
  pageDescription: string | ReactNode,
  children?: ReactNode
};

const RegisteredPageLayout = (props: Props) => (
  <div>
    <section className="page-header">
      <h1>{props.headerText}</h1>
      {props.pageDescription}
    </section>
    <section className="page-contents">
      {props.children}
    </section>
  </div>
);

export default RegisteredPageLayout;