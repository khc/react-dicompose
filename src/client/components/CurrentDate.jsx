import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

const withDate = WrappedComonent => props => (
  <WrappedComonent {...props} currentDate={new Date().toString()} />
);

export const Component = ({ currentDate }) => (
  <div>{currentDate}</div>
);

Component.propTypes = {
  currentDate: PropTypes.string.isRequired,
};

export const composition = $withDate => compose($withDate)(Component);

export default composition(withDate);
