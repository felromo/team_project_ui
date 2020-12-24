import React from 'react';
import PropTypes from 'prop-types';

import './avatar.css';

export const Avatar = (_) => (
  <div>
    <img
      src="https://randomuser.me/api/portraits/women/63.jpg"
      alt="user avatar"
    />
    <div></div>
  </div>
);

Avatar.propTypes = {};
Avatar.defaultProps = {};
