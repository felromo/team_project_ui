import React from 'react';

import { SubHeading, Copy } from './Typography';

export const Card = ({ child }) => (
  <div>
    <Copy child="Meetings" />
    <SubHeading child="10" />
    <Copy child="Pending" />
  </div>
);