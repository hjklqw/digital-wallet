import React from 'react';
import './home.scss';

enum SectionType {
  Default = 'default',
  Highlight = 'highlight'
}

type SectionProps = {
  type: SectionType
};

const Section: React.SFC<SectionProps> = ({ children, type }) => (
  <section className={`hp-section ${type}`}>
    {children}
  </section>
);

const HomePage = () => (
  <Section type={SectionType.Default}>
    <h1>Fake Homepage</h1>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum neque imperdiet, ultrices purus dignissim, iaculis ante. Vestibulum magna lacus, vestibulum at accumsan a, porttitor consequat ex. Maecenas feugiat finibus neque, sit amet laoreet ipsum viverra nec. Sed viverra mollis risus, eu pretium nisi cursus sed. Donec sollicitudin, odio vel sollicitudin sollicitudin, arcu purus mattis magna, elementum molestie nisi mauris ut risus. Nulla facilisi. Nullam feugiat nulla in feugiat laoreet. Sed non imperdiet lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras neque ipsum, facilisis sed nulla id, eleifend bibendum dolor. Nam faucibus faucibus mauris sed dictum. Nunc suscipit luctus tortor, vitae sagittis lectus.</div>
  </Section>
);

export default HomePage;