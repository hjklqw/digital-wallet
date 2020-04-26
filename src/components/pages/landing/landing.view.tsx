import React from 'react';
import './landing.scss';

import { Link } from 'react-router-dom';
import { TRANSACTION_HISTORY, MAKE_TRANSACTION } from '../../../assets/route.constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faScroll, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import RegisteredPageLayout from '../../layout/registeredPage';

type ActionLinkProps = {
  label: string,
  route: string,
  icon: IconProp
};

export const ActionLink = (props: ActionLinkProps) => (
  <Link to={props.route} className="action-link">
    <div className="action-link-contents">
      <FontAwesomeIcon icon={props.icon} size="2x" />
      <span>{props.label}</span>
    </div>
  </Link>
);

type Props = {
  customerName: string,
  walletBalance: number
};

const LandingPage = (props: Props) => {
  const pageDesc =
    <>
      Your current balance is: <span className="balance-text">${props.walletBalance}</span><br />
      What would you like to do today?
    </>;
  return (
    <RegisteredPageLayout headerText={`Welcome, ${props.customerName}`} pageDescription={pageDesc}>
      <ActionLink label="View Transaction History" route={TRANSACTION_HISTORY} icon={faScroll} />
      <ActionLink label="Make New Transaction" route={MAKE_TRANSACTION} icon={faCashRegister} />
    </RegisteredPageLayout>
  );
};

export default LandingPage;