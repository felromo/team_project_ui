import React from 'react';

import { NavBar } from '../../components/NavBar';

const METADATA = {
	title: 'Component Library/Navigation Bar',
	component: NavBar,
};

export default METADATA;

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
