import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

export default class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<header role='banner'>
					<h1>Blast 825</h1>
				</header>
			</>
		);
	}
}
