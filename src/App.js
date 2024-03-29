import React from 'react';

import { useQuery } from '@apollo/client';

import { Switch, Route } from 'react-router-dom';


import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import LocationHours from './pages/LocationHours/LocationHours';
import DeliveryHome from './pages/Delivery/DeliveryHome';
import OrderProcess from './pages/OrderProcess/OrderProcess';


import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

import * as localQueries from './local-state/queries';

import NotFound from './pages/NotFound/NotFound';



function App() {

	const {data: { iuState }} = useQuery(localQueries.GET_IU_STATE);
	
	const { signUpModalOpen, logInModalOpen } = iuState;

	return (
		<>
			{signUpModalOpen ? <SignUp /> : null}
			{logInModalOpen ? <Login /> : null}
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
				<Route exact path="/delivery">
					<DeliveryHome />
				</Route>
				<Route exact path="/process_order">
					<OrderProcess />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;
