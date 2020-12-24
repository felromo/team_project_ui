import React from 'react';
import PropTypes from 'prop-types';

import { SubHeading, Copy } from './Typography';
import { Button } from './Button';

import './card.css';

export const Card = ({ title, amount, status, light, action }) => (
  <div className={`brand-card card-${light ? 'light' : 'dark'}`}>
    <Copy color={`${!light ? 'light' : 'dark'}`} child="Meetings" />
    <div>
      <SubHeading color={`${!light ? 'light' : 'dark'}`} child="10" />
      <Copy color={`${!light ? 'light' : 'dark'}`} child="Pending" />
      {action ? (
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
      ) : (
        ''
      )}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  status: PropTypes.string,
  light: PropTypes.bool,
  action: PropTypes.shape({
    child: PropTypes.string,
    onPress: PropTypes.func,
  }),
};
Card.defaultProps = {
  title: 'Provide a title',
  amount: 0,
  status: 'Provide a status',
  light: false,
  action: null,
};
