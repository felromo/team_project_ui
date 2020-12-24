import React from 'react';

import { Heading } from '../../components/Typography';

const METADATA = {
  title: 'Component Library/Typography/Heading',
  component: Heading,
};

export default METADATA;

const Template = (args) => <Heading {...args} />;

export const PrimaryHeading = Template.bind({});
PrimaryHeading.args = {
  child: 'Primary Heading Text',
};
