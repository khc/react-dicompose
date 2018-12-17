import assert from 'assert';
import React from 'react';
import { shallow } from 'enzyme';
import { Component } from '../../../src/client/components/CurrentDate';

const someString = 'lorem ipsum';

describe('<CurrentDate />', () => {
  it('should render string from prop', () => {
    const wrapper = shallow(<Component currentDate={someString} />);
    assert(wrapper.text(), someString);
  });
});
