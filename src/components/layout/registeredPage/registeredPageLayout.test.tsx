import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import RegisteredPageLayout, { Props } from './registeredPageLayout.view';

describe('NormalPageLayout', () => {

  let wrapper: ShallowWrapper;
  const children = 'I am a child node';

  function createWrapper(props: Props) {
    wrapper = shallow(<RegisteredPageLayout {...props}>{children}</RegisteredPageLayout>);
  }

  it('should render', () => {
    createWrapper({ headerText: '', pageDescription: '' });
    expect(wrapper.instance).not.toBeNull();
  });

  it('should render the headerText, pageDescription, and any children', () => {
    const props: Props = { headerText: 'header text', pageDescription: 'page description' };
    createWrapper(props);
    const html = wrapper.html();
    expect(html).toContain(children);
    expect(html).toContain(props.headerText);
    expect(html).toContain(props.pageDescription);
  });
});