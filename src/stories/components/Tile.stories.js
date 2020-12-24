import React from 'react';

import { Tile } from '../../components/Tile';

const METADATA = {
  title: 'Component Library/Tile',
  component: Tile,
};

export default METADATA;

const Template = (args) => <Tile {...args} />;

export const NoArgs = Template.bind({});
NoArgs.args = {};