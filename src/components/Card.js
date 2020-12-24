import React from 'react';

import { SubHeading, Copy } from './Typography';

import './card.css';

export const Card = ({ child }) => (
  <div class="brand-card">
    <Copy child="Meetings" />
    <SubHeading child="10" />
    <Copy child="Pending" />
  </div>
);