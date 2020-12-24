import React from 'react';
import PropTypes from 'prop-types';

import './progressbar.css';

export const ProgressBar = (_) => (
  <div className="progressbar-wrapper">
    <div className="progressbar-bar">
      <div className="progressbar-progress" />
    </div>
  </div>
);
