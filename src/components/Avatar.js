import React from 'react';
import PropTypes from 'prop-types';

import './avatar.css';

export const Avatar = ({ image, alt, status }) => (
  <div className="avatar-wrapper">
    <img src={image} alt={alt} />
    <div className={`avatar-status-indicator ${status}-status`}></div>
  </div>
);

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  status: PropTypes.string,
};
Avatar.defaultProps = {
  image: 'https://randomuser.me/api/portraits/women/63.jpg',
  alt: 'user avatar',
  status: 'online',
};
