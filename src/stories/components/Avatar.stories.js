import React from 'react';

import { Avatar } from '../../components/Avatar';

const METADATA = {
  title: 'Component Library/Avatar',
  component: Avatar,
};

export default METADATA;

const Template = (args) => <Avatar {...args} />;

export const UserAvatar = Template.bind({});
UserAvatar.args = {};