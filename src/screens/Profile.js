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
        <button>
          <div className="hamburger" />
        </button>
        <Avatar />
      </nav>
      <div className="title-section">
        <SubHeading
          color="dark"
          child="Good Evening User!"
          style={{ fontSize: '20px' }}
        />
        <div style={{ height: '8px' }} />
        <Heading color="dark" child="Projects" />
      </div>
      <div className="grid-section">
        <Title child="Overviews" />
        <div className="grid-container">
          <Card title="Meetings" amount={10} status="pending" />
          <Card
            light
            title="Projects"
            amount={5}
            status="ongoing"
            action={{ child: 'Review Project', onPress: null }}
          />
          <Card light title="Meetings" amount={10} status="pending" 
            action={{ child: 'Schedule Meeting', onPress: null }}
          />
          <Card light title="Revenue" amount={254.1} status='' progress={{ label: '+25.21%', value: 25}}/>
        </div>
      </div>
      <div className="bot-buttons-section">
        <Button buttonHierarchy="primary" child="Create Project" />
      </div>
    </div>
  </div>
);
