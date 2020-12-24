import React from 'react';
import PropTypes from 'prop-types';

import './typography.css';

export const Heading = ({ child }) => (
  <p className="brand-heading">
    {child}
  </p>
);

Heading.propTypes = {
  child: PropTypes.string,
};
Heading.defaultProps = {
  child: 'Child is the text to be displayed',
};

export const SubHeading = ({ child }) => (
  <p
    className="brand-subheading"
  >
    {child}
  </p>
);
SubHeading.propTypes = {
  child: PropTypes.string,
};
SubHeading.defaultProps = {
  child: 'Child is the text to be displayed',
};

export const Title = ({ child }) => (
  <p className="brand-title">
    {child}
  </p>
);
Title.propTypes = {
  child: PropTypes.string,
};
Title.defaultProps = {
  child: 'Child is the text to be displayed',
};

export const Copy = ({ child }) => (
  <p className="brand-copy">
    {child}
  </p>
);
Copy.propTypes = {
  child: PropTypes.string,
};
Copy.defaultProps = {
  child: 'Child is the text to be displayed',
};
