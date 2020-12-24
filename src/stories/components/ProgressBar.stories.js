import React from 'react';

import { ProgressBar } from '../../components/ProgressBar';

const METADATA = {
  title: 'Component Library/Progress Bar',
  component: ProgressBar,
};

export default METADATA;

const Template = (args) => <ProgressBar {...args} />;

export const EmptyBar = Template.bind({});
EmptyBar.args = {};

export const PartialBar = Template.bind({});
PartialBar.args = {};

export const FullBar = Template.bind({});
FullBar.args = {};
