import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ buttonHierarchy, child }) => (
  <button
    type="button"
    className={`brand-button ${buttonHierarchy}`}
  >
    {child}
  </button>
);

Button.propTypes = {
  buttonHierarchy: PropTypes.string,
  child: PropTypes.string,
};

Button.defaultProps = {
  child: 'Child is the text to be displayed inside button',
  buttonHierarchy: 'tertiary',
};