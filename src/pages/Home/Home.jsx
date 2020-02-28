import React from 'react';
import './Home.scss';
import homeImage from '../../assets/images/main.jpg';

import Header from '../../components/layout/Header/Header';
import Hero from '../../components/layout/Hero/Hero';
import Welcome from '../../components/Welcome/Welcome';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import SignUp from './SignUp';
import Redefining from './Redefining';
import OnlineOrdering from './OnlineOrdering';
import HomeGallery from '../../components/HomeGallery/HomeGallery';
import Footer from '../../components/layout/Footer/Footer';

function Home() {

	const bannerProps = {
		title: "ENJOY THE CROCKERS EXPERIENCE",
		subtitle: "Redefining the Way the world eats Burgers",
		buttonTitle: "OUR  FOOD",
		linkTo: "/menu"
	};
	
	return (
		<main className="home-container">
			<Header />
			<Hero imageObject={homeImage} animate bannerProps={bannerProps} />
			<Welcome />	
			<ExploreMenu />							
			<SignUp />
			<Redefining />
			<OnlineOrdering />
			<HomeGallery />
			<Footer />
		</main>
	);
}

export default Home;
