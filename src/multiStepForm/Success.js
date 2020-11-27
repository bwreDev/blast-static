import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<>
					<AppBar title='Success' />
					<h1>Your submission was successful!</h1>
					<p>We will email you with further details.</p>
				</>
			</MuiThemeProvider>
		);
	}
}

export default Success;
