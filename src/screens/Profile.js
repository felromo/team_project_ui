import React from 'react';

import { Avatar } from '../components/Avatar';
import { Heading, SubHeading, Title } from '../components/Typography';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const ProfileScreen = (_) => (
  <div>
    <div>
      <nav>
        <button>hamburger</button>
        <Avatar />
      </nav>
      <div>
        <SubHeading child="Good Evening User!" />
        <Heading child="Projects" />
      </div>
      <div>
        <Title child="Overviews" />
        <div>
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
