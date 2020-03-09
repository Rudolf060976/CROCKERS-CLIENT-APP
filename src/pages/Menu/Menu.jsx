import React from 'react';
import './Menu.scss';
import Header from '../../components/layout/Header/Header';
import menuImage from '../../assets/images/menu2.jpg';
import Hero from '../../components/layout/Hero/Hero';
import Footer from '../../components/layout/Footer/Footer';
import MenuGroup from './MenuGroup';


function Menu() {

    const bannerProps = {
		title: "OUR MENU",
		subtitle: "More of Everything you want",
		buttonTitle: "ORDER NOW",
		linkTo: "/delivery"
	};

    return (
        <main className="menu-container">
            <Header />
            <Hero imageObject={menuImage} animate bannerProps={bannerProps} bottomBorderColor='#163237' />
            <MenuGroup />            
            <Footer />
        </main>
    );
}

export default Menu;