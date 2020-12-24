import React from 'react';

import { Button } from '../../components/Button';

const METADATA = {
  title: 'Component Library/Button',
  component: Button,
};

export default METADATA;

const Template = (args) => <Button {...args} />;

export const PrimaryAction = Template.bind({});
PrimaryAction.args = {
  buttonHierarchy: 'primary',
  child: 'Primary Button',
};

export const SecondaryAction = Template.bind({});
SecondaryAction.args = {
  buttonHierarchy: 'secondary',
  child: 'Secondary Button',
};

export const TertiaryAction = Template.bind({});
TertiaryAction.args = {
  buttonHierarchy: 'tertiary',
  child: 'Tertiary Action',
};

export const NoChild = Template.bind({});
NoChild.args = {
  buttonHierarchy: 'tertiary',
};

export const NoHierarchy = Template.bind({});
NoHierarchy.args = {
  child: 'Hierarchyless Action',
};

export const NoProps = Template.bind({});
