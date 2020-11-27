import React from 'react';
import UserForm from './multiStepForm/UserForm';

/*
import { Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Order from './components/Order/Order';
import Store from './components/Store/Store';
*/

/* replace with paths
			
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/menu' component={Menu} />
				<Route path='/contact' component={Contact} />
				<Route path='/about' component={About} />
				<Route path='/order' component={Order} />
				<Route path='/store' component={Store} />
			</Switch>
*/

function App() {
	return (
		<main className='App'>
			<UserForm />
		</main>
	);
}

export default App;
