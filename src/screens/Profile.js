import React from 'react';

import { Avatar } from '../components/Avatar';
import { Heading, SubHeading, Title } from '../components/Typography';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

import './profile.css';

export const ProfileScreen = (_) => (
  <div class="profile-section">
    <div>
      <nav>
        <button>hamburger</button>
        <Avatar />
      </nav>
      <div>
        <SubHeading
          color="dark"
          child="Good Evening User!"
          style={{ fontSize: '20px' }}
        />
        <Heading color="dark" child="Projects" />
      </div>
      <div className="grid-section">
        <Title child="Overviews" />
        <div className="grid-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <Button buttonHierarchy="primary" child="Create Project" />
      </div>
    </div>
  </div>
);
