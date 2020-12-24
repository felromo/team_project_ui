import React from 'react';

import { Avatar } from '../components/Avatar';
import { Copy } from '../components/Typography';
import { Tile } from '../components/Tile';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const InvoiceScreen = (_) => (
  <div>
    <div>
      <nav>
        <button>hamburger</button>
        <Avatar />
      </nav>
      <div>
        <Copy child="Send To" />
        <Tile />
      </div>
      <div>
        <div>
          <Copy child="Invoice Details" />
          <Button buttonHierarchy="primary" child="Add New Task" />
        </div>
        <div>
          <Card />
          <Card />
        </div>
        <div>
          <Copy child="Amount Payable" />
          <Copy child="$250.24 USD" />
        </div>
      </div>
      <div>
        <Button buttonHierarchy="primary" child="Download Project" />
        <Button buttonHierarchy="secondary" child="Send Details" />
      </div>
    </div>
  </div>
);
