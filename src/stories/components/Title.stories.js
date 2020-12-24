import React from 'react';

import { Title } from '../../components/Typography';

const METADATA = {
  title: 'Component Library/Typography/Title',
  component: Title,
};

export default METADATA;

const Template = (args) => <Title {...args} />;

export const PrimaryTitle = Template.bind({});
PrimaryTitle.args = {
  child: 'Primary Title Text',
};
