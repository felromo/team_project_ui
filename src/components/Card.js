import React from 'react';

import { SubHeading, Copy } from './Typography';

import './card.css';

export const Card = ({ child }) => (
  <div class="brand-card">
    <Copy color="light" child="Meetings" />
    <SubHeading color="light" child="10" />
    <Copy color="light" child="Pending" />
  </div>
);