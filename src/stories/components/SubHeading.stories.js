import React from 'react';

import { SubHeading } from '../../components/Typography';

const METADATA = {
  title: 'Component Library/Typography/SubHeading',
  component: SubHeading,
};

export default METADATA;

const Template = (args) => <SubHeading {...args} />;

export const PrimarySubHeading = Template.bind({});
PrimarySubHeading.args = {
  child: 'Primary SubHeading Text',
};
