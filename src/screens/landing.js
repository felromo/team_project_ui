import React from 'react';

import { Heading, SubHeading } from '../components/Typography';
import { Button } from '../components/Button';

import './landing.css';

export const LandingScreen = (_) => (
  <div className="landing-section">
    <div>
      <img />
      <Heading child="A Better Way To Manage Your Team"/>
      <SubHeading child="Manage team tasks and projects with one platform and keep in touch with your team"/>
    </div>
    <div>
      <Button buttonHierarchy="tertiary" child="Skip"/>
      <Button buttonHierarchy="primary" child="Get started"/>
    </div>
  </div>
)