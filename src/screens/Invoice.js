import React from 'react';

import { NavBar } from '../components/NavBar';
import { SubHeading, Copy } from '../components/Typography';
import { Tile } from '../components/Tile';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

import './invoice.css';

export const InvoiceScreen = (_) => (
  <div class ="invoice-section">
    <div>
      <NavBar />
      <div class="navigation-row">
        <span>&lsaquo;</span>
        <SubHeading color="dark" child="Create Inovice" />
      </div>
      <div class="pdf-row">
        <Copy color="dark" child="Send To" />
        <Tile />
      </div>
      <div class="task-section">
        <div class="newtask-row">
          <Copy color="dark" child="Invoice Details" />
          <Button buttonHierarchy="primary" child="Add New Task" />
        </div>
        <div class="taskcard-section">
          <Card />
          <Card />
        </div>
        <div class="amount-row">
          <Copy color="dark" child="Amount Payable" />
          <Copy child="$250.24 USD" />
        </div>
      </div>
      <div class="button-row">
        <Button buttonHierarchy="primary" child="Download Project" />
        <Button buttonHierarchy="secondary" child="Send Details" />
      </div>
    </div>
  </div>
);
