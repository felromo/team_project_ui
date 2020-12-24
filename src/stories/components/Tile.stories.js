import React from 'react';

import { Tile } from '../../components/Tile';

const METADATA = {
  title: 'Component Library/Tile',
  component: Tile,
  decorators: [story => <div style={{ padding: '3rem'}}>{story()}</div>],
};

export default METADATA;

const Template = (args) => <Tile {...args} />;

export const DefaultTile = Template.bind({});
DefaultTile.parameters = {
  backgrounds: { default: 'dark'},
};
DefaultTile.args = {
  title: 'Brandbook.PDF',
  subtitle: 'Dropbox/Project/El Brandbook',
  action: {
    child: 'Send PDF',
    onPress: null,
  }
};

export const NoArgs = Template.bind({});
NoArgs.parameters = {
  backgrounds: { default: 'dark'},
};
NoArgs.args = {};