import React from 'react';
import PropTypes from 'prop-types';
import dicompose from '../utils/dicompose';

const random = WrappedComponent => props => (
  <WrappedComponent {...props} number={Math.random()} />
);

const plusOne = WrappedComponent => ({ number, ...props }) => (
  <WrappedComponent {...props} number={number + 1} />
);

export const Component = ({ number }) => (
  <div>{number}</div>
);

Component.propTypes = {
  number: PropTypes.number.isRequired,
};

export const composition = dicompose(
  random,
  plusOne,
)(Component);

export default composition();
