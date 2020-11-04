import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/Order';
import Store from './Components/Store/Store';

function App() {
	return (
		<main className='App'>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/menu' component={Menu} />
				<Route path='/contact' component={Contact} />
				<Route path='/about' component={About} />
				<Route path='/order' component={Order} />
				<Route path='/store' component={Store} />
			</Switch>
		</main>
	);
}

export default App;
