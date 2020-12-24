import React from 'react';

import { ProfileScreen } from '../../screens/Profile';

const METADATA = {
  title: 'Screens/Profile Screen',
  component: ProfileScreen,
};

export default METADATA;

const Template = (args) => <ProfileScreen {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {};