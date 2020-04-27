import React from 'react';
import './home.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faFunnelDollar, faReceipt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

enum SectionType {
  Default = 'default',
  Highlight = 'highlight',
  Quiet = 'quiet'
}

type SectionProps = {
  type: SectionType
};

const Section: React.SFC<SectionProps> = ({ children, type }) => (
  <section className={`hp-section ${type}`}>
    {children}
  </section>
);

type CircledIconProps = {
  icon: IconDefinition
}

const CircledIcon = ({ icon }: CircledIconProps) => (
  <div className="circled-icon">
    <FontAwesomeIcon icon={icon} />
  </div>
);

const HomePage = () => (
  <>
    <Section type={SectionType.Default}>
      <h1>Fake Homepage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum neque imperdiet, ultrices purus dignissim, iaculis ante. Vestibulum magna lacus, vestibulum at accumsan a, porttitor consequat ex. Maecenas feugiat finibus neque, sit amet laoreet ipsum viverra nec. Sed viverra mollis risus, eu pretium nisi cursus sed. Donec sollicitudin, odio vel sollicitudin sollicitudin, arcu purus mattis magna, elementum molestie nisi mauris ut risus. Nulla facilisi. Nullam feugiat nulla in feugiat laoreet. Sed non imperdiet lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras neque ipsum, facilisis sed nulla id, eleifend bibendum dolor. Nam faucibus faucibus mauris sed dictum. Nunc suscipit luctus tortor, vitae sagittis lectus.</p>
      <p>Both buttons below are fake.</p>
      <button className="highlight">Sign up</button>
      <button>Learn more</button>
    </Section>
    
    <Section type={SectionType.Highlight}>
      <h1>Some advertisement here</h1>
      <p>It's great use it</p>
      <div className="showcase">
        <CircledIcon icon={faMoneyCheck} />
        <CircledIcon icon={faFunnelDollar} />
        <CircledIcon icon={faReceipt} />
      </div>
    </Section>

    <Section type={SectionType.Quiet}>
      <h1>There's more</h1>
      <p>Just so the page can look busier. Nulla fermentum neque imperdiet, ultrices purus dignissim, iaculis ante. Vestibulum magna lacus, vestibulum at accumsan a, porttitor consequat ex. Maecenas feugiat finibus neque, sit amet laoreet ipsum viverra nec. Sed viverra mollis risus, eu pretium nisi cursus sed. Donec sollicitudin, odio vel sollicitudin sollicitudin, arcu purus mattis magna, elementum molestie nisi mauris ut risus. Nulla facilisi. Nullam feugiat nulla in feugiat laoreet. Sed non imperdiet lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras neque ipsum, facilisis sed nulla id, eleifend bibendum dolor.</p>
      <button className="dark-highlight">Buttons</button>
      <button>They look nice</button>
    </Section>
  </>
);

export default HomePage;