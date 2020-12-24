import React from 'react';

import { Avatar } from '../../components/Avatar';

const METADATA = {
  title: 'Component Library/Avatar',
  component: Avatar,
};

export default METADATA;

const Template = (args) => <Avatar {...args} />;

export const OnlineUser = Template.bind({});
OnlineUser.args = {
  status: 'online',
};

export const BusyUser = Template.bind({});
BusyUser.args = {
  status: 'busy',
};

export const AwayUser = Template.bind({});
AwayUser.args = {
  status: 'away',
};
