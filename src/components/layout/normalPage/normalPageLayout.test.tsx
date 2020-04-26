import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import NormalPageLayout from '.';

describe('NormalPageLayout', () => {

  let wrapper: ShallowWrapper;
  const children = 'I am a child node';

  beforeEach(() => {
    wrapper = shallow(<NormalPageLayout>{children}</NormalPageLayout>);
  });

  it('should render', () => {
    expect(wrapper.instance).not.toBeNull();
  });

  it('should render children', () => {
    expect(wrapper.html()).toContain(children);
  });
});