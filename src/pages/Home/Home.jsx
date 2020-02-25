import React from 'react';
import './Home.scss';
import homeImage from '../../assets/images/main.jpg';

import Header from '../../components/layout/Header/Header';
import Hero from '../../components/layout/Hero/Hero';
import Welcome from '../../components/Welcome/Welcome';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';



function Home() {

	
	return (
		<main className="home-container">
			<Header />
			<Hero imageObject={homeImage} animate />
			<Welcome />	
			<ExploreMenu />							
		</main>
	);
}

export default Home;
