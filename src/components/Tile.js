import React from 'react';
import PropTypes from 'prop-types';

import { Copy } from './Typography';
import { Button } from './Button';

import './tile.css';

export const Tile = ({ title, subtitle, action }) => (
  <div>
    <Copy child={title} />
    <Copy child={subtitle} />
    <Button
      buttonHierarchy="primary"
      child={action.child}
      onClick={action.onPress}
      style={{
        width: '100%',
        fontSize: '11px',
        height: 'inherit',
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
