import React from 'react';

import { Copy } from '../../components/Typography';

const METADATA = {
  title: 'Component Library/Typography/Copy',
  component: Copy,
};

export default METADATA;

const Template = (args) => <Copy {...args} />;

export const PrimaryCopy = Template.bind({});
PrimaryCopy.args = {
  child: 'Primary Copy Text',
};
