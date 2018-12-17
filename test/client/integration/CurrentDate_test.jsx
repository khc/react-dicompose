import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';
import { composition } from '../../../src/client/components/CurrentDate';

const mockProps = (newProps = {}) => WrappedComponent => props => (
  <WrappedComponent {...props} {...newProps} />
);

const someString = 'lorem ipsum';

describe('<CurrentDate />', () => {
  it('should render string from decorator', () => {
    const Component = composition(mockProps({
      currentDate: someString,
    }));
    const wrapper = shallow(<Component />);
    assert(wrapper.text(), someString);
  });
});
