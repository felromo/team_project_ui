import React from 'react';

import { ProgressBar } from '../../components/ProgressBar';

const METADATA = {
  title: 'Component Library/Progress Bar',
  component: ProgressBar,
};

export default METADATA;

const Template = (args) => <ProgressBar {...args} />;

export const EmptyBar = Template.bind({});
EmptyBar.args = {
  value: 0,
};

export const PartialBar = Template.bind({});
PartialBar.args = {
  value: 50,
};

export const FullBar = Template.bind({});
FullBar.args = {
  value: 100,
};
