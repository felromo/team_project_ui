import React from 'react';
import PropTypes from 'prop-types';

import './typography.css';

export const Heading = ({ child, color, style }) => (
  <p className={`brand-heading ${color ? color + '-color' : ''}`} style={style}>{child}</p>
);

Heading.propTypes = {
  child: PropTypes.string,
  color: PropTypes.string,
};
Heading.defaultProps = {
  child: 'Child is the text to be displayed',
  color: 'primary',
};

export const SubHeading = ({ child, color, style }) => (
  <p className={`brand-subheading ${color ? color + '-color' : ''}`} style={style}>{child}</p>
);
SubHeading.propTypes = {
  child: PropTypes.string,
  color: PropTypes.string,
};
SubHeading.defaultProps = {
  child: 'Child is the text to be displayed',
  color: 'primary',
};

export const Title = ({ child, color, style }) => (
  <p className={`brand-title ${color ? color + '-color' : ''}`} style={style}>{child}</p>
);
Title.propTypes = {
  child: PropTypes.string,
  color: PropTypes.string,
};
Title.defaultProps = {
  child: 'Child is the text to be displayed',
  color: 'primary',
};

export const Copy = ({ child, color, style }) => (
  <p className={`brand-copy ${color ? color + '-color' : ''}`} style={style}>{child}</p>
);
Copy.propTypes = {
  child: PropTypes.string,
  color: PropTypes.string,
};
Copy.defaultProps = {
  child: 'Child is the text to be displayed',
  color: 'primary',
};
