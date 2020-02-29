import React from 'react';

import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import LocationHours from './pages/LocationHours/LocationHours';

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />					
				</Route>
				<Route exact path="/menu">
					<Menu />					
				</Route>
				<Route exact path="/location">
					<LocationHours />					
				</Route>
			</Switch>
		</>
	);
}

export default App;
