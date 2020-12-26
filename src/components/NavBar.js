import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from './Avatar';

import './navbar.css';

export const NavBar = (_) => (
	<nav>
		<button>
			<div className="hamburger" />
		</button>
		<Avatar />
	</nav>
);
