import React from 'react';
import PropTypes from 'prop-types';

import { SubHeading, Copy } from './Typography';
import { Button } from './Button';

import './card.css';

export const Card = ({ title, amount, status, action }) => (
  <div class="brand-card">
    <Copy color="light" child="Meetings" />
    <div>
      <SubHeading color="light" child="10" />
      <Copy color="light" child="Pending" />
      {action}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  status: PropTypes.string,
  action: PropTypes.instanceOf(Button),
};
Card.defaultProps = {
  title: 'Provide a title',
  amount: 0,
  status: 'Provide a status',
  action: null,
};