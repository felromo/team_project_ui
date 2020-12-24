import React from 'react';

import { LandingScreen } from '../../screens/landing';

const METADATA = {
  title: 'Screens/Landing Screen',
  component: LandingScreen,
};

export default METADATA;

const Template = (args) => <LandingScreen {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {};