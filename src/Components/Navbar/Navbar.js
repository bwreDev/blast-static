import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav role='navigation' className='navbar'>
				<ul className='navbar-link'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/menu'>Menu</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/order'>Order</Link>
					</li>
					<li>
						<Link to='/store'>Store</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
