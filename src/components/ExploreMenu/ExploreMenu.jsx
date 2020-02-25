import React from 'react';

import { useQuery, useMutation } from '@apollo/client';

import * as queries from '../../graphql/queries';

import Loading from '../layout/Loading/Loading';

import FetchError from '../layout/FetchError/FetchError';

import ExploreMenuItem from './ExploreMenuItem/ExploreMenuItem';

import './ExploreMenu.scss';


function ExploreMenu() {

	const { loading, error, data } = useQuery(queries.GET_MENU_ITEMS_SHOW_AT_HOME);

	if (loading) return <Loading />;
	if (error) return <FetchError />;
	
	const { getMenuItemsShowAtHome: itemsArray } = data;
		
	const menuGrid = items => {

		return items.map( item => {

			return (
				<ExploreMenuItem key={item.id} item={item} />
			);

		});

	};


	return (
		<div className="explore-menu-container">
			<div className="explore-menu-header">
				<h4 className="explore-menu-title">EXPLORE OUR MENU</h4>
				<button className="explore-menu-full-menu-button">Full Menu</button>	
				<button className="explore-menu-order-now-button">Order Now</button>
			</div>
			{ menuGrid(itemsArray) }
		</div>
	);
}

export default ExploreMenu;
