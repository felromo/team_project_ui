import React from 'react';
import PropTypes from 'prop-types';

import './typography.css';

export const Heading = ({ child }) => (
  <p>
    {child}
  </p>
);

Heading.propTypes = {
  child: PropTypes.string,
};
Heading.defaultProps = {
  child: 'Child is the text to be displayed',
};