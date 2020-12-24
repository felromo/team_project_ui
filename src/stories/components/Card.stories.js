import React from 'react';

import { Card } from '../../components/Card';

const METADATA = {
  title: 'Component Library/Card',
  component: Card,
};

export default METADATA;

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: 'Meetings',
  amount: 10,
  status: 'Pending',
};

export const WithAction = Template.bind({});
WithAction.args = {
  ...DefaultCard.args,
  action: { child: 'Card Action', onPress: null },
};
