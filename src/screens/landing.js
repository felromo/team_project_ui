import React from 'react';

import { Heading, SubHeading } from '../components/Typography';
import { Button } from '../components/Button';

import './landing.css';

export const LandingScreen = (_) => (
  <div className="landing-section">
    <div>
      <img />
      <Heading child="A Better Way To Manage Your Team" color="dark" style={{ fontSize: '30px'}}/>
      <SubHeading child="Manage team tasks and projects with one platform and keep in touch with your team" color="secondary" style={{ fontSize: '17px'}} />
    </div>
    <div className="landing button-row">
      <Button buttonHierarchy="tertiary" child="Skip"/>
      <Button buttonHierarchy="primary" child="Get started"/>
    </div>
  </div>
)