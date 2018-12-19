import assert from 'assert';
import React from 'react';
import { mount } from 'enzyme';
import { composition } from '../../../src/client/components/Number';

const mockProps = (newProps = {}) => WrappedComponent => props => (
  <WrappedComponent {...props} {...newProps} />
);

describe('<Number />', () => {
  it('should render string from decorator', () => {
    const Component = composition(([, plusOne]) => [
      mockProps({
        number: 1,
      }),
      plusOne,
    ]);
    const wrapper = mount(<Component />);
    assert.equal(wrapper.text(), 2);
  });
});
