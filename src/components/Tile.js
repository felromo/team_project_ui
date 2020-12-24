import React from 'react';
import PropTypes from 'prop-types';

import { Copy } from './Typography';
import { Button } from './Button';

import './tile.css';

export const Tile = ({ title, subtitle, action }) => (
  <div className="brand-tile">
    <div className="tile-info-row">
      <div className="tile-logo"></div>
      <div className="tile-info-text">
        <Copy color="dark" child={title} style={{ fontSize: '16px' }} />
        <Copy color="secondary" child={subtitle} style={{ fontSize: '14px', marginTop: '8px' }} />
      </div>
    </div>
    <Button
      buttonHierarchy="primary"
      child={action.child}
      onClick={action.onPress}
      style={{
        display: 'block',
        marginTop: '1.5rem',
        marginLeft: 'auto',
        width: '40%',
        height: '48px',
        fontSize: '11px',
        padding: '11px 0',
      }}
    />
  </div>
);

Tile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.shape({
    child: PropTypes.string,
    onPress: PropTypes.func,
  }),
};
Tile.defaultProps = {
  title: 'Brandbook.PDF',
  subtitle: 'Dropbox/Project/El Brandbook',
  action: {
    child: 'Send PDF',
    onPress: null,
  },
};
