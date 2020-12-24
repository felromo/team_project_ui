import React from 'react';

import { Card } from '../../components/Card';

const METADATA = {
  title: 'Component Library/Card',
  component: Card,
};

export default METADATA;

const Template = (args) => <Card {...args} />;

export const DarkCard = Template.bind({});
DarkCard.args = {
  title: 'Meetings',
  amount: 10,
  status: 'Pending',
};

export const LightCard = Template.bind({});
LightCard.args = {
  ...DarkCard.args,
  light: true,
};

export const DarkCardWithAction = Template.bind({});
DarkCardWithAction.args = {
  ...DarkCard.args,
  action: { child: 'Card Action', onPress: null },
};

export const LightCardWithAction = Template.bind({});
LightCardWithAction.args = {
  ...DarkCardWithAction.args,
  light: true,
};
