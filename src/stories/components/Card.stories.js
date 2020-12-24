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

};

export const WithAction = Template.bind({});
WithAction.args = {};