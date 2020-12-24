import React from 'react';
import PropTypes from 'prop-types';

import './progressbar.css';

export const ProgressBar = ({ value }) => (
  <div className="progressbar-wrapper">
    <div className="progressbar-bar">
      <div className="progressbar-progress" style={{ width: `${140 * (value/100)}px`}}/>
    </div>
  </div>
);

ProgressBar.propTypes = {
  value: PropTypes.number,
};
ProgressBar.defaultProps = {
  value: 0,
};