import React from 'react';
import { Link } from 'react-router-dom';
import './mainLayout.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWallet, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faEdit } from '@fortawesome/free-regular-svg-icons';

import * as Routes from '../../../assets/route.constants';
import { useLocation } from 'react-router-dom';

type FooterLinkProps = {
  label: string,
  href: string
};

const FooterLink = (props: FooterLinkProps) => (
  <a className="footer-link" href={props.href}>{props.label}</a>
);

type HeaderLinkProps = FooterLinkProps & {
  icon?: IconProp,
  iconAfterLabel?: boolean,
  action?: (event: any) => void
};

export const HeaderLink = (props: HeaderLinkProps) => {
  const currentRoute = useLocation().pathname.split('/')[1];
  const isActive =`/${currentRoute}` === props.href;
  const iconElem = props.icon && <FontAwesomeIcon icon={props.icon} size="lg" />;
  const className = `header-link ${isActive && 'active'}`;
  const contents =
    <>
      {!props.iconAfterLabel && iconElem}
      {props.label}
      {props.iconAfterLabel && iconElem}
    </>;
  if (props.action == null) {
    return <Link to={props.href} className={className}>{contents}</Link>;
  }
  return <div className={className} onClick={props.action}>{contents}</div>;
};

type Props = {
  isLoggedIn: boolean,
  onLogout: (event: any) => void
};

const MainLayout: React.SFC<Props> = ({ isLoggedIn, onLogout, children }) => (
  <div className="main-layout">

    <header>
      <section className="header-logo">
        <HeaderLink label="Digital Wallet" href="/" icon={faWallet} iconAfterLabel={true} />
      </section>
      <section className="header-links">
        <nav>
          <HeaderLink label="My Wallet" href={Routes.DASHBOARD} />
          <HeaderLink label="Products" href={Routes.FAKE_PAGE} />
          <HeaderLink label="Blog" href={Routes.FAKE_PAGE} />
          <HeaderLink label="About Us" href={Routes.FAKE_PAGE} />
        </nav>
        <nav>
          {(() => isLoggedIn ?
            <>
              <HeaderLink label="My Account" href={Routes.ACCOUNT_SETTINGS} icon={faUserCircle} />
              <HeaderLink label="Logout" href="" icon={faSignOutAlt} action={onLogout} />
            </> :
            <>
              <HeaderLink label="Login" href={Routes.LOGIN} icon={faSignInAlt} />
              <HeaderLink label="Register" href={Routes.REGISTER} icon={faEdit} />
            </>
          )()}
        </nav>
      </section>
    </header>

    <main>
      {children}
    </main>

    <footer>
      <FooterLink label="Rates" href="#" />
      <FooterLink label="FAQ" href="#" />
      <FooterLink label="Privacy" href="#" />
      <FooterLink label="Legal" href="#" />
      <FooterLink label="Contact Us" href="#" />
    </footer>

  </div>
);

export default MainLayout;